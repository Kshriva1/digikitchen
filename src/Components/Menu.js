import React from 'react';
import { Table,Form,FormGroup,Label,Input } from 'reactstrap';

class Menu extends React.Component {
   render() {
    return (
      <div className='pa3'>	
      <Table dark hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Food</th>
            <th>Quantity</th>
            <th>Click to Order</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>
            	<Form>
                  <FormGroup>
                    <Label for="exampleSelect"></Label>
                    <Input type="select" name="select" id="exampleSelect" style={{width:'40%'}}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Input>
                  </FormGroup>
                </Form>  

            </td>
            <td>@mdo</td>
            <td>Confirmed</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>
            	<Form>
                  <FormGroup>
                    <Label for="exampleSelect"></Label>
                    <Input type="select" name="select" id="exampleSelect" style={{width:'40%'}}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Input>
                  </FormGroup>
                </Form>  
            </td>
            <td>@fat</td>
            <td>Confirmed</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>
            	<Form>
                  <FormGroup>
                    <Label for="exampleSelect"></Label>
                    <Input type="select" name="select" id="exampleSelect" style={{width:'40%'}}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Input>
                  </FormGroup>
                </Form>  
            </td>
            <td>@twitter</td>
            <td>Confirmed</td>
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}

export default Menu;