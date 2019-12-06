//
// import React, { useState } from "react";
// import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
// //import "./Login.css";
//
// export default function Login(props) {
//     const [email, setEmail] = useState("");
//     const [public_key, setPublic_key] = useState("");
//
//     function validateForm() {
//         return email.length > 0 && public_key.length > 0;
//     }
//
//     function handleSubmit(event) {
//         const { username, public_key } = this.state;
//         const { history } = this.props;
//
//         this.setState({ error: false });
//
//         if (!(username === 'Freek@freek.nl' && public_key === '123')) {
//             return this.setState({ error: true });
//         }
//
//         this.setState({logged_in: true});
//         props.history.push('/overview');
//     }
//
//     return (
//         <div className="Login">
//             <form onSubmit={handleSubmit}>
//                 <FormGroup controlId="email" bsSize="large">
//                     <FormLabel>Email</FormLabel>
//                     <FormControl
//                         autoFocus
//                         type="email"
//                         value={email}
//                         onChange={e => setEmail(e.target.value)}
//                     />
//                 </FormGroup>
//                 <FormGroup controlId="password" bsSize="large">
//                     <FormLabel>Public Key</FormLabel>
//                     <FormControl
//                         value={public_key}
//                         onChange={e => setPublic_key(e.target.value)}
//                         type="password"
//                     />
//                 </FormGroup>
//                 <Button block bsSize="large" disabled={!validateForm()} type="submit">
//                     Login
//                 </Button>
//             </form>
//         </div>
//     );
// }