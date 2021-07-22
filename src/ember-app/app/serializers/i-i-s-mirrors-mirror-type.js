import { Serializer as MirrorTypeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-mirrors-mirror-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(MirrorTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
