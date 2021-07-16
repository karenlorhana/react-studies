import React from 'react'
import { Head } from 'next/document'
import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/react-image.png" alt="Logo do react" />
    <S.Title> React Avançado</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJS and Styled Components
    </S.Description>
    <S.Illustration src="/img/hero-illustration.png" />
  </S.Wrapper>
)

export default Main
