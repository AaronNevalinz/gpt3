import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import gpt3Logo from '../../assets/logo.svg'
import { useState } from 'react'

const Menu = ()=>(
    <>
        <p>Home</p>
        <p>What is GPT</p>
        <p>Open AI</p>
        <p>Case Studies</p>
        <p>Library</p>
    </>
)


const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    
    return ( 
        <div className='gpt3__navbar-container section__padding'>
            <div className='gpt3__navbar-groupA'>
                <img src={gpt3Logo} alt="logo" />
                <div className='gpt3__navbar-links'>
                    <Menu/>
                </div>
            </div>
            <div className='gpt3__navbar-buttons'>
                <p>Sign in</p>
                <button>Sign Up</button>
            </div>
            <div className="gpt3__navbar-menu__mobile-container">
                {
                    toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}
                    />
                    :<RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className='gpt3__navbar-menu-mobile scale-up-center'>
                        <Menu/>
                        <div className='gpt3__navbar__mobile-btn'>
                            <p>Sign in</p>
                            <button type='button'>Sign Up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default Navbar;