import styled from 'styled-components'

const FeedsHeader = (props) => {

    return(
        <Container>
            <TopBar>
                <a href="/feeds">
                    <Logo>
                        <img src="/assets/dot-logo.svg" alt="" />
                    </Logo>
                    <LogoDot>
                        <img src="/assets/dot.svg" alt="" />
                    </LogoDot>
                </a>
                <Nav>
                    <a href="">Home</a>
                    <a href="">My community</a>
                    <button>
                        <span>Explore</span>
                        <img src="/assets/down.svg" alt="" />
                    </button>
                    <ExploreNav>
                        <MenuPanel>
                            <MenuItems>
                                <MainItem>
                                    <a href="">
                                        <ImageBase>
                                            <img src="/assets/asks.webp" alt="" />
                                        </ImageBase>
                                        <span>Ask forum</span>
                                        <Discription>
                                            Gets insights, feedback, advice & find collaborators
                                        </Discription>
                                    </a>
                                </MainItem>
                            </MenuItems>
                        </MenuPanel>
                    </ExploreNav>
                </Nav>
                <AskQuestion>
                    <AskButton>
                        <span>Ask a question</span>
                    </AskButton>
                </AskQuestion>

                <UserNav>
                    <ProfileMenu>
                        <ProfileImage>
                            <Profile>
                                <BaseImage>
                                    <img src="https://images1.the-dots.com/4163513/jmn.jpeg?p=profileImageSmall" alt="" />
                                </BaseImage>
                            </Profile>
                        </ProfileImage>
                        <ProfileItems>
                            <ProfileLink>
                                <a href='' >
                                    Hello, Ken <br />
                                    <small>0 Projects</small>
                                </a>
                            </ProfileLink>
                            <ProfileLinks>
                                <a href='' >
                                    Your question
                                </a>
                            </ProfileLinks>
                            <ProfileLinks>
                                <a href='' >
                                    Your job posts
                                </a>
                            </ProfileLinks>
                            <ProfileLinks>
                                <a href='' >
                                    Your company pages
                                </a>
                            </ProfileLinks>
                            <ProfileLinks>
                                <a href='' >
                                    Your lists
                                </a>
                            </ProfileLinks>
                            <ProfileLinks>
                                <a href='' >
                                    Account settings
                                </a>
                            </ProfileLinks>
                        </ProfileItems>
                    </ProfileMenu>
                    <Connection>
                        <img src="/assets/connection.svg" alt="" />
                    </Connection>
                    <IconButton>
                        <img src="/assets/message.svg" alt="" />
                    </IconButton>
                    <NotifyIcon>
                    <img src="/assets/notify.svg" alt="" />
                    <NotificatonBadge>
                        <BadgeCount>
                            2
                        </BadgeCount>
                    </NotificatonBadge>
                    </NotifyIcon>
                </UserNav>
                <MenuBars>
                    <MenuButtonTop></MenuButtonTop>
                    <MenuButtonMiddle></MenuButtonMiddle>
                    <MenuButtonBottom></MenuButtonBottom>
                </MenuBars>
            </TopBar>
        </Container>
        
    )
}

const Container = styled.div `
    
`

const TopBar = styled.section `
    padding: 0px 20px 0px 40px;
    grid-template-columns: 250px 1fr auto auto 120px;
    column-gap: 20px;
    gap: 10px;
    z-index: 100;
    position: fixed;
    top: 0px;
    left: 0px;
    display: grid;
    -moz-box-align: center;
    place-items: center left;
    width: 100%;
    height: 59px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    background-color: white;

    @media(max-width: 768px){
        z-index: 100;
        position: fixed;
        top: 0px;
        left: 0px;
        padding: 0px 10px 0px 20px;
        display: grid;
        -moz-box-align: center;
        place-items: center left;
        grid-template-columns: 1fr auto 90px;
        gap: 0px;
        width: 100%;
        background-color: white;
    }

    a{
        color: inherit;
        text-decoration: none;
        background: transparent;
    }

    
`

const Logo = styled.div `
    display: block;
    position: relative;

    @media(max-width: 768px){
        display: none;
    }
    
    img{
        overflow: hidden;
        display: block;
        width: 122px;
    }
`

const LogoDot = styled.div `
    display: none;

    @media(max-width: 768px){
        display: block;
    }

    img{
        width: 30px;
        display: block;
    }
`

