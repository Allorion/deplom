import React, {FC} from 'react';

import CoreTemplate from "./pages/core/CoreTemplate";
import {Container} from "@mui/material";
// Routing
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import FormationAccountingDocTemplate from "./pages/formation-accounting-documentation/FormationAccountingDocTemplate";


const App: FC = () => {

    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path="deplom/" element={<CoreTemplate/>}/>
                    <Route path="deplom/save-report-pdf/" element={<FormationAccountingDocTemplate/>}/>
                </Routes>
            </BrowserRouter>
        </Container>
    );
};

export default App;
