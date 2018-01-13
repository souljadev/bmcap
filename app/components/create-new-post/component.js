import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
        createPost: function (newPost) {
            console.log(newPost.firstname, newPost.lastname, newPost.year, newPost.url);
        }
    }
});
