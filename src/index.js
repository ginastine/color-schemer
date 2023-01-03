import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ExampleOne from "./ExampleOne";
import ExampleTwo from "./ExampleTwo";
import ExampleThree from "./ExampleThree";
import ExampleFour from "./ExampleFour";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <>
            <ExampleOne />
            {/* <ExampleTwo /> */}
            {/* <ExampleThree /> */}
            {/* <ExampleFour /> */}
        </>
    </React.StrictMode>
);
