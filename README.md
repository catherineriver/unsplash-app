## React practical assignment.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

Also I used in project:

* Material UI, because I think that a simpler way to implement input with autosuggestions. 
* LocalStorage for saving last search query


To my shame, I couldn't cope with the Auth0 and Unsplash. Unsplash doesn't need `openId` scope for authorization, 
but Auth0 React SDK pass this parameter as default and(as developers of SDK says [here](https://github.com/auth0/auth0-react/issues/242#issuecomment-836346571))
it should be passed. I did not come up with a solution, although I re-read the documentation for Unsplash and SDK
several times.

Anyway, doing this assignment was pleasure for me. 


## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

