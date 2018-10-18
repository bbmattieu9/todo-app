module.exports = {
  friendlyName: 'Find',

  description: 'Find user.',

  inputs: {},

  exits: {},

  fn: async function(inputs, exits) {
    sails.log.debug('user.findAll');
    var users = await User.find();
    sails.log.debug(`user.find found ${users.length} records.`);

    return exits.success(users);
  },
};
