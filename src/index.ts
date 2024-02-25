import { fastify } from 'fastify';

interface User {
	id: number;
	name: string;
}

type ICreateUserBody = Pick<User, 'name'>;

interface ICreateUser {
	Body: ICreateUserBody;
}

interface IGetUser {
	Params: Pick<User, 'id'>;
}

const server = fastify();
const SERVER_PORT = Number(process.env.SERVER_PORT);
const users: User[] = [
	{ id: 1, name: 'Victor Badaró' },
	{ id: 2, name: 'Miryam Santana' },
	{ id: 3, name: 'Lívia Badaró' },
	{ id: 4, name: 'Ana Laura Badaró' }
];

server.get('/users', () => users);

server.post<ICreateUser>('/users', (request, reply) => {
	const { name } = request.body;
	const newUser: User = {
		id: Math.floor(Math.random() * 200) + 5,
		name
	};

	users.push(newUser);
	return newUser;
});

server.get<IGetUser>('/users/:id', (request, reply) => {
	const { id } = request.params;
	const user = users.find(user => user.id === id);

	return user;
});

server.listen({
	port: SERVER_PORT
});
