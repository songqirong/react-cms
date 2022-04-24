# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## 集成axios
npm i axios -S
```
 // http.ts
 const instance = axios.create({
    baseURL: 'http://localhost:8099',
    withCredentials: true,
    timeout: 7000
  });

  // 请求拦截器
  instance.interceptors.request.use((config: AxiosRequestConfig) => config, (error: AxiosError) => Promise.reject(error));

  // 响应拦截器
  instance.interceptors.response.use((response: AxiosResponse) => response, (error: AxiosError) => Promise.reject(error));


  export default instance;
```

## 集成redux, redux-saga

```
// store/index.ts
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core'; 
import { saga } from './saga';
import { reducers } from './reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers,
  applyMiddleware(sagaMiddleware)
)

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(saga)

// store/reducer.ts
import { combineReducers } from 'redux';
import { homeReducer } from './home/reducer';
export const reducers = combineReducers({
  home: homeReducer
})

// store/saga.ts
import { fork } from 'redux-saga/effects';
import { homeSaga } from './home/saga';

export function* saga() {
  yield fork(homeSaga)
}

// utils/redux.ts
import { createAction } from 'redux-actions';
import { assign } from 'lodash';

export const create_action = (action_type: string) => createAction(action_type);
export const create_fetch_action = (action_type: string) => ({
  success: {
    type: `${action_type}_success`,
    action: create_action(`${action_type}_success`)
  },
  request: {
    type: `${action_type}_request`,
    action: create_action(`${action_type}_request`)
  }
})
export function update_state<StateType>(oldState: StateType, newState: Partial<StateType>): StateType {
  return assign({}, oldState, newState)
}
```

## 集成sass

npm i sass-loader sass -D

## 集成代码检查

npm i eslint stylelint-scss stylelint stylelint-config-standard stylelint-order lint-staged husky -D

## seo优化

npm i react-helmet-async -S

## 集成路由

npm i react-router-dom -S
