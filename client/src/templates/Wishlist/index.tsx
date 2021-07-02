import { useWishlist } from 'hooks/use-wishlist'
import Heading from 'components/Heading'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'
import Empty from 'components/Empty'
import Loader from 'components/Loader'
import * as S from './styles'

const Wishlist = () => {
  const { items, loading } = useWishlist()
  return (
    <div data-cy="wishlist">
      <Heading line="bottom" lineColor="primary" color="black" size="small">
        My Wishlist
      </Heading>
      {loading ? (
        <S.Loading>
          <Loader />
        </S.Loading>
      ) : items.length > 0 ? (
        <Grid>
          {items?.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
          hasLink
        />
      )}
    </div>
  )
}

export default Wishlist
