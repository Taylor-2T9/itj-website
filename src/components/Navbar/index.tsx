import * as S from './style'
import logo from '../../assets/logo (3).png'
import options from './routes'

const Navbar = () => {
    return (
        <S.Container>
            <S.Nav>
                <S.Logo src={logo} />
                <S.List>
                    {options.map((item, key) => (
                        <S.Option key={key}>
                            <a href={item.route}>
                                {item.name}
                            </a>
                        </S.Option>
                    ))
                    }
                </S.List>
            </S.Nav>
        </S.Container>
    )
}
export default Navbar