const { GraphQLObjectType } = require('graphql')
const { connectionArgs } = require('graphql-relay')
const { t } = require('@lingui/macro')

const { dkimFailureConnection } = require('./dkim-failure-table')
const { dmarcFailureConnection } = require('./dmarc-failure-table')
const { fullPassConnection } = require('./full-pass-table')
const { spfFailureConnection } = require('./spf-failure-table')

const detailTablesType = (i18n) => new GraphQLObjectType({
  name: 'DetailTables',
  description:
    i18n._(t`Object that contains the various senders and details for each category.`),
  fields: () => ({
    dkimFailure: {
      description: i18n._(t`List of senders that are failing DKIM checks.`),
      args: connectionArgs,
      type: dkimFailureConnection(i18n).connectionType,
      resolve: ({ dkimFailure }) => dkimFailure,
    },
    dmarcFailure: {
      description: i18n._(t`List of senders that are failing DMARC checks.`),
      args: connectionArgs,
      type: dmarcFailureConnection(i18n).connectionType,
      resolve: ({ dmarcFailure }) => dmarcFailure,
    },
    fullPass: {
      description: i18n._(t`List of senders that are passing all checks.`),
      args: connectionArgs,
      type: fullPassConnection(i18n).connectionType,
      resolve: ({ fullPass }) => fullPass,
    },
    spfFailure: {
      description: i18n._(t`List of senders that are failing SPF checks.`),
      args: connectionArgs,
      type: spfFailureConnection(i18n).connectionType,
      resolve: ({ spfFailure }) => spfFailure,
    },
  }),
})

module.exports = {
  detailTablesType,
}
