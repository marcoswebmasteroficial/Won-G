import { useCart } from 'hooks/use-cart'
import Button, { ButtonProps } from 'components/Button'
import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'

type CartButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const CartButton = ({
  id,
  size = 'small',
  hasText = false
}: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()
  const ButtonText = isInCart(id) ? 'Remove from cart' : 'Add to cart'
  return (
    <Button
      icon={isInCart(id) ? <RemoveShoppingCart /> : <AddShoppingCart />}
      minimal
      size={size}
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
      aria-label={ButtonText}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default CartButton
