import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import contract from './contract';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      applications: [],
    };
  }

  async componentDidMount() {
    const applications = await contract.methods.getApplications().call();

    this.setState( {
      applications: applications,
    } );
  }

  render() {
    return (
      <div>
        <h2>Applications for Around the Block hackaton</h2>
        {
          this.state.applications.map(application => ( 
          <li> {application} </li>
          ))
        }
      </div>
    );
  }

}

export default App;
