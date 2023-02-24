import * as S from './style'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const Form = () => {
    return (
        <S.Card>
            <S.Title>
                Nos envie uma mensagem!
            </S.Title>
            <S.Form>
                <S.InputArea>
                    <S.Input placeholder="João Silva" type="text" required />
                    <S.InputLabel>Seu nome *</S.InputLabel>
                </S.InputArea>
                <S.InputArea>
                    <S.Input placeholder="(71) 91234-5678" type="tel" required />
                    <S.InputLabel>Celular *</S.InputLabel>
                </S.InputArea>
                <S.InputArea>
                    <S.Input placeholder="Solicitação de Serviço" type="text" required />
                    <S.InputLabel>Assunto *</S.InputLabel>
                </S.InputArea>
                <S.MessageArea>
                    <S.Label>Mensagem *</S.Label>
                    <S.Message rows="4" required >
                    </S.Message>
                </S.MessageArea>
                <S.Button>Enviar</S.Button>
            </S.Form>
            <S.InfoArea>
                <S.InfoTitle>Outros Contatos</S.InfoTitle>
                <S.Info>
                    <BsWhatsapp />
                    <p>71 98899-5998</p>
                </S.Info>
                <S.Info>
                    <AiOutlineMail />
                    <p>itjtecnologia@tec.com</p>
                </S.Info>
            </S.InfoArea>
        </S.Card>
    )
}
export default Form