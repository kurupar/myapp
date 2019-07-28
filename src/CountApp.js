import React from 'react'

//export default classって何？
//そのclassがimportされるときにdefaultで呼ばれるってこと
export default class CountApp extends React.Component {
    // コンストラクタ
    constructor() {
        super()
        this.state={
            count: 0,
        }
    }

    // カウント加算関数
    // stateを更新するときは、setState関数を使うこと。直接変更はしてはいけない。
    // ※stateはImmutable(不変)であるべきとされている。関数型の考え方に近い。
    plus() {
        this.setState({count: this.state.count + 1})
    }

    // カウント減算関数
    minus() {
        this.setState({count: this.state.count - 1})
    }

    //必須関数 render関数
    //render関数はpureな関数であるべき
    //render関数内でstateを変更してはいけないということ
    //なぜかは、stateの変更が起こるとrender関数が呼ばれるため無限ループになる
    render() {
        return(
            <div>
                <h1>カウンターApp</h1>
                <p>{this.state.count}</p>
                <div>
                    <button onClick={() => this.plus()}>+</button>
                    <button onClick={() => this.minus()}>-</button>
                </div>
            </div>
        )
    }
}