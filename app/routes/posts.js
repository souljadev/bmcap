import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.id'),
  model: function () {
      return this.get('store').query('post', {
        filter: {
          user_id: this.getProperties('user').user
        }
      });
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
      post.save();
    }
  }
});
