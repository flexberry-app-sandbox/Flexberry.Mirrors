import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Mirrors',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Mirrors',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Mirrors',
          title: 'Mirrors'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        mirrors: {
          caption: 'Mirrors',
          title: 'Mirrors',
          'i-i-s-mirrors-person-l': {
            caption: 'Person',
            title: ''
          },
          'i-i-s-mirrors-mirror-type-l': {
            caption: 'Mirror type',
            title: ''
          },
          'i-i-s-mirrors-mirror-l': {
            caption: 'Mirror',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
