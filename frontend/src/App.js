import React, {Component} from 'react';
import './App.css';
import myFunc from './getAllApplications'

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            applications: [],
        };
    }

    componentDidMount() {
        const applications = myFunc();
        console.log(applications);

        this.setState( {
            applications: applications,
        } );

    }

    render() {
        return (
            <div>
                <h2>Applications in Around the Block hackaton</h2>
                {this.state.applications.length > 0 &&
                <div>
                    {this.state.applications.map(application => (
                        <li> {application} </li>
                    ))}
                </div>
                }
            </div>
        );
    }
}

export default App;



