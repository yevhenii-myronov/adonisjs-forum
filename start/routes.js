'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route');

Route.get('/', 'HomeController.index').as('home');

Route.get('/posts/:slug', 'PostController.show')
     .as('posts.show');

Route.post('/posts/:slug/reply', 'PostReplyController.store')
     .as('posts.reply.store')
     .middleware(['auth']);

Route.get('/posts/create', 'PostController.create')
    .as('posts.create')
    .middleware(['auth']);

Route.post('/posts', 'PostController.store')
    .as('posts.store')
    .middleware(['auth']);

Route.get('/auth/register', 'Auth/RegisterController.index')
    .as('auth.register')
    .middleware(['guest']);

Route.post('/auth/register', 'Auth/RegisterController.register')
    .as('auth.register')
    .middleware(['guest']);

Route.get('/auth/login', 'Auth/LoginController.index')
    .as('auth.login')
    .middleware(['guest']);

Route.post('/auth/login', 'Auth/LoginController.login')
    .as('auth.login')
    .middleware(['guest']);
