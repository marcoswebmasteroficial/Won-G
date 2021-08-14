import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black' | 'gray'
  line?: 'top' | 'bottom' | 'left' | 'right'
  lineColor?: LineColors
  size?: 'small' | 'medium' | 'huge'
}

const Heading = ({
  children,
  color = 'white',
  line,
  lineColor = 'primary',
  size = 'medium'
}: HeadingProps) => (
  <S.Wrapper color={color} line={line} lineColor={lineColor} size={size}>
    {children}
  </S.Wrapper>
)

export default Heading
