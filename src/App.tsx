import React, { FC, lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import image from './React-and-typescript.png';
import Regular from './Regular';
const LoadingComponent: FC = () => <div>Loading...</div>;
const Lazy = lazy(() => import('./Lazy'));

const App: FC = () => {
    return (
        <div className="App">
            <h1> Hello, World! with typescript </h1>
            <h1> build integration </h1>
            <Regular />
            <Suspense fallback={<LoadingComponent />}>
                <Lazy />
            </Suspense>
            <img src={image} />
        </div>
    );
};

export default hot(module)(App);
