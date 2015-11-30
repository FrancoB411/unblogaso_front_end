import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save() {
      var post = this.currentModel;
      post.save().then(()=> {
        this.transitionTo('posts.post', post.id);
      });
    }
  },
});
