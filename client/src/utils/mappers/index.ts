import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'
import formatPrice from 'utils/format-price'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((item) => ({
    img: `http://localhost:1337${item.image?.url}`,
    title: item.title,
    subtitle: item.subtitle,
    buttonLabel: item.button?.label || null,
    buttonLink: item.button?.link || null,
    ...(item.ribbon && {
      ribbon: item.ribbon.text,
      ribbonColor: item.ribbon.color,
      ribbonSize: item.ribbon.size
    })
  }))
}

export const gamesMapper = (games: QueryGames_games[] | null | undefined) => {
  return games
    ? games.map((item) => ({
        id: item.id,
        title: item.name,
        slug: item.slug,
        developer: item.developers[0].name,
        img: `http://localhost:1337${item.cover?.url}`,
        price: item.price
      }))
    : []
}

export const highlightMapper = (
  highlight: QueryHome_sections_freeGames_highlight | null | undefined
) => {
  return highlight
    ? {
        title: highlight.title,
        subtitle: highlight.subtitle,
        backgroundImage: `http://localhost:1337${highlight.background?.url}`,
        floatImage: `http://localhost:1337${highlight.floatImage?.url}`,
        buttonLabel: highlight.buttonLabel,
        buttonLink: highlight.buttonLink,
        alignment: highlight.alignment
      }
    : {}
}
export const cartMapper = (games: QueryGames_games[] | null | undefined) => {
  return games
    ? games.map((item) => ({
        id: item.id,
        img: `http://localhost:1337${item.cover?.url}`,
        price: formatPrice(item.price),
        title: item.name
      }))
    : []
}

export const ordersMapper = (orders: QueryOrders_orders[] | undefined) => {
  return orders
    ? orders.map((order) => {
        return {
          id: order.id,
          paymentInfo: {
            flag: order.card_brand,
            img: order.card_brand ? `/img/cards/${order.card_brand}.png` : null,
            number: order.card_last4
              ? `**** **** **** ${order.card_last4}`
              : 'Free Game',
            purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(order.created_at))}`
          },
          games: order.games.map((game) => ({
            id: game.id,
            title: game.name,
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: `http://localhost:1337${game.cover?.url}`,
            price: formatPrice(game.price)
          }))
        }
      })
    : []
}
