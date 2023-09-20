// import React, { useState } from 'react';
// import './form.css';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';


// const Form = () => {
//   const [userType, setUserType] = useState('student');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useNavigate();

//   const handleRadioChange = (e) => {
//     setUserType(e.target.value);
//   };

//   const handleLogin = () => {
//     if (userType === 'student') {
//       // Implement student login logic here
//       history.push('/students'); // Redirect to the Students page
//     } else if (userType === 'professor') {
//       // Implement professor login logic here
//       history.push('/teach'); // Redirect to the Teach page
//     }
//   };



//   return (
//     // <div className='div'>
//     <div className='main'>
//       <h1 className='section__padding '>WELCOME TO EDUCAFE</h1>
//       <div className='submain'>
//         <h2 className='headerform'>Please fill the form below</h2>
//             <form action="/action_page.php" className="container">
//         <span>
//           <label  htmlFor='professor'>Are you a  </label>
//           <input
//             type="radio"
//             id="student"
//             value="student"
//             onChange={handleRadioChange}
//             checked={userType === 'student'}
//           />
//           <label htmlFor="student">Student</label>
//           <input
//             type="radio"
//             id="professor"
//             value="professor"
//             onChange={handleRadioChange}
//             checked={userType === 'professor'}
//           />
//           <label htmlFor="professor">Professor</label>
//         </span>
        
//         <label htmlFor="email"><b>Email</b></label>
//         <input
//           type="text"
//           placeholder="Enter Email"
//           name="email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label htmlFor="psw"><b>Password</b></label>
//         <input
//           type="password"
//           placeholder="Enter Password"
//           name="psw"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="button" onClick={handleLogin} className="btn">
//           <Link to ={useType === 'students'? './students' : './teach'}>Login </Link>
//         </button>
        
//       </form>
//       </div>
  
//     </div>
//   );
// };

// export default Form;


import React, { useState } from 'react';
import './form.css'

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Form = () => {
  const [userType, setUserType] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleRadioChange = (e) => {
    setUserType(e.target.value);
  };

  const handleLogin = () => {
    if (userType === 'student') {
      // Implement student login logic here
      history('/students'); // Redirect to the Students page using the history function
    } else if (userType === 'professor') {
      // Implement professor login logic here
      history('/teach'); // Redirect to the Teach page using the history function
    }
  };

  return (
    <div className='main'>
      <h1 className='section__padding '>WELCOME TO EDUCAFE</h1>
      <div className='submain'>
        <h2 className='headerform'>Please fill the form below</h2>
        <form action="/action_page.php" className="container">
          <span>
            <label  htmlFor='professor'>Are you a  </label>
            <input
              type="radio"
              id="student"
              value="student"
              onChange={handleRadioChange}
              checked={userType === 'student'}
            />
            <label htmlFor="student">Student</label>
            <input
              type="radio"
              id="professor"
              value="professor"
              onChange={handleRadioChange}
              checked={userType === 'professor'}
            />
            <label htmlFor="professor">Professor</label>
          </span>
        
          <label htmlFor="email"><b>Email</b></label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="psw"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
            <button type="button" className="btn" onClick={handleLogin}>
              <Link to={userType === 'student' ? '/students' : '/teach'}>
            </Link>
            </button>
          
        </form>
      </div>
    </div>
  );
};

export default Form;

