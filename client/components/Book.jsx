import React from 'react'
import * as Bs from 'react-bootstrap'

const Book = ({...props}) => {
  const stars = []
  const star = (<div className='star' />)
  while(rating > 0){
    stars.push(star)
  }
  return(
  <Bs.Col md={12}>
    <Bs.Row>
      <Bs.Col md={12}>
        <Bs.Col md={6}>
          {title}
        </Bs.Col>
        <Bs.Col md={3}>
          {year}
        </Bs.Col>
        <Bs.Col md={4}>
          {stars}
        </Bs.Col>
      </Bs.Col>
    </Bs.Row>
    <Bs.Row>
      <Bs.Col md={12}>
        <Bs.Col md={4}>
          {genre}
        </Bs.Col>
        <Bs.Col md={8}>
          {actors}
        </Bs.Col>
      </Bs.Col>
    </Bs.Row>
  </Bs.Col>
  )
}
