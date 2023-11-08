Mutation that searches for the user in the database, it throws an error if it doesn't exist, or it triggers the verification email sending flow otherwise:
export default resolver.pipe(resolver.authorize(), async (\_, { session: { userld }})) {
const user = await db.user.findFirst({
where: { id: userId }
});

    if (!user) throw new Error("User not found");

    await sendVerificationEmail({
        userld: user.id,
        userEmail: user.email,
    });

    return true;

});

Function that sends the verification email after having generated the link:
export const sendVerificationEmail = async ({ userId, userEmail }): Promise<void> => {
const confirmEmailLink = await getEmailVerifyLink({
userId,
userEmail,
})
await sendMail({
to: userEmail,
subject: "Verify your email address",
react: React.createElement(EmailTemplateConfirmEmail, {
props: { confirmEmailLink }
})
})
}

Function that generates a link with a token that will be used to verify the email address:
export const getEmailVerifyLink = async ({ userId, UserEmail }): Promise<string> => {
const token = await regenerateToken({
userld,
userEmail,
tokenType: TokenType.VERIFY_EMAIL,
});
const link = `${URL_ORIGIN}/auth/verify-email?token=${token}`
return link;
}
Functions that create (or regenerate) a hashed token and store it in the database:
const createToken = async ({ userId, userEmail, tokenType }) = {
const token = generateToken();
const hashedToken = hash256(token);
const expiresAt = addHours(new Date(), EMAIL_VERIFY_LINK_IN_HOURS);

    await db.token.create({
        data: {
            user: {connect: {id: userId}},
            type: tokenType,
            expiresAt,
            hashedToken,
            sentTo: userEmail,
        }
    });

    return token;

}

export const regenerateToken = async ({ userld, userEmail, tokenType }: { userId: string; userEmail: string; tokenType: TokenType}): Promise<string> => {
await db.token.deleteMany ({ where: { type: tokenType, userId } });
const token = await createToken({ userId, userEmail, tokenType });
return token;
};

In order to have the correct links inside the email templates we also need to add a couple of constants to the config.ts file:
const PROD_URL = "https://www.example.com";
const DEV_URL = "http://localhost:3000";
export const APP_ORIGIN = isDev ? DEV_URL : PROD_URL;
Create a verify email template that takes in input the name: string | null and emailVeifyUrl: string props.
Remember to call the mutation to trigger the verification email flow
Create a new verify-email.page.tsx Blitz page inside the pages folder
Get the token from the url query param. We can abstract the logic to extract the query param just as we did for useStringParam as well:
export const useStringParam = (name) => {
let param = useParam(name, "string");
return param;
};

export const useStringQueryParan = (name) => {
let { query } = useRouter();
return query[name];
}
And we can use it like so:
// localhost:3000/path/?token=123456789asdfghjk
const token = useStringQueryParam("token");
