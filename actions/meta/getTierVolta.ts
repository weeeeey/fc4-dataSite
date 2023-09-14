import axios from 'axios';

const getTierVolta = async (divisionId: number) => {
    const res = await axios(
        'https://static.api.nexon.co.kr/fifaonline4/latest/division_volta.json',
        {
            headers: {
                Authorization: process.env.NEXON_API_KEY,
            },
        }
    ).then((res) => res.data.filter((a: any) => a.divisionId === divisionId));
    return res[0].divisionName;
};

export default getTierVolta;
