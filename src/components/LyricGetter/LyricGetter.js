import React, { Component} from 'react';
import axios from 'axios';

class LyricGetter extends Component {

    state = {
        summary: 'Click the button to the lyrics to Stolen Car by Bruce Springsteen',
        lyrics: ''
    }

    getLyrics() {
        axios.get('https://api.lyrics.ovh/v1/Bruce Springsteen/Stolen Car')
            .then(
            
                response => {
                    console.log(response);
                    this.setState({lyrics: response.data.lyrics})
                }
            );
    }


    render() {
        return(
            <div className="weather-button-container">
                <button onClick={this.getLyrics.bind(this)}>Get Lyrics</button>

                <h2>{this.state.summary}</h2>
                <p>{this.state.lyrics}</p>
            </div>
        )
    }
}

export default LyricGetter;