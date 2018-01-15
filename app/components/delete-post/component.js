import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost: function (post) {
      return this.sendAction('deletePost', post);
      }
    }
});
