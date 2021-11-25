import React, { useState,useEffect} from 'react';

export default function ModuleItem(props){

    const { id, class_id, title, description } = props.data

    return(
        <li className="border">
        <div>
            <h2>{title}</h2>
        </div> 
        <div className="border">
            <p>{description}</p>
        </div>
        </li>
    );
};