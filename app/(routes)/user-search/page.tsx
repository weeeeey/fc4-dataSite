import getMatchInfo from '@/actions/match/getMatchInfoById';
import getMatchType from '@/actions/match/getMatchType';
import getUserMatchIds from '@/actions/match/getUserMatchIds';
import getCardImage from '@/actions/meta/getCardImage';
import getSeasonInfo from '@/actions/meta/getSeasonInfo';
import getTierName from '@/actions/meta/getTierName';
import getTierVolta from '@/actions/meta/getTierVolta';
import Image from 'next/image';

const UserSearchPage = async () => {
    const a = await getCardImage(100000250);
    console.log(a);
    return (
        <div>
            <Image width={500} height={500} alt="a" src={a!} />
        </div>
    );
};

export default UserSearchPage;
