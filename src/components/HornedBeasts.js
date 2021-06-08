import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amountOfVotes: 0
        }
    }
    Voting = () => {
        let tempValue = this.state.amountOfVotes;
        this.setState({
            amountOfVotes: tempValue += 1
        })
    }

    render() {
    
        return (

            // <header>
            //     <h1>{this.props.title}</h1>
            //     <img src={this.props.image_url} alt="" onClick={this.Voting}/>
            //     <p>{this.props.description}</p>
            //     <button onClick={this.Voting}>
            //         &hearts;{this.state.amountOfVotes}
            //     </button>
            // </header>


            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.image_url} onClick={this.Voting} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Button onClick={this.Voting} variant="primary">&hearts;{this.state.amountOfVotes}</Button>
                </Card.Body>
            </Card>

        )
    }
}

// export makes this file visible to other files/ components
export default HornedBeasts;