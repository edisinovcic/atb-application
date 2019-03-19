import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import contract from './contract';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      //manager: '' ,
      applications: [],
      accounts: '',
      //contract: ''
    };
  }

  async componentDidMount() {
    //const manager = await contract.methods.manager.call();
    const accounts = await web3.eth.getAccounts();
    const applications = await contract.methods.getApplications().call();

    this.setState( {
      //manager: manager,
      //contract: contract,
      applications: applications,
      accounts: accounts
    } );
  }

  render() {
    return (
      <div>
        <h2>Applications for Around the Block hackaton</h2>
        <p> Accounts are: {this.state.accounts}</p>
        <p> Applications are: {this.state.applications}</p>
      </div>
    );
  }

}

export default App;
