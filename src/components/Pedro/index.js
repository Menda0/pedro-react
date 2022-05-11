import React from "react"
import styles from "./pedro.module.css"

class Pedro extends React.Component{
  render(){
    return (
      <div className={styles.container}>
        <div>
          <label>Name:</label>
          <span>Pedro</span>
        </div>
        <div>
          <label>Age:</label>
          <span>20</span>
        </div>
        <div>
          <label>Skills:</label>
          <span>Javascript, Java, Html</span>
        </div>
      </div>
    )
  }
}



export default Pedro