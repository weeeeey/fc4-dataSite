import axios from 'axios';

const getSeasonInfo = async () => {
    const res = await axios(
        'https://static.api.nexon.co.kr/fifaonline4/latest/seasonid.json',
        {
            headers: {
                Authorization: process.env.NEXON_API_KEY,
            },
        }
    );
    return res.data;
};

export default getSeasonInfo;
