import * as S from './style'
import options from './solutions'

const Solutions = () => {
    return (
        <S.Area>
            <S.TitleArea>
                <S.Title> Conheça nossas soluções </S.Title>
            </S.TitleArea>
            <S.Row>
                {options.map((item, key) => (
                    <S.Card key={key}>
                        <S.Name>
                            {item.name}
                        </S.Name>
                        <S.Description>
                            {item.description}
                        </S.Description>
                        <S.Image src={item.image} />
                    </S.Card>
                ))}
            </S.Row>
        </S.Area>
    )
}
export default Solutions