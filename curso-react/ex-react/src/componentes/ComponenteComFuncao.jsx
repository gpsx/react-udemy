import React from 'react'

const aprovados = ['h','k','j','h','g','f','d','s','a']

export default props => {
    const gerarItens = itens=> {
        return itens.map(item => <li>{item}</li>)
    }
    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}