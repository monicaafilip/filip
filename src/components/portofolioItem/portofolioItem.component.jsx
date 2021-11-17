import React from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './portofolioItem.styles.scss';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Descriere
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={props.url} alt='work' className='image'/>
       
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
const PortofolioItem = ({ imageUrl }) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className='portofolio-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                onClick={() => setModalShow(true)}
            />
               
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                url={imageUrl}
            />
            
        </div>
    )
}

export default PortofolioItem;