import React from 'react';
import ContactInfo from './ContactInfo'
import ContactCreator from './ContactCreator'
import ContactRemover from './ContactRemover'
import ContactEditor from './ContactEditor'
import update from 'react-addons-update'

class Contacts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contactData: [
                {name: "Abet", phone: "010-0000-0001"},
                {name: "Betty", phone: "010-0000-0002"},
                {name: "Charlie", phone: "010-0000-0003"},
                {name: "David", phone: "010-0000-0004"}
            ]
        };
    }
    _insertContact(name, phone){
    let newState = update(this.state, {
        contactData: {
            $push: [{"name": name, "phone": phone}]
        }
    });
        this.setState(newState);
    }

    _removeContact(){
        if(this.state.selectedKey == -1){
            console.log("contact not selected");
            return;
        }
        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    $splice: [[this.state.selectedKey, 1]]
                }
            ),
            selectedKey: -1
        });
    }

    _editContact(name, phone){
        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    [this.state.selectedKey]: {
                        name: { $set: name },
                        phone: { $set: phone }
                    }
                }
            ),
            selected: {
                name: name,
                phone: phone
            }
        });

    }



    _onSelect(key){
        //이미 선택 되어있는 키를 한번 더 누르면 Cancel
        if(key == this.state.selectedKey){
            console.log("key select cancelled");
            this.setState({
                selectedKey: -1
            });
            return;
        }
        //키를 누르면 setState
        this.setState({
            selectedKey: key,
            selected: this.state.contactData[key]
        });
        console.log(key + "is selected");
    }

    _isSelected(key){
        if(this.state.selectedKey == key){
            return true;
        }else{
            return false;
        }
    }
 
    render(){
        return(
            <div>
                <h1>Contacts</h1>
                <ul>
                    {this.state.contactData.map((contact, i) =>{
                        return (<ContactInfo name={contact.name} 
                                             phone={contact.phone} 
                                             key={i} 
                                             contactKey={i} 
                                             isSelected={this._isSelected.bind(this)(i)} 
                                             onSelect={this._onSelect.bind(this)} />);
                    })}
                </ul>
                <ContactCreator onInsert={this._insertContact.bind(this)}/>
                <ContactRemover onRemove={this._removeContact.bind(this)}/>
                <ContactEditor onEdit={this._editContact.bind(this)}
                           isSelected={(this.state.selectedKey !=-1)}
                           contact={this.state.selected}/>
            </div>
        );

    }
}

export default Contacts;
