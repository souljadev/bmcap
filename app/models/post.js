import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  createdDate: DS.attr('date'),
  message: DS.attr('string'),
  url: DS.attr('string'),
  year: DS.attr('number')
});
