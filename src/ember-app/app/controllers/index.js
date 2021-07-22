import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.mirrors.caption'),
          title: i18n.t('forms.application.sitemap.mirrors.title'),
          children: [{
            link: 'i-i-s-mirrors-person-l',
            caption: i18n.t('forms.application.sitemap.mirrors.i-i-s-mirrors-person-l.caption'),
            title: i18n.t('forms.application.sitemap.mirrors.i-i-s-mirrors-person-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-mirrors-mirror-type-l',
            caption: i18n.t('forms.application.sitemap.mirrors.i-i-s-mirrors-mirror-type-l.caption'),
            title: i18n.t('forms.application.sitemap.mirrors.i-i-s-mirrors-mirror-type-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-mirrors-mirror-l',
            caption: i18n.t('forms.application.sitemap.mirrors.i-i-s-mirrors-mirror-l.caption'),
            title: i18n.t('forms.application.sitemap.mirrors.i-i-s-mirrors-mirror-l.title'),
            children: null
          }]
        }
      ]
    };
  }),
})