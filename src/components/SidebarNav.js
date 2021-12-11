import styled from "styled-components"


const SidebarNav = () => {
    return (
        <Container>
            <div className='tabindex-1'><a className='option-1' href="">Post a Project</a></div>
            <div className="tabindex-1">
                <AskCommunity>
                    <span><small>New</small></span>
                    Ask the community
                </AskCommunity>
            </div>
        </Container>
    )
}

const Container = styled.div `
    padding: 65px 55px 55px;
    width: 370px;
    transform: translateX(100%);
    transition: transform 0.35s ease 0s;
    position: fixed;
    right: 0px;
    top: 60px;
    outline: currentColor none medium;
    height: calc(-60px + 100vh);
    overflow-y: auto;
    text-align: right;
    background-color: rgb(56, 56, 57);
    display: block;
    

    .tabindex-1{
        text-align: left;

        .option-1{
            font-size: 14px;
            line-height: 1;
            margin-bottom: 10px;
            padding: 8px 18px 7px;
            display: block;
            color: rgb(56, 56, 57);
            border-radius: 16px;
            opacity: 0;
            cursor: pointer;
            text-align: center;
            background-color: rgb(255, 255, 255);
            transform: translateX(80px);
            transform-origin: 100px 50px 0px;
            transition-property: opacity, transform;
            transition-duration: 0.35s, 0.35s;
            transition-timing-function: ease, ease;
            transition-delay: 0.1s;
        }
    }
`
const AskCommunity = styled.a `
    margin-bottom: 10px;
    display: inline-block;
    opacity: 0;
    font-size: 23px;
    line-height: 1.2;

    span{
        margin-right: 1.6ch;
        vertical-align: 0.3em;
        color: #383839;
        background-color: #eaeaea;
        display: flex;
        padding: 2px 4px;
        display: inline-block;
        height: 16px;
        border-radius: 6px;
    
        small{
            margin: 0px;
            font-family: var(--font-family);
            font-size: 11px;
            font-weight: 500;
            -moz-osx-font-smoothing: grayscale;
            color: rgb(56, 56, 57);
            line-height: 1.2;
            text-transform: uppercase;
        }
    }
`

export default SidebarNav
