import React, { Component } from 'react'

export default class Grid extends Component {

    toClass(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        if(cols[0]) classes += ` uk-child-width-${cols[0]}` 
        if(cols[1]) classes += ` uk-child-width-${cols[1]}@s`
        if(cols[2]) classes += ` uk-child-width-${cols[2]}@m`
        if(cols[3]) classes += ` uk-child-width-${cols[3]}@l`
        if(cols[4]) classes += ` uk-child-width-${cols[4]}@xl`

        return classes 
    }

    render() {
        const gridSizes = this.toClass(this.props.cols || '1-1')
        return (
            <div className={gridSizes} uk-grid> 
                {this.props.children}
            </div> 
        )
    }
}