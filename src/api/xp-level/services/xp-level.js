'use strict';

/**
 * xp-level service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::xp-level.xp-level');
