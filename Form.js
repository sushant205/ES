import React from 'react'
import { Form } from 'react-bootstrap'


/**
* @author
* @function FormInput
**/

const FormInput = (props) => {
    return (

        <Form.Control
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onSubmit={props.onSubmit}
            onBlur={props.onBlur}
            className={props.className}
        />
    )
}
export default FormInput