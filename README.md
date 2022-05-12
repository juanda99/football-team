# Football challenge

## Libraries

- React, create-react-app as boilerplate and redux to manage state (@reduxjs/toolkit)
- Typescript
- [Material-ui](https://mui.com/) as react component library
- jest, @testing-library and react-test-renderer for testing

## Tests

- Unit and some integration tests.
- Using github actions, test statistics are send to [codecov](https://about.codecov.io/)

  [![codecov](https://codecov.io/gh/juanda99/football-team/branch/main/graph/badge.svg?token=KLVZYIV6ZZ)](https://codecov.io/gh/juanda99/football-team)

## Automated deployment

- Using github actions the project is deployed to [Vercel](https://vercel.com/) under two conditions:
  - `npm test` run without errors
  - `npm build` run without warnings or errors
- Deployment website url: https://football-team.vercel.app/

## Browser data persistency.

- Redux state (selected team of players) is persisted using local storage.
- Last country team selection is also persisted (not send to the state as is just needed in one page) using local storage.

## API Calls

- I use `soccersapi.com`. It has certain drawbacks that I detail below:

  - API endpoint to get a list of coaches is not available for free, so it's mocked up.
  - Some data is not available for some players:
    - The country for example, despite doing searches by country (hacked)
    - The player picture (404 error, "fixed" with onError image prop)
    - Player position

- API endpoint to get players from countries is cached (using a custom hook see https://raw.githubusercontent.com/juanda99/football-team/main/src/hooks.js):

```js
export const useFetch = (url) => {
  // With useRef, we can set and retrieve mutable values at ease and its value persists throughout the component’s lifecycle.
  // other option,  use  useSWR or save state in localStorage (enhancemment)
  const cache = useRef({})
...
```

- API calls to get a list of team country data is not likely to change and it is statically generated via `npm prebuild` script.

## Enhancements

- Cache API endpoint to get players cache api during all the session, not just during the component lifecycle.
- I've considered a good design for usability to be able to choose as many players as you want, and then validate the team (eg. remove extra players) inside "Show my team" page view. However some enhancements could be done:
  - Some info about current team status (missing players to complete team...) inside the "Select players" page view.
  - A general state about the team to mark it as valid or invalid.
