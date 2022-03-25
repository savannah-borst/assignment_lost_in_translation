import PersonIcon from "@mui/icons-material/Person"
import { useSelector } from 'react-redux';

function ProfileSettings() {
  const { username, loggedIn } = useSelector(state => state.session)

  return (
    <>
    {loggedIn &&
    <div className="profile-settings">
      {username}
      <span className="profile-settings-icon">
        <PersonIcon />
      </span>
    </div>
    }
    </>
  );
}

export default ProfileSettings;
