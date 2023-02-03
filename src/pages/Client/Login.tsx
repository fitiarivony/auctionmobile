import { IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar,IonLabel,IonText,IonInput,IonButton } from '@ionic/react';
import React, { useState } from 'react';
import ButtonSpinner from '../../components/ButtonSpinner';
import URLHelper from '../../Helper/URLHelper';
import Client from '../../interfaces/Client';



const Login: React.FC = () => {
    let admin:Client={
        identifiant:"jean",
        mdp:"jean",
    }
    const [client,setClient]=useState<Client>(admin);
    
    
  const handleSubmit=(event:React.FormEvent)=>{
        event.preventDefault();
        login();
   }
   const handleIdChange=(event:any)=>{
        let user:Client=client;
        user.identifiant=event.target.value;
        setClient(user);
   }
   const handleMdpChange=(event:any)=>{
    let user:Client=client;
    user.mdp=event.target.value;
    setClient(user);
    }

    const notifonconnect=(idutilisateur:string)=>{
      fetch(URLHelper.urlgen("utilisateur/notifonconnect/"+idutilisateur),{method:'GET',headers:{ 'Content-Type': 'application/json'}})
          .then(res=>{return res.json() ; })
          .then(data=>{ 
            if (data.status === undefined) {}else{
               alert("erreur");
               console.log("echec");
           }
          })
    }

    const login=()=>{         
        fetch(URLHelper.urlgen("utilisateur/login"),{method:'POST',headers:{ 'Content-Type': 'application/json'},body: JSON.stringify(client)})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            if (data.status === undefined) {
               localStorage.setItem("idutilisateur",data.data.idutilisateur);
               notifonconnect(data.data.idutilisateur);
                window.location.replace("/accueil?authorization="+data.data.token);  
            }else{
                alert("erreur");
                console.log("echec");
            }
         })
    }
    return(
      <>
        
        <form id="myForm" method="get" onSubmit={handleSubmit}>
        <IonItem>
              <IonLabel position="stacked">
                Email <IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput
              value="jean"
                required
                type="text"
                onIonChange={handleIdChange}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">
                Mot de passe:<IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput
                required
                value="jean"
                type="text"
                onIonChange={handleMdpChange}
              ></IonInput>
            </IonItem>
            <IonButton
              expand="block"
              type='submit'
              class="ion-no-margin"
            >
              Connexion
            </IonButton>
        </form>
        
    
    </>
    )
}
export default Login;