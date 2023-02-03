import Categorie from './Categorie';
import StatChart from './StatChart';
interface Statistique{
    categorie:Categorie,
    moyennecomm:number,
    variation:StatChart[],
}
export default Statistique;