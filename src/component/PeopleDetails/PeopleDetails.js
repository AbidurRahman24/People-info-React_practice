import React from 'react';

const PeopleDetails = (props) => {
  const handleClick = props.handleClick
    // console.log(props.people);
   const {id, first_name, img, salary, email} = props.people
    return (
        <div style={{border:'2px solid salmon', margin:'10px', padding:'10px'}}>
            <p >{img}</p>
            <h1>ID: {id}</h1>
            <h5>Name:{first_name} </h5>
            <p>Mail: {email}</p>
            <p>Salary: {salary}</p>
            <button onClick={()=> handleClick(props.people)}>Add me</button>
        </div>
    );
};

export default PeopleDetails;