import React, { useState } from 'react'
import '../Styles/NavBar.css'

import {
  AppBar, Button, Link, Toolbar,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import Divider from '@mui/material/Divider'
import LanguageIcon from '@mui/icons-material/Language'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import InputBase from '@mui/material/InputBase'
import { styled, alpha } from '@mui/material/styles'
import ClearIcon from '@mui/icons-material/Clear'
import PropTypes from 'prop-types'

const menuButton = {
  marginLeft: 'auto',
  backgroundColor: 'black',
  color: 'white',
  border: '1px solid white',
  borderRadius: '0',
  '&:hover': {
    backgroundColor: 'white',
    color: 'black',
    transition: '0s',
  },
}

const signInButton = {
  marginLeft: '10px',
  background: ' linear-gradient(180deg, #fbde74 0%, #ff9900 100%)',
  border: ' 1px solid rgb(252, 194, 70)',
  color: 'black',
  borderRadius: '0',
  '&:hover': {
    background: '#f0cb7a',
    border: '1px solid linear-gradient(180deg, #fbde74 0%, #ff9900 100%)',
    transition: '0s',
  },
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  // borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '500px',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const ClearIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  right: 0,
  bottom: 0,
  alignSelf: 'flex-end',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '400px',
    },
  },
}))

export default function NavBar({ logo = [] }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <AppBar sx={{ background: 'black' }}>
      <Toolbar>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search 9,000+ tutorials"
            inputProps={{ 'aria-label': 'search' }}
          />
          <ClearIconWrapper>
            <ClearIcon />
          </ClearIconWrapper>
        </Search>
        <Link href="https://www.freecodecamp.org/learn/">
          <img className="site" src={logo.image} alt="FreeCodeCamp" />
        </Link>

        <Button
          sx={menuButton}
          variant="contained"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Menu
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <Link href="https://www.freecodecamp.org/donate/" underline="none">
            <MenuItem onClick={handleClose}>Donate</MenuItem>
          </Link>
          <Link href="https://www.freecodecamp.org/learn/" underline="none">
            <MenuItem onClick={handleClose}>Curriculum</MenuItem>
          </Link>
          <Divider />
          <Link href="https://forum.freecodecamp.org/" underline="none">
            <MenuItem onClick={handleClose}>
              Forum
              <OpenInNewIcon sx={{ marginLeft: 'auto' }} fontSize="small" />
            </MenuItem>
          </Link>
          <Link href="https://www.freecodecamp.org/news/" underline="none">
            <MenuItem onClick={handleClose}>
              News
              <OpenInNewIcon sx={{ marginLeft: 'auto' }} fontSize="small" />
            </MenuItem>
          </Link>
          <Link href="https://coderadio.freecodecamp.org/" underline="none">
            <MenuItem onClick={handleClose}>
              Radio
              <OpenInNewIcon
                sx={{ marginLeft: 'auto' }}
                fontSize="small"
              />
            </MenuItem>
          </Link>
          <Divider />
          <MenuItem
            sx={{ color: 'grey' }}
            onClick={handleClose}
          >
            Sign in to change theme.
          </MenuItem>

          <MenuItem onClick={handleClick}>
            Change Language
            <LanguageIcon
              sx={{ marginLeft: 'auto' }}
              fontSize="small"
            />
          </MenuItem>
        </Menu>
        <Button
          sx={signInButton}
          variant="contained"
          href="https://auth.freecodecamp.org/login?state=
        hKFo2SB3N2ZiUHg3dDhCd2Y3WXpqTFpIYkZLNXIxb2FiOVVo
        VqFupWxvZ2luo3RpZNkgaEFMclJEZDFLZUUwaGRQRThjaHR2
        TDMtOGo3YTFVc0ejY2lk2SBhVUR2OWpWcVRmeEJSRTFsNjBO
        QTVBZjd5VENHRTRjeQ&client=aUDv9jVqTfxBRE1l60NA5A
        f7yTCGE4cy&protocol=oauth2&response_type=code&re
        direct_uri=https%3A%2F%2Fapi.freecodecamp.org%2F
        auth%2Fauth0%2Fcallback&scope=openid%20profile%2
        0email"
        >
          Sign in
        </Button>

      </Toolbar>
    </AppBar>
  )
}

NavBar.propTypes = {
  logo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
  }).isRequired,
}
