HomeController = RouteController.extend({
	template: 'home'
});

HomeController.helpers({
	articles: function(){
		return Articles.find();
	}
});