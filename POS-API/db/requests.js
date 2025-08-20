const db = require('./configuration');

function requestAll(table, account_id, callback){
    db.any(`SELECT * FROM ${table} WHERE account_id = ${account_id}`)
        .then(result =>{
            callback(null, result);
        })
        .catch(error => {
            callback(error);
        });
}

function request(table, id, callback){
    db.any(`SELECT * FROM ${table} WHERE id = ${id}`)
        .then(result => {
            callback(null, result);
        })
        .catch(error => {
            callback(error);
        });
}

function requestAccount(email, callback){
    db.any(`SELECT * FROM accounts WHERE email = '${email}'`)
        .then(result => {
            callback(null, result);
        })
        .catch(error => {
            callback(error);
        });
}

function create(table, item, callback){
    const keys = Object.keys(item);
    const properties = keys.join(', ');
    const values = keys.map(key => `'${item[key]}'`).join(', ');

    db.any(`INSERT INTO ${table} (${properties}) VALUES(${values}) returning *`)
        .then(([result]) => {
            callback(null, result);
        })
        .catch(error => {
            callback(error);
        });
}

function update(table, id, item, callback){
    const keys = Object.keys(item);
    const updates = keys.map(key => `${key} = '${item[key]}'`).join(', ');
    const sql = `UPDATE ${table} SET ${updates} WHERE id = ${id} returning *`;
    db.any(sql)
        .then(([result]) => {
            callback(null, result);
        })
        .catch(error => {
            callback(error);
        });
}

function remove(table, id, callback){
    db.any(`DELETE FROM ${table} WHERE id = ${id}`)
        .then(() => {
            callback(null);
        })
        .catch(error => {
            callback(error);
        });
}

module.exports ={
    requestAll,
    request,
    create,
    update,
    remove, 
    requestAccount
};