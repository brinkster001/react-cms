import React from 'react';
import './css/global.scss'; 
import './css/Product.scss'; 
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import ProductImg from '../img/500x300.png'

class Product extends React.Component {
  

  render() {
    return (
      <div id='product'>
        SKU-123
        <h1 className='underlined'>Product name</h1>
        <p className='page-description'>description of product</p>

       
          <Row>
            <Col><img src={ProductImg} alt='product-img' className='product-img'></img></Col>
            <Col>
              <Table responsive bordered size="sm">
                <thead>
                  <tr>
                    <th>Specification</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody className='products-table-body'>
                  <tr>
                    <td>Color</td>
                    <td>Grey</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>150g</td>
                  </tr>
                  <tr>
                    <td>COO</td>
                    <td>UK</td>
                  </tr>
                  <tr>
                    <td>Water resistant</td>
                    <td>NO</td>
                  </tr>
                  <tr>
                    <td>Color</td>
                    <td>Grey</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>150g</td>
                  </tr>
                  <tr>
                    <td>COO</td>
                    <td>UK</td>
                  </tr>
                  <tr>
                    <td>Water resistant</td>
                    <td>NO</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        
        <br></br><br></br>
        
        
      </div>
    )
  }
}

export default Product;