'use strict';

/**
 * merchandise controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::merchandise.merchandise');
