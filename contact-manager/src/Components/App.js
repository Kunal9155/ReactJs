import React from "react";
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"

const contacts = [
    {
        id:"1",
        name: "kunal",
        email: "kunal@gmail.com"
    },
    {
        id:"1",
        name: "khushi",
        email: "khushi@gmail.com"
    }

];
const App =() =>{
    return(
     <div>
            <Header/>
            <AddContact/>
            <ContactList contacts={contacts}/>
     </div>
    );
}

export default App;