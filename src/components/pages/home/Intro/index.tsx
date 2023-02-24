import * as S from './style'
import { FaArrowDown } from 'react-icons/fa'

const Intro = () => {
    return (
        <S.Container>
            <S.Title>Leve Inovação para sua empresa!</S.Title>
            <S.Subtitle>Conheça nossas soluções e nossos softwares!</S.Subtitle>
            <S.Redirect href='/contact'> Fale Conosco!</S.Redirect>
            <S.IconArea>
                <FaArrowDown />
            </S.IconArea>
        </S.Container>
    )
}
export default Intro