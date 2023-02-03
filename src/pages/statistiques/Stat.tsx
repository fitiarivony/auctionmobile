import { IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar,IonLabel,IonText,IonInput,IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';
import Client from '../../interfaces/Client';
import Statistique from '../../interfaces/Statistique';
import Categorie from '../../interfaces/Categorie';
import Mouvement from '../../interfaces/Mouvement';
import Tab from './Tab';
import StatChart from '../../interfaces/StatChart';
import ChartConfig from '../../interfaces/ChartConfig';
import NavMobile from '../navbar/NavMobile';


const Stats: React.FC = () => {
    let cat:Categorie={
        idcategorie:"cat",
        nomcategorie:"Antiquite",
    }
    let move:StatChart[]=[
        {
          label:"Janvier",
          value:"1000"  
        },
        {
          label:"Février",
          value:"2000"  
        },
        {
          label:"Mars",
          value:"1009"  
        },
        {
          label:"Avril",
          value:"1200"  
        },
        {
          label:"Mai",
          value:"1300"  
        },
        {
          label:"Juin",
          value:"1300"  
        },
        {
          label:"Juillet",
          value:"2000"  
        },
        {
          label:"Aout",
          value:"2000"  
        },
        {
          label:"Septembre",
          value:"3000"  
        },
        {
          label:"Octobre",
          value:"2000"  
        },
        {
          label:"Novembre",
          value:"3000"  
        },
        {
          label:"Decembre",
          value:"2000"  
        },
       
  
    ]
  let stats:Statistique={
        categorie:cat,
        moyennecomm:10,
        variation:move
  }

  const dataSource = {
    chart: {
      caption: "Variation des soldes de compte",
      subCaption: "variation de votre compte",
      xAxisName: "Mois",
      yAxisName: "Solde de compte",
      numberSuffix: "Ar",
      theme: "fusion"
    },
    data: stats.variation
  };
  const chartConfigs= {
    type: "column2d",
    width: 600,
    height: 400,
    dataFormat: "json",
    dataSource: dataSource
  };
  

  const [statistique,setStats]=useState<Statistique>(stats);
    return(
      <>
      
        <IonPage>

        <IonHeader>
          <IonToolbar>
            <IonTitle>Statistique</IonTitle>
          </IonToolbar>
          <NavMobile></NavMobile>
        </IonHeader>


        <IonContent className="ion-padding">
        <IonRow>
          <IonCol>

          <IonCard color="primary">
      <IonCardHeader>
        <IonCardTitle>Categorie le plus rencheri</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
       {statistique.categorie.nomcategorie}
      </IonCardContent>
    </IonCard>

          </IonCol>
          <IonCol>

          
      

      <IonCard color="success">
          <IonCardHeader>
            <IonCardTitle>Moyenne des comissions</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {statistique.moyennecomm}
          </IonCardContent>
        </IonCard>
          </IonCol>
        </IonRow>
        
          <IonRow>
            <IonCol></IonCol>
            <IonCol>

            <IonItem >
          <IonCard>
            <Tab stat={chartConfigs} ></Tab>
            </IonCard>
         </IonItem>

            </IonCol>
            <IonCol></IonCol>

          </IonRow>

         
         
           
       
        </IonContent>
    </IonPage>
    </>
    )
}
export default Stats;