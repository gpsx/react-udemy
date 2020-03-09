import React, { useState, useEffect } from 'react'

export default props => {
    const [contador, setContador] = useState(100)
    const [parOuImpar, setParOuImpar] = useState('Par')

    // eslint-disable-next-line
    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('Par') : setParOuImpar('Impar')
    })
    return (
        <div>
            <h1>{contador}</h1>
            <h1>{parOuImpar}</h1>
            <button onClick={() => setContador(contador +1)}>Incremento</button>
        </div>
    )
}