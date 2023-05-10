import React from "react";
import ReactDOM from "react-dom/client";
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";

// import {HooksApp} from './HooksApp'
import "./index.css";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<FormWithCustomHook />
	// </React.StrictMode>
);