import AnnonceBuilder from "./annonceBuilder";
import StyleDisplay from "./styleDisplay";
import AnnonceList from "./annonceList";

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
        let display = new StyleDisplay().render();
        let grid = new AnnonceList(this.annonces).render()

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
                    </div>
                <div>`
    }
}

export default SearchResult