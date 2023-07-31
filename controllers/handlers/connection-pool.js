const dotenv = require('dotenv');
dotenv.config();
const logger = require('../../utils/bei-logger');
const beiConfigs = require('../../data/config.json')
// Configuración de la conexion de POSTGRES
const mssql = require('mssql');
const { DecryptData } = require('../../utils/crypto-utils');

// Configuración del pool de conexiones.
module.exports = new mssql.ConnectionPool({
    user: beiConfigs.user,
    password: DecryptData( beiConfigs.password, beiConfigs.securedKey),
    database: beiConfigs.database,
    server: beiConfigs.host,
    port: beiConfigs.port,
    trustServerCertificate: true,
})