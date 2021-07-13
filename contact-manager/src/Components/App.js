import React from "react";
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"

const App =() =>{
    return(
        <React.Fragment>
            <Header/>
            <AddContact/>
            <ContactList/>
        </React.Fragment>
    );
}

export default App;