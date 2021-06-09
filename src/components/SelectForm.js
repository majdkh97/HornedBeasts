import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


export class SelectForm extends Component {

    render() {
        return (
            <div>
                <Container className="p-3">
                    <Form.Control as="select" defaultValue="0" onChange={this.props.numberOfHorns}>
                        <option value="0">All </option>
                        <option value="1">1 Horn</option>
                        <option value="2">2 Horns</option>
                        <option value="3">3 Horns</option>
                        <option value="100">100 Horns</option>
                    </Form.Control>
                    <br />
                </Container>
            </div>
        )
    }
}

export default SelectForm;