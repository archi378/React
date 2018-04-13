import React from 'react';

// class Employee1 extends React.Component{
//     render(){
//         return(
//             <li onClick={ (props)=> {this.props.clickHandler(this.props.index)}}
//             className={this.props.detail.permanent ? 'permanent' : '' }>
//               {this.props.detail.name} 
//             </li>
//         )
//     }
// }

class Employee1 extends React.Component {
    constructor(){
        super()

        this.renderForm = this.renderForm.bind(this)
        this.renderlist = this.renderlist.bind(this)
        this.toggleState = this.toggleState.bind(this)
        this.updateEmployee = this.updateEmployee.bind(this)

        this.state = {
            isEditing:false
        }
    }
    toggleState(){
        const { isEditing }= this.state
        this.setState({
            isEditing: !isEditing
        })
    }
    updateEmployee(e){
        e.preventDefault()
        this.props.editEmployee(this.props.index, this.input.value)
        this.toggleState()
    }
    renderForm(){
        return(
            <form onSubmit={this.updateEmployee}>
            <input type="text"
             ref= {(value) => {this.input = value}} 
             defaultValue={this.props.detail.name} />
            <button type="submit">Update Employee</button>
        </form>
        )
    }
    renderlist(){
        return(
            <li onClick={ ()=> {
                this.props.clickHandler(this.props.index)}}
                className={this.props.detail.permanent ? 'permanent' : '' }>
                    {this.props.detail.name} 
                    <button onClick = { (evt) => {
                        evt.stopPropagation()
                        this.props.deleteEmployee(this.props.index)}}>Delete
                        </button>
                    <button onClick = { (evt) => {
                    evt.stopPropagation()
                    this.toggleState()}}>Edit
                    </button>
            </li>
        )
    }
    render(){
        const { isEditing }= this.state
    return(
        <section>
         { isEditing ? this.renderForm() : this.renderlist()}
        </section>
    )
}
}
export default Employee1;