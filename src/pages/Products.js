import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 100px;
  text-align: center;
`

const Wrapper = styled.div`
  width: 100%;
  margin: 50px;
`

const Image = styled.img`
  height: 200px;
  display: block;
  margin: auto;
`

const Title = styled.div`
  margin: 30px auto 15px;
  text-align: center;
  font-size: 18px;
  font-weight: 900;
`

const Card = styled.div`
  background-color: #fff;
  border: 3px solid rgb(255, 255, 255);
  box-shadow: rgb(60 64 88 / 3%) 0px 5px 20px 0px;
  border-radius: 16px;
  overflow: hidden;
  padding: 15px;

  &:hover {
    box-shadow: rgb(23 31 12 / 12%) 0px 5px 20px 0px;
  }
`

const ProductsList = styled.div`
  width: calc(100% - 100px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  overflow: hidden;
`

const Button = styled.button`
  display: block;
  color: white;
  background-color: #0066ff;
  padding: 10px 15px;
  border-radius: 8px;
  margin: 0 auto;
`

const Products = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  }, [])

  return (
    <Wrapper>
      <PageTitle>Products</PageTitle>

      <ProductsList>
        {products.map((product) => (
          <Card key={product.id}>
            <Image src={product.thumbnail} />

            <Title>{product.title}</Title>

            <Button onClick={() => navigate(`/product/${product.id}`)}>View Product</Button>
          </Card>
        ))}
      </ProductsList>
    </Wrapper>
  )
}

export default Products
