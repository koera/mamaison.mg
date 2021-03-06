import AnnonceBuilder from "./annonceBuilder";
import StyleDisplay from "./styleDisplay";
import AnnonceList from "./annonceList";
import Pagination from "./search.pagination";

class SearchResult
{
    constructor( query , response , client, page)
    {
        this.response = response
        this.annonces = new AnnonceBuilder( response.hits.hits ).build()
        this.client = client
        this.page = page
        this.query = query
    }
    render()
    {

        if(this.response.hits.total > 0){
            let display = new StyleDisplay(this.response).render();
            let grid = new AnnonceList(this.annonces).render()
            let pagination = new Pagination(this.query, this.response,this.client,this.page).render();
            return `<div class="container">
                    ${display}
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 list-grid-area">
                            <div id="content-area">
                                <!--start property items-->
                                <div class="property-listing grid-view">
                                    <div class="row">
                                        ${grid}
                                    </div>
                                </div>
                                <!--end property items-->
                            </div>
                        </div>
                        ${pagination}
                    </div>
                <div>`
        }
        else
            return `<div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 list-grid-area">
                            <div id="content-area">
                                Aucun resultat trouve
                            </div>
                        </div>
                    </div>
                <div>`
    }
}

export default SearchResult