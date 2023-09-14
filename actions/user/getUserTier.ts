import axios from 'axios';
import getUserInfo from './getUserInfo';

const getUserTier = async (
    nickname: string
): Promise<TypeUserTier[] | null> => {
    const userInfo = await getUserInfo(nickname);

    if (!userInfo) {
        return null;
    }
    const res = await axios(
        `https://api.nexon.co.kr/fifaonline4/v1.0/users/${userInfo.accessId}/maxdivision`,
        {
            headers: {
                Authorization: process.env.NEXON_API_KEY,
            },
        }
    );
    return res.data;
};

export default getUserTier;
