import React from "react";
import "./Input.css"

class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {inputValue: ""};
    }

    update= (event) => { 
        this.setState({inputValue: event.target.value});
    }
    // als we met document.getelement... of document.query... werken in React, dan is het component uncontrolled

    enter = (event) =>{
        if(event.keyCode === 13 && this.state.inputValue !== ""){
            this.props.inputPressedEnter(this.state.inputValue);
            this.state.inputValue= ""
        }
        
    }

    render(){
    return (
        <input onKeyUp={this.enter} onChange={this.update} value={this.state.inputValue} className="input" type="text" placeholder="taak toevoegen" />
    );
}
}

export default Input;