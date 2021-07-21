import React from "react"
import { FaUserCircle } from 'react-icons/fa';
import { BsTrashFill } from "react-icons/bs";

const ContactCard = (props) =>{
    const{id,name,email} = props.contact
    return(
    <React.Fragment>
      <div className="container-fluid">
          <div className="row">
              <div className="col-lg-11">
              <div className="item">
           <div className="content ms-4">
               <div className="mx-2 ">
               <FaUserCircle /> {name}
               </div>
               <div className="ms-5 mb-2">
                   {email}
               </div>
           </div>
       </div>
              </div>
              <div className="col-lg-1 text-danger text-center mb-2">
              |<BsTrashFill/>|
              </div> <hr/>
          </div>
      </div>
    </React.Fragment> 
    );
}

export default ContactCard;







