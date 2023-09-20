import React, {useState} from 'react'
import './teach.css'
import {Link} from 'react-router-dom'
import Card from '../card/Card'
import Tral from '../../Tral'
const Teach = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    name: '',
    fieldofresearch: '',
    biography: '',
    profilepicture: '',
  });

  const [showTral, setShowTral] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here if needed
    // Store the form data in a file or send it to a server
    // For simplicity, let's just log it for now
    console.log(formData);

    // Show the <Tral> component
    setShowTral(true);
  };

  return (
    <>
      <div id="teacher">
        {/* ... Your existing code ... */}
        <div >
          <a href='#home'><h4>back home</h4></a>
      <h1>HI PROFFESSOR, WELCOME TO EDUCAFE</h1>
             <h5>Just fill the details below and we will get your profile</h5> 
      </div>

      <div>
           <h2>Account Details</h2>
          <h3>USERNAME*</h3>
          <input type = "text" placeholder='ENTER YOUR USERNAME' value={formData.username} onChange = {(e) => setFormData({...formData, username : e.target.value})}></input>
          <h3>Email address *</h3>
          <input type="email" placeholder = "ENTER YOUR EMAIL" value={formData.email} onChange = {(e) => setFormData({...formData, email : e.target.value})}/>
           <h3>password*</h3>
          <input type = "text" placeholder = "password" value={formData.password} onChange = {(e) => setFormData({...formData, password : e.target.value})}/>
           <h3>Confirm password</h3>
           <input type='text' placeholder = "confirm your password"  value={formData.confirmpassword} onChange = {(e) => setFormData({...formData, confirmpassword : e.target.value})}/>
      </div>
  
     <div>
           <h1>Profile Details</h1>
           <h3>name</h3>
           <input type="text" placeholder='ENTER YOUR FULLNAME' value={formData.name} onChange = {(e) => setFormData({...formData, name : e.target.value})}/>
          <h3>field of research</h3>
         <input type = "text" placeholder='enter your field of research' value={formData.fieldofresearch} onChange = {(e) => setFormData({...formData, fieldofresearch : e.target.value})}/>
          <h3>Biography</h3>
          <input type = "text" placeholder='what do you want yur students to know about' value={formData.biography} onChange = {(e) => setFormData({...formData, biography : e.target.value})}/>
           <h3>profile photo</h3>
           {/* <video></video> */}
            <button>Capture</button>
            <h3>OR</h3>
            <input type="text" placeholder = "copy and paste email address of your profile picture"  value={formData.profilepicture} onChange = {(e) => setFormData({...formData, profilepicture : e.target.value})}/>
        <button className="button" type="button" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button">Create your profile</button>
        <Link to="/students/card">Login as a Student</Link>

        {showTral && <Tral data={formData} />}
      </div>
      </div>
    </>
  )
}
export default Teach


/* // const Teach = () => { */
/* //  const [formData, setFormData] = useState({ */
/* //       username:'',
//       email:'',
//       password: '',
//       confirmpassword: '',
//       name: '',
//       fieldofresearch: '',
//       biography:'',
//       profilepicture:'',

//     });

//     const handleSubmit = (e) => { */
/* //       e.preventDefault(); // Prevent the default form submission behavior
    
//       // Perform form validation here if needed
    
//       // Store the form data in a file or send it to a server
//       // For simplicity, let's just log it for now
//       console.log(formData);
//     };

//   return (
//     <>
   
//     <div id = "teacher">
//         <div >
//             <a href='#home'><h4>back home</h4></a>
//         <h1>HI PROFFESSOR, WELCOME TO EDUCAFE</h1>
//         <h5>Just fill the details below and we will get your profile</h5> 
//         </div>

//         <div>
//             <h2>Account Details</h2>
//             <h3>USERNAME*</h3>
//             <input type = "text" placeholder='ENTER YOUR USERNAME' value={formData.username} onChange = {(e) => setFormData({...formData, username : e.target.value})}></input>
//             <h3>Email address *</h3>
//             <input type="email" placeholder = "ENTER YOUR EMAIL" value={formData.email} onChange = {(e) => setFormData({...formData, email : e.target.value})}/>
//             <h3>password*</h3>
//             <input type = "text" placeholder = "password" value={formData.password} onChange = {(e) => setFormData({...formData, password : e.target.value})}/>
//             <h3>Confirm password</h3>
//             <input type='text' placeholder = "confirm your password"  value={formData.confirmpassword} onChange = {(e) => setFormData({...formData, confirmpassword : e.target.value})}/>
//         </div>
        

//         <div>
//             <h1>Profile Details</h1>
//             <h3>name</h3>
//             <input type="text" placeholder='ENTER YOUR FULLNAME' value={formData.name} onChange = {(e) => setFormData({...formData, name : e.target.value})}/>
//             <h3>field of research</h3>
//             <input type = "text" placeholder='enter your field of research' value={formData.fieldofresearch} onChange = {(e) => setFormData({...formData, fieldofresearch : e.target.value})}/>
//             <h3>Biography</h3>
//             <input type = "text" placeholder='what do you want yur students to know about' value={formData.biography} onChange = {(e) => setFormData({...formData, biography : e.target.value})}/>
//             <h3>profile photo</h3>
//             {/* <video></video> */
/* //             <button>Capture</button> */ //             <h3>OR</h3>
//             <input type="text" placeholder = "copy and paste email address of your profile picture"  value={formData.profilepicture} onChange = {(e) => setFormData({...formData, profilepicture : e.target.value})}/>
//             <button className = "button" type='button'  onClick = {handleSubmit}>Submt</button>
//             <button type='button' >Create your profile</button> 
//             <Link to="/students/card">Login as a Student</Link> 

//             <Tral  data = {formData}/>
          
//         </div> */
       

//     </div> */}
//     </>
//   )
// } */}
