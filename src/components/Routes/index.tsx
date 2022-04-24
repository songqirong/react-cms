import React, { FC } from 'react';
import { BrowserRouter, Route, Routes as RoutesRRD } from 'react-router-dom';
import { LazyComponent } from 'src/utils/lazy';
const Home = LazyComponent('HomePage', import('../../pages/home'));
const Test = LazyComponent('TestComponentContainer', import('../../pages/test'));
const PageNotFound = LazyComponent('PageNotFound', import('../../pages/page-not-found'));

export const Routes: FC = (props) => (
  <RoutesRRD >
    <Route element={<Home />} path="/" ></Route>
    <Route element={<Test />} path="/test" ></Route>
    <Route element={<PageNotFound /> } path="*" ></Route>
  </RoutesRRD>
);
