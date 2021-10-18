import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MedicineDetail from '../MedicineDetail/MedicineDetail';
import './MedicineDetails.css'

const MedicneDetails = () => {
    const{detailId} = useParams();

    const [details, setDetails] = useState([]);
    //console.log(details);
    useEffect(() => {
        fetch('/medicine.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    return (
        <div className="details">
            {
                details.map(detail => detail.id === parseInt(detailId)? <MedicineDetail
                key={detail.id}
                detail={detail}
                ></MedicineDetail>:"")
            }
        </div>
    );
};

export default MedicneDetails;