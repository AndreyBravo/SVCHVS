import React, { useState } from 'react';
import { TCard } from './TCard';
import '../index.css';

export const Catalog = ({TData, setTData}) =>{
    const [selectedCard, setSelectedCard] = useState(0);
    
    return(
        <div className="ishop-catalog">
            {TData.map((tshort) =>
                <TCard 
                key={tshort.id}
                TData={TData}
                setTData={setTData}
                tshort={tshort}
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
                />
            )}
        </div>
    );
}
