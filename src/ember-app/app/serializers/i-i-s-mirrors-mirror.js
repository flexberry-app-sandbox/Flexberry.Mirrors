import { Serializer as MirrorSerializer } from
  '../mixins/regenerated/serializers/i-i-s-mirrors-mirror';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(MirrorSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
