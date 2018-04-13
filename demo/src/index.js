import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Employee1 from './components/Employee1.js'
import EmployeeForm from './components/EmployeeForm.js'
import * as firebase from 'firebase'

// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
var config = {
    apiKey: "AIzaSyBsDZMaSLrX4phyS_aUoVV8-5IUAjbzPeE",
    authDomain: "employees-b8beb.firebaseapp.com",
    databaseURL: "https://employees-b8beb.firebaseio.com",
    projectId: "employees-b8beb",
    storageBucket: "employees-b8beb.appspot.com",
    messagingSenderId: "995928768289"
  };
  firebase.initializeApp(config);

  var firebaseroot = 'https://employees-b8beb.firebaseio.com/';
class Employee extends React.Component{
    constructor(props){
        super(props)
        this.changeStatus = this.changeStatus.bind(this)
        this.updateEmployee = this.updateEmployee.bind(this)
        this.addEmployee = this.addEmployee.bind(this)
        this.deleteEmployee = this.deleteEmployee.bind(this)
        this.editEmployee = this.editEmployee.bind(this)

        this.state = {
            employees: [ 
                { id: "01",
                  name: "Archana",
                  permanent: false
                },
                {id: "02",
                 name: "Pranati",
                 permanent: false
                },
                {id: "03",
                 name: "Neha",
                 permanent: false
                }
                
            ],
            currentEmployee: " "
        }
        

    }
    addEmployee(e){
        e.preventDefault()
        let nextId = this.state.employees.length
        let employees = this.state.employees
        let currentEmployee = this.state.currentEmployee
        nextId++
        employees.push({
            id: nextId,
            name: currentEmployee,
            permanent:false
        })
        this.setState({
           employees,
           currentEmployee:" "
        })
    }
    deleteEmployee(index){
       let employees = this.state.employees
       employees.splice(index, 1)

       this.setState({
           employees
       })
    }
    updateEmployee(newValue){
        this.setState({
            currentEmployee: newValue.target.value
        })
        
    }
    editEmployee(index, newvalue){
        var employees = this.state.employees
        var employee = employees[index]
        employee['name']= newvalue
        this.setState({
            employees
        })

    }
    changeStatus(index){
        var employees = this.state.employees;
        var employee = employees[index];
        employee.permanent = !employee.permanent;
        this.setState ({
          employees:employees
        })
        console.log(this.state.employees[index])
    }
    render(){
        return(
            <section>
                <EmployeeForm 
                        currentEmployee = {this.state.currentEmployee}
                        updateEmployee = {this.updateEmployee}
                        addEmployee = {this.addEmployee}
                        deleteEmployee = {this.deleteEmployee}/>
            <ul>
            {this.state.employees.map((employee,index) =>{
                   return(
                       <Employee1 
                       key={employee.id}
                       clickHandler = {this.changeStatus} 
                       index={index} 
                       deleteEmployee={this.deleteEmployee}
                       editEmployee={this.editEmployee}
                       detail = {employee} />
                   )
            })}
            </ul>
            </section>
        )
    }
}


ReactDOM.render(
    <Employee />,
    document.getElementById('root')
);


  
