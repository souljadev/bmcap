import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').findRecord('post', params.list_id);
  },
  actions: {
    deletePost(model) {
      model.destroyRecord()
      .then(() => this.transitionTo('index'))
      .then(() => this.get('flashMessages').success('Delete Successful!'))
      .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.');
      });
    },
    updatePost(model) {
        model.set('post', {
        first_name: model.first_name,
        last_name: model.last_name,
        title: model.title,
        message: model.message,
        url: model.url,
        year: model.year
      });
        model.save()
        .then(() => this.transitionTo('index'))
        .then(() => this.get('flashMessages').success('Update Successful!'))
        .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
        });
      },
    }
});
