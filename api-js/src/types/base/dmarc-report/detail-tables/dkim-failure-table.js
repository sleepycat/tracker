const { GraphQLObjectType } = require('graphql')
const { connectionDefinitions } = require('graphql-relay')
const { t } = require('@lingui/macro')

const {
  TranslatedID,
  TranslatedBoolean,
  TranslatedString,
  TranslatedInt,
} = require('../../../../scalars')

const dkimFailureTableType = (i18n) =>
  new GraphQLObjectType({
    name: 'DkimFailureTable',
    description: i18n._(
      t`This table contains the data fields for senders who are in the DKIM fail category.`,
    ),
    fields: () => ({
      id: {
        type: TranslatedID(i18n),
        description: i18n._(t`The ID of the object.`),
        resolve: ({ id }) => id,
      },
      dkimAligned: {
        type: TranslatedBoolean(i18n),
        description: i18n._(t`Is DKIM aligned.`),
        resolve: ({ dkimAligned }) => dkimAligned,
      },
      dkimDomains: {
        type: TranslatedString(i18n),
        description: i18n._(t`Domains used for DKIM validation`),
        resolve: ({ dkimDomains }) => dkimDomains,
      },
      dkimResults: {
        type: TranslatedString(i18n),
        description: i18n._(
          t`The results of DKIM verification of the message. Can be pass, fail, neutral, temp-error, or perm-error.`,
        ),
        resolve: ({ dkimResults }) => dkimResults,
      },
      dkimSelectors: {
        type: TranslatedString(i18n),
        description: i18n._(t`Pointer to a DKIM public key record in DNS.`),
        resolve: ({ dkimSelectors }) => dkimSelectors,
      },
      dnsHost: {
        type: TranslatedString(i18n),
        description: i18n._(t`Host from reverse DNS of source IP address.`),
        resolve: ({ dnsHost }) => dnsHost,
      },
      envelopeFrom: {
        type: TranslatedString(i18n),
        description: i18n._(t`Domain from SMTP banner message.`),
        resolve: ({ envelopeFrom }) => envelopeFrom,
      },
      guidance: {
        type: TranslatedString(i18n),
        description: i18n._(
          t`Guidance for any issues that were found from the report.`,
        ),
        resolve: ({ guidance }) => guidance,
      },
      headerFrom: {
        type: TranslatedString(i18n),
        description: i18n._(t`The address/domain used in the "From" field.`),
        resolve: ({ headerFrom }) => headerFrom,
      },
      sourceIpAddress: {
        type: TranslatedString(i18n),
        description: i18n._(t`IP address of sending server.`),
        resolve: ({ sourceIpAddress }) => sourceIpAddress,
      },
      totalMessages: {
        type: TranslatedInt(i18n),
        description: i18n._(t`Total messages from this sender.`),
        resolve: ({ totalMessages }) => totalMessages,
      },
    }),
  })

const dkimFailureConnection = (i18n) =>
  connectionDefinitions({
    name: 'DkimFailureTable',
    nodeType: dkimFailureTableType(i18n),
  })

module.exports = {
  dkimFailureConnection,
  dkimFailureTableType,
}
