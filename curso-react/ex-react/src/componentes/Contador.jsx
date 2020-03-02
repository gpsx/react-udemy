import React, { Component } from 'react'

export default class Contador extends Component {
    // Solução 1
    // constructor(props) {
    //     super(props)
    //     this.maisUm = this.maisUm.bind(this)
    // }

    // Solução 2
    // <button onClick={() => this.maisUm()}>Inc</button>

    // Solução 3
    maisUm = () => {
        // this.state.numero++
        this.setState({ numero: this.state.numero + 1 })
    }

    menosUm = () => {
        // this.state.numero++
        this.setState({ numero: this.state.numero  - 1})
    }

    state = {
        numero: 0
    }

    render () {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.maisUm}>Dec</button>
            </div>
        )
    }
}