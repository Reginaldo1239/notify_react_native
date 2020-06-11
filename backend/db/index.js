var mysql = require('mysql');
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : '127.0.0.1',
    user            : 'root',
    password        : '',
    database        : 'notify'
  });



  exports.insert=async (table,post)=>{
   return new Promise((resolver,reject)=>{   pool.getConnection((err,connection)=>{
    console.log(err)
        if (err) throw err; // not connected!
        connection.query(`INSERT INTO ${table} SET ?`,post,(error,results,fields)=>{
            console.log(error)
            resolver(results);
            reject(error);
        })
        connection.release();
      })
    })
  }
  exports.select = async(query,arrayValues)=>{
   // var query = connection.query('SELECT * FROM table WHERE id = ?', [12], function (error, results, fields) {
    return new Promise((resolver,reject)=>{
        pool.getConnection((err,connection)=>{
            if (err) throw err; // not connected!
            connection.query(query,arrayValues,(error,results,fields)=>{
                if (error) throw error;
                resolver(results);
                reject(error);
            })
        }) 
    })
  } 