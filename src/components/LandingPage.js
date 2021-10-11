import React, { useContext } from 'react';
//Context
import { getRandomText } from '../context/GetRandomTextProvider';
//Gif
import gif from "../gif/spinner.gif";
const LandingPage = () => {
    const randomText = useContext(getRandomText);
    const text = randomText.title ;
    return (
        <>
            { text ?
                <MainContainer 
                    text = {text}
                /> :

                <img src={gif} alt="spinner"/>
            }   
        </>
    );
};

export default LandingPage;