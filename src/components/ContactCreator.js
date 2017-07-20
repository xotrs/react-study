import React from 'react';

class ContactCreator extends React.Component {
    constructor(props){
            super(props);
            this.state = {
                contactData: {
                    name: "",
                    phone: ""
                }
            };
        }
    render(){
        return (
            <div>
                <p>
                    <input type="text" name="name" placeholder="name" value={this.state.name}/>
                    <input type="text" name="phone" placeholder="phone" value={this.state.phone}/>
                    <button>
                    Insert
                    </button>
                </p>
            </div>
        );
    }
}

export default ContactCreator;