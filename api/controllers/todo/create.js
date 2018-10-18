module.exports = {
  friendlyName: 'Create',

  description: 'Create todo.',

  inputs: {
    title: {
      required: true,
      type: 'string',
    },
    body:{
      required: true,
      type: 'string'
    },
    completed: {
      type: 'boolean',
      defaultsTo: false,
    },
  },

  exits: {},

  fn: async function(inputs, exits) {
    sails.log.debug('todo.create initiated', inputs.title, inputs.body, inputs.completed, this.req.session.userId, inputs);
    var createdTodo = await Todo.create(
      Object.assign({
        title: inputs.title,
        body: inputs.body,
        completed: inputs.completed,
        owner: this.req.session.userId
      })
    )
      .intercept(err => res.serverError(err))
      .fetch();

    return exits.success(createdTodo);
  },
};
