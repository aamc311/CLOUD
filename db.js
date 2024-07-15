const Knex = require('knex')//llamar a la libreria
const { Model } = require('objection')//llamando a model de objection
const knexConfig = require('./knexfile')//llamada a configuracion

const knex = Knex(knexConfig.development);//inicializar el objeto
Model.knex(knex);//configuracion objection con datos de knex

module.exports=knex;// exportar configuraciones