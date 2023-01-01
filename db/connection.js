var pool = require('./pool');

exports.query = query(queryText, queryParams).then(res => {
  
})
.catch(err => {

});

exports.query = (queryText, queryParams) =>{
    return new Promise ((resolve, reject) =>{
        pool.query(queryText, queryParams)
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err);
        });
    })
}

