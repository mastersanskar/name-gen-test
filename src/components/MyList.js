import React, { Component } from 'react'
import './MyList.css'
const adjective = ['state-of-the-art', 'retarded', 'tangy', 'so-and-so', 'existential']
const noun = ['creep', 'warlord', 'assassin', 'invoker', 'turtle']

class MyList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            adjective: '',
            noun: '',
            toHide: true
        }
    }

    changeName = () => {
        this.setState({
            adjective: adjective[Math.floor(Math.random() * adjective.length)],
            noun: noun[Math.floor(Math.random() * noun.length)],
            toHide: false
        })
    }

    changeNoun = () => {
        this.setState({
            noun: noun[Math.floor(Math.random() * noun.length)]
        })
    }

    changeAdje = () => {
        this.setState({
            adjective: adjective[Math.floor(Math.random() * adjective.length)]
        })
    }

    render() {
        return (
            <div>
                <h1>random name generater</h1>
                <button className='bigButton' onClick={() => this.changeName()}>generate!</button>
                <br />
                <span className='classAdje'>{this.state.adjective}</span>
                <button className={this.state.toHide?'hide':''} onClick={() => this.changeAdje()}>o</button>
                <span className='classNoun'>{this.state.noun}</span>
                <button className={this.state.toHide?'hide':''} onClick={() => this.changeNoun()}>o</button>
            </div>
        )
    }
}

export default MyList