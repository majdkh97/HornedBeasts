import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './data.json';
class Main extends React.Component {

    render() {
          return(
            Data.map((item)=>{
             return(
                 <HornedBeasts 
                     title= {item.title}
                     image_url = {item.image_url}
                     description = {item.description}
                 /> 
             )
             })
         )
    }
}

export default Main;