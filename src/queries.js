import React from 'react';
import { Query } from 'react-apollo';
// import qql from 'graphql-tag';
import gql from 'graphql-tag';
import Test from './display';



const Courses = () => (
<Query query={gql`
    {
        fiske {
            id
            person
            name
            kg
            bild
            team
          }
    }
    `}>

   
    {({loading,error,data}) =>{
    if (loading) return <p> loading...</p>
    if (error) return <p> Error! </p>
    // if(data.length === data.length+1){console.log("+1")}
    return data.fiske.map((currentTest ) => (
       <Test test={currentTest}/>
        
        ));
  
    }
    
    
    
    }
     </Query>
);

export default Courses;