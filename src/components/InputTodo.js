import React from "react"
import { CgAddR } from "react-icons/cg"


class InputTodo extends React.Component {
    state = {
        title: ""
    }

    onChange = e => {
        // this.setState({
        //     [e.target.name]:e.target.value,
        // })

        this.setState({ title: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title)
            this.setState({
                title: ""
            })
        } else {
            alert("Please enter something")
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input
                    type="text"
                    placeholder="Add todo..."
                    value={this.state.title}
                    onChange={this.onChange} 
                    className="input-text"/>
                <button className="input-submit"><CgAddR /></button>
            </form>
        )
    }
}

export default InputTodo