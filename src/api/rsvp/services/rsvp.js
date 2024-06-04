'use strict';

/**
 * rsvp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rsvp.rsvp');
