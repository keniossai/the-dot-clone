import styled from 'styled-components'

const Footer = () => {

    return (
        <Container>
            <Section>
                <img src="/assets/logo.svg" alt="" />
                <Line></Line>
                <Content>
                    <OtherList>
                        <FooterList>
                            <List>Further Information</List>
                            <List><a href="">About the Dots</a></List>
                            <List><a href="">Join Beta Club</a></List>
                            <List><a href="">The Dots tips & insights</a></List>
                            <List><a href="">The Dots values</a></List>
                            <List><a href="">Join The—Dots</a></List>
                        </FooterList>
                        <FooterList>
                            <List>Employer</List>
                            <List><a href="">Hire talent</a></List>
                            <List><a href="">Post Jobs</a></List>
                            <List><a href="">Create company page</a></List>
                            <List><a href="">Pricing</a></List>
                            <List><a href="">Contact sales</a></List>
                        </FooterList>
                        <FooterList>
                            <List>Help & Support</List>
                            <List><a href="">FAQ</a></List>
                            <List><a href="">Terms & Condition</a></List>
                            <List><a href="">Privacy policy</a></List>
                            <List><a href="">Sitemap</a></List>
                            <List><a href="">Joint Controller</a></List>
                        </FooterList>
                        <FooterList>
                            <List>Socials</List>
                            <List><a href="">The Dots app</a></List>
                            <List><a href="">The dots page</a></List>
                            <List><a href="">Facebook</a></List>
                            <List><a href="">Instagram</a></List>
                            <List><a href="">Twitter</a></List>
                        </FooterList>
                    </OtherList>
                </Content>
                <Copyright>
                    <small>Copyright 2021 The—Dots©</small>
                </Copyright>
            </Section>
            <MobileFooter>
                <Contents>
                    <Main>
                        <a href="">Sitemap</a>
                        <small>The—Dots©Copyright 2021</small>
                    </Main>
                </Contents>
            </MobileFooter>
        </Container>
    )
}

const Container = styled.footer `
    z-index: 4;
    position: relative;
    background-color: #383839;  
`
const Section = styled.div `
    padding: 20px 40px;
    max-width: 1500px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;

    
    @media (max-width: 768px){
        display: none;
    }
`

const Line = styled.div `
    margin-bottom: 10px;
`

const Content = styled.div `
    display: flex;
    -webkit-box-align: start;
    align-items: flex-start;
`

const OtherList = styled.div `
    -webkit-box-flex: 1;
    flex-grow: 1;
    margin-right: 0;
    margin-left: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

const FooterList = styled.ul `
    flex-grow: 0;
    flex-basis: 25%;
    max-width: 25%;
    list-style: none;
`
const List = styled.li `
    color: white;
    padding: 5px 0;
    font-size: 12px;
    font-weight: 100;
    border-bottom: 1px solid hsla(0,0%,69.8%,.25);
    
    a{
        margin: 0px;
        font-size: 13px;
        font-weight: 400;
        -moz-osx-font-smoothing: grayscale;
        color: rgb(178, 178, 178);
        line-height: 1.23;
        text-decoration: none;
        background-color: transparent;
        transition: color .2s ease;

        &:hover{
            color: white;
        }

        
    }
`

const MobileFooter = styled.footer `
    z-index: 4;
    position: relative;
    background-color: #383839;
    display: none;

    @media (max-width: 768px){
        display: block;
    }
`
const Contents = styled.div `
    padding: 10px;
`
const Main = styled.div `
    display: flex;
    -webkit-box-align: start;
    align-items: flex-start;
    transition: color .2s ease;
    justify-content: space-between;

    a{
        margin: 0px;
        font-size: 13px;
        font-weight: 400;
        -moz-osx-font-smoothing: grayscale;
        color: rgb(178, 178, 178);
        line-height: 1.23;
        text-decoration: none;
        /* display: none; */
    }

    small{
        margin-left: auto;
        color: #b2b2b2;
        margin: 0px;
        font-size: 13px;
        font-weight: 400;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.23;
        /* justify-content: flex-end; */
    }
`

const Copyright = styled.div `
        padding-top: 12px;
        text-align: right;
        padding-right: 0;
        padding-left: 0;
        -webkit-box-flex: 0;
        flex-grow: 0;
        flex-basis: 100%;
        max-width: 100%;

        small{
            margin-left: 0;
            padding-right: 100px;
            margin: 0px;
            color: #b2b2b2;
            font-size: 13px;
            font-weight: 400;
            -moz-osx-font-smoothing: grayscale;
            line-height: 1.23;
            /* text-align: right; */
        }

`

export default Footer