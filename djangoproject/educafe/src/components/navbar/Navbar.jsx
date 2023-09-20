import React, {useState} from 'react'

import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.png'

const Menu = () =>(
  <>
    <p><a href='#home'>Home</a></p>
<p><a href='#post'>What is GPT3</a></p>
<p><a href='#teach'>OpenAI</a></p>
<p><a href='#teacher'>Case studies</a></p>
<p><a href='#blog'>Library</a></p>
  </>

)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='gpt__navbar'>
<div className='gpt3__navbar-links'>
     <div className='gpt3__navbar-links-logo'>
<img src={logo} alt="logo" />

     </div>
     <div className='gpt3__navbar-links_container'>
<Menu/>
     </div>
</div>
<div className='gpt3__navbar-sign'>
<p>Sign in</p>
<button type="button">Sighn up</button>
</div>
<div className='gpt3__navbar-menu'>
{toggleMenu
? <RiCloseLine size={27} color='#fff' onClick={()=>setToggleMenu(false)}/>:
<RiMenu3Line size={27} color='#fff' onClick={()=>setToggleMenu(true)}/>
}
{toggleMenu && (<div className='gpt3__navbar-menu_container scale-up-center'>
  <div className='gpt3__navbar-menu_container-links'>
<Menu/>
<div className='gpt3__navbar-menu_container-sign'>
<p>Sign in</p>
<button type="button">Sighn up</button>
</div>
  </div>
</div>)}
</div>
    </div>
  )
}

export default Navbar