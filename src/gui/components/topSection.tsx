import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import { DEVICE_SIZES } from '../../constants'
import Brand from './brand'
import Marginer from './marginer'

import LogoImg from '../../assets/images/logo.png'
import TopSectionBackgroundImg from '../../assets/images/landing-page.jpg'

const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px -150px;
  background-size: cover;

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.laptop}) {
    background-position: 0px 0px;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileXL}) {
    background-position: -80px 0px;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobile}) {
    height: 700px;
    background-position: -315px 0px;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileXS}) {
    height: 500px;
    background-position: -175px 0px;
  }
`

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(180, 220, 220, 0.5);
  display: flex;
  flex-direction: column;
`

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 5rem;

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileXL}) {
    height: 700px;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileXS}) {
    height: 500px;
  }
`

const LogoContainer = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

const LogoImage = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  filter: drop-shadow(0 0 2rem #fff);

  img {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileXL}) {
    align-items: flex-end;
    img {
      width: 160px;
      height: 160px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileXS}) {
    align-items: flex-end;
    img {
      width: 130px;
      height: 130px;
    }
  }
`

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #000;
  text-shadow: ${({ theme }) => theme.textShadow.default};
  font-size: 50px;

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobileXL}) {
    font-size: 24px;
  }
`

const SpecialText = styled.span`
  color: ${({ theme }) => theme.specialTextColor};
`

const TopSection = () => {
  const isMobileXS = useMediaQuery({ maxWidth: DEVICE_SIZES.mobileXS })
  const isMobile = useMediaQuery({ maxWidth: DEVICE_SIZES.mobileXL })

  let brandFontSize: number
  if (isMobileXS) {
    brandFontSize = 1.8
  } else if (isMobile) {
    brandFontSize = 2.2
  } else {
    brandFontSize = 3.5
  }

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        <TopSectionInnerContainer>
          <LogoContainer>
            {isMobile && (
              <LogoImage>
                <img src={LogoImg} alt="SHOESNOTINCLUDED logo" />
              </LogoImage>
            )}
            <Brand size={brandFontSize} withShadow={true}></Brand>
            <Marginer direction="vertical" margin={8} />
            <SloganText>L&apos;escape game plein air</SloganText>
            <SloganText>
              qui vous <SpecialText>rassemble</SpecialText>
            </SloganText>
            <Marginer direction="vertical" margin={15} />
          </LogoContainer>
          {!isMobile && (
            <LogoImage>
              <img src={LogoImg} alt="SHOESNOTINCLUDED logo" />
            </LogoImage>
          )}
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  )
}

export default TopSection
