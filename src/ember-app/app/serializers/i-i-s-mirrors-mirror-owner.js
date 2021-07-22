import { Serializer as MirrorOwnerSerializer } from
  '../mixins/regenerated/serializers/i-i-s-mirrors-mirror-owner';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(MirrorOwnerSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
