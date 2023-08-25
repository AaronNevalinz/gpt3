import React from "react";
import { Blog, Header, Features, Possibility, WhatGPT3, Footer } from './containers'
import { Cta, Brand, Navbar } from './Components';
import './App.css'

const App = () => {
    return ( 
        <div className="App">
            <div className="gradient__bbg">
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possibility/>
            <Cta/>
            <Blog/>
            <Footer/>
        </div>
     );
}
 
export default App;