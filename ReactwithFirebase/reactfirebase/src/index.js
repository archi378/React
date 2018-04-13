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
        this.state = {
            Employees: ' '
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
        
        const database = firebase.database().ref().child('Employees')
        const rootref = database.child('name')
        rootref.on('value', snap =>{
            this.setState({
                Employees:snap.val()
            })
        }) 
    }

        render(){
            return(
                <section>
                <div>     
                 <h3>Show Employees List <span>
                    <button type="submit" id="save-buttton" onClick = {this.show}>Show</button></span>
                 </h3> 
                <p>{this.state.Employees}</p>
                </div>

                <div>
                    
                </div>
                </section>
            )
        }
}


ReactDOM.render(<Employee />, document.getElementById('root'));

