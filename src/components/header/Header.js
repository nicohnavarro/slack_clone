import { Avatar } from '@material-ui/core';
import React from 'react';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import { useStateValue } from '../../StateProvider';

import './Header.css';
const Header = () => {

    const [{ user }] = useStateValue();

    return (
        <div className='header'>
            <div className='header__left'>
                <Avatar className='header__avatar' src={user?.photoURL} alt={user?.displayName} />
                <AccessTimeIcon />
            </div>
            <div className='header__search'>
            <SearchIcon />
            <input placeholder='Search something ...'></input>
            </div>
            <div className='header__right'>
            <HelpOutlineIcon/>
            </div>
        </div>
    )
}

export default Header
