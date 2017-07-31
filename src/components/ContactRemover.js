import React, { Component } from 'react'

class ContactRemover extends Component {
    handleClick() {
        this.props.onRemove();
    }
    render () {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>
                    Remove selected Contact
                </button>
            </div>
        )
    }
}
export default ContactRemover