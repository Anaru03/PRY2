CREATE (Rincon_del_Steak:Restaurante {nombre: 'Rincón del Steak', ubicacion: 'Zona 9', precio: 'Alto', tipo_comida: ['Comida de mar', 'Comida internacional'], ambiente: ['Familiar', 'Romantico', 'Negocios'], tipo_servicio: ['Domicilio', 'A la mesa', 'Para llevar', 'Bar'], horario: 'Almuerzo'})
CREATE (zona_9:zona {zona:'9'})
WITH Rincon_del_Steak, zona_9
MATCH (restaurante:Restaurante {nombre: 'Rincón del Steak'})
MATCH (zona:zona {zona: '9'})
CREATE (restaurante)-[:ubicacion]->(zona)


//CREATE (:Restaurante {nombre: '', ubicacion: '', precio: '', tipo_comida: '', ambiente: '', tipo_servicio:'', horario: ''})