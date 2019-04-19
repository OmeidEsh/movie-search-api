import React, { Component } from "react";
import "./App.css";

class App extends Component {
  
  //Overide the initializer called constructor.
  constructor(props){
    super(props)
    console.log("This is my initializer")

    //Created a constat called movies, that has objects identified with {}
    //This is where the movie blocks with their info will go.
    const movies=[
      {id: 0, title: "Avengers: Infinity War", overview: "laksjnlaknslkdalksdlkajsdkjaslkdjalksjdlkjasd"},
      {id: 1, title: "KOOOOOS", overview: "11123123123123123123123123"},
    ]

    //For now, I defied the "rows" that we render in the bottom with these three <p>.
    this.state={rows: [
      <p key="1">This is my ROOOOOOW1</p>,
      <p key="2">This is my ROOOOOOW2</p>,
      <p key="3">This is my ROOOOOOW3</p>
    ]}




    //Create a variable for pushing the movie info in the for loop below. 
    var movieRows = []

    //For loop calling the "movies" constatnt:
    movies.forEach((movie) => {


      console.log(movie.title)


      const movieRow = <table>
        <tbody>
          <tr>
            <td>
              <img src=""></img>
            </td>
            <td>
              {movie.title}
            </td>
          </tr>
        </tbody>
      </table>


      movieRows.push(<p key={movie.id}> movie title: {movie.title} </p>) //pushing the p tag (for each id) into "movieRows"
    })



    //Now that we've pushed everything into "movieRows", we set it to "rows" that we are rendering below. 
    this.state = {rows: movieRows}

  }//Close construct(props){} 





  render() {
    return (
    <div className="App"> 
      

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
        placeholder=" SEARCH ME">   
      </input>


      
      {this.state.rows}



    </div>
    );
  }
} //Close render(){}

export default App;

{/* 
//Moved all of this to App.css to make the coed clean and we call it by using: <table className="titleBar"> 
 
  <table style={{
        backgroundColor:'#000', //Change table color to black
        display:'block', //Change the entire table to cover the whole block
        color: '#fff', //Change text color to white
        //fontSize: 24 //Change font change
        paddingLeft: 16, //Adds padding to the everything in the table (push to right by 16)
      }}>  
*/}