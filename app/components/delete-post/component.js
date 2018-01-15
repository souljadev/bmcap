import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost: function () {
      return this.sendAction('deletePost', this.get('post'));
      }
    }
});
