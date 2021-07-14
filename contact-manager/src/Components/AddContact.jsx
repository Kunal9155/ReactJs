import React from "react"

const AddContact =() => {
    return(
    <React.Fragment>
        <section className="bg-info p-5  mb-4 text-center ">
        <div className="container">
        <label className="label " >Name:</label><br/>
        <input type="text" className="m-2 w-50 p-3 ms-2 text-center" name="name" placeholder="Enter Name" ></input>
        </div>
        <div className="mt-3 container">
        <label className="label" >E-mail:</label><br/>
        <input type="text" className="m-2 w-50 p-3 ms-2 text-center" name="email" placeholder="Enter Email" ></input>
        </div>
        </section>
    </React.Fragment>

    );
}

export default AddContact;