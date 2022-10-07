import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { RiAccountCircleLine } from 'react-icons/ri';
import { MdOutlineFiberNew } from 'react-icons/md';
import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { RiCreativeCommonsSaLine } from 'react-icons/ri';
import './header.css';

const Header = () => {
    return (
        <div className='m_container'>
            <nav className='container header_container'>
                <a href='/'>E|cOm<RiCreativeCommonsSaLine className='c_icon' /></a>

                <div className="list_items">
                    <Link to="/">
                        <p className='item'><AiOutlineHome className='i_icom' /> Home</p>
                    </Link>
                    <Link to="/signup">
                        <p className='item'><RiAccountCircleLine className='i_icom' /> Account</p>
                    </Link>
                    <Link to="/new">
                        <p className='item'>New Arrivals<MdOutlineFiberNew className='n_icon' /></p>
                    </Link>
                    <Link to="/cart">
                        <p className='item'><BsCart3 /> Cart</p>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header;
