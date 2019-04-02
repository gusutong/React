import React, { Component } from 'react'

export default class Dots extends Component {
    render() {
        return (
            <ul className="dots">
                {
                    this.props.imgs.map((item, index) => (
                        <li onClick={()=>{this.props.handleClick(index)}} key={index} className={
                            this.props.index === index ||
                                (index === 0 && this.props.index === this.props.imgs.length) ?
                                "active" : ""
                        }>{index + 1}
                        </li>
                    ))
                }
            </ul>
        )
    }
}
