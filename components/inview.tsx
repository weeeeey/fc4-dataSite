'use client';
import Image from 'next/image';
import React from 'react';
import { InView } from 'react-intersection-observer';

interface P {
    r: {
        seasonId: number;
        className: string;
        seasonImg: string;
    };
}
const Pinview = ({ r }: P) => {
    return (
        <InView
            as="div"
            className="relative w-12 h-12 "
            key={r.seasonId}
            onChange={(inv) => console.log(inv, r.className)}
        >
            <Image alt="season image" src={r.seasonImg} fill />
        </InView>
    );
};

export default Pinview;