const Nav = styled.nav `
    -moz-box-align: center;
    align-items: center;
    grid-template-columns: repeat(3, max-content);
    column-gap: 40px;
    display: grid;

    @media(max-width: 768px){
        display: none;
    }

    a{
        position: relative;
        padding: 0.5em 0px;
        margin: 0px;
        font-size: 15px;
        font-weight: 400;
        -moz-osx-font-smoothing: grayscale;
        color: rgb(56, 56, 57);
        line-height: 1.375;
    }

    button{
        z-index: 1;
        display: flex;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        line-height: .8125;
        white-space: nowrap;
        padding: 0.5em 0px;
        border: none;
        background: transparent;
        text-shadow: none;
        align-items: center;
        transform: translateZ(0);
        
        span{
            font-size: 15px;
            font-weight: 300;
            color: rgb(56, 56, 57);
            cursor: pointer;
        }

        img{
            width: 20px;
            overflow: hidden;
            margin-left: 0.5em;
            display: inline-block;
            vertical-align: sub;
            transform: rotateZ(0deg);
            transition: transform 0.25s ease-in-out 0s;
        }
    }
`

const ExploreNav = styled.div `
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 255px;
    overflow: hidden;
    pointer-events: none;
`
const MenuPanel = styled.div `
    padding: 30px 0px 35px;
    box-shadow: 0 10px 10px #383838;
    pointer-events: auto;
    background-color: white;
    transform: translateY(calc(-100% - 20px));
    transition: transform 0.25s ease-in 0s;
    will-change: transform;
`

const MenuItems = styled.div `
    margin: 0px auto;
    padding: 0px 30px;
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    max-width: 1230px;
    height: 170px;
    box-sizing: content-box;
    outline: currentColor none medium;
`
const MainItem = styled.div `
    margin-right: 20px;
    flex: 1 0 100px;
    width: 15.25%;
    max-width: 186px;

    a{
        display: block;
        color: rgb(115, 115, 115);
        transition: color 0.35ms ease 0s;
        text-decoration: none;
        background-color: transparent;
    }
`

const ImageBase = styled.div `
    margin-bottom: 15px;
    width: 130px;
    height: 85px;
    background-color: white;
    position: relative;
    overflow: hidden;

    img{
        display: block;
        position: relative;
        width: 100%;
        height: auto;
        opacity: 1;
        transition: opacity 0.5s ease 0s;
        color: transparent;
        max-width: 100%;
    }

    span{
        margin: 0px;
        display: block;
        font-size: 16px;
        font-weight: 500;
        -moz-osx-font-smoothing: grayscale;
        color: rgb(56, 56, 57);
        line-height: 1.375;
    }
`

const Discription = styled.span `
    margin-top: 10px;
    margin: 0px;
    display: block;
    font-family: var(--font-family);
    font-size: 14px;
    font-weight: 400;
    -moz-osx-font-smoothing: grayscale;
    color: inherit;
    line-height: 1.24;
`

const AskQuestion = styled.div `
    display: block;
    position: relative;

    @media(max-width: 768px){
        display: none;
    }

`

const AskButton = styled.button `
    padding: 0;
    border: 0;
    padding-right: 15px;
    padding-left: 15px;
    height: 38px;
    cursor: pointer;
    background-color: rgb(0,0,0,.8);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    transition: background .35s,border .35s;

    &:hover{
        background-color: black;
    }

    
    span{
        font-size: 16px;
        font-weight: 400;
        color: white;
    }
`

const UserNav = styled.nav `
    display: grid;
    -moz-box-align: center;
    align-items: center;
    grid-template-columns: repeat(3, 60px);

    @media(max-width: 768px){
        grid-template-columns: repeat(4, 60px);
    }
`
const ProfileItems = styled.div `
    position: absolute;
    top: 100%;
    right: 0px;
    width: 250px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    border-radius: 0px 0px 10px 10px;
    outline: currentColor none 0px;
    border: 1px solid rgba(0, 0, 0, 0.04);
    background-color: whitesmoke;
    display: none;
`

const ProfileMenu = styled.div `
    position: relative;
    cursor: pointer;

    &:hover{
        ${ProfileItems}{
            display: block;
        }
        background-color: rgb(244, 244, 244);
    }


`

