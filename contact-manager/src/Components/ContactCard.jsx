import React from "react"
import { FaUserCircle } from 'react-icons/fa';
import { BsTrashFill } from "react-icons/bs";

const ContactCard = (props) =>{
    const{id,name,email} = props.contact
    return(
    <React.Fragment>
     <div className="item">
           <div className="content">
               <div className="mx-2">
               <FaUserCircle /> {name}
               </div>
               <div className="ms-5">
                   {email}
               </div>
           </div>
           <BsTrashFill/ >
           <hr/>
       </div>
    </React.Fragment> 
    );
}

export default ContactCard;