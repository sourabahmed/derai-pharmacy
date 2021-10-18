import React from 'react';

const MedicineDetail = (props) => {
    const {name, img} = props.detail;
    return (
        <div className="p-5">
            <img src={img} alt="" />
            <h1>This is medicne {name}</h1>
        </div>
    );
};

export default MedicineDetail;