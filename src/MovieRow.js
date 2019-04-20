import React from 'react'

//api_key = 3c23612da904596d950ba31b9f4f545a
class MovieRow extends React.Component{


    viewMovie(){
        //console.log("Trying tio view movie")
        //console.log(this.props.movie.title)
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }



    render(){
        return (
        <table key={this.props.movie.id}>
            <tbody>
            <tr>
                
                <td>
                    <img alt="poster" width="120" src={this.props.movie.poster_src}></img>
                </td>

                <td>
                    <h3>{this.props.movie.title}</h3>
                    <p>{this.props.movie.overview}</p>
                    <input type="button" value="View" onClick={this.viewMovie.bind(this)}/>
                </td>

            </tr>
            </tbody>
        </table>
        )
    }



}

export default MovieRow