const ProfileImage = styled.a `
    padding: 12px 13px;
    display: block;
    background-color: white;
`   
const Profile = styled.div `
    display: inline-block;
    height: 34px;
    width: 34px;
    vertical-align: middle;
    position: relative;

    
`
const BaseImage = styled.div `
    position: relative;
    overflow: hidden;
    background-color: gray;
    border-radius: 100%;
    height: 100%;
    width: 100%;
    border: 1px solid hsla(0,0%,69.8%,.25);
    -webkit-mask-image: -webkit-radial-gradient(#fff,#000);

    

    img{
        max-width: 100%;
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        opacity: 1;
        transition: opacity 0.5s ease 0s;
        color: transparent;
    }
`

const ProfileLink = styled.div `
    margin: 10px 20px;
    border-bottom: 1px solid lightgray;
    display: block;
    padding: 15px 0px;
    font-size: 18px;
    font-weight: 400;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(56, 56, 57);
    line-height: 1.33;
    text-decoration: none;

    &:first-child{
        margin-bottom: 20px;
    }

    small{
        font-size: 13px;
        font-weight: 200;
        line-height: none;
    }
    
    
`

const ProfileLinks = styled.div `
    margin: 10px 20px;
    transition: opacity 0.25s ease 0s;

    a{
        font-size: 15px;
        -moz-osx-font-smoothing: grayscale;
        color: rgb(115, 115, 115);
        line-height: 1.33;
        text-decoration: none;
        font-weight: 400;
        display: inline-block;
        margin-bottom: 8px;
        transition: opacity 0.25s ease 0s;
        
        &:hover{
            border-bottom: 1px solid rgb(115, 115, 115);
        }


    }
`

const IconButton = styled.a `
    position: relative;
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
    width: 60px;
    height: 60px;
    transition: background 0.2s ease 0s;
    cursor: pointer;

    &:hover{
        background-color: rgb(244, 244, 244);
    }

    
`

const NotifyIcon = styled.a `
    position: relative;
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
    width: 60px;
    height: 60px;
    transition: background 0.2s ease 0s;
    cursor: pointer;

    &:hover{
        background-color: rgb(244, 244, 244);
    }

    img{
        overflow: hidden;
    }
`
const Connection = styled.a `
    position: relative;
    display: none;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
    width: 60px;
    height: 60px;
    transition: background 0.2s ease 0s;

    @media(max-width: 768px){
        display: flex;
    }

    &:hover{
        background-color: rgb(244, 244, 244);
    }

    img{
        overflow: hidden;
    }
`
const NotificatonBadge = styled.div `
    position: absolute;
    top: 13px;
    right: 11px;
    transition: box-shadow 0.2s ease 0s;
    background: #FF0000;
    border-radius: 100%;
    height: 18px;
    width: 18px;
    display: flex;
    flex-direction: row;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
`

const BadgeCount = styled.div `
    margin: 0px;
    font-size: 11px;
    font-weight: 400;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(255, 255, 255);
    line-height: 1.2;
`

const MenuBars = styled.button `
    border: 0;
    background: transparent;
    color: inherit;
    text-shadow: none;
    cursor: pointer;

    position: relative;
    width: 58px;
    height: 58px;
    border-radius: 0px;
    transition: background 0.25s ease 0s;

    z-index: 1;
    padding: 8px 18px 7px;
    display: inline-block;
    overflow: hidden;
    font-size: 14px;
    white-space: nowrap;
    transform: translateZ(0);
    text-transform: none;
    appearance: button;


    &:hover{
        background-color: rgb(234, 234, 234);
    }
        
`

const MenuButtonTop = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 22px;
    height: 1px;
    background-color: rgb(115, 115, 115);
    transform-origin: 50% 0px 0px;
    transition: transform 0.35s ease 0s, background 0.35s ease 0s, box-shadow 0.25s ease 0s;
    transform: rotate(0deg) translate(-11px, 7px);
`

const MenuButtonMiddle = styled(MenuButtonTop) `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 22px;
    height: 1px;
    background-color: rgb(115, 115, 115);
    transform-origin: 50% 0px 0px;
    transition: transform 0.35s ease 0s, background 0.35s ease 0s, box-shadow 0.25s ease 0s;
    transform: translate(-50%) scale(1);
`
const MenuButtonBottom = styled(MenuButtonTop) `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 22px;
    height: 1px;
    background-color: rgb(115, 115, 115);
    transform-origin: 50% 0px 0px;
    transition: transform 0.35s ease 0s, background 0.35s ease 0s, box-shadow 0.25s ease 0s;
    transform: rotate(0deg) translate(-11px, -7px);
`
export default FeedsHeader