const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    nom : String ,
    raison_social : String,
    address : String ,
    tel :   Double ,
    code_postal :  String,
    code_douane :  String,
    email :  String,
    fax : Double,
    ville :  String,
    motpass :  String,
    remotpass :  String,
});

module.exports = mongoose.model('user', userSchema, 'users');