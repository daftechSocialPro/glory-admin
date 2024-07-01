import type { Schema, Attribute } from '@strapi/strapi';

export interface AddressLocation extends Schema.Component {
  collectionName: 'components_address_locations';
  info: {
    displayName: 'location';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface AddressPhone extends Schema.Component {
  collectionName: 'components_address_phones';
  info: {
    displayName: 'phone';
  };
  attributes: {
    number: Attribute.String;
  };
}

export interface AddressSocialMedia extends Schema.Component {
  collectionName: 'components_address_social_medias';
  info: {
    displayName: 'Social Media';
    icon: 'earth';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'address.location': AddressLocation;
      'address.phone': AddressPhone;
      'address.social-media': AddressSocialMedia;
    }
  }
}
