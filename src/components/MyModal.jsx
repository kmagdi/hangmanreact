import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const MyModal=({modal,setModal,msg})=> {
 

  const toggle = () => setModal(!modal);

  return (
    <div>
      
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>A kitalálandó szó: <b>{msg.title} </b>volt.</ModalHeader>
        <ModalBody>
         {msg.msg}
        </ModalBody>
      </Modal>
    </div>
  );
}

