import Nameable from './nameable'

class Ville extends Nameable{
    constructor(id, nom, region = null)
    {
        super(id, nom)
        this._region = region
    }

    get region()
    {
        return this._region
    }

    set region( region )
    {
        this._region = region
    }
}

export default Ville