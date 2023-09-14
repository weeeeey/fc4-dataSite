import queryString from 'query-string';
import getUserInfo from '../user/getUserInfo';
import axios from 'axios';

interface IGetUserMatchIds {
    nickname: string;
    matchtype: number;
    offset?: number;
    limit?: number;
}
const getUserMatchIds = async ({
    matchtype,
    nickname,
    limit = 10,
    offset = 0,
}: IGetUserMatchIds): Promise<TypeUserMatchId[] | null> => {
    const accessid = await getUserInfo(nickname).then((res) => res?.accessId);
    if (!accessid) {
        return null;
    }
    const originUrl = `https://api.nexon.co.kr/fifaonline4/v1.0/users/${accessid}/matches`;
    const query = {
        accessid,
        matchtype,
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

export default getUserMatchIds;
