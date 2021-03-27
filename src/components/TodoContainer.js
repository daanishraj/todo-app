import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
    state = {
        // todos: [
        //     {
        //         id: 1,
        //         title: "Setup development environment",
        //         completed: true
        //     },
        //     {
        //         id: 2,
        //         title: "Develop website and add content",
        //         completed: false
        //     },
        //     {
        //         id: 3,
        //         title: "Deploy to live server",
        //         completed: false
        //     }
        // ]

        todos:[]
    };

    addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        this.setState({
            todos:[...this.state.todos, newTodo]
        })
    }


    deleteTodoItem  = id => {

        const filteredTodos = this.state.todos.filter(todo => {
            return todo.id !== id
        })

        this.setState({
            todos:filteredTodos
        })


        // this.setState({
        //     todos:[...this.state.todos.filter(todo => {
        //         return todo.id !== id
        //     })]
        // })
 
    }

    handleChange  = (id) => {
        //this is not the neatest, but it works
    //    const changedTodos = this.state.todos.map(todo => {
    //        if (todo.id === id){
    //            todo.completed = !todo.completed
    //        }
    //        return todo
    //    })
    //    this.setState({
    //        todo: changedTodos
    //    })

       /*
       //in one step
       this.setState({
           todos: this.state.todos.map(todo => {
            if (todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
           })
       })
*/
    

       //use prevState param - don't rely on this.state
       //this does not work with strict mode
    //    this.setState(prevState =>({
    //     todos: prevState.todos.map(todo => {
    //      if (todo.id === id){
    //          todo.completed = !todo.completed
    //      }
    //      return todo
    //     })
    // }))

    this.setState(prevState => ({
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
              return {
                  ...todo, completed: !todo.completed
              }
          }
          return todo
        })
      }))

    }

    setUpdate = (newTitle, id) => {
        this.setState(prevState =>{
            return {
                todos: prevState.todos.map(todo => {
                    if (todo.id === id) {
                        todo.title = newTitle
                    }
                    return todo
                })
            }})
    }

    render() {
        return (
         <div className="container">
            <div className="inner">
             <Header/>
             <InputTodo addTodoProps = {this.addTodoItem}/>
             <TodosList 
             todos = {this.state.todos}
             deleteTodoProps = {this.deleteTodoItem}
             handleChangeProps = {this.handleChange} 
             setUpdateProps = {this.setUpdate}          
             />
             </div>
         </div>
        );
    }
}
export default TodoContainer

