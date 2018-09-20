export const FORM_NAME_NO_ARRAY = {
    'adresse' : ['adresse', 'ville.nom', 'region.nom', 'quartier.nom', 'titre', 'descripton'],
    'ville': 'ville.id',
    'region': 'region.id',
    'quartier': 'quartier.id'
}
export const FORM_NAME_ARRAY = {
    'category[]': 'category.id',
    'caracteristique[]': 'caracteristique.id'
}

export const BASE_URL = 'https://www.mamaison.mg/app_dev.php'


export const IMAGE_URL = BASE_URL + '/gallery/view/thumbs';

export const INDEX_NAME = 'mamaison'

export const TYPE_NAME = 'annonces'