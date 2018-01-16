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
        title: model.title,
        message: model.message,
        url: model.url,
        year: model.year
      });
      post.save()
      .then(() => this.transitionTo('application'))
      .then(() => this.get('flashMessages').success('Create Successful!'))
      .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.');
      });
    }
  }
});
