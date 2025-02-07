import React, { useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import { deleteSeminar } from "../api/seminars.js";


const DeleteSeminarModal = (props) => {
    const [isDeleting, setDeleting] = useState(false);
    const handelDeleteSeminar = async () => {
      setDeleting(true);
      await deleteSeminar(props.seminarId);
      props.closeCallback();
    }

    return (
      <Modal show>
          <Modal.Header>
            <Modal.Title>Удаление семинара</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <p>Удалить семинар <strong>"{props.seminarTitle}"</strong>?</p>
            <p>Отменить данное действие будет невозможно</p>
          </Modal.Body>
  
          <Modal.Footer>
              <Button className='w-25' variant="outline-danger" disabled={isDeleting} onClick={handelDeleteSeminar}>{isDeleting ? <Spinner as="span" animation="border" size="sm" /> : 'Удалить'}</Button>
              <Button className='w-25' variant="outline-dark" disabled={isDeleting} onClick={props.closeCallback}>Отмена</Button>
          </Modal.Footer>
      </Modal>
    );
  }

export default DeleteSeminarModal;