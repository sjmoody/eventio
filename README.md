# Eventio

A sandcastle built to learn how to build scaffolding.

## Lessons Learned so far

- How to inline a package that is no longer maintained by the creators
- Some best practices in auth land
- Reasons devs choose a paid product over a free product
- The virtues of TS in throwing early errors before build
- The workarounds devs use to break the virtues of TS
- How devs compulsively refactor or fix things that annoy them (like ugly design)
- The tedious triple accounting seems to be inevitable in many languages
- How to convert a Webstorm template into a VS Code snippet
- Mantine theme uses a syntax that requires 10 shades for every color, "red.5"
- Can useMantineTheme hook to access the theme variables anywhere, but not needed for most Mantine components
- for vampires, light mode == flashbang
- virtue of Mantine: every part of a component can be styled separately
- Recommendation: design for dark mode only before shipping MVP. Otherwise design can take 2x longer
- Typescript allows you to make a type that creates a de facto whitelist of values
- Resend api slow rolling bulk emails
- Resend makes it easy to create emails with React components

## Features to Build (versions)

- [x] Clean up components, add pages, nested routes
- [x] Style with Mantine
- [x] Add Forms
- [x] Nicer authentication pages
- [x] Make nicer auth form functional
- [x] Endpoint auth in Blitz and Zod
- [x] Prisma db
- [x] Roles based fetching
- [x] Deploy to railway
- [x] Connect to production db
- [x] Update Admin role
- [x] Improve error and Authentication handling
- [x] Validate forms with Zod

### User Profile

- [x] User Profile: Live Templates and Page creation
- [x] User Profile Page
- [x] Edit Profile Form
- [x] Edit Profile Page

### Emails Part 1

- [x] Email Sending Logic
- [x] Catching local Email with Live Preview
- [x] Sending emails using React Email
- [x] Catching emails locally with Nodemailer app
- [x] Sending a Welcome Email
- [x] Default props, clean up templates
- [x] Typed .env
- [x] Gitignoring react-email things

### Debugging in production

- [x] Refactored package scripts

### Verify User Email

- [x] Check if user email is verified
- [x] Verify user email (part 1)
- [x] Verify user email (part 2)

### Reset Password

- [x] Reset password (part 1)
- [x] Reset password (part 2)

### Separate login and signup

- [x] Separate Login and Authentication forms

### Conditional wrapping

- [x] Conditional wrapping

### Upload Images

- [x] Uploadthing initial setup
- [x] Use uploadthing inside a form
- [x] Improve the Avatar component
- [x] Custom UI for the Image Upload
- [x] Allow the user to replace their profile image
- [x] Abstract Upload Logic in a separate component

### Onboard user

- [x] Nudge user to finish their profiles
- [x] Onboarding user modal

### Modals

- [x] Global modals
- [x] Stacking modals
- [x] Delete confirmation modal

### Styling with Mantine Part 2

- [x] Mantine themes
- [x] Mantine styles 1: overview of docs
- [?] Mantine styles 2
- [x] Light and Dark mode

### User Settings

- [x] Header User menu
- [x] Settings with vertical tabs
- [x] Change password for logged-in user

### Emails Part 2

- [x] User settings for product/marketing emails
- [x] Reusable email components
- [ ] Unsubscribe link

## Tech Stack

- NextJS
- BlitzJS scaffolding
- Prisma for db
- Mantine UI components
- Typescript because who doesn't like a classic monopoly
- Zod for TS schema validation

## Promised but not yet in course

