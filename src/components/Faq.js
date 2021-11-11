import styled from 'styled-components'

const Faq = () => {

    return (
        <Container>
            <Section>
                <Content>
                    <h1>Get advice and collaborate</h1>
                    <p>Connect & network in the community Asks hub</p>
                    <Asks>
                        Ask a question
                    </Asks>
                </Content>
            </Section>
        </Container>
    )
}

const Container = styled.div `
    height: 250px;
    /* background-color: #383838; */
`

const Section = styled.section `
    background-image: url("/assets/hero-asks.webp");
    background-position: right center;
    background-size: auto 245px;
    margin: 0px auto;
    max-width: 920px;
    height: 250px;
    background-repeat: no-repeat;

    @media (max-width: 768px){
        background-image: none;
    }
`

const Content = styled.div `
    grid-area: 1 / 1 / 1 / 7;
    margin: 0px auto;
    padding: 60px 20px;
    max-width: 920px;
    box-sizing: content-box;

    @media (max-width: 768px){
        
    }

    h1{
        font-size: 35px;
        font-weight: 500;
        color: rgb(56, 56, 57);
        line-height: 1.08;
        margin: 0px;

        @media (max-width: 768px){
            text-align: center;
            font-size: 35px;
            font-weight: 400;
            line-height: 1.08;
        }
    }

    p{
        margin: 15px 0px 30px;
        font-size: 18px;
        color: rgb(115, 115, 115);
        font-weight: 400;
        line-height: 1.33;

        @media (max-width: 768px){
            padding-left: 80px;
            width: 250px;
            text-align: center;
        }
    }
`

const Asks = styled.button `
    width: 245px;
    height: 48px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 16px;
    background-color: #383839;
    border: 1px solid #383839;
    border-radius: 4px;
    border-color: #383839;
    color: white;
    transition: background .35s, border 35s;

    @media (max-width: 768px){
        position: relative;
        left: 85px;
    }

    &:hover{
        background-color: rgb(0,0,0,8);
    }

    
`

export default Faq