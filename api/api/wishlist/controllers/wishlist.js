"use strict";

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async create(ctx) {
    const token = await strapi.plugins[
      "users-permissions"
    ].services.jwt.getToken(ctx);

    const body = {
      ...ctx.request.body,
      user: token.id,
    };
    try {
    const entity = await strapi.services.wishlist.create(body);
    return sanitizeEntity(entity, { model: strapi.models.wishlist });
  } catch (err) {
    throw strapi.errors.unauthorized(err);
  }

  },

  async update(ctx) {
    const token = await strapi.plugins[
      "users-permissions"
    ].services.jwt.getToken(ctx);
    try {
      const entity = await strapi.services.wishlist.update(
        { id: ctx.params.id },
        ctx.request.body
      );
      return sanitizeEntity(entity, { model: strapi.models.wishlist });
    } catch (err) {
      throw strapi.errors.unauthorized(err);
    }
  },
};
