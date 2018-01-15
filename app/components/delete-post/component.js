import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost: function (model) {
      this.sendAction('deletePost', model);
      }
    }
});
