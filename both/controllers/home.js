HomeController = RouteController.extend({
  onBeforeAction: function(){
  	if (Meteor.loggingIn())
  		return;
  	else if (!Meteor.user())
  		this.redirect('home');
  	else
  		this.next();
  },
  action: function(){
  	this.render();
  },
  template: 'Blog',
  waitOn: function(){  //only subscribe on this route
  	return [Meteor.subscribe('articles')]; //can manage multiple stubscriptions
  }

});
HomeController.helpers({ // THIS IS FUCKING SWEET! Defines helper functions 
  
  articles: function(){  
    return Articles.find(); 
  }
});