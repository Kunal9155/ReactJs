import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

const Booklist = () => {
  return (
    <React.Fragment>
      <h1 className="heading">
          <center>
            <b> Welcome To Library </b><span><i>By KunaL</i></span>
          </center>
      </h1>
    <section className="booklist">
    <Books />
        <Books />
        <Books />
        <Books /> 
        <Books />
        <Books />
        <Books />
        <Books />
    </section>
    </React.Fragment>
  );
};

const Books = () => {
  return (
    <div>
      <Image />
      <Title />
      <Author />
 
    </div>
  );
};

const Image = () => {
  return (
    <div>
      <img className="image"
        src="https://images-na.ssl-images-amazon.com/images/I/51HczPfTpzL._SX325_BO1,204,203,200_.jpg"
        alt="imageofbook"
      />
    </div>
  );
};

const Title = () => {
  return <h1 className="title">The Ruby in the Smoke</h1>;
};

const Author = () => {
  return(
    <a className="author" href="">Philip Pullman (Author)</a>
  )
  
};

export default Booklist;
