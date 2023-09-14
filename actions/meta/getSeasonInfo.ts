import { client } from '@/lib/prismadb';
import axios from 'axios';

const getSeasonInfo = async () => {
    try {
        const seasonData = await client.season.findMany();
        if (seasonData) {
            return seasonData;
        }

        const res = await axios(
            'https://static.api.nexon.co.kr/fifaonline4/latest/seasonid.json',
            {
                headers: {
                    Authorization: process.env.NEXON_API_KEY,
                },
            }
        );
        const seasonInfoArr = res.data.map((seasonData: TypeCardSeason) => ({
            seasonId: seasonData.seasonId,
            className: seasonData.className,
            seasonImg: seasonData.seasonImg,
        }));

        const seasonInfo = await client.season.createMany({
            data: seasonInfoArr,
        });
        return seasonInfo;
    } catch (error) {
        throw new Error('get_season_info');
    }
};

export default getSeasonInfo;
