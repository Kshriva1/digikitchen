import React from 'react';
import './Menu.css'
import { Table,Form,FormGroup,Label,Input,Button } from 'reactstrap';

class Menu extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
    	orderConfirmation: false
    }
   }
   render() {
    return (
      <div>	
      <div className='selectItem'>
      DRINKS
      </div>
      <div className='pa3'>	
      <Table dark hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Drink</th>
            <th>Quantity</th>
            <th>Click to Order</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Lemonade</td>
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
            <td><Button color="warning">Order</Button></td>
            <td>Confirmed</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Root Beer</td>
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
            <td><Button color="warning">Order</Button></td>
            <td>Confirmed</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Coca Cola</td>
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
            <td><Button color="warning">Order</Button></td>
            <td>Confirmed</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Mango Smoothy</td>
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
            <td><Button color="warning">Order</Button></td>
            <td>Confirmed</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Regular Water</td>
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
            <td><Button color="warning">Order</Button></td>
            <td>Confirmed</td>
          </tr>
        </tbody>
      </Table>
      </div>
       <div className='selectItem'>
      FOODS
      </div>
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
            <td>HamBurger</td>
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
            <td><Button color="warning">Order</Button></td>
            <td>Confirmed</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Apple Pie</td>
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
            <td><Button color="warning">Order</Button></td>
            <td>Confirmed</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Fries</td>
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
            <td><Button color="warning">Order</Button></td>
            <td>Confirmed</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Chicken Pizza</td>
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
            <td><Button color="warning">Order</Button></td>
            <td>Confirmed</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Omlette</td>
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
            <td><Button color="warning">Order</Button></td>
            <td>Confirmed</td>
          </tr>
        </tbody>
      </Table>
      </div>
      </div>
    );
  }
}

export default Menu;