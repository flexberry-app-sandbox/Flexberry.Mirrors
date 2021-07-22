import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  buyDate: DS.attr('date'),
  person: DS.belongsTo('i-i-s-mirrors-person', { inverse: null, async: false }),
  mirror: DS.belongsTo('i-i-s-mirrors-mirror', { inverse: 'owners', async: false })
});

export let ValidationRules = {
  buyDate: {
    descriptionKey: 'models.i-i-s-mirrors-mirror-owner.validations.buyDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  person: {
    descriptionKey: 'models.i-i-s-mirrors-mirror-owner.validations.person.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  mirror: {
    descriptionKey: 'models.i-i-s-mirrors-mirror-owner.validations.mirror.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('MirrorOwnerE', 'i-i-s-mirrors-mirror-owner', {
    buyDate: attr('Buy date', { index: 0 }),
    person: belongsTo('i-i-s-mirrors-person', 'Person', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });
};
