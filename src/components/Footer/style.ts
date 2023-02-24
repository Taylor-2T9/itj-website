import styled from 'styled-components'

export const Container = styled.div`
box-shadow: 8px 8px 30px 0px rgb(42 67 113 / 15%);
position: relative;
z-index: 1;
border-bottom-style: solid;
border-bottom-width: 1px;
border-bottom-color: transparent;
background: #074f8c;
display: flex;
height: 75px;
align-items: center;
`
export const Bar = styled.div`
display: flex;
flex-flow: row wrap;
align-items: stretch;
`
export const Nav = styled.nav`
display: flex;
flex-direction: row;
`
export const List = styled.ul`
display: flex;
flex-direction: row;
list-style-type: none;
position: relative;
width: 100%;
vertical-align: middle;
height: 100%;
`
export const Option = styled.li`
box-sizing: border-box;
padding: 5px;
margin: 0px 20px;
float: left;
position: relative;
align-items: center;
height: 100%;
`