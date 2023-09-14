import axios from 'axios';

const getTierName = async (divisionId: number) => {
    const result = await axios(
        'https://static.api.nexon.co.kr/fifaonline4/latest/division.json',
        {
            headers: {
                Authorization: process.env.NEXON_API_KEY,
            },
        }
    ).then((res) => res.data.filter((a: any) => a.divisionId === divisionId));

    return result[0].divisionName;
};

export default getTierName;
