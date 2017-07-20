import React from 'react';
import Header from './Header';
import Content from './Content';
import Contacts from './Contacts';
import ContactCreator from './ContactCreator';

class App extends React.Component {
    render(){
        return (
            <div>
                <Contacts />
                <ContactCreator />
            </div>
        );
    }
}


export default App;
