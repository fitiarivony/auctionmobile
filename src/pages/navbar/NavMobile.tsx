import { IonContent,IonIcon, IonHeader, IonMenu, IonListHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel,IonMenuToggle } from '@ionic/react';
import { useState, useEffect } from 'react';
import Accueil from '../Accueil/Accueil';
import {home, addCircle, addCircleSharp, create, listCircle, receiptSharp, discOutline} from 'ionicons/icons';
import CreateProduit from '../produit/CreateProduit';
import Rechargement from '../mouvement/Rechargement';
import URLHelper from '../../Helper/URLHelper';

const NavMobile: React.FC = () => {
  const deconnect=()=>{
    //ITOU
    fetch(URLHelper.urlgen("utilisateur/logout/"+localStorage.getItem("idutilisateur")),{method:'POST',headers:{ 'Content-Type': 'application/json'},body:'' })
        .then(res=>{return res.json() ; })
        .then(data=>{ 
            if (data.status === undefined) {
              localStorage.removeItem("idutilisateur");
              if (localStorage.getItem("idutilisateur")===null) {
                window.location.href="/";
              } 
            }else{
                alert("erreur");
                console.log("echec");
            }
         })    
}

let [option,setOption]=useState<string>();

useEffect(()=>{
  setOption('');
    if (new URLSearchParams(window.location.search).get('authorization')!==null) {
        setOption("?authorization="+new URLSearchParams(window.location.search).get('authorization'));
    }
})

  return (
    
    <IonMenu content-id="main-content">
    <IonHeader>
      <IonToolbar color="secondary">
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonList>
        <IonListHeader>Navigate</IonListHeader>
        <IonMenuToggle auto-hide="false">

        <IonItem button routerLink={'/accueil'+option} >
            <IonIcon slot="start" icon={home}></IonIcon>
            <IonLabel>Accueil</IonLabel>
          </IonItem>


          <IonItem button routerLink={'/enchere/create'+option}>
            <IonIcon slot="start" icon={addCircle}></IonIcon>
            <IonLabel>Inserer enchere</IonLabel>
          </IonItem>

          <IonItem button routerLink={'/produit/create'+option}>
            <IonIcon slot="start" icon={create}></IonIcon>
            <IonLabel>Créer un produit</IonLabel>
          </IonItem>

          <IonItem button routerLink={'/encheres'+option}>
            <IonIcon slot="start" icon={listCircle}></IonIcon>
            <IonLabel>Mes encheres</IonLabel>
          </IonItem>

          <IonItem button routerLink={'/recharge'+option}>
            <IonIcon slot="start"  icon={receiptSharp}></IonIcon>
            <IonLabel>Recharger mon compte</IonLabel>
          </IonItem>

          <IonItem button onClick={deconnect}>
            <IonIcon slot="start" icon={discOutline}></IonIcon>
            <IonLabel>Deconnexion</IonLabel>
          </IonItem>

        </IonMenuToggle>
      </IonList>
    </IonContent>
  </IonMenu>
  );
};


export default NavMobile;
