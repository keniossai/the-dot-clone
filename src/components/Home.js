



import styled from 'styled-components'

const LoginPage = (props) => {

    return(
        <Container>
            <Section>
                <Hero>
                    <h1>The professional network for people who don’t wear suits to work</h1>
                    <img src="/assets/hero2.jpg" alt="" />
                </Hero>
            </Section>
            
        </Container>
    )
}

const Container = styled.div `

`

const Section = styled.section `
    display: flex;
    min-height: 500px;
    align-items: start;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 900px;
    align-items: center;
    margin: auto;

    @media (max-width: 768px){
        margin: auto;
        min-height: 0px;
    }
`

const Hero = styled.div `
    width: 100%;
    /* z-index: 100; */


    h1{
        padding-bottom: 0;
        width: 50%;
        font-size: 35px;
        color: rgb(56, 56, 57);
        line-height: 1.08;
        font-weight: 500;

        @media (max-width: 768px){
            text-align: center;
            align-items: center;
            width: 65%;
            margin: auto;
            padding-top: 4px;
        }
    }

    img{
        /* z-index: -1; */
        width: 85%;
        /* height: 670px; */
        position: absolute;
        top: 40px;
        right: -280px;
    }
`


export default LoginPage