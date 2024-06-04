'use strict';

/**
 * rsvp-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rsvp-status.rsvp-status');
