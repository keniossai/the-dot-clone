import styled from 'styled-components'



const NewsFeeds = (props) => {

    return (

        <MainNewsFeeds>
            <ViewStack>
                <ComposeFeed>
                    <ComposeFeedTouchable>
                        <DummyTextArea>
                            <DummyUserImage>
                                <ImageBaseRoot>
                                    <ImageBase>
                                        <img src="https://images1.the-dots.com/4163513/jmn.jpeg?p=profileImageSmall" alt="" />
                                    </ImageBase>
                                </ImageBaseRoot>
                            </DummyUserImage>
                                <TypoRoot>
                                    What would you like to share?
                                </TypoRoot>
                        </DummyTextArea>
                    </ComposeFeedTouchable>
                    <ComposeIconsPane>
                        <Question>
                            <QuestionName>
                                <QuestionImage>
                                    <img src="/assets/loud.svg" alt="" />
                                </QuestionImage>
                                <span>Question</span>
                            </QuestionName>
                        </Question>
                        <a href="">
                            <PostName>
                                <PostImage>
                                    <img src="/assets/briefcase.svg" alt="" />
                                </PostImage>
                                <span>Post</span>
                            </PostName>
                        </a>
                        <a href="">
                            <ProjectName>
                                <ProjectImage>
                                    <img src="/assets/briefcase.svg" alt="" />
                                </ProjectImage>
                                <span>Projects</span>
                            </ProjectName>
                        </a>
                        <a href="">
                            <JobsName>
                                <JobsImage>
                                    <img src="/assets/briefcase.svg" alt="" />
                                </JobsImage>
                                <span>Job</span>
                            </JobsName>
                        </a>
                    </ComposeIconsPane>
                </ComposeFeed>
            </ViewStack>
            <div>
                <div>
                    <div>
                        <ItemCard>
                            <Content>
                                <ContentView>
                                    <UserprofileName>
                                        <ProfileName>
                                            hello
                                        </ProfileName>
                                    </UserprofileName>
                                </ContentView>
                            </Content>
                        </ItemCard>
                    </div>
                </div>
            </div>
        </MainNewsFeeds>
    )
}

const MainNewsFeeds = styled.main `
    padding-top: 60px;
    /* grid-area: center;
    display: block; */
`

const ViewStack = styled.div `
    display: grid;
    position: relative;
    grid-auto-flow: row;
    justify-items: initial;
    grid-template-columns: minmax(0px, 1fr);
    row-gap: 20px;
`

const ComposeFeed = styled.div `
    display: block;
    position: relative;
    padding: 0px;
    user-select: none;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0, 0.05);
    border-radius: 6px;
    background-color: white;
`

const ComposeFeedTouchable = styled.div `
    overflow: hidden;
    outline: currentColor none medium;
    position: relative;
    cursor: pointer;
`

const DummyTextArea = styled.div `
    border-bottom: 2px solid rgb(244, 244, 244);
    padding: 16px 20px 15px;
    display: flex;
    -moz-box-align: center;
    align-items: center;
`
const DummyUserImage = styled.div `
    margin-right: 15px;
    flex-shrink: 0;
    display: inline-block;
    width: 34px;
    height: 34px;
    position: relative;
    -webkit-box-pack: center;
    -webkit-box-align: center;
`

const ImageBaseRoot = styled.div `
    position: relative;
    overflow: hidden;
    background-color: #f4f4f4;
    border-radius: 100%;
    -webkit-mask-image: -webkit-radial-gradient(#fff,#000);
    width: 100%;
    height: 100%;
    border: 1px solid hsla(0,0%,69.8%,.25);
`

const ImageBase = styled.div `
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    color: transparent;

    img{
        max-width: 100%;
        border: 0;
    }
`

const TypoRoot = styled.p `
    margin: 0px;
    font-family: "theinhardt",Helvetica Neue,sans-serif;
    font-size: 15px;
    font-weight: 400;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(115, 115, 115);
    line-height: 1.375;
`

const ComposeIconsPane = styled.div `
    display: flex;
    justify-content: space-around;
    padding: 16px 20px 15px;
    align-items: center;
    -moz-box-align: center;

    img{
        width: 30px;
    }

    a{
        padding-right: 12px;
        text-shadow: none;
        text-decoration: none;
        font-weight: 400;
        outline: none;
        white-space: none;
        color: #383839;
    }
`

const Question = styled.button `
    padding-right: 12px;
    height: 32px;
    font-size: 16px;
    background: transparent;
    border: 0;
    padding: 0;
    text-shadow: none;
    text-decoration: none;
    font-weight: 400;
    outline: none;
    white-space: none;

`

const QuestionName = styled.span `
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    height: 100%;
    pointer-events: none;
    font-size: 16px;

    span{
        padding-right: 0;
        /* margin-left: 4px; */
    }
`
const QuestionImage = styled.span `
    position: relative;

`

const PostName = styled.span `
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    height: 100%;
    pointer-events: none;
    font-size: 16px;
`

const PostImage = styled.span `
    position: relative;
`


const ProjectName = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    height: 100%;
    pointer-events: none;
    font-size: 16px;
`

const ProjectImage = styled.span `
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    height: 100%;
    pointer-events: none;
    font-size: 16px;
`

const JobsName = styled.span `
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    height: 100%;
    pointer-events: none;
    font-size: 16px;
`
const JobsImage = styled.span `
    position: relative;
`

const ItemCard = styled.div `
    box-shadow: 0 10px 10px 0 var(--color-black-alpha-5),0 1px 3px 0 var(--color-black-alpha-5);
    border-radius: 6px;
    background-color: var(--color-white);
    border-color: var(--color-almost-grey);
`
const Content = styled.div `
    padding-top: 20px;
`

const ContentView = styled.div `
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: minmax(0px 1fr);
    row-gap: 15px;
`
const UserprofileName = styled.div `
    display: flex;
    flex-direction: row;
`

const ProfileName = styled.header `
    display: grid;
    grid-auto-flow: column;
    -moz-box-pack: start;
    justify-content: flex-start;
    -moz-box-align: center;
    align-items: center;
    column-gap: 10px;
`
export default NewsFeeds