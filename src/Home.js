import './App.css';


import React, { useState } from 'react';


import 'react-responsive-modal/styles.css';
import { PlusCircle, Edit, Trash2 } from 'react-feather';
import { Modal } from 'react-responsive-modal';


function App() {

  const blankuser = {
    "name":"",
    "email":""
   
  }
  
  
  const [open, setOpen] = useState(false);
  const [action,setAction] = useState('Add');
  const [userdata, setUserdata] = useState([]);
  const [user, setUser] = useState(blankuser);
  const [editIndex, setEditIndex] = useState(null);

  


  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
    setAction('Add')
  }

  const addUser = () => {
    setUserdata([...userdata,user]);
    setUser(blankuser);
    onCloseModal();
  }

  const editUser = (index) => {
    console.log("index",index);
    setAction('Edit');
    const selectedUser = userdata.find((x,i) => i === index);
    setUser(selectedUser);
    setEditIndex(index);
    onOpenModal(); 
  }

  const updateUser = () => {
    const newusers = userdata.map((x,i) => {
      if(i === editIndex){
        x = user
      }
      return x
    });
    setUserdata(newusers);
    setUser(blankuser);
    setEditIndex(null);
    onCloseModal();
  }

  const deleteUser = (index) => {
    const newusers = userdata.filter((x,i) => {return i !== index});
    setUserdata(newusers);
  }

  return (
    
    <div className="container">
      <div className="d-flex">
        <h1> Meu projeto em Crud </h1>
      </div>
      <div className="toolbar">
      <button className='btn btn-p' onClick={onOpenModal}><PlusCircle size={16}></PlusCircle><span>Adicionar</span></button>
      </div>
      <hr />
      <table className='table'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {userdata.length > 0 && userdata.map((user,index) => {
            return (<tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
             
              <td>
                <button className='btn ml2' onClick={() => editUser(index)}><Edit size={16}></Edit><span>Editar</span></button>
                <button className='btn ml2' onClick={() => deleteUser(index)}><Trash2 size={16}></Trash2><span>Deletar</span></button>
              </td>
            </tr>)
          })
          }
        </tbody>
      </table>

      <Modal open={open} onClose={onCloseModal} center>
        <h2>{action} Nome e E-mail </h2>
        
        <div className='form'>
          <label htmlFor="">Name</label>
          <input type="text" value={user.name} onChange={(e) => setUser({...user,"name" :e.target.value})} />
          <label htmlFor="">Email</label>
          <input type="text" value={user.email} onChange={(e) => setUser({...user,"email" :e.target.value})} />
          
          {action === 'Add' && <button className='btn' onClick={() => addUser()}>Eviar</button>}
          {action === 'Edit' && <button className='btn' onClick={() => updateUser()}>Editar</button>}
        </div>
      </Modal>
    </div>
  );
}

export default App;