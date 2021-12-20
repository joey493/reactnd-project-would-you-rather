import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { LogOut } from '../redux/action/currentUser'
import { FiLogOut } from 'react-icons/fi'

import { MdMenu } from 'react-icons/md'
import { navData } from '../utils/_DATA'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const { user } = useSelector(({ currentUser }) => ({ user: currentUser ? currentUser : null }))
    const dispatch = useDispatch()
    useEffect(() => {
        window.addEventListener('resize', 
            () => { if(window.innerWidth > 810) setShow(false)}
        )
    }, [])

    const handleClick = () => setShow((prev) => setShow(!prev.show))
    
    return (
        <header className='shadow-nav-sh'>
            <div className="container flex justify-between items-center relative lg:py-0 py-4">
                <nav className={`gap-4 lg:items-center lg:flex ${show 
                    ? 'flex flex-col items-start absolute top-full left-0 w-full bg-main-color p-4 text-white' 
                    :'hidden'}`}>
                    {navData.map(({title, icon, path}) => (
                        <NavLink key={title} to={path} 
                        className={`custom-transition ${show ? 'flex hover:scale-110 items-center' :'main-nav'}`}
                        activeClassName={show ? 'translate-x-4': 'main-active-nav'}>
                            {icon}<span className='pl-4'>{title}</span>
                        </NavLink>
                    ))}
                </nav>
                <div className='lg:hidden hover:text-main-color cursor-pointer' onClick={handleClick}>
                    <MdMenu className='text-3xl'/>
                </div>
                {user &&
                    <div className="flex items-center gap-4">
                        <span >{user.name}</span>
                        <img className='avatar' src={user.avatarURL} alt={user.id} /> 
                        <FiLogOut className="w-6 h-6 cursor-pointer hover:text-main-color" 
                            onClick={() => dispatch(LogOut())}></FiLogOut>
                    </div>
                }
            </div>
        </header>
    )

}

export default Navbar
