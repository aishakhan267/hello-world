import React from 'react';
import "./PersonInfo.css";
import {Button, Card, ButtonGroup} from 'react-bootstrap/';
import PropType from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


const PersonInfo = (props) => {
    
    return (
        <div className="PersonInfo">
            <Card.Img variant="top" src={props.individualPerson.image} />
            <Card.Body>
                <Card.Title>{props.individualPerson.name}, {props.individualPerson.age}</Card.Title>
                <Card.Text>
                {props.individualPerson.qualification},  {props.individualPerson.description}    
                </Card.Text>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary" onClick={props.editMode}>
                        <FontAwesomeIcon icon={faEdit} className="icons"/>
                     </Button>
                    <Button variant="primary">
                        <FontAwesomeIcon icon={faTrash} className="icons"/>
                    </Button>
                </ButtonGroup>
            </Card.Body>
            {/* <h1>{props.name} {props.age}</h1>
            <h2>{props.favColor}</h2>
            <h2>{props.qualification}</h2>
            <p>{props.description}</p> */}
        </div>
    );
};

export default PersonInfo;
PersonInfo.propType = {
    individualPerson :PropType.object,
    editMode :PropType.func,
} 