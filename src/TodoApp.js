import React from 'react'
import TodoElement from './TodoElement';
import AddTodo from './AddTodo';


//export default classって何？
//そのclassがimportされるときにdefaultで呼ばれるってこと
export default class TodoApp extends React.Component {
    // コンストラクタ
    constructor() {
        super()
        this.state={
            todoList: [],
            value: "",
        }
    }

    // value変更関数
    // stateを更新するときは、setState関数を使うこと。直接変更はしてはいけない。
    // ※stateはImmutable(不変)であるべきとされている。関数型の考え方に近い。
    onChange(keyValue) {
        this.setState(keyValue);
    }

    // todoリスト追加関数
    add(todoElement) {
        this.setState({
          todoList: this.state.todoList.concat(todoElement),
          value: ""
        });
    }

    //必須関数 render関数
    //render関数はpureな関数であるべき
    //render関数内でstateを変更してはいけないということ
    //なぜかは、stateの変更が起こるとrender関数が呼ばれるため無限ループになる
   render() {
     const todoListNode = this.state.todoList.map(element => {
       return (
         <TodoElement
           key={element.id}
           element={element}
           {...this.state}
         />
       );
     });
     return (
       <div>
         <h1>TODO App</h1>
         <AddTodo
           {...this.state}
           onChange={this.onChange.bind(this)}
           add={this.add.bind(this)}
         />
         <ul>{todoListNode}</ul>
       </div>
     );
   }
}