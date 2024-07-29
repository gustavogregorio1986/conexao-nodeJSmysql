const mysql = require('mysql')

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fazenda',
    database: 'ERmployeeDB'
});

mysqlConnection.connect(err=>{
    if(!err)
        console.log('DB connection succded')
    else
       console.log('DB connection failed', JSON.stringify(err, undefined,2));
});