import React from "react";
import FullStory from "../data.json"
import Options from "../Options/Options"
import Reminder from "../Reminder/Reminder";

class History extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            record: []
        };

        this.chooseOption = this.chooseOption.bind(this)
        
    };
    
    componentDidMount(){
        this.setState({
            previousSelection: "",
            accountant: 1,
            narration: FullStory[0].historia,
            optionA: FullStory[0].opciones.a,
            optionB: FullStory[0].opciones.b,
            record: []
        });
    };

    chooseOption(choise){
        const newChoise = choise;
        let obj;
        if(choise === "A"){
            console.log(this.state.accountant + 1);
        obj = FullStory.find((element) => element.id === `${this.state.accountant + 1}a`);
        }else{
            obj = FullStory.find((element) => element.id === `${this.state.accountant + 1}b`);  
        };

        if(obj){
            this.setState((prev) =>({
                previousSelection: choise,
                accountant: this.state.accountant+1,
                narration: obj.historia,
                optionA: obj.opciones.a,
                optionB: obj.opciones.b,
                record:[...prev.record, newChoise]
            }));
        }else{
            alert("We go back to sleep.....Zzzz")
            this.componentDidMount();
        }
        console.log(this.state);
    }

    render(){
        return(
            <div className = "layout" >
                <h1 className = "historia">
                    {this.state.narration}
                </h1>
                <Options
                    optionA = {this.state.optionA} 
                    optionB = {this.state.optionB} 
                    handleClick = {this.chooseOption}/>
                <Reminder
                    previousSelection = {this.state.previousSelection} 
                    record={this.state.record}/>
            </div>
        ); 
    };
};

export default History;