import React from "react";
import Home from "./Home";

import { MyProvider } from "../context";
const App = () => {
    return (
        <MyProvider>
            <Home />
        </MyProvider>
    )
}
export default App