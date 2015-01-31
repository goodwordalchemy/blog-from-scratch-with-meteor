ArticleShowController = RouteController.extend({
	template: 'Article',
	// subscriptions: function() {
	// 	Meteor.subscribe('article', this.params._id);
	// },
	data: function(){
		var article =  Articles.findOne({_id: this.params._id});
		return {
			title: article.title,
			body: article.body,
			createdAt: article.createdAt.toDateString(),
			category: article.category,

		}
	}
});

