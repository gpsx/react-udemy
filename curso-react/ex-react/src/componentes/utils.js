import React from 'react'

export function filhoComProps(props) {
    React.Children.map(props.children, child => {
        return React.cloneElement(child ,{ ...props})
    })
}