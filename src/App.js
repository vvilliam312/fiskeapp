import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// import Test from './display';
import Courses from './queries';

const client= new ApolloClient({
  uri:"https://fiskeapp.herokuapp.com/v1/graphql"
});



const App = () => (

<ApolloProvider client={client}>
  <div> 
    
    <Courses> </Courses>
   
  </div>
</ApolloProvider>

)

export default App;
