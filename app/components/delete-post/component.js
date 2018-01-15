import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost: function () {
      console.log("hello");
      return this.sendAction('deletePost');
      }
    }
});
