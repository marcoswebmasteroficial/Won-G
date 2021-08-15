import { ParsedUrlQueryInput } from 'querystring'
import { ItemProps } from 'components/ExploreSidebar'
type ParseArgs = {
  queryString: ParsedUrlQueryInput
  filterItems: Pick<ItemProps, 'type' | 'name'>[]
}

export const parseQueryStringToWhere = ({
  queryString,
  filterItems
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const obj: any = {}
  Object.keys(queryString)
    .filter((item) => item !== 'sort')
    .forEach((key) => {
      if (key !== 'name') {
        //procurar item pela key
        const item = filterItems?.find((item) => item.name === key)

        //verificar se o item e do type checkbox
        const isCheckbox = item?.type === 'checkbox'

        obj[key] = !isCheckbox
          ? queryString[key]
          : { name_contains: queryString[key] }
      } else {
        obj['name_contains'] = queryString[key]
      }
    })
  return obj
}

export const parseQueryStringToFilter = ({
  queryString,
  filterItems
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}
  Object.keys(queryString).forEach((key) => {
    //procurar item pela key
    const item = filterItems?.find((item) => item.name === key)
    //verificar se o item e do type checkbox
    const isCheckbox = item?.type === 'checkbox'
    //verifica se a key é array
    const isArray = Array.isArray(queryString[key])
    //seta valor na key , verifica se for array e se for chebox coloca detro de um array ou nao
    obj[key] = !isArray && isCheckbox ? [queryString[key]] : queryString[key]
  })
  return obj
}
