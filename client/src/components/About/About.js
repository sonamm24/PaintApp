


import React from "react";

export class About extends React.Component {

  render() {
    return (
    <div
      style={{
        display: "flex",
        padding: 0,
        margin: 0,
        paddingTop: "98px",
      }}
    >
      <div className="aboutdiv">
        <h1 className="heading">Welcome to Paint App!</h1>
        <br/>

        <b>
          <p className="leftalign">
          To create a painting, start by registering for an account.
          :
          </p><br/>
        </b>
        <div className="aboutpicandtext">
          <div className="aboutimage">
            <img
              alt="writing"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3hZZZD-ON1-d9D3pQUeG-zXkGa8XHvwPrZQ&usqp=CAU"
            />
          </div>
        
          <div className="Paragraph">
            <ul>
              <li>
              When you are registered, you will be redirected to the home page. 
              </li><br/>
              <li>Selected 'Create a Painting ' from the navigation bar to get started. This will take you to your very own painting canvas!</li><br/>
              <li>
              You can select colors from the drop down menu given below the canvas. As well, you can select any brush size you want.
              </li><br/>
              <li>
              Now you're ready to paint!
              </li><br/>
              <li>
              If you need to restart your painting, click the clear button to start fresh again.
              </li><br/>
              <li>
              Once you are finished your masterpiece, click the 'Download' button to save your painting to your computer.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
}
