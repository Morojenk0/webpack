import * as React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import "./style.css";

const RootElement = document.getElementById("root");
const root = createRoot(RootElement!);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
