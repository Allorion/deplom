import React, {FC} from 'react';

// Routing
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


import CoreTemplate from "./pages/core/CoreTemplate";
import {Container} from "@mui/material";


const App: FC = () => {

  return(
      <React.Fragment>
          <Container>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<CoreTemplate/>}/>
              </Routes>
          </BrowserRouter>
          </Container>
      </React.Fragment>
  );
};

export default App;
