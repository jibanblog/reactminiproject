import React from  'react';
import ReactDOM from 'react-dom';
import "./index.css"

const fname = 'Jiban';
const lname = 'Debashis;'
const now = new Date();
const img1 = './dhaulijk.jpg';
const img2 = './konark-puri.jpg';
const img3 = './chilika_lake.jpg';
const img4 = './lord_jagannath.jpg';
const links = 'https://jibanblog.github.io/rainbow.github.io/index.html';


 let currDate = new Date();
 let currTime = currDate.getHours();
 let message='';
 const cssStyle= {};

 if(currTime >= 1 && currTime < 12){
   message='Good Morning';
   cssStyle.color="green";
 }else if(currTime >= 12 && currTime < 18){
   message='Good Afternoon';
   cssStyle.color="yellow";
}else if(currTime >= 18 && currTime < 21){
  message='Good Evening';
  cssStyle.color="maroon";
}else{
  message='Good Night';
  cssStyle.color="navy";
};


ReactDOM.render(
  <>
  <h1 className="heading"> {`Hello, My name is ${fname} ${lname}`} </h1>
  <p style={{color: 'green', textAlign: 'center'}}> {`Today's Date is ${now.toLocaleDateString()}`} </p>
  <p style={{color:'green', textAlign: 'center', marginBottom:'20px'}}> {`Current Time is ${now.toLocaleTimeString()} `} </p> 
  <h2 contentEditable="true" style={{color: 'navy', textAlign: 'center', marginBottom:'20px'}}> Hello World </h2>
  <a href={links} target="_blank" rel="noopener noreferrer" >
  <img src="./orisa2.jpg" alt="odishaImage" height="200px" width="400px" />
  </a>
  <br></br>
  <div className="img_div">
  <img src={img1} alt="Dhauli" height="200px" width="200px" />
  <img src={img2} alt="Konark" height="200px" width="200px" />
  <img src={img3} alt="Chillika Lake" height="200px" width="200px" />
  <img src={img4} alt="Lord Jagannath" height="200px" width="200px" />
  </div>
   
   <div id="main">
     <div class="greet">
       <h2> 
       Hello,<span style={cssStyle}> {message} </span> 
       </h2>
     </div>
   </div>
  </>,
  document.getElementById("root"));
