import React from 'react'
import './card.css'
import Tral from '../../Tral'
// import SongCard from '../songCard/SongCard'
// import cheb from '../../assets/cheb.jpeg'

// import Navbar from '../navbar/Navbar'

// const Card = ({image, name, location, date, topic,number}) => {
 const Card = ({name, email}) => {
  // console.log(Tral)
  // const name = formData.name;
  // const email = formData.email;

  
  return (
    <>
    <div className= 'section__padding'>
       {/* <Navbar /> */}
    </div>
    <h1></h1>

        <div className='card'>
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 6, 7, 8, 9, 1024, 25,1, 2, 3, 4, 15, 16, 17, 18, 19, 20, 2, 24, 25].map((song) => ( */}
          {/* <SongCard h1 = {name} /> */}
      
        {/* <img src={image} /> */}
            <h1>With proffessor {name}</h1>
            <h3>Location: {email}</h3>
            {/* <h3>Date: {date}</h3> */}
    {/* <h1>{name}</h1> */}
            {/* <h3>Topic : {topic}</h3> */}

            {/* <h4>limit: {number}</h4> */}

      </div>
        
            
        </div>
        </>
    
  )
}

export default Card