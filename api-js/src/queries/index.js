const { GraphQLObjectType } = require('graphql')
const { nodeField } = require('../types')
const { findDomainByDomain, findMyDomains } = require('./domains')
const {
  findMyOrganizations,
  findOrganizationBySlug,
} = require('./organizations')
const { isUserAdmin, user } = require('./user')
const summaryQueries = require('./summaries')

const createQuerySchema = (i18n) => {
  return new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      // Node Query
      node: nodeField,
      // Domain Queries
      findDomainByDomain: findDomainByDomain(i18n),
      findMyDomains: findMyDomains(i18n),
      // Organization Queries
      findMyOrganizations: findMyOrganizations(i18n),
      findOrganizationBySlug: findOrganizationBySlug(i18n),
      // Summary Queries
      ...summaryQueries,
      // User Queries
      isUserAdmin: isUserAdmin(i18n),
      user,
    }),
  })
}

module.exports = {
  createQuerySchema,
}
