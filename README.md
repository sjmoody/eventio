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
- [ ] Mantine styles 2
- [ ] Light and Dark mode

### User Settings

- [ ] Header User menu
- [ ] Settings with vertical tabs
- [ ] Change password for logged-in user

### Emails Part 2

- [ ] User settings for product/marketing emails
- [ ] Reusable email components
- [ ] Unsubscribe link

## Tech Stack

- NextJS
- BlitzJS scaffolding
- Prisma for db
- Mantine UI components
- Typescript because who doesn't like a classic monopoly
- Zod for TS schema validation
