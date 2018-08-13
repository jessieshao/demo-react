import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.states = {
            newTodo: 'test',
            todoList: [
                {id: 1, title: '第一个待办'}
            ]
        }
    }
    render(){
        let todos = this.states.todoList.map((item,index)=>{
            return <li>{item.title}</li>
        })

        return (
            <div className = "App">
                 <h1>我的待办</h1>
                 <div className="inputWrapper">
                    <input type="text" value={this.state.newTodo}/>
                 </div>
                 <ol>
                    {todos}
                 </ol>
            </div>
        )
    }
}