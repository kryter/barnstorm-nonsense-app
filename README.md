# barnstorm-nonsense-app

A nonsense app example to show what end to end tests look like when using Barnstorm.

## Trying Out the Sample App and Tests

### Getting Started

Install dependencies:

`npm install`

Start the dev server:

`npm run dev`

Navigate to `http://localhost:3000/` and enjoy the nonsense manually!

### Running the End to End Tests

Start Cypress:

`npm run cypress:open`

Pick any test and run it from the Cypress UI to see it in action.

## A Guide to Writing End to End Tests for an App

### App Instrument Set

Every test using Barnstorm will need to access Barnstorm `instruments` from the `app instrument set`.  The `app instrument set` is configured with `mechanics` that match the test framework being used.

### Pages

To begin writing end to end tests using Barnstorm, start by creating `page` files for the different areas of your app.  You'll configure an `instrument` to test each UI element in the area.

When specifying an `instrument`, you need to pass some basic information:

* a unique id that you'll use to reference the instrument
* the type of instrument (there is generally a different type of instrument for each type of UI element)
* a selector and any other information needed to find the UI element and any of its sub-elements
* the initial expected state of the UI element

Once the `instruments` are set up, you are ready to interact with the UI elements and update their expected state, which is automatically verified by Barnstorm at the end of the flight leg (i.e. "test step").

### Flight Plans

Once you have a `page` file where you've configured `instruments`, you're ready to use those instruments to write a `flight plan` file.  In the flight plan file, you'll specify common actions that you want to perform in the tests.

These `flight plan` files provide reusable blocks of testing that can be used in any test.  This is particularly handy when you are building a feature that builds on a previous feature and you need to do test setup for the previous feature in order to test the new feature.

Once the `flight plans` are set up, you are ready to write a test (finally!).

### Tests

Once you have a `flight plan`, you can start using it in a test.  To setup a test using Barnstorm, you'll need to first create an instance of the `app instrument set`, then set up the `page` file(s) that are needed in the test, either for accessing `instruments` directly or for passing to `flight plans` that will need to use the flight `instruments`.

Once your `instrument set` instance and `page` instance(s) are ready, use the `Url Instrument` on the `instrument set` to navigate to your app.

Once you've navigated to the app, `fly` `flight plans` to explore the app.

Happy flying!
