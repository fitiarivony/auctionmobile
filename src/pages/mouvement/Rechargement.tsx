import { IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar,IonLabel,IonText,IonInput,IonButton, IonApp} from '@ionic/react';
import React, { useState } from 'react';
import FetchData from '../../Helper/FetchData';
import Mouvement from '../../interfaces/Mouvement';
import NavMobile from '../navbar/NavMobile';
import NavHelp from '../navbar/NavHelp';


const Rechargement: React.FC = () => {
    let enc:Mouvement={
        idutilisateur:""+localStorage?.getItem('idutilisateur'),
        montant:0,
        dateinsertion:"",
        motif:"",
        valide:0
    }
    const [mouvement,setMouvement]=useState<Mouvement>(enc);
    
  const handleSubmit=async (event:React.FormEvent)=>{
        event.preventDefault();
       let headers={
        "Content-type": "application/json; charset=UTF-8",
        authorization:(new URLSearchParams(window.location.search).get("authorization"))
       };
        let fetch:any=new FetchData("mouvement","POST",mouvement);
       let data=await fetch.dopost(headers);
      if (data.status ===undefined) {
        alert("Success!");
        window.location.href="/accueil";
      }else{
          alert("echec")
      }
        
       //Fonction 
   }
   const handleIdUtilChange=(event:any)=>{
        let ench:Mouvement=mouvement;
        ench.idutilisateur=event.target.value;
        setMouvement(ench);
       
        
   }
   const handleMontantChange=(event:any)=>{
    let ench:Mouvement=mouvement;
    ench.montant=event.target.value;
    setMouvement(ench);
    
    }
    const handleDateChange=(event:any)=>{
      let ench:Mouvement=mouvement;
      ench.dateinsertion=event.target.value;
      setMouvement(ench);
      
      
  }
  const handleMotifChange=(event:any)=>{
    let ench:Mouvement=mouvement;
    ench.motif=event.target.value;
    setMouvement(ench);
    
    
}

   
    return(
      <IonApp>
        <NavMobile/>
       <IonPage className="ion-page" id="main-content">
        <IonHeader>
          <IonToolbar>
          <NavHelp/>
            <IonTitle>Rechargement compte</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <form id="myForm"  onSubmit={handleSubmit}>

            <IonItem>
              <IonLabel position="stacked">
                Montant:<IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput
                required
                onIonChange={handleMontantChange}
                type="number"
               
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">
                Date insertion:<IonText color="danger"></IonText>
              </IonLabel>
              <IonInput
                required
                onIonChange={handleDateChange}
                type="date"
               
              ></IonInput>
            </IonItem>


            <IonItem>
              <IonLabel position="stacked">
                Motif:<IonText color="danger"></IonText>
              </IonLabel>
              <IonInput
                required
                onIonChange={handleMotifChange}
                type="text"
               
              ></IonInput>
            </IonItem>

    

            <IonButton
              expand="block"
              type='submit'
              color="success"
              class="ion-no-margin"
            >
              Valider
            </IonButton>
<br />
            <IonButton
              expand="block"
              type='reset'
              color="danger"
              routerLink='/'
              class="ion-no-margin"
            >
              Annuler
            </IonButton>
        </form>
        </IonContent>
    </IonPage>
    </IonApp>
    )
}
export default Rechargement;