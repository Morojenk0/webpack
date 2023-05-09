import React from "react";
import {createRoot} from "react-dom/client";
import "./scss/index.scss";
import App from "./App";

const RootElement = document.getElementById("root");
const root = createRoot(RootElement);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
