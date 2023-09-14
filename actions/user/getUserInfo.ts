import axios from 'axios';
import queryString from 'query-string';

const getUserInfo = async (nickname: string): Promise<TypeUserInfo | null> => {
    const url = 'https://api.nexon.co.kr/fifaonline4/v1.0/users';
    const query = {
        nickname,
    };
    const URL = queryString.stringifyUrl({
        url,
        query,
    });

    const res = await axios(URL, {
        headers: {
            Authorization: process.env.NEXON_API_KEY,
        },
    });
    return res.data;
};

export default getUserInfo;
