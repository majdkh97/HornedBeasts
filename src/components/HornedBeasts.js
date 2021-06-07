import React from 'react';

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
            <header>
                <h1>{this.props.title}</h1>
                <img src={this.props.image_url} alt="" onClick={this.Voting}/>
                <p>{this.props.description}</p>
                <button onClick={this.Voting}>
                    &hearts;{this.state.amountOfVotes}
                </button>
            </header>
        )
    }
}

// export makes this file visible to other files/ components
export default HornedBeasts;