
import {IMAGE_URL} from './../constant';
import {IMAGE_DETAIL_URL} from './../constant';


export default class AnnonceView
{
    constructor( annonce )
    {
        this._annonce = annonce
    }

    render()
    {
        let annonce = this._annonce;
        return `<div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
                    <div class="property-item table-list">
                        <div class="table-cell">
                            <div class="figure-block">
                                <figure class="item-thumb">
                                    <div class="price hide-on-list">
                                        <h3> AR ${ annonce.prix }</h3>
                                    </div>
                                    <a href="${IMAGE_DETAIL_URL}/${ annonce.id }" target="_blank">
                                        <img src="${IMAGE_URL}/${ annonce.id }" alt="${annonce.titre}" width="364" height="244">
                                    </a>
                                </figure>
                            </div>
                        </div>
                        <div class="item-body table-cell">
                            <div class="body-left table-cell">
                                <div class="info-row">
                                    <h2 class="property-title"><a href="${IMAGE_DETAIL_URL}/${ annonce.id }" target="_blank">${ annonce.titre }</a></h2>
                                    <h4 class="property-location">${ annonce.typeAnnonce.valeur } - ${ annonce.adresse }</h4>
                                </div>
                            </div>
                            <div class="table-list full-width hide-on-list">
                                <div class="cell">
                                    <div class="info-row amenities">
                                        <p>${ annonce.category.type }</p>
                                    </div>
                                    <div class="body-right info-row">
                                    <a target="_blank" href="${IMAGE_DETAIL_URL}/${ annonce.id }" class="btn btn-primary">Détails <i class="fa fa-angle-right fa-right"></i></a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    }
}