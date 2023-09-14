import axios from 'axios';

const getMatchInfo = async (matchid: string): Promise<TypeMatch> => {
    const res = await axios(
        `https://api.nexon.co.kr/fifaonline4/v1.0/matches/${matchid}`,
        {
            headers: {
                Authorization: process.env.NEXON_API_KEY,
            },
        }
    );
    return res.data;
};

export default getMatchInfo;
