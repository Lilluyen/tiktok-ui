import { useParams } from 'react-router-dom';

const Profile = () => {
    const { nickname } = useParams();
    return <h2>Profile: {nickname}</h2>;
};

export default Profile;
