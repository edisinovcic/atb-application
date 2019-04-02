import React, { Component } from 'react';
import './App.css';
import applications from './getAllApplications'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      applications: [],
    };
  }

  async componentDidMount() {
    const applications = applications;

    this.setState( {
      applications: applications,
    } );
  }

  render() {
    return (
      <div>
        <h2>Applications in Around the Block hackaton</h2>
        {
          <div>
          this.state.applications.map(application => (
          <li> {application} </li>
          ))
            </div>
        }
      </div>
    );
  }

}

export default App;
