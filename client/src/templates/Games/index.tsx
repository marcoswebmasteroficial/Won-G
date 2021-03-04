import { ParsedUrlQueryInput } from 'querystring'
import { useRouter } from 'next/router'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'
import { useQueryGames } from 'graphql/queries/games'
import Base from 'templates/Base'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard from 'components/GameCard'
import Loading from 'components/Loading'
import { Grid } from 'components/Grid'
import * as S from './styles'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter()
  const { data, loading, fetchMore } = useQueryGames({
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })
  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
    })
    return
  }

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        {loading ? (
          <S.Load>
            <Loading />
          </S.Load>
        ) : (
          <section>
            <Grid>
              {data?.games.map((item) => (
                <GameCard
                  key={item.slug}
                  title={item.name}
                  slug={item.slug}
                  developer={item.developers[0].name}
                  img={
                    item.cover
                      ? `http://localhost:1337${item.cover.url}`
                      : `http://localhost:3000/public/no-image.jpg`
                  }
                  price={item.price}
                />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <S.ArrowDowns>
                <ArrowDown size={35} />
                <ArrowDown size={30} />
                <ArrowDown size={25} />
              </S.ArrowDowns>
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
