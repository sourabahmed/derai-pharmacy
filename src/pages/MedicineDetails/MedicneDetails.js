import React from 'react';
import { useParams } from 'react-router';

const MedicneDetails = () => {
    const{detailId} = useParams();
    return (
        <div>
            <h1>Details {detailId}</h1> 
        </div>
    );
};

export default MedicneDetails;