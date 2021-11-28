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
 - I created a github workflow job that runs automatically on push and pull requests to the main branch
