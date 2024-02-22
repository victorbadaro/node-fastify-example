const { fastify } = require('fastify');
const server = fastify();
const users = [
	{ id: 1, name: 'Victor Badaró' },
	{ id: 2, name: 'Miryam Santana' },
	{ id: 3, name: 'Lívia Badaró' },
	{ id: 4, name: 'Ana Laura Badaró' }
]

server.get('/users', () => {
	return users;
});

server.post('/users', (request, reply) => {
	const { name } = request.body;
	const newUser = {
		id: Math.floor(Math.random() * 200) + 5,
		name
	};

	users.push(newUser);

	return newUser
});

server.get('/users/:id', (request, reply) => {
	const { id } = request.params;
	const user = users.find(user => user.id === Number(id));

	return user;
});

server.listen({
	port: 3333
});
