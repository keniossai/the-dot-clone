import styled from 'styled-components'


const Network = () => {

    return (
        <Section>
            <Contents>
                <NetHeader>
                    <h1>Networking for the modern world</h1>
                </NetHeader>
                <NetButton>
                    <Forbes>
                        <img src='/assets/logo-forbes.webp' />
                    </Forbes>
                    <Apple>
                        <img src='/assets/logo-apple.webp' />
                    </Apple>
                    <TechCrunsh>
                        <img src='/assets/logo-techcrunch.webp' />
                    </TechCrunsh>
                </NetButton>
                <AppOfDay>Apple <span>App of the day</span></AppOfDay>
            </Contents>
        </Section>
    )
}


const Section = styled.section `
    position: relative;
    margin-right: auto;
    margin-left: auto;
`

const Contents = styled.div `
    margin: 0px auto;
    padding: 60px 20px;
    max-width: 920px;
    box-sizing: content-box;
`

const NetHeader = styled.div `
    text-align: center;
    position: relative;
    margin-bottom: 30px;
    height: 3ch;

    h1{
        font-size: 1.3rem;
        line-height: 1;
        color: rgba(56, 56, 57, 0.9);

        @media(max-width: 768px){
            font-size: 1.5em;
        }
    }

    h1::before{
        content: "‟";
        font-size: 1.5em;
        color: rgb(178, 178, 178);
        margin-right: 0.2ch;
    }

    h1::after{
        content: "”";
        font-size: 1.5em;
        color: rgb(178, 178, 178);
        margin-left: 0.2ch;
    }
`

const NetButton = styled.div `
    text-align: center;
    padding-top: 10px;

    @media(max-width: 768px){
        padding-top: 50px;
    }

`
const Forbes = styled.button `
    padding: 0;
    border: 0;
    color: inherit;
    background: transparent;
    cursor: pointer;
    overflow: visible;
    padding: 0px;
    margin: 0px 15px;

    img{
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
        transform: scale(0.7);
        transition: transform 0.5s ease 0s;
    }
`

const TechCrunsh = styled(Forbes) `

`

const Apple = styled(Forbes) `
    
`

const AppOfDay = styled.span `
    display: grid;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #383839;

    span{
        font-weight: 100;
        padding: 10px;
        font-size: 13px;
        color: #8A8A8A;
    }
`


export default Network