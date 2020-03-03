import React from 'react';
import './css/global.scss'; 
import './css/Products.scss'; 
import Table from 'react-bootstrap/Table'; 
import { Link } from 'react-router-dom';

class Products extends React.Component {
  

  render() {
    return (
      <div id='products'>
        <h1 className='underlined'>Products</h1>
        <p className='page-description'>Product list</p> 

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Product</th>
              <th>UM</th>
              <th>Price</th>
              <th>Currency</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody className='products-table-body'>
            <tr>
              <td><Link to="/products/001" className='sku-link'>xxv-3000</Link></td>
              <td className='product-title'>Wonderproduct S3000</td>
              <td>Ea</td>
              <td>750</td>
              <td>USD</td>
              <td>25</td>
            </tr>
            <tr>
              <td><Link to="/products/002" className='sku-link'>xxv-5000</Link></td>
              <td className='product-title'>Wonderproduct S5000</td>
              <td>Ea</td>
              <td>1300</td>
              <td>USD</td>
              <td>3</td>
            </tr>
            <tr>
              <td><Link to="/products/003" className='sku-link'>xxv-7000</Link></td>
              <td className='product-title'>Wonderproduct S7000</td>
              <td>Ea</td>
              <td>1750</td>
              <td>USD</td>
              <td>50</td>
            </tr>
            <tr>
              <td><Link to="/products/001" className='sku-link'>xxv-3000</Link></td>
              <td className='product-title'>Wonderproduct S3000</td>
              <td>Ea</td>
              <td>750</td>
              <td>USD</td>
              <td>25</td>
            </tr>
            <tr>
              <td><Link to="/products/002" className='sku-link'>xxv-5000</Link></td>
              <td className='product-title'>Wonderproduct S5000</td>
              <td>Ea</td>
              <td>1300</td>
              <td>USD</td>
              <td>3</td>
            </tr>
            <tr>
              <td><Link to="/products/003" className='sku-link'>xxv-7000</Link></td>
              <td className='product-title'>Wonderproduct S7000</td>
              <td>Ea</td>
              <td>1750</td>
              <td>USD</td>
              <td>50</td>
            </tr>
            <tr>
              <td><Link to="/products/001" className='sku-link'>xxv-3000</Link></td>
              <td className='product-title'>Wonderproduct S3000</td>
              <td>Ea</td>
              <td>750</td>
              <td>USD</td>
              <td>25</td>
            </tr>
            <tr>
              <td><Link to="/products/002" className='sku-link'>xxv-5000</Link></td>
              <td className='product-title'>Wonderproduct S5000</td>
              <td>Ea</td>
              <td>1300</td>
              <td>USD</td>
              <td>3</td>
            </tr>
            <tr>
              <td><Link to="/products/003" className='sku-link'>xxv-7000</Link></td>
              <td className='product-title'>Wonderproduct S7000</td>
              <td>Ea</td>
              <td>1750</td>
              <td>USD</td>
              <td>50</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Products;