export default class Annonce{
    constructor()
    {
        this._caracteristiques = []
        this._typeAnnonce = {}
        this._quartier = {}
        this._category = {}
        this._user = {}
        this._updateAt = ''
        this._createAt = ''
        this._prix = 0
        this._surface = null
        this._description = ''
        this._nombrePiece = 0
        this._titre = ''
        this._id = 0
        this._uniteSurface = null
        this._adresse = ''
    }
    get caracteristiques()
    {
        return this._caracteristiques
    }

    set caracteristiques( caracteristiques )
    {
        this._caracteristiques = caracteristiques
    }

    get typeAnnonce()
    {
        return this._typeAnnonce
    }

    set typeAnnonce( typeAnnonce )
    {
        this._typeAnnonce = typeAnnonce
    }

    get category()
    {
        return this._category
    }

    set category( category )
    {
        this._category = category
    }

    get user()
    {
        return this._user
    }

    set user( user )
    {
        this._user = user
    }

    get quartier()
    {
        return this._quartier
    }

    set quartier( quartier )
    {
        this._quartier = quartier
    }

    get updateAt()
    {
        return this._updateAt
    }

    set updateAt( updateAt )
    {
        this._updateAt = updateAt
    }

    get createAt()
    {
        return this._createAt
    }

    set createAt( createAt )
    {
        this._createAt = createAt
    }

    get prix()
    {
        return this._prix
    }

    set prix( prix )
    {
        this._prix = prix
    }

    get surface()
    {
        return this._surface
    }

    set surface( surface )
    {
        this._surface = surface
    }

    get description()
    {
        return this._description
    }

    set description( description )
    {
        this._description = description
    }

    get nombrePiece()
    {
        return this._nombrePiece
    }

    set nombrePiece( nombrePiece )
    {
        this._nombrePiece = nombrePiece
    }

    get titre()
    {
        return this._titre
    }

    set titre( titre )
    {
        this._titre = titre
    }

    get id()
    {
        return this._id
    }

    set id( id )
    {
        this._id = id
    }

    get adresse()
    {
        return this._adresse
    }

    set adresse( adresse )
    {
        this._adresse = adresse
    }

    get uniteSurface()
    {
        return this._uniteSurface
    }

    set uniteSurface( uniteSurface )
    {
        this._uniteSurface = uniteSurface
    }
}