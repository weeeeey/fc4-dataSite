import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import axios from 'axios';
import Pinview from '@/components/inview';
import qs from 'query-string';

interface IP {
    seasonId: number;
    className: string;
    seasonImg: string;
}

const HomePage = async () => {
    const res = await axios(
        'https://static.api.nexon.co.kr/fifaonline4/latest/seasonid.json'
    );

    return (
        <div className="flex flex-col items-start space-y-2">
            {res.data.map((r: IP) => (
                <Pinview key={r.seasonId} r={r} />
            ))}
        </div>
    );
};

export default HomePage;
