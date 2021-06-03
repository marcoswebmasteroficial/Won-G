import Empty from 'components/Empty'
import GameItem, { GameItemProps, PaymentInfoProps } from 'components/GameItem'
import Heading from 'components/Heading'
import * as S from './styles'

export type OrdersListProps = {
  items?: {
    id: string
    paymentInfo: PaymentInfoProps
    games: GameItemProps[]
  }[]
}

const OrdersList = ({ items = [] }: OrdersListProps) => (
  <S.Wrapper>
    <Heading line="bottom" lineColor="primary" color="black" size="small">
      My orders
    </Heading>

    {items.length ? (
      items.map((order) => {
        return order.games.map((game) => (
          <GameItem key={order.id} {...game} paymentInfo={order.paymentInfo} />
        ))
      })
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store and explore great games and offers"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default OrdersList
