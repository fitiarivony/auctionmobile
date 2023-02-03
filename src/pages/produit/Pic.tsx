import React from 'react';
import { IonItem,IonButton} from '@ionic/react';
import { useState } from 'react';
import Picture from './Picture';

interface Props{
    change:any
    supprimer:any
    data:any
}
const Pic: React.FC<Props> = ({change,supprimer,data}) => {
    let [donne,setdonne]=useState<any>(data);

    
    const setImage = async (_event: any) => {
        let reponse:Picture={
            id:0,
            basesary:""
        };
        
        let f = _event.target.files![0];
        console.log(f);
        let reader = new FileReader();
    
        return new Promise(resolve => {
            reader.onloadend = function (){
                let donnee={id:donne.id,basesary:""+reader.result}
                reponse=donnee;
                resolve(reponse);
            };
            reader.readAsDataURL(f);
        });
    }
    
    const changeImage=async (_event: any)=>{
        let donnee=await setImage(_event);
       
       setdonne(donnee);
        change(donnee);  
    }



        return(
            <IonItem>
                      
                      <input
                    type="file"
                    id={"file-upload"+donne.id}
                    className="form-control"
                    // style={{ display: "none" }}
                    onChange={changeImage}
                   
                />
            <IonButton onClick={()=>{supprimer(data.id)}}>
                Enlever  photo
        </IonButton>
        </IonItem>
        );
}
export default Pic;