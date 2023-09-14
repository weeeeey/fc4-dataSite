import getMatchInfo from '@/actions/match/getMatchInfoById';
import getMatchType from '@/actions/meta/getMatchType';
import getUserMatchIds from '@/actions/match/getUserMatchIds';

const UserSearchPage = async () => {
    const a = await getMatchInfo('6501e6a21aad0199a3d82656');

    return <div>asd</div>;
};

export default UserSearchPage;
