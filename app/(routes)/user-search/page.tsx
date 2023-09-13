import axios from 'axios';
import React from 'react';
import qs from 'query-string';

const UserSearchPage = async () => {
    const url = 'https://api.nexon.co.kr/fifaonline4/v1.0/users';
    const query = {
        nickname: '위영진',
    };
    const URL = qs.stringifyUrl({
        url,
        query,
    });
    console.log(URL);

    const res = await axios(URL, {
        headers: {
            Authorization: process.env.NEXON_API_KEY,
        },
    });
    console.log(res.data);
    return <div>ㅁㄴㅇ</div>;
};

export default UserSearchPage;
