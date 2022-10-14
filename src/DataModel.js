import { API, graphqlOperation } from 'aws-amplify';
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';

const todo = { name: "My first todo", description: "Hello world!" };

/* create a todo */
await API.graphql(graphqlOperation(createTodo, {input: todo}));

/* update a todo */
await API.graphql(graphqlOperation(updateTodo, { input: { id: todoId, name: "Updated todo info" }}));

/* delete a todo */
await API.graphql(graphqlOperation(deleteTodo, { input: { id: todoId }}));