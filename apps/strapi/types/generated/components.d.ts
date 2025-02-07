import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    description: '';
    displayName: 'button';
    icon: 'arrowRight';
  };
  attributes: {
    external_redirection: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.button': ComponentsButton;
    }
  }
}
