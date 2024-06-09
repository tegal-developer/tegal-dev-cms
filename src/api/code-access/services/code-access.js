'use strict';

/**
 * code-access service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::code-access.code-access');
