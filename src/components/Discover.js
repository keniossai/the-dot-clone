import styled from 'styled-components'


const Discover = () => {

    return(
        <Content>
                <DiscoverySection>
                    <Job>
                        <a href="">
                            <Image>
                                <img src="/assets/briefcase.svg" alt="" />
                            </Image>
                            <h1>Find your dream job or client</h1>
                            <p>Discover more</p>
                        </a>
                    </Job>
                    <Skill>
                        <a href="">
                            <Image>
                                <img src="/assets/calendar.svg" alt="" />
                            </Image>
                            <h1>Upskill at virtual events</h1>
                            <p>Discover more</p>
                        </a>
                    </Skill>
                    <Advice>
                        <a href="">
                            <Image>
                                <img src="/assets/loud.svg" alt="" />
                            </Image>
                            <h1>Get advice & find collaborators</h1>
                            <p>Discover more</p>
                        </a>
                    </Advice>
                    <Hired>
                        <a href="">
                            <Image>
                                <img src="/assets/building.svg" alt="" />
                            </Image>
                            <h1>Get hired by top companies</h1>
                            <p>Discover more</p>
                        </a>
                    </Hired>
                </DiscoverySection>
            </Content>
    )
}


const Content = styled.div `
    max-width: 100%;
    background-color: white;
    display: block;
`

const DiscoverySection = styled.div `
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 15px;
    text-align: left;
    padding: 60px 20px;
    max-width: 920px;
    box-sizing: content-box;
    margin: 0px auto;

    @media (max-width: 768px){
        align-items: center;
        margin-left: 50px;
        text-align: center;
    }
`
const Job = styled.div `
    grid-area: 1 / 2 / 1 / 6;
    margin-bottom: 50px;
    width: 300px;
    /* text-decoration: none; */

    @media (max-width: 768px){
        grid-area: 1;
    }

    a{
        display: block;
        margin: 0px;
        font-size: 16px;
        font-weight: 400;
        text-decoration: none;
        line-height: 1.350;
        color: rgb(56, 56, 57);

        p{
            font-size: 14px;
            font-weight: 300;
        }
    }


    h1{
        margin-top: 15px;
        margin-bottom: 10px;
    }
`

const Skill = styled.div `
    grid-area: 1 / 8 / 1 / 12;
    margin-bottom: 50px;

    @media (max-width: 768px){
        grid-area: 2;
    }

    a{
        display: block;
        margin: 0px;
        font-size: 16px;
        font-weight: 400;
        text-decoration: none;
        line-height: 1.350;
        color: rgb(56, 56, 57);

        p{
            font-size: 14px;
            font-weight: 300;
        }
    }

   

    h1{
        margin-top: 15px;
        margin-bottom: 10px;
    }
`
const Advice = styled.div `
    grid-area: 2 / 2 / 2 / 6;
    margin-bottom: 50px;

    @media (max-width: 768px){
        grid-area: 3;
    }

    a{
        display: block;
        margin: 0px;
        font-size: 16px;
        font-weight: 400;
        text-decoration: none;
        line-height: 1.350;
        color: rgb(56, 56, 57);

        p{
            font-size: 14px;
            font-weight: 300;
        }
    }


    h1{
        margin-top: 15px;
        margin-bottom: 10px;
    }
`

const Image = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    background-color: #f8f8f8;

    @media (max-width: 768px){
        margin: auto;
    }
`
const Hired = styled.div `
    grid-area: 2 / 8 / 2 / 12;
    margin-bottom: 50px;

    @media (max-width: 768px){
        grid-area: 4;
    }

    a{
        display: block;
        margin: 0px;
        font-size: 16px;
        font-weight: 400;
        text-decoration: none;
        line-height: 1.350;
        color: rgb(56, 56, 57);

        p{
            font-size: 14px;
            font-weight: 300;
        }
    }

   

    h1{
        margin-top: 15px;
        margin-bottom: 10px;
    }
`

export default Discover