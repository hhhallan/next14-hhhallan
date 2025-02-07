// strapi/src/api/project/controllers/project.ts

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::project.project",
  ({ strapi }) => ({
    async find(ctx) {
      // Appeler la logique par défaut de l'API
      const { data, meta } = await super.find(ctx);

      // Personnaliser la réponse pour inclure les relations
      const projectIds = data.map((project) => project.id);
      const projectsWithMedia = await strapi.db
        .query("api::project.project")
        .findMany({
          where: {
            id: {
              $in: projectIds,
            },
          },
          populate: {
            image: true,
            // Ajoutez ici d'autres relations si nécessaire
          },
        });

      // Fusionner les données avec les médias
      const enhancedData = data.map((project) => {
        const mediaData = projectsWithMedia.find((p) => p.id === project.id);
        return {
          ...project,
          attributes: {
            ...project.attributes,
            image: mediaData?.image
              ? {
                  data: {
                    id: mediaData.image.id,
                    attributes: {
                      url: mediaData.image.url,
                      name: mediaData.image.name,
                      alternativeText: mediaData.image.alternativeText,
                      width: mediaData.image.width,
                      height: mediaData.image.height,
                    },
                  },
                }
              : null,
          },
        };
      });

      return { data: enhancedData, meta };
    },

    async findOne(ctx) {
      const { id } = ctx.params;

      // Récupérer le projet avec ses médias
      const project = await strapi.db.query("api::project.project").findOne({
        where: { id },
        populate: {
          image: true,
          // Ajoutez ici d'autres relations si nécessaire
        },
      });

      if (!project) {
        return ctx.notFound();
      }

      // Formater la réponse
      const sanitizedProject = {
        id: project.id,
        attributes: {
          ...project,
          image: project.image
            ? {
                data: {
                  id: project.image.id,
                  attributes: {
                    url: project.image.url,
                    name: project.image.name,
                    alternativeText: project.image.alternativeText,
                    width: project.image.width,
                    height: project.image.height,
                  },
                },
              }
            : null,
          createdAt: project.createdAt,
          updatedAt: project.updatedAt,
          publishedAt: project.publishedAt,
        },
      };

      return { data: sanitizedProject };
    },
  })
);
