import React, { useEffect, useState } from 'react';
import Medicine from '../Medicine/Medicine'
import './Medicines.css'

const Medicines = () => {
    const [medicines, setMedicines] = useState();
    //console.log(medicines);
    useEffect(() => {
        fetch('./medicine.json')
        .then(res => res.json())
        .then(data => setMedicines(data))
    },[]);
    return (
        <div>
            <h3 className="text-center pt-4">Medicines</h3>
            <div className="medicines container mt-5 pb-5">
            {
                medicines?.map(medicine => <Medicine
                key={medicine.id}
                medicine={medicine}
                ></Medicine>)
            }
            </div>
        </div>
    );
};

export default Medicines;