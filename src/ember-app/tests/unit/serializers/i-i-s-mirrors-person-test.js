import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-mirrors-person', 'Unit | Serializer | i-i-s-mirrors-person', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-mirrors-person',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
