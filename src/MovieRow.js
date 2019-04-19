import React from 'react'

//api_key = 3c23612da904596d950ba31b9f4f545a
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
