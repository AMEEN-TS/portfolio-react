import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <>
            <header className="header">
                <div className='container d_flex'>
                    <div className="logo">
                        <img src=" " alt=" " />
                    </div>
                    <div className='navlink'>
                        <ul className='link f-flex uppercase'>
                            <li><a href='#home'>home</a></li>
                            <li><a href='#features'>features</a></li>
                            <li><a href='#portfolio'>portfolio</a></li>
                            <li><a href='#resume'>resume</a></li>
                            <li><a href='#client'>client</a></li>
                            <li><a href='#blog'>blog</a></li>
                            <li><a href='#contact'>contact</a></li>
                            <li><button className='home-btn'>BUY NOW</button></li>
                        </ul>

                        <button className='toggle'>
                            <li className='fas fa-times'></li>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
