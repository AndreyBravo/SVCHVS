import React, { useEffect } from "react";
import "../../index.css";

export const TDeleteForm = ({TData, setTData , Tid, active, setActive}) =>{
    useEffect(() => {
        if(active){
            document.getElementById('root').style.pointerEvents = "none";
        }
        else{
            document.getElementById('root').style.pointerEvents = "all";
        }
    }, [active])

    const handleSubmit = (event) =>{
        const newTData = Object.assign([], TData).filter((tshort) => tshort.id !== Tid);

        setActive(false);
        setTData(newTData);
        
        event.preventDefault();
    }

    const handleCancelClick = (event) =>{
        document.getElementById('root').style.pointerEvents = "all"
        setActive(false);

        event.preventDefault();
    }

    return(
        <div className={"delete-tshort-form" + (active ? " delete-tshort-form-active" : "")} >
            <p>Are you sure about removing?</p>
            <form onSubmit={handleSubmit}>
                <input type="submit" value="Yes" />
                <input type="button" value="Cancel" onClick={handleCancelClick} />
            </form>
        </div>
    );
}

