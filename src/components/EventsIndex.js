import React from 'react'
import axios from 'axios'
import EventCard from './EventCard'


class EventsIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [],
      weather: []
    }
  }

  componentDidMount() {

    axios.get('https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/', {
      params: {
        api_key: '0c64ae5cca7903c86353520198c58021'
      }
    })
      .then(response => this.setState({events: response.data.results}))
  }

  render() {
    if(!this.state.events[0]) return null
    return (
      <main className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.events.map((event, index) =>
              <div className="column is-one-quarter" key={index}>
                <EventCard {...event}/>
              </div>)}
          </div>
        </div>
      </main>
    )
  }
}

export default EventsIndex
