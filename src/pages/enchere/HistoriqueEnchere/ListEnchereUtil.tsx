import React, { useState } from 'react';
import { IonGrid, IonRow, IonCol, IonHeader, IonPage, IonTitle, IonToolbar, IonItem} from '@ionic/react';
import ListEnc from '../../../interfaces/ListEnc';



const ListEnchereUtil: React.FC= () => {
   
    let enc:ListEnc={
        idproduit:"",
        nomproduit: "vase",
        dateenchere: "02-12-23",
        prixenchere: 10000,
        dureeenchere: 4,
        etat: 1
    };
    
    const[item]=useState<ListEnc>(enc);

    return (

        <IonPage>
            <IonItem routerLink={`/enchere/histor`} detail={false}>
        <IonHeader>
        <IonToolbar>
          <IonTitle><h6> LISTE DES ENCHERES UTILISATEUR</h6></IonTitle>
        </IonToolbar>
      </IonHeader>

        <IonGrid className='grid-border'>
            <IonRow>
                <IonCol>Nom Produit</IonCol>
                <IonCol>DateEnchere</IonCol>
                <IonCol>Prix Enchère</IonCol>
                <IonCol>Durée</IonCol>
                <IonCol>Etat</IonCol>
            </IonRow>
            <br/>
                <IonRow >
                    <IonCol>{item.nomproduit}</IonCol>
                    <IonCol>{item.dateenchere}</IonCol>
                    <IonCol>{item.prixenchere}</IonCol>
                    <IonCol>{item.dureeenchere}</IonCol>
                    <IonCol>{item.etat}</IonCol>
                    
                </IonRow>
            
        </IonGrid>
        </IonItem>
        </IonPage>
    );
};

export default ListEnchereUtil;


