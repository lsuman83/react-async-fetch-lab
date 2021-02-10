// create your App component here
import React, { Component }  from 'react';



class App extends Component {

    state = {
        allPeople: []
    }
    
    componentDidMount() {
        return fetch('http://api.open-notify.org/astros.json')
                .then(resp => resp.json())
                .then(data => {
                    this.setState({
                        allPeople: data.people
                    })
                })
    }

    render(){
        return(
            <div>
                {this.state.allPeople.map(person => person.name)}
            </div>
        )       
    }
}

export default App