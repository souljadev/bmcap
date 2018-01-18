import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'showingPost',
  classNameBindings: ['postHeaderHidden'],
  postHeaderHidden: true,
  actions: {
    // toggle button for update to show Update form, toggles class postHeaderHidden
        toggleUpdateButton: function () {
          return this.toggleProperty('postHeaderHidden');
        },
        // update post function
        updatePost: function () {
          // have to stringfy data because model was not passed.
          // checks to see if form fields is empty by checking empty strings
          if ((JSON.stringify(this.get('post.data.title')) !== "") &&
          (JSON.stringify(this.get('post.data.first_name')) !== "") &&
          (JSON.stringify(this.get('post.data.last_name')) !== "") && (JSON.stringify(this.get('post.data.url')) !== "") &&
          (JSON.stringify(this.get('post.data.url')) !== "") && (JSON.stringify(this.get('post.data.url')) !== "")
        ) {
          // pass action up if no empty strings
          return this.sendAction('updatePost', this.get('post'));
          // if error then flash this error message
          } else { this.get('flashMessages')
          .danger('Please enter all fields');
        }
      }
    }
});
