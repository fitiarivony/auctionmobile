import { IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar,IonLabel,IonText,IonInput,IonButton, IonSelect, IonSelectOption, IonApp } from '@ionic/react';
import React, { useState } from 'react';
import Client from '../../interfaces/Client';
import Enchere from '../../interfaces/Enchere';
import NavMobile from '../navbar/NavMobile';
import NavHelp from '../navbar/NavHelp';
import Produit from '../../interfaces/Produit';
import { useEffect } from 'react';
import { listeproduitdispo, listecomission } from '../../data/getdatas';
import Comission from '../../interfaces/Comission';
import URLHelper from '../../Helper/URLHelper';


const CreateEnchere: React.FC = () => {
    let enc:Enchere={
        idenchere:"",
        idproduit:"",
        dateenchere:"",
        prix_enchere:0,
        dureeenchere:0,
        etat:0,
        idcommission:"",
    }
    const [produits,setproduits]=useState<Produit[]|null>(null);
    const [enchere,setEnchere]=useState<Enchere>(enc);
    const [comissions,setcomissions]=useState<Comission[]>([]);

    useEffect(()=>{
        initialize();
    })
    
    const initialize =async ()=>{
      if(produits===null){
        let prods:Produit[]=[];
            await  listeproduitdispo(returnId()).then((data: any) => {
                prods= data.data as Produit[];
                
             });
             setproduits(prods);
      }
      if (comissions.length===0) {
        let comission:Comission[]=[];
        await  listecomission().then((data: any) => {
            comission= data.data as Comission[];
            
         });
         
         setcomissions(comission);
         console.log('----------------');
         console.log(comission);
         console.log('----------------');
         
    }
    }
    const returnId=()=>{
      if(localStorage.getItem("idutilisateur")!==null){
          return ""+localStorage.getItem("idutilisateur");
      }
      return "";
    }
    
  const handleSubmit=(event:React.FormEvent)=>{
        event.preventDefault();
        console.log(enchere);
        
       //Fonction 
   }
   const handleDateChange=(event:any)=>{
        let ench:Enchere=enchere;
        ench.dateenchere=event.target.value;
        setEnchere(ench);
        // console.log(enchere);
        
   }
   const handleProduitChange=(event:any)=>{
    let ench:Enchere=enchere;
    ench.idproduit=event.target.value;
    setEnchere(ench);
    // console.log(enchere);
    
    }
    const handlePriceChange=(event:any)=>{
      let ench:Enchere=enchere;
      ench.prix_enchere=event.target.value;
      setEnchere(ench);
      console.log(enchere);
      
  }
  const handleDureeChange=(event:any)=>{
    let ench:Enchere=enchere;
    ench.dureeenchere=event.target.value;
    setEnchere(ench);
  
    console.log(enchere);
}
const handleCommissionChange=(event:any)=>{
  let ench:Enchere=enchere;
  ench.idcommission=event.target.value;
  setEnchere(ench);
  console.log(enchere); 
}
console.log(comissions);

const notification=(idutilisateur:string|null)=>{
  fetch(URLHelper.urlgen("utilisateur/notification/"+idutilisateur),{method:'GET',headers:{ 'Content-Type': 'application/json'}})
      .then(res=>{return res.json() ; })
      .then(data=>{ 
        if (data.status === undefined) {}else{
           alert("erreur");
           console.log("echec");
       }
      })
}
notification(localStorage.getItem("idutilisateur"));

// Ity ny fonction ako farany
const returnSelectOption=()=>{
  let authorization=(new URLSearchParams(window.location.search)).get('authorization');
  let link="";
  if(authorization!==null){
      link="?authorization="+authorization;
  }
    if(produits?.length===0)
    return <IonButton href={'/produit/create'+link}>Creer produit</IonButton>
    else return (
      <IonSelect name='idproduit' onIonChange={handleProduitChange}>
      {produits?.map(produit =>
       <IonSelectOption value={produit.idproduit} key={produit.idproduit}>{produit.nomproduit}</IonSelectOption>
        )}
    </IonSelect>
    );
}
   
    return(

     
      <IonApp>
        <NavMobile/>         
        <IonPage className="ion-page" id="main-content">
        <IonHeader>
          <IonToolbar>
             <NavHelp/>
            <IonTitle>Créer enchere</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <form id="myForm" method="get" onSubmit={handleSubmit}>
      
        <IonItem>
        <IonLabel position="stacked">
                Produit <IonText color="danger">*</IonText>
        </IonLabel>
       {returnSelectOption()}
        </IonItem>


        <IonItem>
              <IonLabel position="stacked">
                Date enchere: <IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput
              
                required
                type="datetime-local"
                onIonChange={handleDateChange}
              ></IonInput>
            </IonItem>


            <IonItem>
              <IonLabel position="stacked">
                Duree enchere:<IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput
                required
                onIonChange={handleDureeChange}
                type="number"
               
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">
                Prix minimum:<IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput
                required
                onIonChange={handlePriceChange}
                type="number"
               
              ></IonInput>
            </IonItem> 

        <IonItem>
        <IonLabel position="stacked">
                Commission <IonText color="danger">*</IonText>
        </IonLabel>
        <IonSelect name='idcommision' onIonChange={handleCommissionChange}>
            {comissions.map(comiss =>
                  <IonSelectOption value={comiss.idcomission} key={comiss.idcomission}>{comiss.valeurcomission} %</IonSelectOption>
                )}
        </IonSelect>
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
export default CreateEnchere;