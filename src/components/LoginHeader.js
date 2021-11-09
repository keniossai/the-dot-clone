import styled from 'styled-components'

const LoginHeader
 = (props) => {
	return (
		<Container>
			<Content>
				<a href='/' className='full-logo'>
					<img src='/assets/dot-logo.svg' alt='' />
				</a>
                <MenuListWrap>
                    <MenuList>
                        <a href="">Hire talent</a>
                    </MenuList>
                    <MenuList>
                        <a href="">Explore
                            <img src="/assets/down.svg" alt="" />
                        </a>
                    </MenuList>
                </MenuListWrap>
				<div className='menu'>
                    <Join>
                        <a href="/account/login">
                            Log in
                        </a>
                    </Join>
                    <JoinFree>
                        Join now for free
                    </JoinFree>
                    <JoinFreeSmall>
                        Join 
                    </JoinFreeSmall>
                    <BurgerMenu>
                        <img src="/assets/menu.svg" alt="" />
                    </BurgerMenu>
                </div>
			</Content>   
		</Container>
	)
}

const Container = styled.div`
    padding: 0 16px;
    left: 0;
    top: 0;
    width: 100vw;
    background-color: white;
    position: fixed;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    z-index: 100;
`

const Content = styled.div`
    max-width: 1370px;
    margin: 0 auto;
    padding: 10px 0 10px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

   

    & > a{
        width: 135px;
        height: 34px;

        img{
            width: 120px;
        }

        @media (max-width: 768px){
            padding: 0 5px;

        }
    }

    .menu{
        display: flex;
    }
`

const MenuListWrap = styled.ul `
    display: flex;
    margin-right: auto;
    padding-left: 110px;

    @media (max-width: 768px){
        display: none;
    }
`

const MenuList = styled.li `
    list-style: none;
    padding-right: 40px;
    padding-top: 9px;

    & a{
        display: flex;
        text-decoration: none;
        color: #393939;
        font-weight: 200;
        font-size: 14px;
        


        img{
            width: 23px;
            position: relative;
            bottom: 5px;
            left: 5px;
        }
    }
`

const Join = styled.a `
    font-size: 15px;
    padding: 10px 14px;
    text-decoration: none;
    color: #383839;
    margin-right: 20px;
    border: 1px solid #383839;
    border-radius: 4px;
    cursor: pointer;
    transition-duration: 167ms;

    &:hover{
        background-color: rgba(0, 0, 0, 0.03);
    }

    a{
        text-decoration: none;
        color: #383839;
    }

`

const JoinFree = styled.a `
    font-size: 15px;
    padding: 10px 15px;
    text-decoration: none;
    background-color: #383839;
    border: 1px solid #383839;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition-duration: 188ms;

    &:hover{
        background-color: #000;
    }

    @media (max-width: 768px){
        display: none;
    }
`

const JoinFreeSmall = styled(JoinFree)`
    display: none;

    @media (max-width: 768px){
        display: block;
    }
`

const BurgerMenu = styled.div `
    display: flex;
    align-items: center;
    cursor: pointer;
    background: none;
    
    
    
    img{
        padding: 0 20px 5px 35px;
        width: 25px;

        @media (max-width: 768px){
            padding: 0 35px;
        }

    }
`



export default LoginHeader

