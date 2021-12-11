import styled from 'styled-components'
import FeedsHeader from './FeedsHeader'
import SidebarNav from './SidebarNav'
import NewsFeeds from './NewsFeeds'

const MainFeeds = (props) => {

    return(
        <Container>
            <FeedsHeader />
            <SidebarNav />
            <Main>
                <GridFiels>
                    <AsideFeeds>
                        <SideBar>
                            <UserCard>
                                <UserCardHero>
                                    <ProfileCard>
                                        <UserProfile>
                                            <UserCardImage>
                                                <ImageBase>
                                                    <img src="https://images1.the-dots.com/4163513/jmn.jpeg?p=profileImage" alt="" />    
                                                </ImageBase>
                                            </UserCardImage>
                                            <UserName>
                                                Ken Ossai
                                            </UserName>
                                            <UserDiscription>
                                                Developer | UI/UX-Designer | Content Creator
                                            </UserDiscription>
                                        </UserProfile>
                                    </ProfileCard>
                                    <EditButton>
                                        <EditImage>
                                            <img src="/assets/edit.svg" alt="" />
                                        </EditImage>
                                    </EditButton>
                                </UserCardHero>
                                <UserCardContent>
                                    <ProfileProgressWidget>
                                        <ProfileStacks>
                                            <DisclosureButton>
                                                <ProfileProgress><span className='boost'>Boost your profile</span> <span className='dash'>&#8212;</span> <span className='percent'>100%</span></ProfileProgress> 
                                            </DisclosureButton>
                                                <TypographyRoot>
                                                    Profile 
                                                    <span className='advance'> Advanced</span>
                                                </TypographyRoot>
                                            <ProgressBar>
                                                <Progress>100%</Progress>
                                            </ProgressBar>
                                        </ProfileStacks>
                                    </ProfileProgressWidget>
                                    <DisclosurePanel>
                                        <TypoRootComplete>
                                            <span className='nice'>Nice!</span>
                                            <span className='profiling'> Your profile is looking great</span>
                                            <span className='okHand'>👌</span>
                                        </TypoRootComplete>
                                    </DisclosurePanel>
                                </UserCardContent>
                            </UserCard>
                        </SideBar>
                    </AsideFeeds>
                    <NewsFeeds />
                </GridFiels>
            </Main>
        </Container>
    )
}

const Container = styled.div `

`

const Main = styled.section `
    padding-top: 60px;
`
const GridFiels = styled.div `
    grid-template-columns: 250px minmax(auto, 540px) 250px;
    grid-template-areas: "left center center";
    max-width: 1040px;
    display: grid;
    column-gap: 30px;
    margin: 0pc auto;
    min-height: calc(100vh - 60px);
`

const AsideFeeds = styled.aside `
    padding-top: 60px;
    grid-area: left;
    display: block;
`
const SideBar = styled.div `
    margin-bottom: 30px;
    display: grid;
    row-gap: 30px;
    height: 316px;
`
const UserCard = styled.div `
    /* padding: 0px; */
    border: 1px solid #f4f4f4;
    border-radius: 6px;
    background-color: #fff;
    position: relative;
    display: block;
`

const UserCardHero = styled.header `
    display: block;
    position: relative;
    border-radius: 6px 6px 0px 0px;
    background-color: rgba(0, 0, 0, 0);
    background-repeat: repeat, repeat;
    background-attachment: scroll, scroll;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) 100%), url("/assets/index.png");
    background-origin: padding-box, padding-box;
    background-clip: border-box, border-box;
    background-position: center center;
    background-size: cover;

`

const UserCardContent = styled.div `
    padding: 20px;
`

const ProfileProgressWidget = styled.button `
    cursor: auto;
    padding: 0px;
    width: 100%;
    border-radius: 0px;
    text-align: left;

    z-index: 1;
    background-color: transparent;
    position: relative;
    display: inline-block;
    overflow: hidden;
    border: 0;
    font-size: 14px;
    line-height: .8125;
    white-space: nowrap;
    transform: translateZ(0);
`

const ProfileStacks = styled.div `
    display: grid;
    position: relative;
    grid-auto-flow: row;
    justify-items: initial;
    grid-template-columns: minmax(0px 1fr);
    row-gap: 5px;

    
`

