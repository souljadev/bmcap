import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
      return this.store.findAll('post');
  },

  actions: {
    createPost: function (model) {
      let post = this.store.createRecord('post', {
        first_name: model.first_name,
        last_name: model.last_name,
        message: model.message,
        url: model.url,
        year: model.year
      });
      post.save();
    },
    deletePost: function (post) {
      console.log("am i cliccked?");
      console.log(post);
      // this.model.destroyRecord().then(() => {
      //   this.transitionTo('index');
      // }).catch((reason) => {
      //   post.reload();
      // });
    }
  }
});
