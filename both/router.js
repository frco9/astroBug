/**
*	Application router
*	@see http://iron-meteor.github.io/iron-router
**/
import { Offer } from "/imports/classes/offer.js";


Router.route('/test', function (){

  let offer = Offer.findOne();

  this.response.setHeader('Content-Type', 'application/json');
  this.response.end(JSON.stringify({
    "offer": offer
  }));

}, {where: 'server'});
