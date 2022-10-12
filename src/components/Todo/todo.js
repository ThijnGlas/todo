import React from "react";
import "./todo.css";
import tasksObject from "../../data/tasks";
import Item from "../Item/Item";
import Input from "../input/Input";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        }
    }

    //compnentdidmount runt na het aanmaken en tekenen van een component
    componentDidMount() {
        this.setState({
            tasks: tasksObject.tasks,
        })
    }

    //componentdidupdate runt na het updaten van de state
    componentDidUpdate() {

    }

    inputPressedEnter = (inputFromInputComponent) => {
        let toBeAdded = [
            {
                name: inputFromInputComponent,
                done: false,
                id: this.state.tasks.length + 1,
            }
        ]
        let mergedArray = this.state.tasks.concat(toBeAdded);
        this.setState({
            tasks: mergedArray,
        })
    }

    render() {
        let items = this.state.tasks.map(task => {
            return <Item name={task.name} key={task.id}></Item>;
        })
        return (
            <article className="todo">
                <header className="todo__header">
                    <h1 className="todo__heading">{this.props.title}</h1>
                </header>
                <ul className="todo__list">
                    {items}
                </ul>
                <Input inputPressedEnter={this.inputPressedEnter}/>
            </article>
        )
    }

}

export default Todo;