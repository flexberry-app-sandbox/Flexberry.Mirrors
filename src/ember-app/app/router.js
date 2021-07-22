import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-mirrors-mirror-l');
  this.route('i-i-s-mirrors-mirror-e',
  { path: 'i-i-s-mirrors-mirror-e/:id' });
  this.route('i-i-s-mirrors-mirror-e.new',
  { path: 'i-i-s-mirrors-mirror-e/new' });
  this.route('i-i-s-mirrors-mirror-type-l');
  this.route('i-i-s-mirrors-mirror-type-e',
  { path: 'i-i-s-mirrors-mirror-type-e/:id' });
  this.route('i-i-s-mirrors-mirror-type-e.new',
  { path: 'i-i-s-mirrors-mirror-type-e/new' });
  this.route('i-i-s-mirrors-person-l');
  this.route('i-i-s-mirrors-person-e',
  { path: 'i-i-s-mirrors-person-e/:id' });
  this.route('i-i-s-mirrors-person-e.new',
  { path: 'i-i-s-mirrors-person-e/new' });
});

export default Router;
