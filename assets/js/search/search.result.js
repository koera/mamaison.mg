import AnnonceBuilder from "./annonceBuilder";

class SearchResult
{
    constructor( response )
    {
        this.response = response
        this.annonces = new AnnonceBuilder( response.hits.hits ).build()
    }
    render()
    {
        console.log('annonce', this.annonces)
        let total = this.response.hits.total
        return `<div>
                    <p>${total}</p>
                <div>
                <div>
                    <p>${total}</p>
                <div>`
    }
}

export default SearchResult