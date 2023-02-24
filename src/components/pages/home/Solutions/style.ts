import styled from 'styled-components'

export const Area = styled.section`
background-color: #0000007d;
margin: 0 auto;
text-align: center;
justify-content: center;
`
export const TitleArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top:2%;
`
export const Title = styled.h1`
color: whitesmoke;
padding: 0 15px;
`
export const Row = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const Card = styled.div`
background: #d5cfddb5;
border-radius: 5px;
box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
padding: 30px;
margin: 30px 20px;
width: 30%;
min-height: 300px;
transition: all 0.3s ease-out;
border-left: 3px solid #0086ff;
&:hover{
    transform: translateY(-5px);
    cursor: pointer;
}
`
export const Name = styled.h3`
color: #0f0f0f;
`
export const Description = styled.p`
color: #181818;
`
export const Image = styled.img`
border-radius: 3px;
margin-top: 20px;
max-width: 80%;
max-height: 80%;
`