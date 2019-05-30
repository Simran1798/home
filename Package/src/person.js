import React from "react";

const person = (props) => {
    return (
        <div>
        <p onClick = {props.click}> 
            student name is {props.name} and roll no is {props.no}</p>
        </div>
    );
}

export default person;