Meteor.startup(function(){
	Articles.remove({});
	Articles.insert({
		title: 'Inventions Article',
		body: "This is the body of the inventions article",
		createdAt: new Date(),
		category: 'invention',
	});

	Articles.insert({
		title: 'Intrigue Article',
		body: "This is the body of the intrigue article",
		createdAt: new Date(),
		category: 'intrigue',
	});

	Articles.insert({
		title: 'Ideas Article',
		body: "This is the body of the ideas article",
		createdAt: new Date(),
		category: 'ideas',
	});
});