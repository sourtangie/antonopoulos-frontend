# antonopoulos-frontend

Initial set-up and running the app:

1. Run npm install  in the front-end directory
2. Run npm start in the front-end directory

A development server will be started on localhost:3000 and the app will be hosted there. 

Information on the project: 

We made a system that logs document access in SharePoint to a Hyperledger Sawtooth blockchain network. 
This front-end application is able to authenticate 2 types of users; 

user_level 1 is a User that can only the the transactions made with his/her account
user_level 2 is the Admin user that can see all the transactions on the network and add new users to our system

If the server is offline you can login with these credentials: 
Email: test
Private Key: testKey


The code for this app is a representation of our process and my personal learning process. 
For example, I should have used Redux from day 1 for state management. But, at the time of beginning this application I felt like 
a state management library was unneeded since there was no complex state objects or login functionality planned at this time. 
When tasked with creating the login during the final sprint, the entire app was just using React's native functions for setting 
and reading states. At that point I decided to use Redux for the login and keep the rest as is, mostly because of a lack of time to convert
the whole app to Redux. 

If I had more time before the deadline I would do the following things: 
  - Convert all state to Redux 
  - Improve Error catching 
  - Consolidate multiple components into a single component to reduce duplicate code. 
      Example: ComplexTransactionListAdmin + ComplexTransactionListUser should be in 1 component that changes depending on the 
      user_level in state. When these components were created the Redux store was not added yet which meant i needed specific components for the admin and user page
      With Redux added and connecting this component, user_level will be able to determine how to render the component
