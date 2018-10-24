import Category from "../entity/category";
import Annonce from "../entity/annonce";
import TypeAnnonce from "../entity/typeAnnonce";
import Ville from "../entity/ville";
import Quartier from "../entity/quartier";
import User from "../entity/user";
import Region from "../entity/region";

export default class AnnonceBuilder
{
    constructor( oneAnnonceInHits )
    {
        this.hits = oneAnnonceInHits
    }

    build()
    {
        if(Object.keys(this.hits).length > 0)
            return this.buildFromArrayHits()
        else return this.buildFromOneHits()
    }

    buildFromArrayHits()
    {
        let annonces = [];
        for(let i in this.hits)
        {
            annonces.push(this._buildHits(this.hits[i]))
        }

        return annonces
    }

    buildFromOneHits()
    {
        return this._buildHits(this.hits)
    }

    _buildHits( hits )
    {
        let source = hits._source

        let annonce = new Annonce()
        if(source){
            annonce.prix = source.prix
            annonce.updateAt = source.updated_at
            annonce.createAt = source.created_at
            annonce.surface = source.surface
            annonce.nombrePiece = source.nombre_piece
            annonce.titre = source.titre
            annonce.decription = source.titre
            annonce.uniteSurface = source.unite_surface
            annonce.id = source.id
            annonce.adresse = source.adresse
            annonce.category = new Category(source.category.id, source.category.type)
            annonce.typeAnnonce = new TypeAnnonce(source.type_annonce.id, source.type_annonce.valeur)
            annonce.user = new User(source.user.id, source.user.nom)

            let region = new Region(source.region.id, source.region.nom)
            let ville = new Ville(source.ville.id, source.ville.nom, region)
            let quartier = new Quartier(source.quartier.id, source.quartier.nom, ville)
            annonce.quartier = quartier



            let caracteristiques = source.caracteristiques
            let cars = []
            for(let i in caracteristiques)
            {
                cars.push(caracteristiques[i].id,caracteristiques[i].id)
            }
            annonce.caracteristiques = cars
        }

        return annonce
    }

}