
import Ajax from "../Helper/Ajax";
import FetchData from "../Helper/FetchData";
import URLHelper from "../Helper/URLHelper";


export function listecategories(){
  let ajax=new FetchData(URLHelper.urlgen("categorie/"),"GET");
  console.log(ajax.doget());
      return  ajax.doget();
}

export function listecomission(){
  let ajax=new FetchData(URLHelper.urlgen("comission/"),"GET");
  console.log(ajax.doget());
      return  ajax.doget();
}

export function listeunite(){
  let ajax=new FetchData(URLHelper.urlgen("unite/"),"GET");
  console.log(ajax.doget());
  return  ajax.doget();
}

export function listeproduitdispo(idutilisateur:string){
  let ajax=new FetchData(URLHelper.urlgen("produit/dispo/"+idutilisateur),"GET");
  console.log(ajax.doget());
  return  ajax.doget();
}
