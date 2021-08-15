import { useSession } from 'next-auth/client'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
  hideSearch?: boolean
}

const Base = ({ children, hideSearch = false }: BaseTemplateProps) => {
  const [session] = useSession()
  return (
    <S.Wrapper>
      <Container>
        <Menu username={session?.user?.name} search={hideSearch} />
      </Container>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}
export default Base
