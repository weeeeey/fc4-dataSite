import axios from 'axios';

const getMatchType = async (): Promise<TypeMatchtype> => {
    const res = await axios(
        'https://static.api.nexon.co.kr/fifaonline4/latest/matchtype.json',
        {
            headers: {
                Authorization: process.env.NEXON_API_KEY,
            },
        }
    );
    return res.data;
};

export default getMatchType;
