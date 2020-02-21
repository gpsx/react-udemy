import React from 'react'
import { filhoComProps } from './utils.js'

export default (props) => 
    <div>
        { filhoComProps(props) }
        {/* { React.cloneElement(props.children,{ ...props}) } */}
        {/* { React.cloneElement(props.children,props) } */}
        {/* {React.cloneElement(props.children,{ sobrenome: props.sobrenome})} */}
        {/* {props.children} */}
    </div>