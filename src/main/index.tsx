import * as React from 'react'
import * as ReactDOM from 'react-dom';
import App from "./app/App";

const rootEl = document.getElementById('app');
ReactDOM.render(<App message="hello, world!"/>, rootEl);
