import React from 'react'

export default function Header () {
    return (
        <header className="header w-screen mb-16 flex items-center justify-center">
            <div className="header-container w-full max-w-[400px] flex items-center justify-center px-3">
                <div className="header-logo flex mr-auto">
                    <svg width="104" height="42" viewBox="0 0 104 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.2615 17.0563L2 41H102L62.0707 1L36.9823 23.8169L43.6961 33.1127L38.7491 35.3662L24.2615 17.0563Z" fill="black" stroke="#f7ad30"/>
                    </svg>
                </div>
                <div className="header-logo_title"><h1 className="font-semibold text-3xl text-amber-500">DreamTourForYou</h1></div>
            </div>
        </header>
    )
}