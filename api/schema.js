var graphql = require('graphql');
var Project = require('models/Project');

var { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList} = graphql;

const ProjectType = new GraphQLObjectType({
	name: 'Project',
	fields: () => ({
		name: { type: GraphQLString},
		description: { type: GraphQLString },
		github_link: { type: GraphQLString },
	})
});

const rootValue = new GraphQLObjectType({
	name: 'rootValue',
	fields: {
		project: {
			type: ProjectType, 
			args: {
				name: { type: GraphQLString },
			},
			resolves(parent, args) {
				return Project.find({name: args.name});
			},
		},
		projects: {
			type: new GraphQLList, 
			resolve(parent, args){
				return Project.find({});
			}
		}
	}
});

module.exports = new GraphQLSchema({ query: rootValue });
