import * as React from "react"
import { Box } from "@mui/material"
import { Container } from "@mui/material"
import headerLogo from "../../assets/images/header-icons/Logo-Hello.png"
import ProfileSettings from "./ProfileSettings"

function Header() {
    return (
        <div className="header" style={{ width: "100%" }}>
            <Container maxWidth="lg">
            <img
                    className="header-logo"
                    src={headerLogo}
                    alt="Header logo"
                />
            <Box
                className="header-content"
                sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <h2 className="header-heading">Lost In Translation</h2>
                    <ProfileSettings />
            </Box>
            </Container>     
        </div>
    );
}

export default Header;
