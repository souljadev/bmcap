import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
      // create post function
        createPost: function (model) {
          // check form fields for empty string
          // if each model value does not equal string
          if ((this.$(model.title).val() !== "") && (this.$(model.first_name).val() !== "") &&
          (this.$(model.last_name).val() !== "") && (this.$(model.url).val() !== "") &&
          (this.$(model.year).val() !== "") && (this.$(model.message).val() !== "")) {
            // then sends createPost action up
            this.sendAction('createPost', model);
            // if there is an empty field then this error message with pop up
          } else { this.get('flashMessages')
          .danger('Please enter all fields');
        }
            // clear each input field after submit button is clicked
            this.set('newPost.first_name', null);
            this.set('newPost.last_name', null);
            this.set('newPost.year', null);
            this.set('newPost.url', null);
            this.set('newPost.title', null);
            this.set('newPost.message', null);
        }
    }
});
