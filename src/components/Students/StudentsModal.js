import React from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';

const StudentsModal = ({isOpen, toggle}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add new student</ModalHeader>
      <ModalBody>
        <h3>Form</h3>
      </ModalBody>
    </Modal>
  );
};

export default StudentsModal;