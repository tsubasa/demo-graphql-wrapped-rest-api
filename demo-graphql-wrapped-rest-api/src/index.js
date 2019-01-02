const { GraphQLServer } = require('graphql-yoga');
const fetch = require('node-fetch');

const baseURL = 'http://localhost:4001';

const resolvers = {
  Query: {
    items: async () => {
      return fetch(`${baseURL}/items`).then(res => res.json())
    },
    item: async (parent, args) => {
      const { id } = args
      return fetch(`${baseURL}/items/${id}`).then(res => res.json())
    },
  },
  Item: {
    category: async parent => {
      const { categoryId } = parent
      return fetch(`${baseURL}/categories/${categoryId}`).then(res => res.json())
    },
    specs: async parent => {
      const { specIds } = parent
      return specIds.map(specId => fetch(`${baseURL}/specs/${specId}`).then(res => res.json()))
    }
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
