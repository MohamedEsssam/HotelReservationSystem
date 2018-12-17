'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('ROOMs','zew');
    return queryInterface.addColumn('HOTELs','approval',Sequelize.BOOLEAN);
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
