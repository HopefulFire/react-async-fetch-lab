import React from 'react';

export default class App extends React.Component {

  state = {
    astronauts: {
      people: []
    }
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json").then((response) => {
      return response.json()
    }).then((astronauts) => {
      this.setState({astronauts: astronauts})
    })
  }

  render() {
    const astronauts = this.state.astronauts.people.map((astronaut) => {
      return <p>{astronaut.name}</p>
    })
    return (
      <div>{astronauts}</div>
    )
  }
}
