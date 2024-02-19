const { fastify } = require('fastify');
const server = fastify();

server.get('/users', () => {
	return [
		{ id: 1, name: 'Victor Badaró' },
		{ id: 2, name: 'Miryam Santana' },
		{ id: 3, name: 'Lívia Badaró' },
		{ id: 4, name: 'Ana Laura Badaró' }
	]
});

server.listen({
	port: 3333
});
