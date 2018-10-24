export default class StyleDisplay{

    constructor(result)
    {
        this._responses = result
    }
    
    render()
    {
        return `<div class="page-title breadcrumb-top">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="page-title-right">
                                ${this._responses.hits.total} Resultats
                            </div>
                        </div>
                    </div>
                </div>`
    }
}