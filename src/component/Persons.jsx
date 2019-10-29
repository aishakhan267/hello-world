import React from 'react';
import "./Persons.css";
import Person from './Person';
// import sam from '../assits/hermione-granger-png-clipart.jpg'

const Persons = () => {
    const personsData = [
        {
            name :"Harry Potter",
            image: "https://www.freepngimg.com/thumb/harry_potter/2-2-harry-potter-transparent-thumb.png",
            age :12,
            qualification :"F.A",
            description :"Web Developer",
            isEditMode : false
        },
        {
            name :"Hermione Granger",
            image: "https://3.bp.blogspot.com/-9OElaCFgrGU/V1N2zTdv7YI/AAAAAAAAFb8/Fwm-DDM3zB48qLYh8VeN_yoflDjYu6JSwCLcB/s1600/hermione_granger___cutout_1_by_nickygfx-d7hdb9m.png",
            age :16,
            qualification :"F.Sc",
            description :"Student",
            isEditMode : false

        },
        {
            name :"Ron Weasley",
            image: "https://s3-eu-west-1.amazonaws.com/genarrator/ssoiqqjg2ysfpcv6/ron-weasley.png",
            age :26,
            qualification :"MBA",
            description :"Magician",
            isEditMode : false
        }
    ];
    const doActive = () => {alert("hi! I m here")
        // individualPerson.
        // isEditMode = true;
    }
    return (
        <div className="Persons">
            <h1>Persons</h1>
            <div className="cardsDiv">
            {
                personsData.map(umbrella => <Person individualPerson={umbrella} editMode={doActive}/>)
            }
            </div>
            {/* <Person isEditMode={true}/>
            <Person isEditMode={false}/> */}
        </div>
    );
};

export default Persons;