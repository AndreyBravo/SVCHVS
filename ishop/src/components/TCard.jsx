import React from 'react';
import { useState } from 'react';
import '../index.css';
import { TDeleteForm } from './forms/TDeleteForm';
import { TEditForm } from './forms/TEditForm';

export const TCard = ({TData, setTData, tshort, selectedCard, setSelectedCard}) =>{
    const [deleteFormnActive, setDeleteFormActive] = useState(false);
    const [editFormActive, setEditFormActive] = useState(false)

    const handleSneakerCardClick = () =>{
        setSelectedCard(tshort.id);
    }

    const handleDeleteCard = () =>{
        setDeleteFormActive(true);
    }

    const handleEditCard = () =>{
        setEditFormActive(true);
    }

    return(
        <>
            <div className={"tshort-card" 
            + (selectedCard === tshort.id ? " tshort-card-active" : "")
            + (editFormActive ? " tshort-card-undisplay" : "")} 
            onClick={handleSneakerCardClick}>
                <div className="tshort-card-photo">
                    <img src={tshort.photo} alt={tshort.name} />
                </div>
                <h2>{tshort.name}</h2>
                <p>{tshort.cost} BYN</p>
                <p>Count: {tshort.count}</p>
                <div className="tshort-card-buttons" style={{display: (deleteFormnActive ? "none" : "flex")}}>
                    <button onClick={handleEditCard}>Edit</button>
                    <button onClick={handleDeleteCard}>Delete</button>
                </div>
                { deleteFormnActive
                ? <TDeleteForm 
                TData={TData}
                setTData={setTData}
                Tid={tshort.id}
                active={deleteFormnActive} 
                setActive={setDeleteFormActive}
                />
                : <></>
                }
            </div>
            { editFormActive
            ? <TEditForm
            selectedCard={selectedCard}
            TData={TData}
            setTData={setTData}
            Tid={tshort.id}
            active={editFormActive}
            setActive={setEditFormActive}
            />
            : <></>
            }
        </>
    );
}
