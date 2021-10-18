import React, { useEffect, useState } from 'react';
import Disease from '../Disease/Disease';
import './Diseases.css'

const Diseases = () => {
    const [diseases, setDiseases] = useState();
    useEffect(() => {
        fetch('/disease.json')
        .then(res => res.json())
        .then(data => setDiseases(data))
    },[])
    return (
        <div>
            <h3 className="text-center">Common Diseases</h3>
            <div className="diseases">
                {
                    diseases?.map(disease => <Disease
                    key={disease.id}
                    disease={disease}
                    ></Disease>)
                }
            </div>
        </div>
    );
};

export default Diseases;