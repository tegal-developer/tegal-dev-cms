'use strict';

/**
 * rsvp router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::rsvp.rsvp');
