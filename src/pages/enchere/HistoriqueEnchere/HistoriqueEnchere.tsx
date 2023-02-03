import React, { useState } from 'react';
import { IonGrid, IonRow, IonCol, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import Historique from '../../../interfaces/Historique';



const ListEnchereUtil: React.FC= () => {
   
    let enc:Historique={
        idenchere:"1",
        idutilisateur:"1",
        daterenchere:"24-15-23",
        prix: 20000,
    };
    
    const[item]=useState<Historique>(enc);

    return (

        <IonPage>
          
        <IonHeader>
        <IonToolbar>
          <IonTitle><h6> HISTORIQUE DE RENCHERE</h6></IonTitle>
        </IonToolbar>
      </IonHeader>

        <IonGrid className='grid-border'>
            <IonRow>
                <IonCol>idEnchère</IonCol>
                <IonCol>idUtilisateur</IonCol>
                <IonCol>Date renchère</IonCol>
                <IonCol>Prix</IonCol>
                
            </IonRow>
            <br/>
                <IonRow >
                    <IonCol>{item.idenchere}</IonCol>
                    <IonCol>{item.idutilisateur}</IonCol>
                    <IonCol>{item.daterenchere}</IonCol>
                    <IonCol>{item.prix}</IonCol>
                    
                    
                </IonRow>
            
        </IonGrid>
        </IonPage>
    );
};

export default ListEnchereUtil;


