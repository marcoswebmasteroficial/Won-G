import Banner, { BannerProps } from 'components/Banner'
import Slider, { SliderSettings } from 'components/Slider'
import Image from 'next/image'
import * as S from './styles'

export type BannerSliderProps = {
  items: BannerProps[]
}

const BannerSlider = ({ items }: BannerSliderProps) => {
  const settings: SliderSettings = {
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    // eslint-disable-next-line react/display-name
    customPaging: (i) => {
      return (
        <S.itemSliderDots>
          <div>
            <S.itemSliderDotsImagem>
              <Image
                src={items[i].img}
                alt={items[i].title}
                layout="fill"
                objectFit="cover"
              />
            </S.itemSliderDotsImagem>
            <div>{items[i].title}</div>
          </div>
        </S.itemSliderDots>
      )
    },

    responsive: [
      {
        breakpoint: 1170,
        settings: {
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  }
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item) => (
          <Banner key={item.title} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default BannerSlider
