require('dotenv').config();
const mysql = require('execsql');

const dbConfig = {
	host: 'localhost',
	user: process.env.MYSQL_USERNAME || 'root',
	password: process.env.MYSQL_PASSWORD || ''
};

mysql.config(dbConfig);
mysql.execFile('./src/database/init.sql', (err, results) => {
	if (err) throw err;
	console.log('Successfully started database');
});

module.exports = mysql;