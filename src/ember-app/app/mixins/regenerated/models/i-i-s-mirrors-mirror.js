import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  serialNumber: DS.attr('string'),
  mirrorType: DS.belongsTo('i-i-s-mirrors-mirror-type', { inverse: null, async: false }),
  owners: DS.hasMany('i-i-s-mirrors-mirror-owner', { inverse: 'mirror', async: false })
});

export let ValidationRules = {
  serialNumber: {
    descriptionKey: 'models.i-i-s-mirrors-mirror.validations.serialNumber.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  mirrorType: {
    descriptionKey: 'models.i-i-s-mirrors-mirror.validations.mirrorType.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  owners: {
    descriptionKey: 'models.i-i-s-mirrors-mirror.validations.owners.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('MirrorE', 'i-i-s-mirrors-mirror', {
    serialNumber: attr('Serial number', { index: 0 }),
    mirrorType: belongsTo('i-i-s-mirrors-mirror-type', 'Mirror type', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' }),
    owners: hasMany('i-i-s-mirrors-mirror-owner', 'Owners', {
      buyDate: attr('Buy date', { index: 0 }),
      person: belongsTo('i-i-s-mirrors-person', 'Person', {
        name: attr('Name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('MirrorL', 'i-i-s-mirrors-mirror', {
    serialNumber: attr('Serial number', { index: 0 }),
    mirrorType: belongsTo('i-i-s-mirrors-mirror-type', 'Name', {
      name: attr('Name', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
