export default class Nameable{
    constructor(id, nom)
    {
        this._id = id
        this._nom = nom
    }
    get id()
    {
        return this._id
    }

    set id( id )
    {
        this._id = id
    }

    get name()
    {
        return this._nom
    }

    set name( name )
    {
        this._nom = name
    }
}