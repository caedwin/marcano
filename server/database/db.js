import { Sequelize } from "sequelize";


// const db = new Sequelize('streaming', '', '',{
//     host: '192.168.5.43',
//     dialect: 'mysql'
// });

const db = new Sequelize('streaming', 'root', 's3C@M_1977**1',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;