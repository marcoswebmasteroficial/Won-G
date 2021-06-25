import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'

import { QueryCategories_categories } from 'graphql/generated/QueryCategories'
import { QUERY_CATEGORIES } from 'graphql/queries/categories'

import formatPrice from 'utils/format-price'
import { getImageUrl } from 'utils/getImageUrl'
import { QueryPlatforms_platforms } from 'graphql/generated/QueryPlatforms'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((item) => ({
    img: getImageUrl(item.image?.url),
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
        img: getImageUrl(item.cover?.url),
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
        backgroundImage: getImageUrl(highlight.background?.url),
        floatImage: getImageUrl(highlight.floatImage?.url),
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
        img: getImageUrl(item.cover?.url),
        price: formatPrice(item.price),
        title: item.name
      }))
    : []
}

export const ordersMapper = (orders: QueryOrders_orders[] | undefined) => {
  return orders
    ? orders.map((item) => {
        return {
          id: item.id,
          paymentInfo: {
            flag: item.card_brand,
            img: item.card_brand ? `/img/cards/${item.card_brand}.png` : null,
            number: item.card_last4
              ? `**** **** **** ${item.card_last4}`
              : 'Free Game',
            purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(item.created_at))}`
          },
          games: item.games.map((game) => ({
            id: game.id,
            title: game.name,
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: `${getImageUrl(game.cover?.url)}`,
            price: formatPrice(game.price)
          }))
        }
      })
    : []
}

export const categoriesMapper = (
  categories: QueryCategories_categories[] | null | undefined
) => {
  return categories
    ? categories.map((item) => ({
        id: item.id,
        label: item.name,
        name: item.slug
      }))
    : []
}

export const platformsMapper = (
  platforms: QueryPlatforms_platforms[] | null | undefined
) => {
  return platforms
    ? platforms.map((item) => ({
        id: item.id,
        label: item.name,
        name: item.slug
      }))
    : []
}
