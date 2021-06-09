import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Data from './components/data.json';
import SelectedBeast from './components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      img: '',
      description: '',
      show : false,
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

  render() {

    return (
      <div>
        <Header />
        <Main
          Data={Data}
          show={this.state.show} 
          onHide={() => this.showModal(false)}
          showModal={() => this.showModal(true)}
          modalContent={this.modalContent}
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
