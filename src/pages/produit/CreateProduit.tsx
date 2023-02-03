import { IonContent, IonHeader, IonIcon, IonItem, IonPage, IonList, IonTitle, IonToolbar, IonLabel, IonText, IonInput, IonButton, IonSelect, IonSelectOption, IonCheckbox, IonApp, IonModal, IonButtons } from '@ionic/react';
import React, { useRef, useState } from 'react';
import Categorie from '../../interfaces/Categorie';
import Categorie_produit from '../../interfaces/Categorie_produit';
import Produit from '../../interfaces/Produit';
import Pic from './Pic';
import Picture from './Picture';
import ProduitSending from '../../interfaces/ProduitSending';
import FetchData from '../../Helper/FetchData';
import NavMobile from '../navbar/NavMobile';
import NavHelp from '../navbar/NavHelp';
import { useEffect } from 'react';
import { listecategories, listeunite } from '../../data/getdatas';
import Unite from '../../interfaces/Unite';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import ButtonSpinner from '../../components/ButtonSpinner';
import URLHelper from '../../Helper/URLHelper';



const CreateProduit: React.FC = () => {
    let idutilisateur=""+localStorage?.getItem('idutilisateur');
    let pro:Produit={
        idproduit:"PRO40",
        nomproduit:"",
        idutilisateur:idutilisateur,
        nombre:0, 
        idunite:"",
        descri:"",
    }
    useEffect(()=>{
        initialize();
    })

    const initialize=async ()=>{
        if(categories.length===0){
            let categories:Categorie[]=[];
            await  listecategories().then((data: any) => {
                categories= data.data as Categorie[];
                
             });
             setcategories(categories);
        }
        if (unite.length===0) {
            let unite:Unite[]=[];
            await  listeunite().then((data: any) => {
                unite= data.data as Unite[];
                
             });
             setunite(unite);
        }
        
    }

    const modal = useRef<HTMLIonModalElement>(null);
    const [categories,setcategories]=useState<Categorie[]>([]);    
    const [produit,setProduit]=useState<Produit>(pro);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [photo,setPhoto] = useState<Picture[]>([]);
    const [unite,setunite]=useState<Unite[]>([]);
    const [loading,setloading]=useState<boolean>(false);
    const handleSubmit=(event:React.FormEvent)=>{
        event.preventDefault();
        console.log(produit);
        setloading(true);
        let sary:ArrayBuffer|string[]=[];
        for (const element of photo) {
            sary.push(element.basesary);
        }
        let prodfinal:ProduitSending={
          nomproduit:produit.nomproduit,
          idutilisateur:""+localStorage.getItem('idutilisateur'),
          nombre:produit.nombre,
          descri:produit.descri,
          idunite:produit.idunite,
          categorie:selectedItems,
          sary:sary
        };
        console.log(prodfinal);
        insertprod(prodfinal);
    }

    const insertprod=async (prodfinal:ProduitSending)=>{
        let fetch:any=new FetchData("produit/insert","POST",prodfinal);
        let data=await fetch.dopost();
       if (data.status ===undefined) {
           setloading(false);
        let authorization=(new URLSearchParams(window.location.search)).get('authorization');
        let link="";
        if(authorization!==null){
            link="?authorization="+authorization;
        }
         alert("Success!");
         window.location.href="/enchere/create"+link;
       }else{
           alert("echec")
       }
         
    }

   const handleCategorieChange=(value:Categorie)=>{
    if(!selectedItems.includes(value.idcategorie)){
        setSelectedItems([...selectedItems,value.idcategorie]);
    }else{
        setSelectedItems(selectedItems.filter(item=>item!==value.idcategorie));
    }
    console.log("selectttt "+selectedItems);
    }


const handleProduitChange=(event:any)=>{
    setProduit({ ...produit, [event.target.name]: event.target.value });
}

const add=async ()=>{
    
    let pics=[...photo];
    if (pics.length===0) {
        pics.push({
            id:1,
            basesary:""
        });
    }else{
        pics.push({
            id:pics[pics.length-1].id+1,
            basesary:""
        });
    }
   
   await setPhoto(pics);
   openFileDialog(pics[pics.length-1].id);
   
}
const change=(el:any)=>{
    console.log("tonga ato");
    console.log(el);
    let newData=[];
        let data=[...photo];
        for (let element of data) {
            if(element.id===el.id){
                element=el;
                
            }
            newData.push(element);
        }
        setPhoto(newData);
}

const openFileDialog = (id:number) => {
    (document as any).getElementById("file-upload"+id).click();
};

const supprimer=(index:number)=>{
   
    let pics=[...photo];
    let newData:Picture[]=[];
    for (const element of pics) {
        if(element.id!==index)newData.push(element);
    }
    setPhoto(newData);
}

    const checked=(idcategorie:string)=>{
       if (selectedItems.includes(idcategorie)){
            return true;
       }
       return false;  
    }

  


   const elements= categories.map((categorie,index)=>{
    return (<IonItem key={index}>
            <IonLabel>
                {categorie.nomcategorie}
            </IonLabel>
            <IonCheckbox  checked={checked(categorie.idcategorie)} onClick={()=>handleCategorieChange(categorie)}></IonCheckbox>
        </IonItem>)
  });
    return(
        <IonApp>
             <NavMobile/>

             <IonPage className="ion-page" id="main-content">
        <IonHeader>
          <IonToolbar >
          <NavHelp/>
            <IonTitle>Créer produit</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent >
        <form id="myForm" method="get" onSubmit={handleSubmit}>
        <IonItem>
            <IonLabel position="stacked">
                Nom Produit:<IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput
                name='nomproduit'
                required
                onIonChange={handleProduitChange}
                type="text"               
              ></IonInput>
        </IonItem>
        
        <IonButton id="open-modal" color="secondary">
          Choisissez les categories du produit
        </IonButton>

        <IonModal ref={modal} trigger="open-modal" >
          <IonHeader>
            <IonToolbar>
              <IonTitle  color="secondary"><h6>Les categories possibles</h6></IonTitle>
              <IonButtons slot="end">
                <IonButton strong={true} onClick={() => modal.current?.dismiss()} >
                  Confirm
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
          <IonList>
                {elements}
            </IonList>
          </IonContent>
        </IonModal>

           

            <IonItem>
            <IonLabel position="stacked">
                Nombre du produit:<IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput
            name='nombre'
                required
                onIonChange={handleProduitChange}
                type="number"               
              ></IonInput>
        </IonItem>

        <IonItem>
        <IonLabel position="stacked">
                Unite <IonText color="danger">*</IonText>
        </IonLabel>
        <IonSelect name='idunite' onIonChange={handleProduitChange}>
            {unite.map(unit =>
                  <IonSelectOption value={unit.idunite}>{unit.nomunite}</IonSelectOption>
                )}
        </IonSelect>
        </IonItem>


        <IonItem>
            <IonLabel position="stacked">
                Description du produit:<IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput
            name='descri'
                required
                onIonChange={handleProduitChange}
                type="text"               
              ></IonInput>
        </IonItem>


        
           
                {photo.map((pic,index) =>
                    <Pic key={index}  change={change} supprimer={supprimer} data={pic}></Pic>
                    
                    )}

            

            <IonItem>
            <IonButton onClick={add} color="secondary" >                
                Ajouter photo
                </IonButton>
           

        </IonItem>
            <IonButton
              expand="block"
              type='submit'
              color="success"
              class="ion-no-margin"
              onClick={handleSubmit}
            >
                <ButtonSpinner loading={loading} titre="Insert"/>
            
            </IonButton>
        </form>
        </IonContent>
    </IonPage>
    </IonApp>
        )
}
export default CreateProduit;