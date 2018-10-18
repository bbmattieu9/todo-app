// /**
//  * User.js
//  *
//  * @description :: A model definition.  Represents a database table/collection/etc.
//  * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
//  */

module.exports = {
  tableName: 'users',
  attributes: {

//     //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
//     //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
//     //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    name:
    {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
    },
    password: {
      type: 'string',
      required: true,
    },

//     //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
//     //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
//     //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
//     //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
//     //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
//     //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    todoItems: {
      collection: 'todo',
      via: 'owner'
    }
  },
  customToJSON: function(){
    return _.omit(this, ['password']);
  }
};