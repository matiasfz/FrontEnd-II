import React, { Component } from "react";

class Reminder extends Component {  
    render(){
        return (
            <div className="recordatorio">
                <h3>"Previous selection" {this.props.previousSelection}</h3>
                <h4>"History of chosen optins"</h4>
                <ul>
                    {this.props.record.slice(0,-1).map((e, i)=><li key = {i}>{e}</li>)}
                </ul>
            </div>
                );
            }
}

export default Reminder;