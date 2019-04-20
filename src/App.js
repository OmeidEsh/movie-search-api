import React, { Component } from "react";
import "./App.css";
import MovieRow from './MovieRow.js'
import $ from 'jquery' //$ represent jquery's library. And when we do our search, we can use $.XXXX

class App extends Component {
  
  //Overide the initializer called constructor.
  constructor(props){
    super(props)
    console.log("This is my initializer")

    this.state={}


/*   
    //Created a constat called movies, that has objects identified with {}
    //This is where the movie blocks with their info will go.
    const movies=[
      {id: 0, poster_src: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", title: "Avengers: Infinity War", overview: "laksjnlaknslkdalksdlkajsdkjaslkdjalksjdlkjasd"},
      {id: 1, poster_src: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/5damnMcRFKSjhCirgX3CMa88MBj.jpg", title: "Cars", overview: "11123123123123123123123123"},
    ]


    //Create a variable for pushing the movie info in the for loop below. 
    var movieRows = []

    //For loop calling the "movies" constatnt:
    movies.forEach((movie) => {
      console.log(movie.title)

      const movieRow = <MovieRow movie={movie}/> //IMPORTATN: we pass the "{movie}" objects to the MovieRow.js by writing: movie={movie}. And we access it in the MovieRow.js by accessing it's properti "movie={}"

      movieRows.push(movieRow) //pushing the p tag (for each id) into "movieRows"     
    })



    //Now that we've pushed everything into "movieRows", we set it to "rows" that we are rendering below. Doesn't matter what we 
    //choose, rows, kos, etc... as long as in render we use the same {this.state.XXXXX}
    this.state = {rows: movieRows}

*/


    this.performSearch("avengers")

  }//Close construct(props){} 





  performSearch(searchTerm){
    console.log("Perform search using movieDB")

    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=3c23612da904596d950ba31b9f4f545a&query=" + searchTerm
   
    $.ajax({
      url: urlString,

      success: (searchResults) => {
        console.log("Fetched data successfully")
        //console.log(searchResults)
        //console.log(results[0])

        const results = searchResults.results

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path //I added the neccessary url to the "poster_path" url to get the poster. So we manually constructed the poster path and we set it to the "movie" object directly and we pass the movie in as we did before. 
          //console.log(movie.poster_path)
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
          //console.log(movieRows)
        })
        //this.state = {rows: movieRows} //??? why can't I use =, and why setState now??
        this.setState({rows: movieRows})
      },

      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }


    })

  }





  searchChangeHandle(event){
    //console.log(event.target.value) //Able to type in the search bar "<input>" and see it in the console. 
    const boundObject = this //we can do this becase in <input> we used "this.searchChangeHandle.bind(this)" bind(this).
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }





  render() {
    return (
    <div> 
      

      <table className="titleBar"> 
        <tbody>
          <tr>

            <td>
              <img alt="app icon" width="50" src="green_app_icon.svg"></img>
            </td>

            <td width="10">
            </td>

            <td>
              <h1>MoviesDB Search</h1>
            </td>

          </tr>
        </tbody>
      </table> 

      <input style={{
        fontSize: 24,
        display: 'block', //Entire block
        width:"99%", //Fill up to 99% of that row/block
        paddingTop: 8, //Pad the top by 8 for the text
        paddingBottom: 8, //Pad the bottom by 8 for the text
        paddingLeft: 16, //Pad the left by 16 for the text
        }} 
        onChange = {this.searchChangeHandle.bind(this)} //The way we can listen to changes inside the input, is to use "onChange" //bind(this) will bind the current app.js file/class to the value of "this" inside "searchChangeHandle" functions. 
        placeholder = "SEARCH ME">   
      </input>


      
      {this.state.rows}



    </div>
    );
  }
} //Close render(){}

export default App;

/* 
//Moved all of this to App.css to make the coed clean and we call it by using: <table className="titleBar"> 
 
  <table style={{
        backgroundColor:'#000', //Change table color to black
        display:'block', //Change the entire table to cover the whole block
        color: '#fff', //Change text color to white
        //fontSize: 24 //Change font change
        paddingLeft: 16, //Adds padding to the everything in the table (push to right by 16)
      }}>  
*/