import React, { createContext, useEffect, useState } from 'react';
//Api
import { getData } from '../service/api';
//Create context
export const getRandomText = createContext();
const GetRandomTextProvider = ({children}) => {
    const [ randomText , setRandomText ] = useState({});

    useEffect = (()=>{
        const fetchAPI = async ()=>{
            setRandomText(await getData());
        }
        fetchAPI();
    },[]);

    return (
        <getRandomText.Provider value={randomText} >
            {children}
        </getRandomText.Provider>
    );
};

export default GetRandomTextProvider;