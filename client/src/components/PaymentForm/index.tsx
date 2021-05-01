import { ShoppingCart } from '@styled-icons/material-outlined'

import { Session } from 'next-auth'
import Button from 'components/Button'
import Heading from 'components/Heading'

import * as S from './styles'
type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" line="bottom">
          Payment
        </Heading>
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button fullWidth icon={<ShoppingCart />}>
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentForm
