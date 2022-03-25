import PersonIcon from "@mui/icons-material/Person"
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store/store';

function ProfileSettings() {
  const { user } = useSelector(state => state.user)
  const { loggedIn } = useSelector(state => state.session)

  return (
    <>
    {loggedIn &&
    <div className="profile-settings">
      {user.username}
      <span className="profile-settings-icon">
        <PersonIcon />
      </span>
    </div>
    }
    </>
  );
}

export default ProfileSettings;
