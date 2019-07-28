import React from 'react'

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
    onChange(e) {
        this.setState({value: e.target.value})
    }

    // todoリスト追加関数
    add() {
        this.setState({
            //pushは破壊的メソッドでは元のthis.state.todoListまで変更してしまう。
            //concatは非破壊的メソッドのため元のsate自体は変更されない（Reactの要件を満たしている)
            todoList: this.state.todoList.concat(this.state.value),
            value: "",
        })
    }

    //必須関数 render関数
    //render関数はpureな関数であるべき
    //render関数内でstateを変更してはいけないということ
    //なぜかは、stateの変更が起こるとrender関数が呼ばれるため無限ループになる
    render() {
//        console.log(this.state.todoList)
        const todoListNode = this.state.todoList.map( (todo,index) => {
            return <li key={index}>{todo}</li>
        })

        return(
            <div>
                <h1>Todo App</h1>
                <div>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={e => this.onChange(e)}
                    />    
                </div>
                <button onClick={() => this.add()}>追加</button>
                <ul>
                    {todoListNode}
                </ul>
            </div>
        )
    }
}