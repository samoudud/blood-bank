import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';
import useDonor from '../../hooks/useDonor';
import { Button } from '@mui/material';

const Header = () => {
    const { user, logOut } = useDonor();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleLogOut = () => {
        logOut()
    }



    return (
        <AppBar sx={{ background: '#18183A', '&:hover': { background: '#18183A' } }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Mobile Menu Start */}

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <img width='300px' src={logo} alt="" />
                    </Box>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <NavLink style={{ color: 'Black', textDecoration: 'none', padding: '0 5px' }} to='/'><MenuItem sx={{ '&:hover': { color: 'red' } }}>Home</MenuItem></NavLink>
                            <NavLink style={{ color: 'Black', textDecoration: 'none', padding: '0 5px' }} to='/seeUpdate'><MenuItem sx={{ '&:hover': { color: 'red' } }}>SeeUpdate</MenuItem></NavLink>
                            {
                                user?.email ?

                                    <NavLink style={{ color: 'Black', textDecoration: 'none', padding: '0 5px' }} to='/dashboard'><MenuItem sx={{ '&:hover': { color: 'red' } }}>Dashboard</MenuItem></NavLink>
                                    :
                                    <NavLink style={{ color: 'black', textDecoration: 'none', padding: '0 5px', borderRadius: '5px' }} to='/register'><MenuItem >Donate</MenuItem></NavLink>
                            }



                        </Menu>
                    </Box>
                    {/* MObile Menu End */}

                    {/* Desktop Menu start */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <img width='200px' src={logo} alt="" />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <NavLink style={{ color: 'white', textDecoration: 'none', padding: '0 5px' }} to='/'><MenuItem sx={{ '&:hover': { color: 'red' } }}>Home</MenuItem></NavLink>
                        <NavLink style={{ color: 'white', textDecoration: 'none', padding: '0 5px' }} to='/seeUpdate'><MenuItem sx={{ '&:hover': { color: 'red' } }}>SeeUpdate</MenuItem></NavLink>
                        {
                            user?.email ?

                                <NavLink style={{ color: 'white', textDecoration: 'none', padding: '0 5px' }} to='/dashboard'><MenuItem sx={{ '&:hover': { color: 'red' } }}>Dashboard</MenuItem></NavLink>
                                :
                                <NavLink style={{ color: 'white', background: '#E33D3C', textDecoration: 'none', padding: '0 5px', borderRadius: '5px' }} to='/register'><MenuItem >Donate</MenuItem></NavLink>
                        }



                    </Box>
                    {/* Desktop Menu End */}

                    <Box >
                        {
                            user?.email ?
                                <Button
                                    sx={{ background: '#E33D3C', '&:hover': { background: '#E33D3C' } }} variant='contained' onClick={handleLogOut}
                                >Log Out</Button> :
                                <NavLink style={{ color: 'white', textDecoration: 'none', padding: '0 5px' }} to='/login'><MenuItem sx={{ '&:hover': { color: 'red' } }}> Login <i className="fa-solid fa-arrow-right-to-bracket"></i></MenuItem></NavLink>
                        }

                    </Box>



                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default Header;
