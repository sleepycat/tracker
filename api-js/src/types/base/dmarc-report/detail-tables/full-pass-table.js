const { GraphQLObjectType } = require('graphql')
const { connectionDefinitions } = require('graphql-relay')
const { t } = require('@lingui/macro')

const {
  TranslatedID,
  TranslatedString,
  TranslatedInt,
} = require('../../../../scalars')

const fullPassTableType = (i18n) =>
  new GraphQLObjectType({
    name: 'FullPassTable',
    description: i18n._(
      t`This table contains the data fields for senders who are in the Full Pass category.`,
    ),
    fields: () => ({
      id: {
        type: TranslatedID(i18n),
        description: i18n._(t`The ID of the object`),
        resolve: ({ id }) => id,
      },
      dkimDomains: {
        type: TranslatedString(i18n),
        description: i18n._(t`Domains used for DKIM validation`),
        resolve: ({ dkimDomains }) => dkimDomains,
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
      spfDomains: {
        type: TranslatedString(i18n),
        description: i18n._(t`Domains used for SPF validation.`),
        resolve: ({ spfDomains }) => spfDomains,
      },
      totalMessages: {
        type: TranslatedInt(i18n),
        description: i18n._(t`Total messages from this sender.`),
        resolve: ({ totalMessages }) => totalMessages,
      },
    }),
  })

const fullPassConnection = (i18n) =>
  connectionDefinitions({
    name: 'FullPassTable',
    nodeType: fullPassTableType(i18n),
  })

module.exports = {
  fullPassConnection,
  fullPassTableType,
}
