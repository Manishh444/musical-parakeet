import React from "react";
import ReactDom from 'react-dom/client';
import Header from "./src/components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./src/components/HomePage";
import Cart from "./src/components/Cart";
const App = ()=>{
    return(
        <BrowserRouter>
            <Header/>
            <div className="App">
                <Routes>
                <Route path="/" Component={HomePage} exact/>
                <Route path="/cart" Component={Cart}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>)