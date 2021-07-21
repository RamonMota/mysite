import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from './Home.js';

function Router() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            
        </BrowserRouter>
    ) 
}

export default Router;