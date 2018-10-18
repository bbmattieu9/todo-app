// /**
//  * Todo.js
//  *
//  * @description :: A model definition.  Represents a database table/collection/etc.
//  * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
//  */

module.exports = {
  tableName: 'todo',
  attributes: {

//     //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
//     //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
//     //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    title: {
      type: 'string',
      required: true,
    },
    body: {
        type: 'string',
        required: true,
    },
    completed: {
      type: 'boolean',
      defaultsTo: false
    },

//     //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
//     //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
//     //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


//     //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
//     //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
//     //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    owner: {
      model: 'user'
    }
  },

};

