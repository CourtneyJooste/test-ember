import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  bear1: ' ',
  actions: {
    sendRequest() {
      let that = this;
      return this.get('ajax').request('/bears', {
        method: 'GET'
      }).then(function(bears) {
        that.set('bear1', bears[0].name);
      });
    }
  }
});