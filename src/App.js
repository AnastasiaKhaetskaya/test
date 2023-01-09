import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { Home, About, Products, Product, NotFound } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<About />} />

        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<Product />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
