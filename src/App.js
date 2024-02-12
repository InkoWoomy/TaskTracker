import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Table from 'react-bootstrap/Table';
import React from 'react';
import Button from 'react-bootstrap/Button';
import AddNewTask from './components/AddTaskModalComponent.js';

function ToDo() {
  return (
    <>
    <div className='bgTop'>
    <Button variant='dark'>Add New Task</Button>
    </div>
    
    <div className='bgImg'>
    
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          
          <th>To Do</th>
          <th>In Progress</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
       

      </tbody>
    </Table>
    </div>
    </>
  );
}

export default ToDo;