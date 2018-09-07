import Nameable from './nameable'

class TypeAnnonce extends Nameable{
    constructor(id, valeur)
    {
        super(id,valeur)
    }

    get valeur()
    {
        return this.name
    }

    set valeur( valeur )
    {
        this.name = valeur
    }
}

export default TypeAnnonce