import AnnonceView from "./annonceView";

export default class AnnonceList
{
    constructor( listAnnonces )
    {
        this._annonces = listAnnonces
    }

    render()
    {
        let annonceView = ''
        let annonceListView=''

        for( let i in this._annonces)
        {
            annonceView = new AnnonceView(this._annonces[i]).render()
            annonceListView = `${annonceListView} ${annonceView}`
        }

        return annonceListView
    }
}