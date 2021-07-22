import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-mirrors-mirror-owner', 'Unit | Model | i-i-s-mirrors-mirror-owner', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-mirrors-mirror-owner',
    'model:i-i-s-mirrors-mirror-type',
    'model:i-i-s-mirrors-mirror',
    'model:i-i-s-mirrors-person',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
