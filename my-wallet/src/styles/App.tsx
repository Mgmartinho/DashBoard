import React from "react";

import GlobalStyles from "./GlobalStyles";
import Dashboard from "../Pages/Dashboards";

const App: React.FC = () => {
    return(
        <div>
        <GlobalStyles />
        <Dashboard />
        </div>
    );
}

export default App