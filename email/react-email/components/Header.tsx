import { Hr, Img } from "@react-email/components";
import { emailStyles } from "../styles";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3001/";

export const Header = () => {
  return (
    <>
      <Img src={`${baseUrl}/logo.png`} width="49" height="21" alt="Stripe" />
      <Hr style={emailStyles.hr} />
    </>
  );
};
