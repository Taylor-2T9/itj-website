import * as S from './style'

const Footer = () => {
    return (
        <S.Container>
            <S.List>
                <S.Option>
                    <h4>
                        Face
                    </h4>
                </S.Option>
                <S.Option>
                    <h4>
                        Insta
                    </h4>
                </S.Option>
                <S.Option>
                    <h4>
                        Linkedin
                    </h4>
                </S.Option>
                <S.Option>
                    <h4>
                        Youtube
                    </h4>
                </S.Option>
            </S.List>
            <S.List id='last'>
                <S.Option>
                    <h4>
                        Telefone
                    </h4>
                </S.Option>
                <S.Option>
                    <h4>
                        nossoemail@email.com
                    </h4>
                </S.Option>
            </S.List>
        </S.Container>
    )
}
export default Footer