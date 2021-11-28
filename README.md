## Available Scripts

In the project directory, you can run:

### `yarn start`

### `yarn test`

### `yarn run test:coverage` - shows test coverage

### `yarn build`

### `yarn eject`

### `yarn run tslint-check` - check if your configuration contains any rules that are in conflict with Prettier.

### `yarn run lint` - checks and formats the code based on tslint.json

## Redux

 - actions, reducers and types can be found in the "redux" folder
 - the `rootReducer.tsx` combones all the individual reducers
 - the `store.tsx` creates the store and allso applies middlewares (in this case only thunk and devTools)
 - the `actions` folder should contain the redux actions (including api calls) and import action types from `actions` folder
 - the `reducers` folder should contain the reducers and import action types for the switch from the `actions` folder
 - each feature should have it's own actions, reducers and types file

## Additional info

 - I created a github workflow job that runs automatically on push and pull requests to the main branch, for now it does a `build` and `test:coverage` script.
 - I also set up tslint and prettier
 - I I had more time I would have created the components for filter, spinner, error message, map inside the `components` folder
 - I tryed to use my time to set up the app so that it has an ok arhitecture, i used a create-react-app template but I deleted most of the code and redux logic and create something more simple to use
 - I ran out of time, but I would create a test file for each action file in the redux folder
 - I have a working api call with minimal error handling when you click on the `button`
 - I created seperate script for test coverage and lint, it's something that I find valuable when starting out so that the code is consistent and if I had time I would have added a coverage treshold of 80% and also install `husky` so on `pre-commit` it would run the `lint` script
 - I would have also played around more with tslint and prettier to get the right configurations
 - I added `redux-devtools-extension`, a very usefull tool for debugging your app that uses redux
 - For a small app, seperate state management library like `redux` is probably overkill, I used it so it's set up for future expansions, I could have also used the built-in context-api or even just the component local state management and pass down data from `App.tsx` to the children components
 - I didn't use any routing because of the time limit but a popular library is `react-routing` that normally does the job well
 - the folder `containers` should contain the bigger components, like a whole page (ex: login, dashboard, profile) and the `components` folder should contain reusable components. Each component and container should have it's own css and test file
 - If I would have time, I would probably eject webpack and see if what can be improved on the build side, if the app is starting to get bigger. A good tool is `Lighthouse` from google that can be found inside the chrome devtools. It generates a report that can be analyzed and see what can be impremented from performanse, SEO, accessability and PWA standpoint
