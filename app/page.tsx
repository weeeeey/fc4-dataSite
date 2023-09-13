'use client';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const HomePage = () => {
    return (
        <div className="flex flex-col items-start">
            <button onClick={() => signIn()}> asd</button>
            <button onClick={() => signOut()}> qqq</button>
        </div>
    );
};

export default HomePage;
