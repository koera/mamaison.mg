export default class AnnonceView
{
    constructor( annonce )
    {
        this._annonce = annonce
    }

    render()
    {
        let annonce = this._annonce
        return `<div class="item-wrap">
                    <div class="property-item table-list">
                        <div class="table-cell">
                            <div class="figure-block">
                                <figure class="item-thumb">
                                    <span class="label-featured label label-success">En vedette</span>
                                    <div class="price hide-on-list">
                                        <h3> AR ${ annonce.prix }</h3>
                                    </div>
                                    <a href="#">
                                        <img src="#" alt="thumb" width="364" height="244">
                                    </a>
                                    <figcaption class="thumb-caption cap-actions clearfix">
                                        <div class="pull-left hidden-xs">
                                        <span data-toggle="tooltip" data-placement="top" title="" data-original-title="Photos">
                                            <i class="fa fa-camera"></i> <span class="count">{{ annonce.galleries |length }}</span>
                                        </span>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div class="item-body table-cell">
                            <div class="body-left table-cell">
                                <div class="info-row">
                                    <h2 class="property-title"><a href="#">${ annonce.typeAnnonce.valeur }</a></h2>
                                    <h4 class="property-location">${ annonce.adresse }</h4>
                                </div>
                            </div>
                            <div class="table-list full-width hide-on-list">
                                <div class="cell">
                                    <div class="info-row amenities">
                                        <p>${ annonce.category.type }</p>
                                    </div>
                                    <div class="body-right info-row">
                                    <a href="#" class="btn btn-primary">Détails <i class="fa fa-angle-right fa-right"></i></a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    }
}