import './App.css';


import firebase from './firebase/config';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Home from './Home';


function App() {


return (

 <HashRouter>
 
 <Routes>

  <Route path='/' element={ <Home /> } />
 
 </Routes>
 </HashRouter>

);
}
export default App;




{/* 
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function App() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Aqui você pode adicionar a lógica para enviar o email, por exemplo, usando uma API ou qualquer outro método.
    console.log("E-mail cadastrado:", email);
    handleClose();
  };

  return (
    <div className="App">
      <h1>Lista de e-mails</h1>
      <Button variant="primary" onClick={handleShow}>
        Cadastre o seu e-mail
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro de E-mail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Cadastrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
*/}