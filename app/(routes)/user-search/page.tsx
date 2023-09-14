import getUserInfo from '@/actions/user/getUserInfo';
import getUserTier from '@/actions/user/getUserTier';
import getUserTrade from '@/actions/user/getUserTrade';

const UserSearchPage = async () => {
    const a = await getUserInfo('위영진');
    console.log(a);
    return <div>asd</div>;
};

export default UserSearchPage;
