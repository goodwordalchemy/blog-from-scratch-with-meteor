Meteor.startup(function(){
	Articles.remove({});
	
	Articles.insert({
		title: 'Inventions Article',
		body: "This is the body of the inventions article",
		createdAt: new Date(),
		category: 'invention',
		tags: []
	});

	Articles.insert({
		title: 'Intrigue Article',
		body: "This is the body of the intrigue article",
		createdAt: new Date(),
		category: 'invention',
		tags: []
	});

	Articles.insert({
		title: 'Ideas Article',
		body: "This is the body of the ideas article",
		createdAt: new Date(),
		category: 'ideas',
		tags: []
	});
});
