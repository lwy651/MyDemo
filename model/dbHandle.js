/**
 * Created by a651 on 16/3/26.
 */
var mongoose = require('mongoose');
var models = require('./models');
var config = require('../config.default.js');
mongoose.connect(config.db);
var Schema = mongoose.Schema;
for(var modelName in models){
    mongoose.model(modelName,new Schema(models[modelName]));
};
module.exports = {
    getModel:function (modelName) {
        return _getModelDB(modelName);
    }
};
var _getModelDB = function (modelName) {
    return mongoose.model(modelName);
};