import React from "react"
import styles from "./TodoItem.module.css"
import { AiFillDelete } from "react-icons/ai"



class TodoItem extends React.Component {
    state = {
        editing: false,
        title: this.props.todo.title
    }

    onChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleEditing = () => {
        this.setState({
            editing: true
        })
    }

    handleUpdate = (e,newTitle, id) => {
        if (e.key==="Enter"){
            this.props.setUpdateProps(newTitle, id)
            this.setState({
                editing:false
            })
        }

    }

    render() {


        const completed = this.props.todo.completed
        const id = this.props.todo.id

        //Adding an inline style here to practice another way of adding styles
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
          }
    

        let viewMode;
        let editMode;

        if (this.state.editing) {
            viewMode = styles.todoInput
        } else {
            editMode = styles.editInput
        }

        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} className={viewMode}>
                    <input
                        className= {styles.checkbox}
                        type="checkbox"
                        checked={completed}
                        onChange={() => this.props.handleChangeProps(id)}
                    />
                    <button className={styles.delete} onClick={()=>this.props.deleteTodoProps(id)}><AiFillDelete/></button>
                    <span style = {completed?completedStyle:null}>{this.props.todo.title}</span>
                </div>
                <input 
                    type="text"
                    onKeyDown = {(e) => this.handleUpdate(e,this.state.title, this.id)}
                    className={editMode}
                    value={this.state.title}
                    onChange={this.onChange}>
                </input>
            </li>
        )
    }




    onClick = e => {
        this.props.deleteTodoProps(this.id)
    }
}


export default TodoItem