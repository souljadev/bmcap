import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  createdDate: DS.attr('date'),
  message: DS.attr('string'),
  url: DS.attr('string'),
  year: DS.attr('number')
});
