import React from 'react';
import { IonPage, IonHeader,IonListHeader,IonButtons,IonIcon,IonMenuToggle,IonApp,IonMenu, IonToolbar, IonContent, IonTitle, IonItem, IonLabel, IonList, IonButton, IonSplitPane, IonMenuButton } from '@ionic/react';
import NavMobile from '../navbar/NavMobile';
import {menu} from 'ionicons/icons';
import NavHelp from '../navbar/NavHelp';
import { useState, useEffect } from 'react';
function Accueil() {
  let [option,setOption]=useState<string>();

  useEffect(()=>{
    setOption('');
      if (new URLSearchParams(window.location.search).get('authorization')!==null) {
          setOption("?authorization="+new URLSearchParams(window.location.search).get('authorization'));
      }
  })
  const deconnect=()=>{
      localStorage.removeItem("idutilisateur");
      if (localStorage.getItem("idutilisateur")===null) {
        window.location.href="/";
      }
      
  }
  return (
<IonApp>
   <NavMobile/>

    <IonPage className="ion-page" id="main-content">
      <IonHeader>
        <IonToolbar color="secondary">
        <NavHelp/>
          <IonTitle>Enchere</IonTitle>
        </IonToolbar>
      </IonHeader>

        <IonContent className="ion-padding">
     <IonList style={{ width: '100%', margin:'auto'}}>
       <IonItem >
         <IonLabel > <IonButton color="secondary" href={'/enchere/create'+option} style={{ width: '80%', margin:'auto'}}>Ajouter une enchere</IonButton> </IonLabel>
       </IonItem>

       <IonItem>
         <IonLabel> <IonButton color="secondary" href={'/produit/create'+option} style={{ width: '80%', margin:'auto'}}>Créer un produit</IonButton> </IonLabel>
       </IonItem>

       <IonItem>
         <IonLabel> <IonButton color="secondary" href={'/encheres'+option} style={{ width: '80%', margin:'auto'}}>Mes encheres</IonButton> </IonLabel>
       </IonItem>
       <IonItem>
         <IonLabel> <IonButton color="secondary" href={'/recharge'+option} style={{ width: '80%', margin:'auto'}}>Recharger mon compte</IonButton> </IonLabel>
       </IonItem>
       <IonItem>
         <IonLabel> <IonButton color="secondary" onClick={deconnect} style={{ width: '80%', margin:'auto'}}>Deconnexion</IonButton> </IonLabel>
       </IonItem>
     </IonList>
     </IonContent>
    </IonPage>
  </IonApp>





  );
}
export default Accueil;