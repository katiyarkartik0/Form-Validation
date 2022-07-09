import "./App.css"
import React, { useState } from "react";
const urlRegex = /jj/
function Form() {
  let [loginId, setLoginId] = useState("");
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [timezone, setTimezone] = useState("");
  let [homepage, setHomePage] = useState("");
  let [aboutMe, setAboutMe] = useState("");
  let [checkbox, setCheckbox] = useState(false);

  let userInputs = [
    ["loginId", loginId],
    ["email",email],
    ["name",name],
    ["timezone",timezone],
    ["homepage",homepage],
    ["aboutMe",aboutMe]
  ]

  let handleSubmit = (e,userInputs) =>{
    inputValidation(e,userInputs);
    isCheckboxChecked(e);
  }
  let isCheckboxChecked = (e)=>{
    if(checkbox===false){
        e.preventDefault();
        alert(`please check checkbox`);
    }
  }
  let inputValidation= (e,userInputs) => {
    userInputs.forEach((item)=>{
        if(item[1].trim().length===0){
            e.preventDefault();
            alert(`${item[0]} cannot be left empty`)
            
        }
        else if(item[0]==="aboutMe" && item[1].trim().length<50){
            e.preventDefault();
            alert(`enter at least 50 characters in About Me`)
        }
        
    })
  }

  //console.log(userInputs);
  return (
    <>
      <div className="container">
        <div className="card">
          <form className="myform">
            Login ID: <input type="text" id="login" name="LOGINID" value={loginId}
              onChange={(e) => {
                setLoginId(e.target.value);
              }}
            /> <br /><br />
            Email: <input type="email" id="email" name="Email" value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }} /> <br /><br />
            Name: <input type="text" id="name" name="Name" value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}  /> <br /><br />
            Timezone: <input type="text" id="timez" name="Timezone" value={timezone}
              onChange={(e) => {
                setTimezone(e.target.value);
              }}  /> <br /><br />
            HomePage: <input type="url" id="home" name="HomePage"value={homepage}
              onChange={(e) => {
                setHomePage(e.target.value);
              }}  /> <br /><br />
            About me: <textarea type="text" id="desc" name="About me" className="Aboutme" data-kind="descriptionBox" value={aboutMe}
              onChange={(e) => {
                setAboutMe(e.target.value);
              }}></textarea> <br /><br />
            <div>
              <input type="checkbox" className="check" data-kind="notificationCheck" checked={checkbox} 
              onChange={(e)=>{
                setCheckbox(e.target.checked)
              }}
              /> <b>recieve notification of comments to your Blog or Album</b>
              <p>..You will be sent an email when someone postson your blog</p>
            </div>
            <div className="submit">
              <h2 className="com">your password will be mailed to you</h2>
              <button  type="click" className="butt" id="clicked" data-kind="submitButton" onClick={(e)=>{
                console.log("ffds")
                handleSubmit(e,userInputs)
              }} >GO</button>
            </div>
          </form>
        </div>
      </div>
    </>
    
  );
  
}
export default Form;
