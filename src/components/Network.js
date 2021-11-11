import styled from 'styled-components'


const Network = () => {

    return (
        <Section>
            <Contents>
                <NetHeader>
                    <h1>Networking for the modern world</h1>
                    
                </NetHeader>
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
`
export default Network