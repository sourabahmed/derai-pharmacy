import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MedicineDetail from '../MedicineDetail/MedicineDetail';

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
        <div>
            <h1 className="p-5">{detailId}</h1> 
            {
                details.map(detail => detail.id == detailId? <MedicineDetail
                key={detail.id}
                detail={detail}
                ></MedicineDetail>:"")
            }
        </div>
    );
};

export default MedicneDetails;