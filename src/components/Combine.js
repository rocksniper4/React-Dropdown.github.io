import React, { useState } from "react";
import '../dropdown.css';
import Dropdown from "./Dropdown";


function Combine() {
    const dropdownItems = ['Full-time', 'Part-time', 'Contract', 'Temporary', 'internship'];
    return (
        <div className='main'>
            <div className='inner'>
                <h1 className='heading'>What are your desired job types?</h1>
                <Dropdown items={dropdownItems} />
            </div>
        </div>
    );
}

export default Combine;