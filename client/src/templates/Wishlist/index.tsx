import Heading from 'components/Heading'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import Empty from 'components/Empty'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
}

const Wishlist = ({ games = [] }: WishlistTemplateProps) => (
  <>
    <Heading line="bottom" lineColor="primary" color="black" size="small">
      My Wishlist
    </Heading>

    {games.length ? (
      <Grid>
        {games?.map((game, index) => (
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
  </>
)

export default Wishlist
