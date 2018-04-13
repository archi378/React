import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router , Route , browserHistory , Link , IndexRoute} from 'react-router';

const App = ()=>{
    return(
    <div>
    <h2>App</h2>
    <Link to="/about">About Component</Link> 
    </div>
    )
}
const About = (props)=>{
    return(
    <div>
    <h2>About</h2>
    <div>{props.children}</div>
    <Link activeClassName="active" to="/about/sport">Sport</Link> {'  '}
    <Link activeClassName="active" to="/about/city">City</Link> 
    </div>
    )
}

const SportImage = ()=>{
    return(
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Youth-soccer-indiana.jpg/1200px-Youth-soccer-indiana.jpg" alt="sport" />
    )
}

const CityImage = ()=>{
    return(
        <img src="http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/52/s8/p052s8d9.jpg" alt="city" />
    )
}
const AboutIndex = ()=>{
    return(
    <h4>About Index</h4>
    )
}

ReactDOM.render(
    <Router history = { browserHistory }>
    <Route path="/" component={App} />
    <Route path="/about" component={About}>
        <IndexRoute component={AboutIndex} />
        <Route path="sport" component={SportImage} />
        <Route path="city" component={CityImage} />
    </Route>
    </Router>,
     document.getElementById('root')
    );

