import Nameable from './nameable'

class Category extends Nameable{
    constructor(id, type)
    {
        super(id,type)
    }

    get type()
    {
        return this.name
    }

    set type( type )
    {
        this.name = type
    }
}

export default Category