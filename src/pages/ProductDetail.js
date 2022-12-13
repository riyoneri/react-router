import { useParams } from 'react-router-dom'

const ProductDetail = () => {

    const params = useParams()

    return <section>
        <h2>Product Details</h2>
        <p>{params.productId}</p>
    </section>
}

export default ProductDetail