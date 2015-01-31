Router.configure({
	layoutTemplate: 'Layout',
})

Router.route('/', {name: 'home'});
Router.route('/:category', {name: 'category'});
Router.route('/:category/:_id', {name: 'article.show'});