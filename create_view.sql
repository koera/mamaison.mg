create or replace view mamaison_annonce_search as
select     
    a.id,
    a.titre,
    a.description,
    a.prix,
    a.nombrePiece as 'nombre_piece',
    a.surface,
    a.uniteSurface as 'unite_surface',
    a.adresse,
    a.created_at,
    a.updated_at,
    json_object("id",a.user_id, "nom",u.username) as 'user',
    json_object("id",a.type_annonce_id, "valeur",ta.valeur) as 'type_annonce',
    json_object("id",a.category_id, "type",cat.type) as 'category',
    json_object("id",a.quartier_id, "nom",q.nom) as 'quartier',
    json_object("id",v.id, "nom",v.nom) as 'ville',
    concat('{"id":',r.id,', "nom":"', r.nom,'"}') as 'region',
    concat('[',group_concat(concat('{"id":',car.id,', "nom":"', car.nom,'"}')), ']') as 'caracteristique'
from
    annonce a
LEFT JOIN user u ON u.id = a.user_id
LEFT JOIN type_annonce ta on ta.id = a.type_annonce_id
LEFT JOIN category cat on cat.id = a.category_id
LEFT JOIN annonce_caracteristique ac on ac.annonce_id = a.id
LEFT JOIN caracteristique car on car.id = ac.caracteristique_id
LEFT JOIN quartier q on q.id = a.quartier_id
LEFT JOIN ville v on v.id = q.ville_id
LEFT JOIN region r on r.id = v.region_id 
GROUP BY a.id