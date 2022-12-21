import React from 'react';
import { Dna } from 'react-loader-spinner';

function Spinner(){
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

    return(
        <div style={style}>
            <Dna/>
        </div>
    )
};

export default Spinner;