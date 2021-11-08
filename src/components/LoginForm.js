import styled from 'styled-components'

const LoginForm = (props) => {

    return(
        <Section>
                    <Card>
                        <h1>Log in to The Dots</h1>
                        <Form>
                            <Google>
                                <img src="/assets/google.svg" alt="" />
                                Log in with google
                            </Google>
                            <Line>
                            <hr className='leftLine' /><span>OR</span><hr className='rightLine' />
                            </Line>
                        </Form>
                        <Socials>
                            <Facebook>
                                <img src="/assets/facebook.svg" alt="" />
                            </Facebook>
                            <Twitter>
                                <img src="/assets/twitter.svg" alt="" />
                            </Twitter>
                            <Apple>
                                <img src="/assets/apple.svg" alt="" />
                            </Apple>
                            <Mail>
                                <img src="/assets/mail.svg" alt="" />
                            </Mail>
                        </Socials>
                    </Card>
                    <LowerCard>
                        <h1>Not a member?</h1>
                        <JoinDot>
                            Join The  <span> </span>  Dots
                        </JoinDot>
                    </LowerCard>
                
            </Section>
    )
   
}

const Section = styled.section `
    padding-top: 100px;
    display: grid;
    align-items: center;
    justify-content: center;
    
`
// const Main = styled.main `
//     /* position: relative; */
//     /* width: 100%; */
//     display: grid;
//     justify-content: center;
    
    
// `

const Card = styled.div `
    width: 450px;
    height: 330px;
    background-color: white;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 21px -1px rgba(0,0,0,0.16);
    -webkit-box-shadow: 0px 2px 21px -1px rgba(0,0,0,0.16);
    -moz-box-shadow: 0px 2px 21px -1px rgba(0,0,0,0.16);
    border-radius: 7px;
    
    h1{
        text-align: center;
        padding-top: 50px;
        font-size: 22px;
        font-weight: 500;
    }

    
`

const LowerCard = styled.div `
    display: flex;
    margin-top: 20px;
    width: 450px;
    height: 75px;
    background-color: white;
    align-items: center;
    box-shadow: 0px 2px 21px -1px rgba(0,0,0,0.16);
    -webkit-box-shadow: 0px 2px 21px -1px rgba(0,0,0,0.16);
    -moz-box-shadow: 0px 2px 21px -1px rgba(0,0,0,0.16);
    border-radius: 7px;
    justify-content: space-evenly;

    h1{
        text-align: left;
        position: relative;
        /* top: 30px; */
        /* right: 45px; */
        font-size: 15px;
        font-weight: 400;
    }
`

const JoinDot = styled.button `
    display: flex;
    width: 130px;
    height: 40px;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin-left: 30px;
    border: 1px solid #353535;
    border-radius: 5px;
    background: transparent;
    cursor: pointer;

    &:hover{
        background-color: rgba(0, 0, 0, 0.03);
    }
    

    span{
        width: 10px;
        height: 1px;
        background-color: #353535;
        position: relative;
        top: 1px;
    }
`

const Form = styled.div `
    margin-top: 50px;
    width: 408px;
`
const Google = styled.button `
    display: flex;
    justify-content: left;
    background-color: #ffffff;
    align-items: center;
    width: 330px;
    height: 45px;
    border: 1px solid #B2B2B2;
    margin: auto 60px;
    border-radius: 4px;
    transition-duration: 167ms;
    font-size: 15px;
    font-weight: 200;

    img{
        width: 30px;
        padding-right: 65px;
    }

    &:hover{
        background-color: #F4F4F4;
    }
`

const Line = styled.div `
    display: flex;
    padding-top: 20px;
    align-items: center;
    justify-content: center;
    padding-left: 40px;

    hr{
        width: 100px;
        color: #EAEAEA;
    }

    span{
        color: #383838;
        font-size: 13px;
    }
`

const Socials = styled.div `
    padding: 20px 60px 20px;
    display: flex;
`

const Facebook = styled.div `
    transition-duration: 176ms;
    padding-right: 48px;
    cursor: pointer;

    img{
        width: 47px;

        &:hover{
            transform: scale(1.1);
        }
    }
`

const Twitter = styled(Facebook)`
    transition-duration: 176ms;

    img:hover{
        transform: scale(1.1);
    }
`
const Apple = styled(Facebook)`
    transition-duration: 176ms;

    img:hover{
        transform: scale(1.1);
    }
`
const Mail = styled(Facebook)`
    transition-duration: 176ms;

    img:hover{
        transform: scale(1.1);
    }
`

export default LoginForm