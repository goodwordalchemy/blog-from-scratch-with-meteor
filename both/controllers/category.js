CategoryController = RouteController.extend({
	template: 'category',
	data: function(){
		return {category: this.params.category};
	}
});

CategoryController.helpers({
	articles: function(){
		return Articles.find({category: this.params.category});
	}
});