import styled from 'styled-components'

export const Card = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin: 0.5rem auto;
width: 27%;
background-color: #FFF;
border-radius: 10px;
box-shadow: 0 10px 20px 0 rgba(#999, .25);
padding: .75rem;
max-height: 535px;
`
export const Title = styled.h2`
margin-bottom: 0;
`
export const Form = styled.form`
padding: 2rem 1rem 0;
padding-top: 0.5rem;
`
export const InputArea = styled.div`
display: flex;
flex-direction: column-reverse;
text-align: left;
justify-content: center;
position: relative;
padding-top: 0.5rem;
font-size: 14px;
`
export const Input = styled.input`
background-image: none;
border: 1px solid #ced4da;
border-radius: 0.25rem;
display: block;
font-size: 16px;
line-height: 1.5;
margin-bottom: 0;
max-width: 100%;
padding: 6px 12px;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
width: 90%;
&:focus {
	outline: 0;
	border-color: #6658d3;
}
`
export const MessageArea = styled.div`
display: flex;
flex-direction: column;
text-align: left;
padding-top: 1.5rem;
font-size: 14px;
`
export const Message = styled.textarea`
margin-top: 1px;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
width: 95%;
&:focus {
	outline: 0;
	border-color: #6658d3;
}
`
export const InputLabel = styled.label`
pointer-events: none;
font-weight: 500;
`
export const Label = styled.label`
pointer-events: none;
font-weight: 500;
`
export const Button = styled.button`
cursor: pointer;
background-color: #ca26eb;
color: whitesmoke;
font-weight: 700;
margin-top: 25px;
padding: 15px 35px;
border-radius: 5px;
border: 0px solid #757575;
&:hover{
    background-color: #b426d1;
}
`
export const InfoArea = styled.div`
padding: 0.5rem 1rem;
text-align: center;
font-size: .875rem;
color: #1d2021;
`
export const InfoTitle = styled.p`
text-align: center;
`
export const Info = styled.div`
display: flex;
margin-top: -15px;
svg{
	margin-top: 16px;
	margin-right: 7px;
}
`