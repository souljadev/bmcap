import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  message: DS.attr('string'),
  url: DS.attr('string'),
  title: DS.attr('string'),
  year: DS.attr('number')
});
