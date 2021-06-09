import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Data from './components/data.json';
import SelectedBeast from './components/SelectedBeast';
import SelectForm from './components/SelectForm';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      img: '',
      description: '',
      show : false,
      horns : 0,
      selected : false
    };
  }

  showModal = (boolean) => {
    this.setState({
      show: boolean,
    })
  }


  modalContent = (title, img, description) => {
    this.setState({
      title: title,
      img: img,
      description: description
    })
  }

  numberOfHorns = (event) => {
    event.preventDefault();
    this.setState({
      horns : event.target.value
    })
    this.selectedShow();
  }

  selectedShow = () => {
    this.setState({
      selected: true
    })
  }

  render() {

    return (
      <div>
        <Header />
        <SelectForm numberOfHorns={this.numberOfHorns}  />
        <Main
          Data={Data}
          show={this.state.show} 
          onHide={() => this.showModal(false)}
          showModal={() => this.showModal(true)}
          modalContent={this.modalContent}
          horns={this.state.horns}
          selected={this.state.selected}
        />
        <SelectedBeast 
        show={this.state.show} 
        onHide={() => this.showModal(false)} 
        title={this.state.title}
        img={this.state.img}
        description={this.state.description}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
