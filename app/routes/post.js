import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').findRecord('post', params.list_id);
  },
  actions: {
    // toggleItemDone(item){
    //   item.toggleProperty('done');
    //   item.save();
    // },
    deletePost(model) {
      model.destroyRecord();
  }
}
});
