import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCMcQ0SXIaUNsXbvSzwABEepwXSHIvAFo0",
    authDomain: "myproject-7ed24.firebaseapp.com",
    databaseURL: "https://myproject-7ed24.firebaseio.com",
    projectId: "myproject-7ed24",
    storageBucket: "myproject-7ed24.appspot.com",
    messagingSenderId: "667043118631"
  };
  firebase.initializeApp(config);

class Employee extends React.Component{
    constructor(){
        super()
        this.show=this.show.bind(this)
        this.save=this.save.bind(this)
        this.login=this.login.bind(this)
        this.state = {
            Employees: []
        }
    }
    // componentDidMount(){
    //     const database = firebase.database().ref().child('Employees')
    //     const rootref = database.child('name')
    //     rootref.on('value', snap =>{
    //         this.setState({
    //             Employees:snap.val()
    //         })
    //     })
    // }
    show(){
        
        const database = firebase.database()
        const ref = database.ref('Employees')
        const rootref = ref.child('name')
        rootref.on('value', snap =>{
            this.setState({
                Employees:snap.val()
            })
        }) 
        // ref.on('value',(data) => {
        //     var employees = data.val()
        //     var keys = Object.keys('Employees');
        //     console.log(keys)
        //     console.log(employees)
        //     this.setState({
        //          Employees:employees
        //     })
        // });
    }
    save(){
         const database = firebase.database()
         const ref= database.ref('Employees')
         let data ={
             id: 2,
             name: this.input.value
         }
         ref.push(data)
         this.input.value= ""

    }
    login(e){
        e.preventDefault()

    }

        render(){
            return(
                <main>
                <section>
                    <div>     
                        <h3>Show Employees List <span>
                        <button type="submit" id="show-buttton" onClick = {this.show}>Show</button></span>
                        </h3> 
                        <p>{this.state.Employees}</p>
                    </div>

                    <div>
                        <h3>Enter an Employee Name <span>< input type="text" id="emp-name"   ref= {(value) => {this.input = value}} />
                            </span>
                        <button type="submit" id="save-buttton" onClick = {this.save}>Save</button>
                        </h3>    
                    </div>
                </section>
                <section>
                    <form className="input-form">
                        <input type="text" id="username" placeholder="Enter Your Username" />
                        <input type="password" id="password" placeholder="Enter Your Password" value=""/>
                        <button type="submit">Login</button>
                    </form>
                </section>
                </main>
            )
        }
}


ReactDOM.render(<Employee />, document.getElementById('root'));

