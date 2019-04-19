import React from 'react'

class MovieRow extends React.Component{
    render(){
        return (
        <table key={this.props.movie.id}>
            <tbody>
            <tr>
                <td>
                <img alt="poster" width="120" src={this.props.movie.poster_src}></img>
                </td>
                <td>
                {this.props.movie.title}
                <p>{this.props.movie.overview}</p>
                </td>
            </tr>
            </tbody>
        </table>
        )
    }



}

export default MovieRow




/*
import React, { Component } from 'react';


class MovieRow extends Component {
    state = {  }
    render() { 
        return (  );
    }
}
 
export default MovieRow;
*/