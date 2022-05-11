import React from "react";
import styles from "./person.module.css"

function Person(props){
    return (
        <div className={styles.container}>
            <div>
            <label>Name:</label>
            <span>{props.name}</span>
            </div>
            <div>
            <label>Age:</label>
            <span>{props.age}</span>
            </div>
            <div>
            <label>Skills:</label>
            <span>{props.skills}</span>
            </div>
        </div>
    )
}

export default Person