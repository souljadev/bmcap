import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').findRecord('post', params.list_id);
  },
  actions: {
    deletePost(model) {
      model.destroyRecord();
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
        model.save();
    }
  }
});
