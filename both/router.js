Router.configure({
	layoutTemplate: 'Layout',
})

Router.route('/', {name: 'home'});
Router.route('/:category', {name: 'category'});