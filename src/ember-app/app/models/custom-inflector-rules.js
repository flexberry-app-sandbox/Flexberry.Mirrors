import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('mirror', 'Mirrors');
inflector.irregular('person', 'Persons');
inflector.irregular('owner', 'Owners');
inflector.irregular('type', 'Types');

export default {};
