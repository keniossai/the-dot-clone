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
                            <span>
                                <span>
                                    <img src="/assets/loud.svg" alt="" />
                                </span>
                                <span>Question</span>
                            </span>
                        </Question>
                        <Post>
                            <span></span>
                        </Post>
                        <Project></Project>
                        <Jobs></Jobs>
                    </ComposeIconsPane>
                </ComposeFeed>
            </ViewStack>
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

`

const Question = styled.button `

`

const Post = styled.a `

`

const Project = styled.a`

`
const Jobs = styled.a`

`

export default NewsFeeds