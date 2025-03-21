import React, { useMemo } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import Dashboard from "./pages/Dashboard";
import List from "./pages/List";
import SignIn from "./pages/SigIn";

const App: React.FC = () => {


    return (

        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Layout>
                <List />
            </Layout>
        </ThemeProvider>

    );

};

export default App;