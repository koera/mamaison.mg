import { FORM_NAME_NO_ARRAY, FORM_NAME_ARRAY } from './constant'

class FormSearch
{
    constructor(form)
    {
        this.form = form
        this.query = [];
    }

    getTypeAnnonce()
    {
        let typeAnnonce = this.form.attr('data-type-annonce')
        return typeAnnonce
    }

    getValue(attr)
    {
        let val = this.form.find(`[name="${attr}"]`);
        if(val.length > 0)
        {
            return val[0].value
        }
        
        return null
    }
    getArrayValue(name)
    {
        let cat = new Array()
        let val = this.form.find(`[name="${name}"]:checked`);
        for(let i in val)
        {
            if(val[i].value) cat.push(val[i].value)
        }
        return cat
    }
    getParams()
    {
        let typeAnnonce = this.getTypeAnnonce()
        let query=[];

        for (let i in FORM_NAME_NO_ARRAY)
        {
            let params = this.getValue(i)
            let key = FORM_NAME_NO_ARRAY[i]
            if(params)
            {
                this.addQuery(key,params);
            }
        }

        for (let i in FORM_NAME_ARRAY)
        {
            let params = this.getArrayValue(i)
            let key = FORM_NAME_ARRAY[i]
            if(params && params.length > 0)
            {
                this.addQuery(key,params)
            }
        }

        if(typeAnnonce)
        {
            this.query.push({
                match :{
                    "type_annonce.id": typeAnnonce
                    }
                });
        }
        //get if annonce is valide
        this.query.push({
            bool: {
                filter: {
                    term: {
                        "valide": true
                    }
                }
            }
        });
        // get if not deleted
        this.query.push({
            bool: {
                must_not: {
                    exists: {
                        "field": "deletedat"
                    }
                }
            }
        });
        this.addPrixQuery()
        return this.query;
    }

    addQuery(key,params)
    {   
        if(typeof key === 'object')
        {
            this.query.push({
                multi_match :{
                    query: params,
                    fields: key
                    }
                });
        }
        else 
        {
            let key_words = (typeof params === 'object' ? 'terms': 'match')
            this.query.push({
                [key_words] :{
                    [key]: params
                }
            });
        }
    }
    addPrixQuery()
    {
        let prix_min = this.getValue('prix[min]')
        let prix_max = this.getValue('prix[max]')
        let rangeQuery = {};
        if(prix_min)
        {
            rangeQuery['gte'] = prix_min;
        }

        if(prix_max)
        {
            if(prix_max.includes('+'))
            {
                prix_max = prix_max.slice(0,-1)
                rangeQuery['gte'] = prix_max;
            }
            else rangeQuery['lte'] = prix_max;
        }
        if(Object.keys(rangeQuery).length > 0)
        {
            this.query.push({
                range : {
                    'prix': rangeQuery
                }
            })
        }
    }
}

export default FormSearch