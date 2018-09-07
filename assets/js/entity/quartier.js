import Nameable from './nameable';

class Quartier  extends Nameable{
    constructor(id, nom, ville = null)
    {
        super(id, nom)
        this._ville = ville
    }

    get ville()
    {
        return this._ville
    }

    set ville( ville )
    {
        this._ville = ville
    }
}

export default Quartier