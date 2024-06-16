'use strict';

/**
 * merchandise service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::merchandise.merchandise');
