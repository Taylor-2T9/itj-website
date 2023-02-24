import styled from 'styled-components'

export const Container = styled.div`
margin: 0 auto;
padding-top: 10%;
min-height: 440px;
text-align: center;
background-color: white;
h1, h3{
    color: #2a2a73;
}
justify-content: center;
`
export const Title = styled.h1`
`
export const Subtitle = styled.h3`
padding-bottom: 85px;
`
export const Redirect = styled.a`
background-color: #2a2a73;
color: whitesmoke;
padding: 14px 25px;
border: 1px solid whitesmoke;
text-decoration: none;
&:hover{
    background-color: whitesmoke;
    color: #2a2a73;
    padding: 14px 25px;
    border: 1px solid #2a2a73;
}
`
export const IconArea = styled.div`
margin-top: 10%;
svg{
    animation-name: moving;
    animation-duration: 4s;
    position: relative;
    bottom:0px;
    color: #2a2a73;
    @keyframes moving {
        0%   { bottom:12px; }
        20%  { bottom:0px; }
        40%  { bottom:12px; }
        60%  { bottom:0px; }
        80%  { bottom:12px; }
        100% { bottom:0px; }
    }
    width: 3.5%;
    height: 3.5%;
}
`