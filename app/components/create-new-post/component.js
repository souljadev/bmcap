import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
        createPost: function (model) {
            this.sendAction('createPost', model);
            // // clear each input field after submit
            this.set('newPost.first_name', null);
            this.set('newPost.last_name', null);
            this.set('newPost.year', null);
            this.set('newPost.url', null);
            this.set('newPost.title', null);
            this.set('newPost.message', null);
        }
    }
});
