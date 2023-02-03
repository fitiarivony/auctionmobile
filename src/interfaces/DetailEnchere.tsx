import Sary from './Photo';
import Detail_catprod from './Detail_catprod';
interface DetailEnchere{
   idenchere:string,
   idproduit:string,
   dateenchere:string,
   prixenchere:number,
   dureeenchere:number,
   etat:number,
   idcommission:string,
   nomproduit:string,
   valeurcommission:number,
   sary:Sary[],
   detail_catprod:Detail_catprod[]
}
export default DetailEnchere;
