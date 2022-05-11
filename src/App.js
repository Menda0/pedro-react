import React from "react";
import Pedro from "./components/Pedro";
import Person from "./components/Person";

class App extends React.Component{

  render(){
    return(
      <>
        <Person 
          name="Pedro"
          age="20"
          skills="Javascript, React, Java"
        />
        <Person 
          name="Marco"
          age="32"
          skills="N/A"
        />
        <h1>Hello World</h1>
      </>
    )
  }
}

export default App;
