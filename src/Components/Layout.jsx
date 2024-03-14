// Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/assets/wood_grain_1.png')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-80 z-10"></div>
            <div className="relative z-20 px-4 py-2 text-white">
                <div className="flex items-center">

                    <img src="/assets/MalloryLogo.png" alt="mallory logo" className="h-12 w-12" />
                    <div className="ml-2">
                        <p>
                            Mallory
                        </p>
                        <p>
                            Woodworking
                        </p>
                    </div>
                </div>
                <nav className="my-2">
                    <ul className="flex items-center gap-x-2 justify-around w-full">
                        <li><a href="/">About</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
                <main className="main-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
