import React from "react";
import ContactCard from "./ContactCard"
const ContactList =(props) =>{

const renderContactList = props.contacts.map((contact) => {
   return(
    <ContactCard contact={contact}/>      
   );
});



    return(
        <div className="">
        <h2> {renderContactList}</h2>
        
        </div>
    );
}

export default ContactList;