const DisclosureButton = styled.span `
    display: grid;
    -moz-box-align: center;
    grid-template-columns: auto auto 1fr auto;
    gap: 3px;
`
const ProfileProgress = styled.span `

    .dash{
        margin: 0px;
        font-size: 14px;
        font-family: "theinhardt",Helvetica Neue,sans-serif;
        font-weight: 400;
        line-height: 1.375;
        -moz-osx-font-smoothing: grayscale;
        color: rgb(178, 178, 178);
    }
    .boost{
        margin: 0px;
        font-size: 15px;
        font-family: "theinhardt",Helvetica Neue,sans-serif;
        font-weight: 600;
        line-height: 1.375;
        -moz-osx-font-smoothing: grayscale;
        color: rgb(56, 56, 57);
    }

    .percent{
        margin: 0px;
        font-size: 16px;
        font-family: "theinhardt",Helvetica Neue,sans-serif;
        font-weight: 600;
        line-height: 1.375;
        -moz-osx-font-smoothing: grayscale;
        color: rgb(116, 203, 131);
    }
`

const TypographyRoot = styled.span`
        margin: 0px;
        display: block;
        font-size: 13px;
        font-family: "theinhardt",Helvetica Neue,sans-serif;
        font-weight: 400;
        line-height: 1.23;
        -moz-osx-font-smoothing: grayscale;
        color: rgb(56, 56, 57);
        
        .advance{
            margin: 0px;
            font-size: 13px;
            font-family: "theinhardt",Helvetica Neue,sans-serif;
            font-weight: 500;
            line-height: 1.23;
            -moz-osx-font-smoothing: grayscale;
            color: rgb(56, 56, 57);
        }
`

const ProgressBar = styled.div `
    margin-top: 8px;
    overflow: hidden;
    background-color: #eaeaea;
`

const Progress = styled.div `
    display: block;
    height: 13px;
    position: relative;
    border-radius: 6px;
    font-size: 0px;
    background-color: #74cb83;
    transform: translateX(0%);
    transition: transform 0.35s ease-out 0s;
`

const DisclosurePanel = styled.div `
    padding-top: 20px;
    outline: currentColor none 0px;
`

const TypoRootComplete = styled.span `
    max-width: 180px;
    
    margin: 0px;
    display: block;
    font-size: 14px;
    font-family: "theinhardt",Helvetica Neue,sans-serif;
    font-weight: 400;
    line-height: 1.24;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(56, 56, 57);

    .nice{
        margin: 0px;
        font-family: "theinhardt",Helvetica Neue,sans-serif;
        font-size: 13px;
        font-weight: 600;
        -moz-osx-font-smoothing: grayscale;
        color: rgb(56, 56, 57);
        line-height: 1.24;
    }

    .profiling{
        font-family: "theinhardt",Helvetica Neue,sans-serif;
        font-size: 13px;
        font-weight: 400;
        -moz-osx-font-smoothing: grayscale;
        color: rgb(56, 56, 57);
        line-height: 1.24;
    }
`

const ProfileCard = styled.a `
        padding: 15px 20px;
        display: block;
        /* text-decoration: none; */
        background: transparent;
        /* height: 150px; */
        cursor: pointer;
`

const UserProfile = styled.div `
    display: grid;
    position: relative;
    grid-auto-flow: row;
    justify-items: initial;
    grid-template-columns: minmax(0px, 1fr);
    row-gap: 2px;
`

const UserCardImage = styled.div `
    margin-bottom: 6px;
    width: 70px;
    height: 70px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-box-align: center;
`

const ImageBase = styled.div `
    position: relative;
    overflow: hidden;
    background-color: white;
    border-radius: 100%;
    -webkit-mask-image: -webkit-radial-gradient(#fff,#000);
    width: 100%;
    height: 100%;
    border: 1px solid hsla(0,0%,69.8%,.25);

    img{
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        opacity: 1;
        transition: opacity 0.5s ease 0s;
        color: transparent;
        border: 0;
        max-width: 100%;
    }
`
const UserName = styled.span `
    margin: 0px;
    display: block;
    overflow: hidden;
    font-size: 16px;
    font-weight: 500;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(255, 255, 255);
    height: 1.375;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const UserDiscription = styled.span `
    margin: 0px;
    display: block;
    overflow: hidden;
    font-size: 14px;
    font-weight: 400;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(255, 255, 255);
    height: 1.24;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const EditButton = styled.a `
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 4px;
    width: 36px;
    height: 36px;
    transition: background .35s;
`

const EditImage = styled.span `
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-pack: center;
    -webkit-box-align: center;

    img{
        padding-top: .1em;
        cursor: pointer;
    }
`

export default MainFeeds