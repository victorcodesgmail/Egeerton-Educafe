import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './students.css';

const Students = () => {
  const navigate = useNavigate(); // Initialize navigate

  const [isCameraPaused, setCameraPaused] = useState(false);
  const [cameraStream, setCameraStream] = useState(null);

  useEffect(() => {
    const initializeCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const cameraFeed = document.getElementById('cameraFeed');
        cameraFeed.srcObject = stream;
        setCameraStream(stream);

        cameraFeed.addEventListener('click', () => {
          toggleCameraPause();
        });
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    initializeCamera();
  }, []);

  const toggleCameraPause = () => {
    if (cameraStream) {
      const cameraFeed = document.getElementById('cameraFeed');
      if (isCameraPaused) {
        cameraFeed.play();
      } else {
        cameraFeed.pause();
      }
      setCameraPaused(!isCameraPaused);
    }
  };

  const handleLogin = () => {
    navigate('/page'); // Use navigate to change the route
  };

  return (
    <>
      <div>
        <div>
          <h1>HEY STUDENT, WELCOME TO EDU CAFE</h1>
          <h2>Kindly details below and we will get your profile</h2>
          
          <h1>Account Details</h1>
          <h3>USERNAME*</h3>
          <input type="text" placeholder="ENTER YOUR USERNAME" />
          <h3>Email address *</h3>
          <input type="email" placeholder="ENTER YOUR EMAIL" />
          <h3>password*</h3>
          <input type="password" placeholder="password" />
          <h3>Confirm password</h3>
          <input type="password" placeholder="confirm your password" />
        </div>

        <div>
          <h1>Profile Details</h1>
          <h3>profile photo</h3>
          <video className="video" id="cameraFeed" autoPlay onClick={toggleCameraPause}></video>
          <button type="button" onClick={toggleCameraPause}>
            <h2>{isCameraPaused ? 'smile' : 'capture'}</h2>
          </button>
          <h3>name</h3>
          <input type="text" placeholder="ENTER YOUR FULLNAME" />
          <h3>field of research</h3>
          <input type="text" placeholder="enter your field of research" />
          <h3>Biography</h3>
          <input type="text" placeholder="what do you want your students to know about" />
          <h3>profile photo</h3>
          <video className="video" id="cameraFeed" autoPlay></video>
          <h3>OR</h3>
          <input type="text" placeholder="copy and paste email address of your profile picture" />
          {/* Other form fields here */}
          
        </div>
        <div>
          <button type="button" onClick={handleLogin}>
            <Link to="/card">
              <h2>Log In</h2>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Students;
