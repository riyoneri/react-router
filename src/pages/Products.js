import { Link } from 'react-router-dom'

const Products = () => {
    return <section>
        <h1>The Products Page</h1>
        <ul>
            <li><Link to='/products/product-detail/p1'> A Book </Link></li>
            <li><Link to='/products/product-detail/p2'>A Carptet</Link></li>
            <li><Link to='/products/product-detail/p3'>An Online Course</Link></li>
        </ul>
    </section>
}

export default Products