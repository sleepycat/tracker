/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function (n, ord) {
      var s = String(n).split('.'),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2)
      if (ord)
        return n10 == 1 && n100 != 11
          ? 'one'
          : n10 == 2 && n100 != 12
          ? 'two'
          : n10 == 3 && n100 != 13
          ? 'few'
          : 'other'
      return n == 1 && v0 ? 'one' : 'other'
    },
  },
  messages: {
    'A confirmation password to confirm the new password.':
      'A confirmation password to confirm the new password.',
    'A field that conforms to a 4 digit integer.':
      'A field that conforms to a 4 digit integer.',
    'A field that conforms to a string, with strings ending in ._domainkey.':
      'A field that conforms to a string, with strings ending in ._domainkey.',
    "A field who's values contain numbers, letters, dashes, and underscores.":
      "A field who's values contain numbers, letters, dashes, and underscores.",
    'A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234.':
      'A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234.',
    'A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/.':
      'A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/.',
    'A field whose value is an upper case letter or an under score that has a length between 1 and 50.':
      'A field whose value is an upper case letter or an under score that has a length between 1 and 50.',
    'A password confirmation of their new password.':
      'A password confirmation of their new password.',
    'A secondary password field used to confirm the user entered the correct password.':
      'A secondary password field used to confirm the user entered the correct password.',
    'A token sent by email, that will assign a user to an organization with a pre-determined role.':
      'A token sent by email, that will assign a user to an organization with a pre-determined role.',
    'A user who has been given access to view an organization.':
      'A user who has been given access to view an organization.',
    'A user who has the same access as a user write account, but can define new user read/write accounts.':
      'A user who has the same access as a user write account, but can define new user read/write accounts.',
    'A user who has the same access as an admin, but can define new admins.':
      'A user who has the same access as an admin, but can define new admins.',
    "Affiliated user's ID": "Affiliated user's ID",
    'Amount of messages that are passing DKIM, but failing SPF.':
      'Amount of messages that are passing DKIM, but failing SPF.',
    'Amount of messages that are passing SPF and DKIM.':
      'Amount of messages that are passing SPF and DKIM.',
    'Amount of messages that are passing SPF, but failing DKIM.':
      'Amount of messages that are passing SPF, but failing DKIM.',
    'Amount of messages that fail both SPF and DKIM.':
      'Amount of messages that fail both SPF and DKIM.',
    'An enum used to assign, and test users roles.':
      'An enum used to assign, and test users roles.',
    "An enum used to define user's language.":
      "An enum used to define user's language.",
    'An enum used to select information from the dmarc-report-api.':
      'An enum used to select information from the dmarc-report-api.',
    'An object used to return information when users sign up or authenticate.':
      'An object used to return information when users sign up or authenticate.',
    'Authentication error, please sign in again.':
      'Authentication error, please sign in again.',
    'Authentication error. Please sign in again.':
      'Authentication error. Please sign in again.',
    'Authentication error. Please sign in.':
      'Authentication error. Please sign in.',
    'Boolean cannot represent a non boolean value: {0}': function (a) {
      return ['Boolean cannot represent a non boolean value: ', a('0')]
    },
    'Can only validate strings as acronyms but got a: {0}': function (a) {
      return ['Can only validate strings as acronyms but got a: ', a('0')]
    },
    'Can only validate strings as domains but got a: {0}': function (a) {
      return ['Can only validate strings as domains but got a: ', a('0')]
    },
    'Can only validate strings as email address but got a: {0}': function (a) {
      return ['Can only validate strings as email address but got a: ', a('0')]
    },
    'Can only validate strings as phone numbers but got a: {0}': function (a) {
      return ['Can only validate strings as phone numbers but got a: ', a('0')]
    },
    'Can only validate strings as selectors but got a: {0}': function (a) {
      return ['Can only validate strings as selectors but got a: ', a('0')]
    },
    'Can only validate strings as slug but got a: {0}': function (a) {
      return ['Can only validate strings as slug but got a: ', a('0')]
    },
    'Can only validate strings as year but got a: {0}': function (a) {
      return ['Can only validate strings as year but got a: ', a('0')]
    },
    'Category of computed summary which the other fields relate to.':
      'Category of computed summary which the other fields relate to.',
    'Category percentages based on the category totals.':
      'Category percentages based on the category totals.',
    'Category totals for quick viewing.': 'Category totals for quick viewing.',
    'Could not retrieve specified domain.':
      'Could not retrieve specified domain.',
    'Could not retrieve specified organization.':
      'Could not retrieve specified organization.',
    'DKIM record retrieved during the scan of the domain.':
      'DKIM record retrieved during the scan of the domain.',
    'DKIM selector strings corresponding to this domain.':
      'DKIM selector strings corresponding to this domain.',
    'DKIM, DMARC, and SPF scan results.': 'DKIM, DMARC, and SPF scan results.',
    'DMARC phase found during scan.': 'DMARC phase found during scan.',
    'DMARC record retrieved during scan.':
      'DMARC record retrieved during scan.',
    'Degree to which HTTPS is enforced on the server based on behaviour.':
      'Degree to which HTTPS is enforced on the server based on behaviour.',
    'Denotes how long the domain should only be accessed using HTTPS':
      'Denotes how long the domain should only be accessed using HTTPS',
    'Denotes whether the domain has been submitted and included within HSTS preload list.':
      'Denotes whether the domain has been submitted and included within HSTS preload list.',
    'Domain Keys Identified Mail (DKIM) selector strings associated with domain.':
      'Domain Keys Identified Mail (DKIM) selector strings associated with domain.',
    'Domain from SMTP banner message.': 'Domain from SMTP banner message.',
    'Domain object containing information for a given domain.':
      'Domain object containing information for a given domain.',
    'Domain that scans will be ran on.': 'Domain that scans will be ran on.',
    'Domain-based Message Authentication, Reporting, and Conformance (DMARC) is a scalable mechanism by which a mail-originating organization can express domain-level policies and preferences for message validation, disposition, and reporting, that a mail-receiving organization can use to improve mail handling.':
      'Domain-based Message Authentication, Reporting, and Conformance (DMARC) is a scalable mechanism by which a mail-originating organization can express domain-level policies and preferences for message validation, disposition, and reporting, that a mail-receiving organization can use to improve mail handling.',
    'Domain-based Message Authentication, Reporting, and Conformance (DMARC) scan results.':
      'Domain-based Message Authentication, Reporting, and Conformance (DMARC) scan results.',
    'DomainKeys Identified Mail (DKIM) Signatures scan results.':
      'DomainKeys Identified Mail (DKIM) Signatures scan results.',
    "DomainKeys Identified Mail (DKIM) permits a person, role, or organization that owns the signing domain to claim some responsibility for a message by associating the domain with the message.  This can be an author's organization, an operational relay, or one of their agents.":
      "DomainKeys Identified Mail (DKIM) permits a person, role, or organization that owns the signing domain to claim some responsibility for a message by associating the domain with the message.  This can be an author's organization, an operational relay, or one of their agents.",
    'Domains used for DKIM validation': 'Domains used for DKIM validation',
    'Domains used for SPF validation.': 'Domains used for SPF validation.',
    'Email address that the user will use to authenticate with.':
      'Email address that the user will use to authenticate with.',
    'Email on the Internet can be forged in a number of ways.  In particular, existing protocols place no restriction on what a sending host can use as the "MAIL FROM" of a message or the domain given on the SMTP HELO/EHLO commands.  Version 1 of the Sender Policy Framework (SPF) protocol is where ADministrative Management Domains (ADMDs) can explicitly authorize the hosts that are allowed to use their domain names, and a receiving host can check such authorization.':
      'Email on the Internet can be forged in a number of ways.  In particular, existing protocols place no restriction on what a sending host can use as the "MAIL FROM" of a message or the domain given on the SMTP HELO/EHLO commands.  Version 1 of the Sender Policy Framework (SPF) protocol is where ADministrative Management Domains (ADMDs) can explicitly authorize the hosts that are allowed to use their domain names, and a receiving host can check such authorization.',
    'Email summary computed values, used to build summary cards.':
      'Email summary computed values, used to build summary cards.',
    'End date for date filter.': 'End date for date filter.',
    'End date of data collection.': 'End date of data collection.',
    'Enum used when requesting a manual scan to determine what type of scan is to be ran.':
      'Enum used when requesting a manual scan to determine what type of scan is to be ran.',
    'Error when retrieving dmarc report information. Please try again.':
      'Error when retrieving dmarc report information. Please try again.',
    'Float cannot represent non numeric value: {0}': function (a) {
      return ['Float cannot represent non numeric value: ', a('0')]
    },
    'Guidance for any issues that were found from the report.':
      'Guidance for any issues that were found from the report.',
    'HTTPS, and SSL scan results.': 'HTTPS, and SSL scan results.',
    'Has the user completed two factor authentication.':
      'Has the user completed two factor authentication.',
    'Has the user email verified their account.':
      'Has the user email verified their account.',
    'Host from reverse DNS of source IP address.':
      'Host from reverse DNS of source IP address.',
    'Hyper Text Transfer Protocol Secure scan results.':
      'Hyper Text Transfer Protocol Secure scan results.',
    'ID cannot represent a non string value: {0}': function (a) {
      return ['ID cannot represent a non string value: ', a('0')]
    },
    'ID cannot represent a non-string and non-integer value:  {0}': function (
      a,
    ) {
      return [
        'ID cannot represent a non-string and non-integer value:  ',
        a('0'),
      ]
    },
    'IP address of sending server.': 'IP address of sending server.',
    'If an account with this username is found, a password reset link will be found in your inbox.':
      'If an account with this username is found, a password reset link will be found in your inbox.',
    'If an account with this username is found, an email verification link will be found in your inbox.':
      'If an account with this username is found, an email verification link will be found in your inbox.',
    'Individual scans results for each dkim selector.':
      'Individual scans results for each dkim selector.',
    'Individual scans results for the given dkim selector.':
      'Individual scans results for the given dkim selector.',
    'Informs the user if the email was sent successfully.':
      'Informs the user if the email was sent successfully.',
    'Informs the user if the invite or invite email was successfully sent.':
      'Informs the user if the invite or invite email was successfully sent.',
    'Informs the user if the password reset email was sent successfully.':
      'Informs the user if the password reset email was sent successfully.',
    'Informs the user if the password reset was successful, and to redirect to sign in page.':
      'Informs the user if the password reset was successful, and to redirect to sign in page.',
    'Informs the user if the scan was dispatched successfully.':
      'Informs the user if the scan was dispatched successfully.',
    'Informs the user if the text message was successfully sent.':
      'Informs the user if the text message was successfully sent.',
    'Informs the user if the user role update was successful.':
      'Informs the user if the user role update was successful.',
    'Informs user if account was successfully verified.':
      'Informs user if account was successfully verified.',
    'Instruction of what a recipient should do if there is not a match to your SPF record.':
      'Instruction of what a recipient should do if there is not a match to your SPF record.',
    'Int cannot represent non 32-bit signed integer value: {value}': function (
      a,
    ) {
      return [
        'Int cannot represent non 32-bit signed integer value: ',
        a('value'),
      ]
    },
    'Int cannot represent non-integer value: {0}': function (a) {
      return ['Int cannot represent non-integer value: ', a('0')]
    },
    'Invalid token, please request a new one.':
      'Invalid token, please request a new one.',
    'Is DKIM aligned.': 'Is DKIM aligned.',
    'Is SPF aligned.': 'Is SPF aligned.',
    'JWT used for accessing controlled content.':
      'JWT used for accessing controlled content.',
    'Key tags found during DMARC Scan.': 'Key tags found during DMARC Scan.',
    'Key tags found during scan.': 'Key tags found during scan.',
    'List of SummaryCategory objects with data for different computed categories.':
      'List of SummaryCategory objects with data for different computed categories.',
    'List of senders that are failing DKIM checks.':
      'List of senders that are failing DKIM checks.',
    'List of senders that are failing DMARC checks.':
      'List of senders that are failing DMARC checks.',
    'List of senders that are failing SPF checks.':
      'List of senders that are failing SPF checks.',
    'List of senders that are passing all checks.':
      'List of senders that are passing all checks.',
    'Mutation allows the modification of domains if domain is updated through out its life-cycle':
      'Mutation allows the modification of domains if domain is updated through out its life-cycle',
    'Mutation allows the modification of organizations if any changes to the organization may occur.':
      'Mutation allows the modification of organizations if any changes to the organization may occur.',
    'Mutation used to create a new domain for an organization.':
      'Mutation used to create a new domain for an organization.',
    'Name displayed to other users.': 'Name displayed to other users.',
    'New passwords do not match. Please try again.':
      'New passwords do not match. Please try again.',
    'No domain with the provided domain could be found.':
      'No domain with the provided domain could be found.',
    'No organization with the provided slug could be found.':
      'No organization with the provided slug could be found.',
    'Object that contains information for each data collection period.':
      'Object that contains information for each data collection period.',
    'Object that contains the various senders and details for each category.':
      'Object that contains the various senders and details for each category.',
    'Organization object containing information for a given Organization.':
      'Organization object containing information for a given Organization.',
    'Passing both `first` and `last` to paginate the `affiliation` is not supported.':
      'Passing both `first` and `last` to paginate the `affiliation` is not supported.',
    'Passing both `first` and `last` to paginate the `dkimResults` connection is not supported.':
      'Passing both `first` and `last` to paginate the `dkimResults` connection is not supported.',
    'Passing both `first` and `last` to paginate the `dkim` connection is not supported.':
      'Passing both `first` and `last` to paginate the `dkim` connection is not supported.',
    'Passing both `first` and `last` to paginate the `dmarc` connection is not supported.':
      'Passing both `first` and `last` to paginate the `dmarc` connection is not supported.',
    'Passing both `first` and `last` to paginate the `domain` connection is not supported.':
      'Passing both `first` and `last` to paginate the `domain` connection is not supported.',
    'Passing both `first` and `last` to paginate the `https` connection is not supported.':
      'Passing both `first` and `last` to paginate the `https` connection is not supported.',
    'Passing both `first` and `last` to paginate the `organization` connection is not supported.':
      'Passing both `first` and `last` to paginate the `organization` connection is not supported.',
    'Passing both `first` and `last` to paginate the `spf` connection is not supported.':
      'Passing both `first` and `last` to paginate the `spf` connection is not supported.',
    'Passing both `first` and `last` to paginate the `ssl` connection is not supported.':
      'Passing both `first` and `last` to paginate the `ssl` connection is not supported.',
    'Password is not strong enough. Please try again.':
      'Password is not strong enough. Please try again.',
    'Password is too short.': 'Password is too short.',
    'Password was successfully reset.': 'Password was successfully reset.',
    'Password was successfully updated.': 'Password was successfully updated.',
    'Passwords do not match.': 'Passwords do not match.',
    'Percentage compared to other categories.':
      'Percentage compared to other categories.',
    'Percentage of messages that are failing all checks.':
      'Percentage of messages that are failing all checks.',
    'Percentage of messages that are passing all checks.':
      'Percentage of messages that are passing all checks.',
    'Percentage of messages that are passing only dkim.':
      'Percentage of messages that are passing only dkim.',
    'Percentage of messages that are passing only spf.':
      'Percentage of messages that are passing only spf.',
    'Pointer to a DKIM public key record in DNS.':
      'Pointer to a DKIM public key record in DNS.',
    'Presence and completeness of HSTS implementation.':
      'Presence and completeness of HSTS implementation.',
    'Profile successfully updated.': 'Profile successfully updated.',
    'Query used to check if the user has an admin role.':
      'Query used to check if the user has an admin role.',
    'Requesting `{amount}` records on the `affiliations` exceeds the `{argSet}` limit of 100 records.': function (
      a,
    ) {
      return [
        'Requesting `',
        a('amount'),
        '` records on the `affiliations` exceeds the `',
        a('argSet'),
        '` limit of 100 records.',
      ]
    },
    'Requesting `{amount}` records on the `domain` connection exceeds the `{argSet}` limit of 100 records.': function (
      a,
    ) {
      return [
        'Requesting `',
        a('amount'),
        '` records on the `domain` connection exceeds the `',
        a('argSet'),
        '` limit of 100 records.',
      ]
    },
    'Requesting `{amount}` records on the `organization` connection exceeds the `{argSet}` limit of 100 records.': function (
      a,
    ) {
      return [
        'Requesting `',
        a('amount'),
        '` records on the `organization` connection exceeds the `',
        a('argSet'),
        '` limit of 100 records.',
      ]
    },
    'Requesting {amount} records on the `dkimResults` connection exceeds the `{argSet}` limit of 100 records.': function (
      a,
    ) {
      return [
        'Requesting ',
        a('amount'),
        ' records on the `dkimResults` connection exceeds the `',
        a('argSet'),
        '` limit of 100 records.',
      ]
    },
    'Requesting {amount} records on the `dkim` connection exceeds the `{argSet}` limit of 100 records.': function (
      a,
    ) {
      return [
        'Requesting ',
        a('amount'),
        ' records on the `dkim` connection exceeds the `',
        a('argSet'),
        '` limit of 100 records.',
      ]
    },
    'Requesting {amount} records on the `dmarc` connection exceeds the `{argSet}` limit of 100 records.': function (
      a,
    ) {
      return [
        'Requesting ',
        a('amount'),
        ' records on the `dmarc` connection exceeds the `',
        a('argSet'),
        '` limit of 100 records.',
      ]
    },
    'Requesting {amount} records on the `https` connection exceeds the `{argSet}` limit of 100 records.': function (
      a,
    ) {
      return [
        'Requesting ',
        a('amount'),
        ' records on the `https` connection exceeds the `',
        a('argSet'),
        '` limit of 100 records.',
      ]
    },
    'Requesting {amount} records on the `spf` connection exceeds the `{argSet}` limit of 100 records.': function (
      a,
    ) {
      return [
        'Requesting ',
        a('amount'),
        ' records on the `spf` connection exceeds the `',
        a('argSet'),
        '` limit of 100 records.',
      ]
    },
    'Requesting {amount} records on the `ssl` connection exceeds the `{argSet}` limit of 100 records.': function (
      a,
    ) {
      return [
        'Requesting ',
        a('amount'),
        ' records on the `ssl` connection exceeds the `',
        a('argSet'),
        '` limit of 100 records.',
      ]
    },
    'Results of DKIM, DMARC, and SPF scans on the given domain.':
      'Results of DKIM, DMARC, and SPF scans on the given domain.',
    'Results of HTTPS, and SSL scan on the given domain.':
      'Results of HTTPS, and SSL scan on the given domain.',
    'Retrieve a specific domain by providing a domain.':
      'Retrieve a specific domain by providing a domain.',
    'Root Mutation Object': 'Root Mutation Object',
    'SPF record retrieved during the scan of the given domain.':
      'SPF record retrieved during the scan of the given domain.',
    'Secure Socket Layer scan results.': 'Secure Socket Layer scan results.',
    'Security code found in text msg, or email inbox.':
      'Security code found in text msg, or email inbox.',
    'Select all information on a selected organization that a user has access to.':
      'Select all information on a selected organization that a user has access to.',
    'Select domains a user has access to.':
      'Select domains a user has access to.',
    'Select organizations a user has access to.':
      'Select organizations a user has access to.',
    'Sender Policy Framework (SPF) scan results.':
      'Sender Policy Framework (SPF) scan results.',
    'Size of the Public Key in bits': 'Size of the Public Key in bits',
    'Slugified name of the organization.':
      'Slugified name of the organization.',
    'Start date for date filter.': 'Start date for date filter.',
    'Start date of data collection.': 'Start date of data collection.',
    'State of the HTTPS implementation on the server and any issues therein.':
      'State of the HTTPS implementation on the server and any issues therein.',
    'Status string to inform the user if the domain was successfully removed.':
      'Status string to inform the user if the domain was successfully removed.',
    'Status string to inform the user if the organization was successfully removed.':
      'Status string to inform the user if the organization was successfully removed.',
    'String cannot represent a non string value: {0}': function (a) {
      return ['String cannot represent a non string value: ', a('0')]
    },
    'String that conforms to a domain structure.':
      'String that conforms to a domain structure.',
    'Successfully invited user to organization, and sent notification email.':
      'Successfully invited user to organization, and sent notification email.',
    'Successfully removed domain: {0} from {1}.': function (a) {
      return ['Successfully removed domain: ', a('0'), ' from ', a('1'), '.']
    },
    'Successfully removed organization: {0}.': function (a) {
      return ['Successfully removed organization: ', a('0'), '.']
    },
    'Successfully sent invitation to service, and organization email.':
      'Successfully sent invitation to service, and organization email.',
    'Successfully two factor authenticated.':
      'Successfully two factor authenticated.',
    'Successfully verified account.': 'Successfully verified account.',
    'Summarized DMARC aggregate reports.':
      'Summarized DMARC aggregate reports.',
    'The DMARC enforcement action that the receiver took, either none, quarantine, or reject.':
      'The DMARC enforcement action that the receiver took, either none, quarantine, or reject.',
    'The English acronym of the organization.':
      'The English acronym of the organization.',
    'The English name of the organization.':
      'The English name of the organization.',
    'The English translation of the city the organization resides in.':
      'The English translation of the city the organization resides in.',
    'The English translation of the country the organization resides in.':
      'The English translation of the country the organization resides in.',
    'The English translation of the province the organization resides in.':
      'The English translation of the province the organization resides in.',
    'The English translation of the sector the organization belongs to.':
      'The English translation of the sector the organization belongs to.',
    'The English translation of the zone the organization belongs to.':
      'The English translation of the zone the organization belongs to.',
    'The French acronym of the organization.':
      'The French acronym of the organization.',
    'The French name of the organization.':
      'The French name of the organization.',
    'The French translation of the city the organization resides in.':
      'The French translation of the city the organization resides in.',
    'The French translation of the country the organization resides in.':
      'The French translation of the country the organization resides in.',
    'The French translation of the province the organization resides in.':
      'The French translation of the province the organization resides in.',
    'The French translation of the sector the organization belongs to.':
      'The French translation of the sector the organization belongs to.',
    'The ID of the object': 'The ID of the object',
    'The ID of the object.': 'The ID of the object.',
    'The JWT found in the url, redirected from the email they received.':
      'The JWT found in the url, redirected from the email they received.',
    'The JWT that is retrieved from the sign in mutation.':
      'The JWT that is retrieved from the sign in mutation.',
    'The `Boolean` scalar type represents `true` or `false`.':
      'The `Boolean` scalar type represents `true` or `false`.',
    'The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).':
      'The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).',
    'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.':
      'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
    'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.':
      'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',
    'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.':
      'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
    'The address/domain used in the "From" field.':
      'The address/domain used in the "From" field.',
    'The affiliated organizations information.':
      'The affiliated organizations information.',
    'The affiliated users information.': 'The affiliated users information.',
    'The amount of DNS lookups.': 'The amount of DNS lookups.',
    'The authenticated users information, and JWT.':
      'The authenticated users information, and JWT.',
    'The city in which the organization resides.':
      'The city in which the organization resides.',
    'The country in which the organization resides.':
      'The country in which the organization resides.',
    'The dkim scan information that this result belongs to.':
      'The dkim scan information that this result belongs to.',
    'The domain that the scan will be ran on.':
      'The domain that the scan will be ran on.',
    'The domain the scan was ran on.': 'The domain the scan was ran on.',
    'The domain you wish to retrieve information for.':
      'The domain you wish to retrieve information for.',
    'The domains which are associated with this organization.':
      'The domains which are associated with this organization.',
    'The email the user signed up with.': 'The email the user signed up with.',
    'The full name of the organization.': 'The full name of the organization.',
    'The global ID of the organization used for permission checks.':
      'The global ID of the organization used for permission checks.',
    'The global id of the domain that is being updated.':
      'The global id of the domain that is being updated.',
    'The global id of the domain you wish to remove.':
      'The global id of the domain you wish to remove.',
    'The global id of the organization to be updated.':
      'The global id of the organization to be updated.',
    'The global id of the organization you wish to assign this domain to.':
      'The global id of the organization you wish to assign this domain to.',
    'The global id of the organization you wish you remove.':
      'The global id of the organization you wish you remove.',
    'The language in which the email will be sent in.':
      'The language in which the email will be sent in.',
    'The last 30 days.': 'The last 30 days.',
    'The last time that a scan was ran on this domain.':
      'The last time that a scan was ran on this domain.',
    'The month in which the returned data is relevant to.':
      'The month in which the returned data is relevant to.',
    'The month of April.': 'The month of April.',
    'The month of August.': 'The month of August.',
    'The month of December.': 'The month of December.',
    'The month of February.': 'The month of February.',
    'The month of January.': 'The month of January.',
    'The month of July.': 'The month of July.',
    'The month of June.': 'The month of June.',
    'The month of March.': 'The month of March.',
    'The month of May.': 'The month of May.',
    'The month of November.': 'The month of November.',
    'The month of October.': 'The month of October.',
    'The month of September.': 'The month of September.',
    'The name that will be displayed to other users.':
      'The name that will be displayed to other users.',
    'The new password the user wishes to change to.':
      'The new password the user wishes to change to.',
    'The new url of the of the old domain.':
      'The new url of the of the old domain.',
    'The newly created domain.': 'The newly created domain.',
    'The newly created organization.': 'The newly created organization.',
    'The number of domains associated with this organization.':
      'The number of domains associated with this organization.',
    'The organization that the admin, and the user both belong to.':
      'The organization that the admin, and the user both belong to.',
    'The organization that this domain belongs to.':
      'The organization that this domain belongs to.',
    'The organization you wish to invite the user to.':
      'The organization you wish to invite the user to.',
    'The organization you wish to remove the domain from.':
      'The organization you wish to remove the domain from.',
    'The organizations acronym.': 'The organizations acronym.',
    'The password the user signed up with':
      'The password the user signed up with',
    'The password the user will authenticate with.':
      'The password the user will authenticate with.',
    'The percentage of messages to which the DMARC policy is to be applied.':
      'The percentage of messages to which the DMARC policy is to be applied.',
    'The phone number that the text message will be sent to.':
      'The phone number that the text message will be sent to.',
    'The province in which the organization resides.':
      'The province in which the organization resides.',
    'The requested policy you wish mailbox providers to apply when your email fails DMARC authentication and alignment checks.':
      'The requested policy you wish mailbox providers to apply when your email fails DMARC authentication and alignment checks.',
    'The results of DKIM verification of the message. Can be pass, fail, neutral, soft-fail, temp-error, or perm-error.':
      'The results of DKIM verification of the message. Can be pass, fail, neutral, soft-fail, temp-error, or perm-error.',
    'The results of DKIM verification of the message. Can be pass, fail, neutral, temp-error, or perm-error.':
      'The results of DKIM verification of the message. Can be pass, fail, neutral, temp-error, or perm-error.',
    'The role that the admin wants to give to the selected user.':
      'The role that the admin wants to give to the selected user.',
    'The role which you would like this user to have.':
      'The role which you would like this user to have.',
    'The sector which the organization belongs to.':
      'The sector which the organization belongs to.',
    'The selector the scan was ran on.': 'The selector the scan was ran on.',
    'The slugified organization name you want to retrieve data for.':
      'The slugified organization name you want to retrieve data for.',
    'The status if the user profile update was successful.':
      'The status if the user profile update was successful.',
    'The status of verifying the two factor authentication.':
      'The status of verifying the two factor authentication.',
    'The time the scan was initiated.': 'The time the scan was initiated.',
    'The time when the scan was initiated.':
      'The time when the scan was initiated.',
    'The total amount of messages sent by this domain.':
      'The total amount of messages sent by this domain.',
    'The two factor code that was received via text message.':
      'The two factor code that was received via text message.',
    'The updated DKIM selector strings corresponding to this domain.':
      'The updated DKIM selector strings corresponding to this domain.',
    'The updated display name the user wishes to change to.':
      'The updated display name the user wishes to change to.',
    'The updated preferred language the user wishes to change to.':
      'The updated preferred language the user wishes to change to.',
    'The updated user name the user wishes to change to.':
      'The updated user name the user wishes to change to.',
    'The username of the user you wish to update their role to.':
      'The username of the user you wish to update their role to.',
    'The users current password to verify it is the current user.':
      'The users current password to verify it is the current user.',
    'The users email address used for sending the verification email.':
      'The users email address used for sending the verification email.',
    'The users new password.': 'The users new password.',
    'The users preferred language.': 'The users preferred language.',
    'The year in which the returned data is relevant to.':
      'The year in which the returned data is relevant to.',
    'The zone which the organization belongs to.':
      'The zone which the organization belongs to.',
    'This mutation allows a user to provide their username and request that a password reset email be sent to their account with a reset token in a url.':
      'This mutation allows a user to provide their username and request that a password reset email be sent to their account with a reset token in a url.',
    'This mutation allows admins and higher to invite users to any of their organizations, if the invited user does not have an account, they will be able to sign-up and be assigned to that organization in one mutation.':
      'This mutation allows admins and higher to invite users to any of their organizations, if the invited user does not have an account, they will be able to sign-up and be assigned to that organization in one mutation.',
    'This mutation allows for new users to sign up for our sites services.':
      'This mutation allows for new users to sign up for our sites services.',
    'This mutation allows super admins, and admins of the given organization to update the permission level of a given user that already belongs to the given organization.':
      'This mutation allows super admins, and admins of the given organization to update the permission level of a given user that already belongs to the given organization.',
    'This mutation allows the creation of an organization inside the database.':
      'This mutation allows the creation of an organization inside the database.',
    'This mutation allows the removal of unused domains.':
      'This mutation allows the removal of unused domains.',
    'This mutation allows the removal of unused organizations.':
      'This mutation allows the removal of unused organizations.',
    'This mutation allows the user to take the token they received in their email to reset their password.':
      'This mutation allows the user to take the token they received in their email to reset their password.',
    'This mutation allows the user to two factor authenticate.':
      'This mutation allows the user to two factor authenticate.',
    'This mutation allows the user to update their account password.':
      'This mutation allows the user to update their account password.',
    'This mutation allows the user to update their user profile to change various details of their current profile.':
      'This mutation allows the user to update their user profile to change various details of their current profile.',
    'This mutation allows the user to verify their account through a token sent in an email.':
      'This mutation allows the user to verify their account through a token sent in an email.',
    'This mutation allows users to give their credentials and be taken to the authentication page to verify their account':
      'This mutation allows users to give their credentials and be taken to the authentication page to verify their account',
    'This mutation allows users to give their credentials and retrieve a token that gives them access to restricted content.':
      'This mutation allows users to give their credentials and retrieve a token that gives them access to restricted content.',
    'This mutation is used for re-sending a verification email if it failed during user creation.':
      'This mutation is used for re-sending a verification email if it failed during user creation.',
    'This mutation is used for sending a text message with a random six digit code used to verify the user.':
      'This mutation is used for sending a text message with a random six digit code used to verify the user.',
    'This mutation is used to run a manual scan on a requested domain.':
      'This mutation is used to run a manual scan on a requested domain.',
    'This object can be queried to retrieve the current logged in users information or if the user is an org or super admin they can query a user by their user name':
      'This object can be queried to retrieve the current logged in users information or if the user is an org or super admin they can query a user by their user name',
    'This object contains the information for each type of summary that has been pre-computed':
      'This object contains the information for each type of summary that has been pre-computed',
    'This object contains the list of different categories for pre-computed summary data with the computed total for how many domains in total are being compared.':
      'This object contains the list of different categories for pre-computed summary data with the computed total for how many domains in total are being compared.',
    'This object displays the percentages of the category totals.':
      'This object displays the percentages of the category totals.',
    'This object displays the total amount of messages that fit into each category.':
      'This object displays the total amount of messages that fit into each category.',
    'This table contains the data fields for senders who are in the DKIM fail category.':
      'This table contains the data fields for senders who are in the DKIM fail category.',
    'This table contains the data fields for senders who are in the DMARC failure category.':
      'This table contains the data fields for senders who are in the DMARC failure category.',
    'This table contains the data fields for senders who are in the Full Pass category.':
      'This table contains the data fields for senders who are in the Full Pass category.',
    'This table contains the data fields for senders who are in the SPF fail category.':
      'This table contains the data fields for senders who are in the SPF fail category.',
    'This tag is used to indicate a requested policy for all subdomains where mail is failing the DMARC authentication and alignment checks.':
      'This tag is used to indicate a requested policy for all subdomains where mail is failing the DMARC authentication and alignment checks.',
    'Token sent via email, and located in url.':
      'Token sent via email, and located in url.',
    'Token used to verify during authentication.':
      'Token used to verify during authentication.',
    'Too many failed login attempts, please reset your password, and try again.':
      'Too many failed login attempts, please reset your password, and try again.',
    'Total count of domains that fall into this category.':
      'Total count of domains that fall into this category.',
    'Total domains that were check under this summary.':
      'Total domains that were check under this summary.',
    'Total messages from this sender.': 'Total messages from this sender.',
    'Two factor code has been successfully sent, you will receive a text message shortly.':
      'Two factor code has been successfully sent, you will receive a text message shortly.',
    "Type of scan to preform on the requested domain ('WEB' or 'MAIL').":
      "Type of scan to preform on the requested domain ('WEB' or 'MAIL').",
    'Unable to authenticate. Please try again.':
      'Unable to authenticate. Please try again.',
    'Unable to check permission. Please try again.':
      'Unable to check permission. Please try again.',
    'Unable to create domain. Please try again.':
      'Unable to create domain. Please try again.',
    'Unable to create organization. Please try again.':
      'Unable to create organization. Please try again.',
    'Unable to find dkim result. Please try again.':
      'Unable to find dkim result. Please try again.',
    'Unable to find dkim scan. Please try again.':
      'Unable to find dkim scan. Please try again.',
    'Unable to find dmarc scan. Please try again.':
      'Unable to find dmarc scan. Please try again.',
    'Unable to find domain. Please try again.':
      'Unable to find domain. Please try again.',
    'Unable to find https scan. Please try again.':
      'Unable to find https scan. Please try again.',
    'Unable to find organization. Please try again.':
      'Unable to find organization. Please try again.',
    'Unable to find spf scan. Please try again.':
      'Unable to find spf scan. Please try again.',
    'Unable to find ssl scan. Please try again.':
      'Unable to find ssl scan. Please try again.',
    'Unable to find user affiliation(s). Please try again.':
      'Unable to find user affiliation(s). Please try again.',
    'Unable to find user. Please try again.':
      'Unable to find user. Please try again.',
    'Unable to invite user. Please try again.':
      'Unable to invite user. Please try again.',
    'Unable to invite yourself to an org. Please try again.':
      'Unable to invite yourself to an org. Please try again.',
    'Unable to load affiliations. Please try again.':
      'Unable to load affiliations. Please try again.',
    'Unable to load dkim results. Please try again.':
      'Unable to load dkim results. Please try again.',
    'Unable to load dkim scans. Please try again.':
      'Unable to load dkim scans. Please try again.',
    'Unable to load dmarc scans. Please try again.':
      'Unable to load dmarc scans. Please try again.',
    'Unable to load domains. Please try again.':
      'Unable to load domains. Please try again.',
    'Unable to load https scans. Please try again.':
      'Unable to load https scans. Please try again.',
    'Unable to load organizations. Please try again.':
      'Unable to load organizations. Please try again.',
    'Unable to load spf scans. Please try again.':
      'Unable to load spf scans. Please try again.',
    'Unable to load ssl scans. Please try again.':
      'Unable to load ssl scans. Please try again.',
    'Unable to query affiliations. Please try again.':
      'Unable to query affiliations. Please try again.',
    'Unable to query domains. Please try again.':
      'Unable to query domains. Please try again.',
    'Unable to query organizations. Please try again.':
      'Unable to query organizations. Please try again.',
    'Unable to remove domain. Please try again.':
      'Unable to remove domain. Please try again.',
    'Unable to remove organization. Please try again.':
      'Unable to remove organization. Please try again.',
    'Unable to reset password. Please try again.':
      'Unable to reset password. Please try again.',
    'Unable to retrieve dmarc report information for: {domain}': function (a) {
      return ['Unable to retrieve dmarc report information for: ', a('domain')]
    },
    'Unable to retrieve {0} for domain: {domain}.': function (a) {
      return ['Unable to retrieve ', a('0'), ' for domain: ', a('domain'), '.']
    },
    'Unable to send TFA code, please try again.':
      'Unable to send TFA code, please try again.',
    'Unable to send org invite email. Please try again.':
      'Unable to send org invite email. Please try again.',
    'Unable to send password reset email. Please try again.':
      'Unable to send password reset email. Please try again.',
    'Unable to send two factor authentication message. Please try again.':
      'Unable to send two factor authentication message. Please try again.',
    'Unable to send verification email. Please try again.':
      'Unable to send verification email. Please try again.',
    'Unable to sign in, please try again.':
      'Unable to sign in, please try again.',
    'Unable to sign up. Please try again.':
      'Unable to sign up. Please try again.',
    'Unable to two factor authenticate. Please try again.':
      'Unable to two factor authenticate. Please try again.',
    'Unable to update domain. Please try again.':
      'Unable to update domain. Please try again.',
    'Unable to update organization. Please try again.':
      'Unable to update organization. Please try again.',
    'Unable to update password, current password does not match. Please try again.':
      'Unable to update password, current password does not match. Please try again.',
    'Unable to update password, new passwords do not match. Please try again.':
      'Unable to update password, new passwords do not match. Please try again.',
    'Unable to update password, passwords are required to be 12 characters or longer. Please try again.':
      'Unable to update password, passwords are required to be 12 characters or longer. Please try again.',
    'Unable to update password. Please try again.':
      'Unable to update password. Please try again.',
    'Unable to update profile. Please try again.':
      'Unable to update profile. Please try again.',
    'Unable to update users role. Please invite user to the organization.':
      'Unable to update users role. Please invite user to the organization.',
    'Unable to update users role. Please try again.':
      'Unable to update users role. Please try again.',
    'Unable to update your own role. Please try again.':
      'Unable to update your own role. Please try again.',
    'Unable to verify account. Please request a new email.':
      'Unable to verify account. Please request a new email.',
    'Unable to verify account. Please try again.':
      'Unable to verify account. Please try again.',
    'Unable to verify if user is an admin, please try again.':
      'Unable to verify if user is an admin, please try again.',
    'Url that you would like to be added to the database.':
      'Url that you would like to be added to the database.',
    'Used for defining if DMARC and DKIM scans should be preformed.':
      'Used for defining if DMARC and DKIM scans should be preformed.',
    'Used for defining if English is the preferred language.':
      'Used for defining if English is the preferred language.',
    'Used for defining if French is the preferred language.':
      'Used for defining if French is the preferred language.',
    'Used for defining if HTTPS and SSL scans should be preformed.':
      'Used for defining if HTTPS and SSL scans should be preformed.',
    'User Affiliations containing the permission level for the given organization, the users information, and the organizations information.':
      'User Affiliations containing the permission level for the given organization, the users information, and the organizations information.',
    'User name for the account you would like to receive a password reset link for.':
      'User name for the account you would like to receive a password reset link for.',
    'User role was updated successfully.':
      'User role was updated successfully.',
    'User that has just been created or signed in.':
      'User that has just been created or signed in.',
    "User's level of access to a given organization.":
      "User's level of access to a given organization.",
    'Username already in use.': 'Username already in use.',
    'Users affiliations to various organizations.':
      'Users affiliations to various organizations.',
    'Users email address.': 'Users email address.',
    'Users email that you would like to invite to your org.':
      'Users email that you would like to invite to your org.',
    'Users preferred language.': 'Users preferred language.',
    'Value is not a string: {0}': function (a) {
      return ['Value is not a string: ', a('0')]
    },
    'Value is not a valid acronym: {value}': function (a) {
      return ['Value is not a valid acronym: ', a('value')]
    },
    'Value is not a valid domain: {value}': function (a) {
      return ['Value is not a valid domain: ', a('value')]
    },
    'Value is not a valid email address: {value}': function (a) {
      return ['Value is not a valid email address: ', a('value')]
    },
    'Value is not a valid phone number of the form +17895551234 (10-15 digits): {value}': function (
      a,
    ) {
      return [
        'Value is not a valid phone number of the form +17895551234 (10-15 digits): ',
        a('value'),
      ]
    },
    'Value is not a valid selector: {value}': function (a) {
      return ['Value is not a valid selector: ', a('value')]
    },
    'Value is not a valid slug: {value}': function (a) {
      return ['Value is not a valid slug: ', a('value')]
    },
    'Value is not a valid year: {value}': function (a) {
      return ['Value is not a valid year: ', a('value')]
    },
    'Value is not of type string: {0}': function (a) {
      return ['Value is not of type string: ', a('0')]
    },
    'Value is not string: {0}': function (a) {
      return ['Value is not string: ', a('0')]
    },
    'Various senders for each category.': 'Various senders for each category.',
    "We've sent you a text message with an authentication code to sign into Pulse.":
      "We've sent you a text message with an authentication code to sign into Pulse.",
    "We've sent you an email with an authentication code to sign into Pulse.":
      "We've sent you an email with an authentication code to sign into Pulse.",
    'Web summary computed values, used to build summary cards.':
      'Web summary computed values, used to build summary cards.',
    'Wether the authentication code was sent through text, or email.':
      'Wether the authentication code was sent through text, or email.',
    'Wether the organization is a verified organization.':
      'Wether the organization is a verified organization.',
    'You must provide a `first` or `last` value to properly paginate the `affiliation`.':
      'You must provide a `first` or `last` value to properly paginate the `affiliation`.',
    'You must provide a `first` or `last` value to properly paginate the `dkimResults` connection.':
      'You must provide a `first` or `last` value to properly paginate the `dkimResults` connection.',
    'You must provide a `first` or `last` value to properly paginate the `dkim` connection.':
      'You must provide a `first` or `last` value to properly paginate the `dkim` connection.',
    'You must provide a `first` or `last` value to properly paginate the `dmarc` connection.':
      'You must provide a `first` or `last` value to properly paginate the `dmarc` connection.',
    'You must provide a `first` or `last` value to properly paginate the `domain` connection.':
      'You must provide a `first` or `last` value to properly paginate the `domain` connection.',
    'You must provide a `first` or `last` value to properly paginate the `https` connection.':
      'You must provide a `first` or `last` value to properly paginate the `https` connection.',
    'You must provide a `first` or `last` value to properly paginate the `organization` connection.':
      'You must provide a `first` or `last` value to properly paginate the `organization` connection.',
    'You must provide a `first` or `last` value to properly paginate the `spf` connection.':
      'You must provide a `first` or `last` value to properly paginate the `spf` connection.',
    'You must provide a `first` or `last` value to properly paginate the `ssl` connection.':
      'You must provide a `first` or `last` value to properly paginate the `ssl` connection.',
    '`{argSet}` must be of type `number` not `{typeSet}`.': function (a) {
      return [
        '`',
        a('argSet'),
        '` must be of type `number` not `',
        a('typeSet'),
        '`.',
      ]
    },
    '`{argSet}` on the `affiliations` cannot be less than zero.': function (a) {
      return [
        '`',
        a('argSet'),
        '` on the `affiliations` cannot be less than zero.',
      ]
    },
    '`{argSet}` on the `dkimResults` connection cannot be less than zero.': function (
      a,
    ) {
      return [
        '`',
        a('argSet'),
        '` on the `dkimResults` connection cannot be less than zero.',
      ]
    },
    '`{argSet}` on the `dkim` connection cannot be less than zero.': function (
      a,
    ) {
      return [
        '`',
        a('argSet'),
        '` on the `dkim` connection cannot be less than zero.',
      ]
    },
    '`{argSet}` on the `dmarc` connection cannot be less than zero.': function (
      a,
    ) {
      return [
        '`',
        a('argSet'),
        '` on the `dmarc` connection cannot be less than zero.',
      ]
    },
    '`{argSet}` on the `domain` connection cannot be less than zero.': function (
      a,
    ) {
      return [
        '`',
        a('argSet'),
        '` on the `domain` connection cannot be less than zero.',
      ]
    },
    '`{argSet}` on the `https` connection cannot be less than zero.': function (
      a,
    ) {
      return [
        '`',
        a('argSet'),
        '` on the `https` connection cannot be less than zero.',
      ]
    },
    '`{argSet}` on the `organization` connection cannot be less than zero.': function (
      a,
    ) {
      return [
        '`',
        a('argSet'),
        '` on the `organization` connection cannot be less than zero.',
      ]
    },
    '`{argSet}` on the `spf` connection cannot be less than zero.': function (
      a,
    ) {
      return [
        '`',
        a('argSet'),
        '` on the `spf` connection cannot be less than zero.',
      ]
    },
    '`{argSet}` on the `ssl` connection cannot be less than zero.': function (
      a,
    ) {
      return [
        '`',
        a('argSet'),
        '` on the `ssl` connection cannot be less than zero.',
      ]
    },
  },
}
