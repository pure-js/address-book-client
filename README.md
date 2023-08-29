# Address Book Client

Client Side Address Book
The SPA address book using Typescript, HTML and CSS.

## Technical Description

### Functionality

1. There should be one view where all contacts are listed.
1. There should be another view to add, delete and edit contacts.
1. The data should be persisted (on the client), and loaded again when the application starts.
1. Add fitting validation to the different input fields.

### Form Fields

- First name (input, required)
- Last name (input, required)
- Email (input[type=text], required, valid email)
- Country (dropdown, required) - use the [country-list](https://www.npmjs.com/package/country-list) module to populate the list

### Other Requirements

We want to see what you are capable of and this is why we are giving you a lot of freedom to approach the challenge. We not only want to see your code but also your technical assesment of the problem, architectural decision making and technology choices. Please keep the following in mind.

- Even though this is a small project, **structure and architecture should mimic a large project**.
- The code should obviously follow best practises (DRY, maintainable, testable, etc.).
- Feel free to depend on any frameworks/libraries you think is suitable using NPM.
- We want the code you submit to be written by you, so don’t use skelletons/generators.
- Make sure the application works on Node 16, NPM 8 and in latest Chrome and Firefox.

> Note, this is where you get to shine — _show us what you’ve got!_

## Developing

Once you've installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deploy

For GitHub pages deployment:

```bash
npm run deploy
```
