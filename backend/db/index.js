var mysql = require('mysql');
const pool  = mysql.createPool({
    connectionLimit : 1000,
    host            : '127.0.0.1',
    user            : 'root',
    password        : '',
    database        : 'notify'
  });

 

  exports.insert=async (table,post)=>{
   return new Promise((resolver,reject)=>{   pool.getConnection((err,connection)=>{
   console.log(err)
        if (err) throw err; // not connected!
        connection.query(`INSERT INTO  ${table} SET ?`,post,(error,results,fields)=>{
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
            connection.release();
        }) 
    })
  } 
  exports.update=(query,arrayValues)=>{
  //'UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?', ['a', 'b', 'c'
  return new Promise((resolver,reject)=>{
  pool.getConnection((err,connection)=>{
  connection.query(query, arrayValues, function (error, results, fields) {
      if (error) throw error;
      resolver(results)
      reject(error)
      // ...
    });
    connection.release();
  })
}) 
}
  exports.delete = (query)=>{
    //DELETE FROM posts WHERE title = "wrong"',
      return new Promise((resolver,reject)=>{
          pool.getConnection((err,connection)=>{
            connection.query(query, function (error, results, fields) {
              //delete from table whe
              if (error) throw error;
              console.log(error)
              resolver(results);
              reject(error)
            })

          })
      })
  }

  exports.desconectPool = ()=>{
    pool.end((err)=>{
        console.log(err);
    })
  }