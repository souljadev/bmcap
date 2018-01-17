import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
        createPost: function (model) {
          if ((this.$(model.title).val() !== "") && (this.$(model.first_name).val() !== "") &&
          (this.$(model.last_name).val() !== "") && (this.$(model.url).val() !== "") &&
          (this.$(model.year).val() !== "") && (this.$(model.message).val() !== "")) {
            this.sendAction('createPost', model);
          } else { this.get('flashMessages')
          .danger('Please enter all fields');
        };
            // clear each input field after submit
            this.set('newPost.first_name', null);
            this.set('newPost.last_name', null);
            this.set('newPost.year', null);
            this.set('newPost.url', null);
            this.set('newPost.title', null);
            this.set('newPost.message', null);
        }
    }
});
