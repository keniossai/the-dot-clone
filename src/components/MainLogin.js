import styled from 'styled-components'
import Discover from './Discover'
import Faq from './Faq'
import Network from './Network'
import Sponsors from './Spornsors'

const LoginPage = (props) => {

    return(
        <Section>
            <Hero>
                <HomeSide>
                    <HomePage>
                    <h1>The professional network for people who don’t wear suits to work</h1>
                    </HomePage>
                    <SignForm>
                        <Google>
                            <img src="/assets/google.svg" alt="" />
                            Log in with Google
                        </Google>
                        <Line>
                            <hr /><span>OR</span> <hr />
                        </Line>
                        <Socials>
                            <img src="/assets/facebook.svg" alt="" />
                            <img src="/assets/twitter.svg" alt="" />
                            <img src="/assets/apple.svg" alt="" />
                            <img src="/assets/mail.svg" alt="" />
                        </Socials>
                    </SignForm>
                </HomeSide>
            </Hero>
            <Discover />
            <Faq />
            <Sponsors />
            <Network />
        </Section>
    )
    
}

const Section = styled.section `
    background-color: #F8F8F8;
    position: relative;
    margin-right: auto;
    margin-left: auto;
`

const Hero = styled.div `
    background-size: auto 82%;
    background-position: right -25px;
    background-image: url("/assets/hero2.jpg");
    background-repeat: no-repeat;
    margin: 0px auto;
    max-width: 1400px;
    top: 50px;
    height: 450px;
    position: relative;
    
    @media (max-width: 768px){
        background-image: none;
    }

`
const HomeSide = styled.div `
    gap: 15px;
    text-align: left;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin: 0px auto;
    padding: 60px 20px;
    max-width: 920px;
    box-sizing: content-box;

    @media (max-width: 768px){
        grid-template-columns: none;
    }
`
const HomePage = styled.div `
    grid-area: 1 / 1 / 1 / 7;
    
    

    h1{
        /* padding-top: 50px; */
        margin-bottom: 40px;
        margin: 0px 0px 10px;
        font-size: 35px;
        font-weight: 500;
        line-height: 1.08;
        color: rgb(56, 56, 57);
        -moz-osx-font-smoothing: grayscale;

        @media (max-width: 768px){
            text-align: center;
            align-items: center;
            width: 78%;
            margin: auto;
            font-size: 35px;
            font-weight: 600;
        }
    }
`

const SignForm = styled.div `
    max-width: 245px;
    position: absolute;
    top: 213px;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        left: 100px;
        margin-top: 30px;
    }
`
const Google = styled.button `
    display: flex;
    width: 240px;
    height: 48px;
    border: 1px solid rgb(213, 213, 213);
    border-radius: 4px;
    background-color: white;
    align-items: center;
    justify-content: center;
    transition: 0.34s ease 0s;
    padding: 0px 50px 0px 14px;
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;

    &:hover{
        background-color: #F7F7F7;
    }

    img{
        width: 25px;
        margin-right: auto;
    }

`

const Line = styled.div `
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: center;

    span{
        color: #D7D7D7;
        font-size: 12px;
        font-weight: 100;
    }
    
    hr{
        width: 40%; 
        color: #F5F5F5;
        outline-color: #F5F5F5;
    }
`

const Socials = styled.div `
    display: flex;
    transition-duration: 176ms;

    
    img{
        width: 50px;
        padding: 10px 7px 0px 5px;
        cursor: pointer;

        &:hover{
            transform: scale(1.1);
        }

    }
`


export default LoginPage