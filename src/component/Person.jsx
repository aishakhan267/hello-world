import React from 'react';
import "./Person.css";
import PersonInfo from './PersonInfo';
import PersonEdit from "./PersonEdit";
import PropType from "prop-types";
import Card from 'react-bootstrap/Card';


const Person = (props) => {
    return (
        <div className="Person">
            <Card style={{ width: '18rem' }}>
                { 
                    props.individualPerson.isEditMode ? 
                    <PersonEdit individualPerson={props.individualPerson}/> : 
                    <PersonInfo individualPerson={props.individualPerson} editMode={props.editMode}/> 
                }
                {/* <PersonEdit individualPerson={props.individualPerson} /> */}
            </Card>
            
        </div>
    );
};
export default Person;
Person.propType = {
    isEditMode :PropType.bool,
    individualPerson :PropType.object,
    editMode :PropType.func,
}