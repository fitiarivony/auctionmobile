import { IonContent, IonHeader, IonToolbar, IonApp, IonPage, IonTitle } from '@ionic/react';
import EnchereTable from './EnchereTable';
import ListEnc from '../../../interfaces/ListEnc';
import { listeenchere } from '../../../data/listeenchere';
import NavMobile from '../../navbar/NavMobile';
import NavHelp from '../../navbar/NavHelp';
import { useState, useEffect } from 'react';
import URLHelper from '../../../Helper/URLHelper';

const ListEncherePage: React.FC = () => {
   
    let [liste,setliste]=useState<ListEnc[]>([]);
    useEffect( ()=>{
       initialize();
    })
    const initialize=async ()=>{
        if(liste.length==0){
            let listEnc:ListEnc[]=[];
            await  listeenchere().then((data: any) => {
                listEnc= data.data as ListEnc[];
             });
             setliste(listEnc);
        }
    }
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
    return (
        <IonApp>
            <NavMobile/>
            <IonPage className="ion-page" id="main-content">
        
            
            <IonHeader>
           
                <IonToolbar >
                <NavHelp/>

                <IonTitle>Liste Encheres</IonTitle>    
                </IonToolbar>
            </IonHeader>
            <IonContent>
           
            <EnchereTable list={liste} />
        </IonContent>

        </IonPage>
        </IonApp>
    );
};
export default ListEncherePage
