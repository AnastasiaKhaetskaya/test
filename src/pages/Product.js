import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 100px;
  text-align: center;
`

const Wrapper = styled.div`
  width: 100%;
  margin: 50px auto;
`

const Image = styled.img`
  height: 400px;
  width: 35%;
  display: block;
  margin: auto;
`

const Title = styled.div`
  margin: 30px auto 15px;
  font-size: 18px;
  font-weight: 900;
`

const TextWrapper = styled.div`
  margin: 15px auto;
`

const Card = styled.div`
  margin-right: 20px;
  width: 50%;
  border: 3px solid rgb(255, 255, 255);
  box-shadow: rgb(60 64 88 / 3%) 0px 5px 20px 0px;
  border-radius: 16px;
  overflow: hidden;
  padding: 15px;

  background-color: #fff;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`

const GoBackButton = styled.button`
  color: #0066ff;
  border: 2px solid #0066ff;
  padding: 10px 15px;
  border-radius: 8px;
  margin: 20px 100px;
`

const Product = () => {
  const [product, setProduct] = useState([])
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [id])

  return (
    <Wrapper>
      <GoBackButton onClick={() => navigate(-1)}> Go Back</GoBackButton>
      <PageTitle>Product Details Page</PageTitle>
      <Flex>
        <Image src={product.thumbnail} />
        <Card>
          <Title>{product.title}</Title>
          <TextWrapper>
            <b>Brand: </b>
            {product.brand}
          </TextWrapper>

          <TextWrapper>
            <b>Rating: </b>
            {product.rating}
          </TextWrapper>
          <TextWrapper>
            <b>Description: </b>
            {product.description}
          </TextWrapper>

          <TextWrapper>
            <b>Price: </b>
            {product.price} $
          </TextWrapper>

          <TextWrapper>
            <b>Category: </b>
            {product.category}
          </TextWrapper>

          <TextWrapper>
            <b>Stock: </b>
            {product.stock}
          </TextWrapper>
        </Card>
      </Flex>
    </Wrapper>
  )
}

export default Product
