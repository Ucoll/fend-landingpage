//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.scss";

import "../static/Fonts/Quicksand-VariableFont_wght.ttf";
import "../static/Fonts/FanwoodText-Regular.ttf";
import "../static/Fonts/Poppins-Regular.ttf";

//import your own components
import Layout from "./layout";

//Database URL route
export const database = "http://192.168.1.107:3702"

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));