var graphql = require('graphql')

var { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema } = graphql;

const Project = new GraphQLObjectType({
	name: 'Project',
	fields: () => ({
		id: { type: GraphQLID }, // not sure if this will be necessary, more for seeing how it works
		name: { type: GraphQLString},
		description: { type: GraphQLString },
		github_link: { type: GraphQLString }
	})
});

const rootValue = new GraphQLObjectType({
	name: 'rootValue',
	fields: {
		project: {
			type: Project, 
			args: {
				name: { type: GraphQLString },
				id: { type: GraphQLID }
			},
			resolves(parent, args) {
				return projects.find((item) => {
					return item.id == args.id || item.name == args.name;
				});
			},
		}
	}
});

module.exports = new GraphQLSchema({ query: rootValue });
