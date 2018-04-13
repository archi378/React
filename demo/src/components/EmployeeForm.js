import React from 'react'

const EmployeeForm = (props) =>{
    return(
        <form onSubmit={props.addEmployee}>
        <input type="dropdown" id="list" />
        <input type="text" value={props.currentEmployee}
        onChange={props.updateEmployee}/>
        <button type="submit">Submit</button>
        </form>
    )
}

export default EmployeeForm