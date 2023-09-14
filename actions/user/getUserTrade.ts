import queryString from 'query-string';
import getUserInfo from './getUserInfo';
import axios from 'axios';

interface IGetUserTrade {
    nickname: string;
    tradetype: 'buy' | 'sell';
    offset?: number;
    limit?: number;
}
// https://api.nexon.co.kr/fifaonline4/v1.0/users/{accessid}/markets?tradetype={tradetype}&offset={offset}&limit={limit}

const getUserTrade = async ({
    nickname,
    tradetype,
    limit = 100,
    offset = 0,
}: IGetUserTrade): Promise<TypeUserTrade[] | null> => {
    const userInfo = await getUserInfo(nickname);

    if (!userInfo) {
        return null;
    }

    const originUrl = `https://api.nexon.co.kr/fifaonline4/v1.0/users/${userInfo.accessId}/markets`;
    const query = {
        tradetype,
        offset,
        limit,
    };
    const requestUrl = queryString.stringifyUrl({
        url: originUrl,
        query,
    });
    const res = await axios(requestUrl, {
        headers: {
            Authorization: process.env.NEXON_API_KEY,
        },
    });
    return res.data;
};

export default getUserTrade;
