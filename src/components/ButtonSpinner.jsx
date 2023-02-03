import React, { Component } from 'react';
import {IonButton } from '@ionic/react';
import {ClipLoader} from 'react-spinners'

class ButtonSpinner extends Component {
    render(){
        return(
<IonButton type="submit" color="success" className="btn btn-success"  >
{this.props.loading ? (
<>{this.props.titre}  <ClipLoader size={15} color="white"  /></> 
) : (
this.props.titre
)}
  
</IonButton>
);
    }
}
export default ButtonSpinner;

