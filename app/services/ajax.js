// app/services/ajax.js

import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
	trustedHosts: [
    /\.example\./,
    'localhost:8080',
  ],
  host: 'http://localhost:8080',
  namespace: '/api/'
});