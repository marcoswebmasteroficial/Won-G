import Image from 'next/image'
import Link from 'next/link'
import { GameCardProps } from 'components/GameCard'
import * as S from './styles'
export type GameCardListProps = {
  items: GameCardProps[]
}
const GameCardList = ({ items }: GameCardListProps) => (
  <S.Wrapper>
    {items.map((item, index) => (
      <S.List key={index}>
        <S.Item>
          <S.Link>
            <Link href={`/game/${item.slug}`} passHref>
              <S.Content>
                <S.Left>
                  <S.ImageBox>
                    <Image
                      src={item.img ? item.img : ''}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </S.ImageBox>
                </S.Left>
                <S.Right>
                  <h1>{item.title}</h1>
                  <small>{item.developer}</small>
                </S.Right>
              </S.Content>
            </Link>
          </S.Link>
        </S.Item>
      </S.List>
    ))}
  </S.Wrapper>
)

export default GameCardList
