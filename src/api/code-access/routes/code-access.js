'use strict';

/**
 * code-access router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::code-access.code-access');
