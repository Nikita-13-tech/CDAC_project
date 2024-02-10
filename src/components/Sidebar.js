import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import styled from 'styled-components';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import logo from '../assets/images/logo2x2.jpg'

const wrapper = styled.div`
    display: flex;
    position: relative;
`

const SidebarContainer = styled.div`
    height: 100%;
    position: fixed;
    width: 300px;
    background: rgb(238,8,8);
    background: linear-gradient(0deg, rgba(238,8,8,0.01) 0%, rgba(220,26,34,1) 33%);
    img{
        display: block;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
    }
    
`

const SidebarBtn = styled.div`
    button {
        background: rgb(238,8,8);
        border: 1px solid lightgray;
        display: flex;
        align-items: center;
        border-radius: 40px;
        padding:5px 10px;
        box-shadow:2px 2px 2px #ccc;
        margin-left: 40px;
        margin-top:10px;
        height: 40px;
        width: 70%;
        cursor: pointer;

        span {
            font-size: 16px;
            margin-right: 20px;
            margin-left: 10px;
            color:white;
            margin-left: 35%;
        }
        &:hover{
            background-color: #F73B46;
            span
            {
                color: black;
            }
        }
    }

`


const SidebarOptions = styled.div`
    margin-top: 10px;
    
    color: white;
    .progress_bar {
        padding: 0px 20px;
    }
    .progress_bar span {
        display: block;
        color:#333;
        font-size: 13px;
    }
`

const SidebarOption = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 20px;
    border-radius: 0px 0px 0px 0px;
    
    &:hover{
        background: red;
        cursor: pointer;
        span
        {
            color : aqua;
        }
    }

    svg.MuiSvgIcon-root {
        color: white;     
    }
    
    span {
        margin-left: 15px;
        font-size: 13px;
        font-weight: 500;
        color: white;
    }

`



function Sidebar() {
  return (
    <>
    <SidebarContainer>
        <div>
            <logo2x2>
                <img src={logo} alt="Vault"/>
            </logo2x2>
        </div>
        <SidebarBtn>
            <button>
                {/* <img src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E"/> */}
                <span><b>INSERT</b></span>
            </button>
        </SidebarBtn>
        <SidebarOptions>
            <SidebarOption>
                <AccountBoxIcon />
                <span>My Drive</span>
            </SidebarOption>
            <SidebarOption>
                <PeopleAltOutlinedIcon />
                <span>Shared with me</span>
            </SidebarOption>
            <SidebarOption>
                <QueryBuilderOutlinedIcon />
                <span>Recent</span>
            </SidebarOption>
            <SidebarOption>
                <StarBorderOutlinedIcon />
                <span>Starred</span>
            </SidebarOption>
            <SidebarOption>
                <DeleteOutlineOutlinedIcon />
                <span>Trash</span>
            </SidebarOption>
            <SidebarOption>
                <SettingsIcon />
                <span>Settings</span>
            </SidebarOption>
        </SidebarOptions>
        <hr/>
        <SidebarOptions>
            <SidebarOption>
                <CloudQueueIcon />
                <span>Storage</span>
            </SidebarOption>
            <div className="progress_bar">
                <progress size="tiny" value="70" max="100" />
                <span>105 GB  of 200 GB used</span>
            </div>
        </SidebarOptions>
    </SidebarContainer>    
    </>
  )
}

export default Sidebar
