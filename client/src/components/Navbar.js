import React, { Component } from 'react';
import NavLink from './NavLink';
import uuid from 'uuid';
import './Navbar.css'

class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            leftLinks: [
                {   
                    title: 'HOME',
                    url: '/'
                },
                {   
                    title: 'VIDEOS',    
                    url: '/videos'
                },
                {   
                    title: 'NEWS',
                    url: '/news'
                },
                {   
                    title: 'SHOP',
                    url: '/shop'
                },
                {   
                    title: 'FIXTURES',
                    url: '/fixtures'
                },
                {   
                    title: 'PLAYERS',
                    url: '/players'
                }
            ],
            rightLinks: [
                {   
                    title: 'Search',
                    url: '/'
                },
                {   
                    title: 'Sign in',
                    url: '/'
                },
                {   
                    title: 'EN',
                    url: '/'
                }
            ]
        }
    }
    render() {
        const leftLinks = this.state.leftLinks.map((link) => 
            <NavLink key={uuid()} page={link.title} url={link.url}/>
        );

        const rightLinks = this.state.rightLinks.map((link) => 
            <NavLink key={uuid()} page={link.title} url={link.url}/>
        );

        return (
            <nav className="Navbar">
                <ul className="Navbar-left-elements">
                    <li> <img className="Navbar-logo" src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4e7.png" alt="logo"/> </li>
                    {leftLinks}    
                </ul>
                <ul className="Navbar-right-elements">
                    <img className="Navbar-search-icon" src="https://icon-library.net/images/white-search-icon-png/white-search-icon-png-19.jpg" alt="icon"/>
                    {rightLinks}
                </ul>
            </nav>
        );
    }
}

export default Navbar;