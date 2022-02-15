//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

import Quicksand from "../static/Fonts/Quicksand-VariableFont_wght.ttf";
import Fandwood from "../static/Fonts/FanwoodText-Regular.ttf";
import Poppins from "../static/Fonts/Poppins-Regular.ttf";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
