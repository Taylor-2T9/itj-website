import styled from 'styled-components'

export const Container = styled.div`
box-shadow: 8px 8px 30px 0px rgb(42 67 113 / 15%);
position: sticky;
top: 0;
width: 100%;
height: 50%;
z-index: 2;
`
export const Bar = styled.div`
display: flex;
flex-flow: row wrap;
align-items: stretch;
`
export const Nav = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
background-color: white;
`
export const Logo = styled.img`
cursor: pointer;
margin-left: 25px;
width: 15%;
height: 15%;
`
export const List = styled.ul`
display: flex;
flex-direction: row;
list-style-type: none;
color: #07368f;
`
export const Option = styled.li`
user-select: none;
box-sizing: border-box;
padding: 5px;
margin: 0px 18px;
float: left;
position: relative;
align-items: center;
height: 100%;
&:hover{
    cursor: pointer;
    font-weight: 500;
}
a{
    text-decoration: none;
    &:visited {
      color: #07368f;
    }
}
`