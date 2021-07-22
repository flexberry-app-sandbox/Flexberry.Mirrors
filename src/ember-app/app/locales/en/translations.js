import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISMirrorsMirrorLForm from './forms/i-i-s-mirrors-mirror-l';
import IISMirrorsMirrorTypeLForm from './forms/i-i-s-mirrors-mirror-type-l';
import IISMirrorsPersonLForm from './forms/i-i-s-mirrors-person-l';
import IISMirrorsMirrorEForm from './forms/i-i-s-mirrors-mirror-e';
import IISMirrorsMirrorTypeEForm from './forms/i-i-s-mirrors-mirror-type-e';
import IISMirrorsPersonEForm from './forms/i-i-s-mirrors-person-e';
import IISMirrorsMirrorOwnerModel from './models/i-i-s-mirrors-mirror-owner';
import IISMirrorsMirrorTypeModel from './models/i-i-s-mirrors-mirror-type';
import IISMirrorsMirrorModel from './models/i-i-s-mirrors-mirror';
import IISMirrorsPersonModel from './models/i-i-s-mirrors-person';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-mirrors-mirror-owner': IISMirrorsMirrorOwnerModel,
    'i-i-s-mirrors-mirror-type': IISMirrorsMirrorTypeModel,
    'i-i-s-mirrors-mirror': IISMirrorsMirrorModel,
    'i-i-s-mirrors-person': IISMirrorsPersonModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        mirrors: {
          caption: 'mirrors',
          title: 'mirrors',
          'i-i-s-mirrors-person-l': {
            caption: 'i-i-s-mirrors-person-l',
            title: 'i-i-s-mirrors-person-l'
          },
          'i-i-s-mirrors-mirror-type-l': {
            caption: 'i-i-s-mirrors-mirror-type-l',
            title: 'i-i-s-mirrors-mirror-type-l'
          },
          'i-i-s-mirrors-mirror-l': {
            caption: 'i-i-s-mirrors-mirror-l',
            title: 'i-i-s-mirrors-mirror-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-mirrors-mirror-l': IISMirrorsMirrorLForm,
    'i-i-s-mirrors-mirror-type-l': IISMirrorsMirrorTypeLForm,
    'i-i-s-mirrors-person-l': IISMirrorsPersonLForm,
    'i-i-s-mirrors-mirror-e': IISMirrorsMirrorEForm,
    'i-i-s-mirrors-mirror-type-e': IISMirrorsMirrorTypeEForm,
    'i-i-s-mirrors-person-e': IISMirrorsPersonEForm
  },

});

export default translations;
