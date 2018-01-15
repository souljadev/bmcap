import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'showingPost',
  classNameBindings: ['postHeaderHidden'],
  postHeaderHidden: true,
  actions: {
        toggleUpdateButton: function () {
          return this.toggleProperty('postHeaderHidden');
        },
        showUpdateForm: function () {
          console.log("hi I can submit");
      }
    }
});
