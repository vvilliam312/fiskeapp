import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';



class Test extends Component {
    


    constructor(props) {
      super(props);
      
      this.state = {
        columnDefs: [{
          headerName: "Id", field: "id"
        }, {
          headerName: "Person", field: "person"
        }, {
          headerName: "Name", field: "name"
        }, {
            headerName: "Kg", field: "kg"
        }, {
            headerName: "Bild", field: "bild"
        }, {
            headerName: "Team", field: "team"
        }],

        rowData: [{
          id: `${props.test.id}`, person: `${props.test.person}`, name:`${props.test.name}`,kg:`${props.test.kg}`,bild:`${props.test.bild}`,team:`${props.test.team}`
        }, {
        //     id: `${props.test.id}`,person: `${persons}`, price: 32000
        // }, {
        //   make: "Porsche", model: "Boxter", price: 72000
        }]
      }
    }
    render() {
        // console.log(this.props.test)
        return (
            
            <div
            className="ag-theme-balham"
            style={{
            height: '200px',
            width: '200px' }}
          >
            <AgGridReact
               
                
            //    pagination={true}
            //    editable={true}
             columnDefs={this.state.columnDefs}
             rowData={this.state.rowData}>
                 
           </AgGridReact>
         
          </div>
          
        );
        
      }
    }
// const Test= (props) => (
    
// <div id={props.test.id} key={props.test.id}>

// <p>
//     { ` id ${props.test.id} || by ${props.test.person} ,
//  ${props.test.name} , ${props.test.kg} , ${props.test.bild} , ${props.test.team}`}
 
//  </p>
// </div>
// );
export default Test;