import * as React from "react"
import { Box, Button, Container} from "@mui/material"
import headerLogo from "../../assets/images/header-icons/Logo-Hello.png"
import ProfileSettings from "./ProfileSettings"
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { clearSessionAction } from "../../store/actions/sessionActions"

function Header() {
    const { loggedIn } = useSelector(state => state.session)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = event => {
        event.preventDefault()
        dispatch(clearSessionAction());
        navigate('/');
      }

    return (
        <div className="header" style={{ width: "100%" }}>
            <Container maxWidth="lg">
            <img
                    className="header-logo"
                    src={headerLogo}
                    alt="Header logo"
                />
                <h2 className="header-heading">Lost In Translation</h2>
                {loggedIn &&
            <Box
                className="header-content"
                sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Link to="/profile">
                        <ProfileSettings />
                    </Link>
                    <Button variant="contained" className="normal-button" type="submit" onClick={logOut}>Logout</Button>
            </Box>
             }
            </Container>     
        </div>
    );
}

export default Header;
