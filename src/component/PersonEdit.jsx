import React from 'react';
import "./PersonEdit.css";
import {Button, Card, ButtonGroup} from 'react-bootstrap/';
// import PropType from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const PersonEdit = (props) => {
    return (
        <div className="PersonEdit">
            <Card.Body>
                <Card.Title>Edit Person</Card.Title>
                <Card.Text>
                    <input value={props.individualPerson.name}/>
                    <input type="number" value={props.individualPerson.age}/>
                    <textarea>{props.individualPerson.description}</textarea>
                </Card.Text>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary">
                        <FontAwesomeIcon icon={faCheck} className="icons"/>
                     </Button>
                    <Button variant="primary">
                        <FontAwesomeIcon icon={faTimes} className="icons"/>
                    </Button>
                </ButtonGroup>
            </Card.Body>
        </div>
    );
};
export default PersonEdit;
// PersonEdit.propType = {
//     individualPerson :PropType.object,
// } 