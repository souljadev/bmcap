import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
        showUpdateForm: function (model) {
            console.log("update form");
            console.log(model);
      }
    }
});
