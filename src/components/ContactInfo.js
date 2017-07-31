import React from 'react';
import ContactCreator from './ContactCreator';


class ContactInfo extends React.Component {
    handleClick(){
        this.props.onSelect(this.props.contactKey);
    }

    shouldComponentUpdate(nextProps, nextState){
    	return (JSON.stringify(nextProps) != JSON.stringify(this.props));	
    } 

    render() {
        let getStyle = isSelect => {
            if(!isSelect) return;

            let style = {
                fontWeight: 'bold',
                backgroundColor: '#4efcd8'
            };

            return style;
        };
        return(
            <li style={getStyle(this.props.isSelected)} onClick={this.handleClick.bind(this)}> {this.props.name} {this.props.phone}</li>
        );
    }
}

export default ContactInfo;