import React from 'react'

//export default classって何？
//そのclassがimportされるときにdefaultで呼ばれるってこと
export default class HelloWorld extends React.Component {
    render() {

        return(
            <div>
                HelloWorld
            </div>
        )
    }
}