import FetchData from "../Helper/FetchData";
import URLHelper from "../Helper/URLHelper";


export  function listeenchere(){
    let ajax=new FetchData(URLHelper.urlgen("enchere/details"),"GET");
      return  ajax.doget();
}