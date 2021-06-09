import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

class SelectedBeast extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Modal {...this.props}  size="big" aria-labelledby="contained-modal-title-vcenter" centered   >
                    <Modal.Header >
                        <Modal.Title id="contained-modal-title-vcenter">
                            {this.props.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.props.img} alt={this.props.title} title={this.props.title} style={{ width: '100%', height: '100%' }} />
                        <p>
                            {this.props.description}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.onHide} >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default SelectedBeast;