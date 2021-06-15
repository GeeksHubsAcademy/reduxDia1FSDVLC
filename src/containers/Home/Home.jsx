
import React from 'react';

import "./Home.css";
import Display from "../../components/Display/Display";
import Menu from "../../components/Menu/Menu";


const Home = () => {
    return(
        <div className="vistaHome">
            <Menu/>
            <Display/>
        </div>
    )
}

export default Home;