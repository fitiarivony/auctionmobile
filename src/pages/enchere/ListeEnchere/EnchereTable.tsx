import React from 'react';
import { IonGrid, IonRow, IonCol, IonLabel} from '@ionic/react';
import ListEnc from '../../../interfaces/ListEnc';

interface Props {
    list: ListEnc[];
}


const EnchereTable: React.FC<Props> = ({ list }) => {
    const formatEtat=(etat:number)=>{
        if(etat===0)return  <IonCol>En cours</IonCol>;
        else return <IonCol>Fini</IonCol>;
    }
    return (
        <IonGrid  className='grid-border' >
            <IonRow >
                <IonCol>
                   <IonLabel>Nom Produit</IonLabel> </IonCol>
                <IonCol><IonLabel>Date Enchère</IonLabel> </IonCol>
                <IonCol>Prix Enchère</IonCol>
                <IonCol>Durée Enchère</IonCol>
                <IonCol>Etat</IonCol>
            </IonRow>
            {list.map((item) => (
                <IonRow key={item.idproduit}>
                    <IonCol>{item.nomproduit}</IonCol>
                    <IonCol>{(new Date(item.dateenchere)).toLocaleString()}</IonCol>
                    <IonCol>{item.prixenchere}</IonCol>
                    <IonCol>{item.dureeenchere}</IonCol>
                    <IonCol>{formatEtat(item.etat)}</IonCol>
                </IonRow>
            ))}
        </IonGrid>
    );
};

export default EnchereTable;