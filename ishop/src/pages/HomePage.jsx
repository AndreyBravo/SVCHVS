import React, { useState } from "react";
import { Catalog } from "../components/Catalog";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import tshorts from "../data/tshorts.json";

export const HomePage = () =>{
    const [TData, setTData] = useState(tshorts);

    return(
        <div className="page home">
            <Header TData={TData} setTData={setTData} />
            <Catalog TData={TData} setTData={setTData} />
            <Footer />
        </div>
    );
}

