import React, { useEffect, useState } from 'react';
import Kid from '../Kid/Kid';
import './Kids.css'

const Kids = () => {
    const [kids, setKids] = useState([]);
    useEffect(() => {
        fetch('/kids.json')
        .then(res => res.json())
        .then(data => setKids(data))
    },[])
    return (
        <div>
            <h3 className="text-center mt-4">Kid's Item <i class="fas fa-baby"></i></h3>
            <div className="kids">
                {
                    kids.map(kid => <Kid
                    key={kid.id}
                    kid={kid}
                    ></Kid>)
                }
            </div>
        </div>
    );
};

export default Kids;