import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import logo from '../assets/images/logo.jpg'


const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 300px auto 200px;
    align-items: center;
    padding: 5px 20px;
    height: 60px;
    border-bottom: 1px solid lightgray;
    margin-left: 300px;
    background: rgb(255,2,2);
    background: linear-gradient(90deg, rgba(220,26,34,80) 0%, rgba(223,119,44,1) 35%, rgba(0,255,179,1) 100%);
`
const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 100px;
        border-radius: 5px;
    }
    ${'' /* span{
        font-size: 22px;
        margin-left: 10px;
        color: gray;
    } */}
`

const HeaderSearch = styled.div`
    display: flex;
    align-items: center;
    width:60%;
    background-color: whitesmoke;
    padding: 12px;
    border-radius: 10px;
    input{
        background-color: transparent;
        border: 0;
        outline: 0;
        flex: 1;
    }
`
const HeaderIcons = styled.div`
    display: flex;
    align-items: center;
    span {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    svg.MuiSvgIcon-root{
        margin: 0px 10px;
    }
`

function Header  ({photoURL}) {
  return (
    <HeaderContainer>
        <HeaderLogo>
            <img src={logo} alt="Vault" />
            {/* <span>Vault</span> */}
        </HeaderLogo>
        <HeaderSearch>
                <SearchIcon />
                <input type="text" placeholder='Search in Drive' />
                <FormatAlignCenterIcon />
            </HeaderSearch>
            <HeaderIcons>
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span>
                <span>
                    <AppsIcon />
                    <Avatar src={photoURL} />
                </span>
            </HeaderIcons>
    </HeaderContainer>
  )
}

export default Header
