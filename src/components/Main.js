import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {

    render() {
        return (

            
            this.props.Data.map(item => {
                if(this.props.horns===0)
                return  <HornedBeasts
                        show={this.props.show}
                        onHide={() => this.props.onHide(false)}
                        showModal={() => this.props.showModal(true)}
                        modalContent={this.props.modalContent}
                        key={item.title}
                        title={item.title}
                        image_url={item.image_url}
                        description={item.description}
                        
                    />
                                      
                
                
                else if(this.props.horns === item.horns){
                return <HornedBeasts
                    show={this.props.show}
                    onHide={() => this.props.onHide(false)}
                    showModal={() => this.props.showModal(true)}
                    modalContent={this.props.modalContent}
                    key={item.title}
                    title={item.title}
                    image_url={item.image_url}
                    description={item.description}
                    
                />
                }
            })
            
        )
    }
}

export default Main;