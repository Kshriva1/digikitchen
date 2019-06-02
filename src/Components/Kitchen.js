import React from 'react';
import './Kitchen.css';
import { Table,Form,FormGroup,Label,Input,Button } from 'reactstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class Kitchen extends React.Component {
  
	render() {
    return (
      <div>	
      <div className='pa3'>
      <ReactHTMLTableToExcel style={{display:'flex',justifyContent:'center'}}
                    id="test-table-xls-button"
                    className="download-table-xls-button mb3 center"
                    table="table-to-xls"
                    filename="excelsheet"
                    sheet="excelsheet"
                    buttonText="Download as Excel"/>
                    	
      <Table dark hover id='table-to-xls'>
        <thead>
          <tr>
            
            <th>Item</th>
            <th>Quantity Ordered</th>
            <th>Quantity Prepared</th>
            <th>Click if Done</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lemonade</td>
            <td>
              <input disabled style={{width:'40%'}} type="number" />
            </td>
            <td><input disabled style={{width:'40%'}} type="number" /></td>
            <td><Button outline color="success">Done</Button></td>
            <td style={{color:'green'}}>Finished</td>
          </tr>
          <tr>
            <td>Root Beer</td>
            <td>
            	<input disabled style={{width:'40%'}} type="number" />
            </td>
            <td><input disabled style={{width:'40%'}} type="number" /></td>
            <td><Button outline color="success">Done</Button></td>
            <td style={{color:'green'}}>Finished</td>
          </tr>
          <tr> 
            <td>Coca Cola</td>
            <td>
            	<input disabled style={{width:'40%'}} type="number" />
            </td>
            <td><input disabled style={{width:'40%'}} type="number" /></td>
            <td><Button outline color="success">Done</Button></td>
            <td style={{color:'green'}}>Finished</td>
          </tr>
          <tr>
      
            <td>Mango Smoothy</td>
            <td>
            	<input disabled style={{width:'40%'}} type="number" />
            </td>
            <td><input disabled style={{width:'40%'}} type="number" /></td>
            <td><Button outline color="success">Done</Button></td>
            <td style={{color:'green'}}>Finished</td>
          </tr>
          <tr>
        
            <td>Regular Water</td>
            <td>
            	<input disabled style={{width:'40%'}} type="number" />
            </td>
            <td><input disabled style={{width:'40%'}} type="number" /></td>
            <td><Button outline color="success">Done</Button></td>
            <td style={{color:'green'}}>Finished</td>
          </tr>
          <tr>
        
            <td>HamBurger</td>
            <td>
            	<input disabled style={{width:'40%'}} type="number" />
            </td>
            <td><input disabled style={{width:'40%'}} type="number" /></td>
            <td><Button outline color="success">Done</Button></td>
            <td style={{color:'green'}}>Finished</td>
          </tr>
          <tr>
        
            <td>Apple Pie</td>
            <td>
            	<input disabled style={{width:'40%'}} type="number" />
            </td>
            <td><input disabled style={{width:'40%'}} type="number" /></td>
            <td><Button outline color="success">Done</Button></td>
            <td style={{color:'green'}}>Finished</td>
          </tr>
          <tr>
        
            <td>Fries</td>
           <td>
            	<input disabled style={{width:'40%'}} type="number" />
            </td>
            <td><input disabled style={{width:'40%'}} type="number" /></td>
            <td><Button outline color="success">Done</Button></td>
            <td style={{color:'green'}}>Finished</td>
          </tr>
          <tr>
        
            <td>Chicken Pizza</td>
            <td>
            	<input disabled style={{width:'40%'}} type="number" />
            </td>
            <td><input disabled style={{width:'40%'}} type="number" /></td>
            <td><Button outline color="success">Done</Button></td>
            <td style={{color:'green'}}>Finished</td>
          </tr>
          <tr>
        
            <td>Omlette</td>
           <td>
            	<input disabled style={{width:'40%'}} type="number" />
            </td>
            <td><input disabled style={{width:'40%'}} type="number" /></td>
            <td><Button outline color="success">Done</Button></td>
            <td style={{color:'green'}}>Finished</td>
          </tr>
        </tbody>
      </Table>
      </div>
      </div>
      )
    }
  }  

export default Kitchen;