- Oauth
- Roles: allow/block actions in the app based on a role
- Handle email with Mailgun
- Set up Mailgun DNS with Namecheap
- Send emails from your domain
- Receive emails
- Composing emails with react and JSX
- Let users manage their email settings
- Let users unsubscribe from emails
- Easily preview emails in browser
- While developing, catch local emails in a mailbox instead of sending them
- Catch staging emails in a shared inbox (that your team can see)
- Send email in bulk to multiple users based on certain criteria
- Payment integration with LemonSqueezy
- A layer on top of Stripe that takes care of VAT, taxes, etc.
- Accept one-time or subscription payments
- Webhook integration to get notified on new payments and subscriptions
- User portal for managing user subscriptions
- Admin dashboard for managing users and subscriptions
- Automatically get user profile pictures from gravatar, twitter, github
- Expose local environment for testing webhooks etc.
- Set up a staging environment (auto deployed from “development” branch)
- Production environment (auto deployed from “main” branch)
- Easily simulate staging/production env variables while working locally on your app
- Techniques that will make your website feel as realtime as possible
- Optimistic UI
- Buy a domain for your app
- Host your app on a server
- Connect your deployment to a domain
- Have different subdomains for variations of the app, or other apps
- i.e staging, admin, dashboard, etc.
- Handle errors with error boundaries
- Show errors in toast
- Show errors in form fields
- Automatically catch errors with Sentry
- Get notified on errors in Slack
- Local keyboard shortcuts
- Global keyboard shortcuts
- Displaying shortcuts and keep them in sync with bindings
- Easily generate dynamic meta tags with Next.js
- Use JSX and inline styles / tailwind for dynamic meta tags
- Browse all users
- Manage user payment subscriptions
- Manage billing plans
- Accept/reject invites
- Send an invite to a user directly
- Techniques to make the app responsive without manually dealing with media queries
- Tips and tricks on using Sizzy for responsive design
- Server side logic for pagination
- Client side logic for pagination
- Make your app behave like a native app on iOS/Android
- Techniques for styling etc.
- Custom icon
- Custom splashcreen
- Leveraging plop for quick code generation
- Easily convert your app into a desktop app with Electron
- Installer with updates
- Dock icon badge
- Menubar tray text
- Custom menu bar popup
- Implementing AI in your app with the OpenAI API
- Moderate content with AI
- Easily host and create a dashboard to look at the stats from your app
- Example: how many users signed up, bought a subscription, did an action, etc.
- Host dashboard on a subdomain
- Show the availability of your app on a separate status page
- Integrate with a downtime monitoring service
- When no user is logged in, show a basic landing page
- Use Mantine to quickly make a landing page for your app
- Easily manage global modals
- Local modals
- Stacking modals
- Blocking modals that prevent the user to use the app until they take an action (i.e changing timezone, onboarding, etc.)
- Get notified when users sign up
- Get notified on new payments
- Get notified on errors in your app
- Use Framer Motion to make the app smoother
- Make your UI nicer with hover interactions (i.e row of icons that appears on hover)
- Enter/Exit animations
- Add a blog section to your website
- Manage content with MDX files
- Render MDX
- Custom MDX elements and components
- Server render your blog
- Some pages have to be server rendered for better performance and SEO
- Learn techniques on how to do that with Next.js
- Welcome users with an onboarding wizard
- Mandatory and async steps
- Expose typesafe API endpoints with Next.JS so that other apps can integrate with your app
- Allow user to generate an API token and use the API endpoints of your app
- Schedule cron jobs to do something periodically
- Set up an invite
- Let users request an invite
- Admin can browse the invites and search / accept them
- Admin sends gift codes to users, 5 invites each
- Users send invite links to their gift codes to other users
- Set up a command center for your application
- Similar to macOS spotlight, Alfred and Raycast
- Let users easily navigate and do actions in your app
- Let your users set up webhooks
- Ping the webhook URLs when certain events happen in your app
- Let user save their timezone
- Auto detect timezone changes and let user confirm
- Display and filter data in user’s timezone
- Use AI tools like ChatGPT efficiently
- Techniques for using GitHub Copilot and quickly scaffolding code
- Use Midjourney to generate icons, images, landing page elements, and assets for your app
- Easily control your app with Telegram
- Let users perform certain actions through telegram
- Monitor if your app is up
- Get pinged/called when it goes down
- Integrate and show the availability on a status page
- Instantly inform users about new changes in your app
- Nudge users to open the latest changes in your app and mark them as read
- Set up a system so users can easily report a bug from within the app
