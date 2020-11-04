/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function (n, ord) {
      if (ord) return n == 1 ? 'one' : 'other'
      return n >= 0 && n < 2 ? 'one' : 'other'
    },
  },
  messages: {
    'A confirmation password to confirm the new password.': 'todo',
    'A field that conforms to a 4 digit integer.': 'todo',
    'A field that conforms to a string, with strings ending in ._domainkey.':
      'todo',
    "A field who's values contain numbers, letters, dashes, and underscores.":
      'todo',
    'A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234.':
      'todo',
    'A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/.':
      'todo',
    'A field whose value is an upper case letter or an under score that has a length between 1 and 50.':
      'todo',
    'A password confirmation of their new password.': 'todo',
    'A secondary password field used to confirm the user entered the correct password.':
      'todo',
    'A token sent by email, that will assign a user to an organization with a pre-determined role.':
      'todo',
    'A user who has been given access to view an organization.': 'todo',
    'A user who has the same access as a user write account, but can define new user read/write accounts.':
      'todo',
    'A user who has the same access as an admin, but can define new admins.':
      'todo',
    "Affiliated user's ID": 'todo',
    'Amount of messages that are passing DKIM, but failing SPF.': 'todo',
    'Amount of messages that are passing SPF and DKIM.': 'todo',
    'Amount of messages that are passing SPF, but failing DKIM.': 'todo',
    'Amount of messages that fail both SPF and DKIM.': 'todo',
    'An enum used to assign, and test users roles.': 'todo',
    "An enum used to define user's language.": 'todo',
    'An enum used to select information from the dmarc-report-api.': 'todo',
    'An object used to return information when users sign up or authenticate.':
      'todo',
    'Authentication error, please sign in again.': 'todo',
    'Authentication error. Please sign in again.': 'todo',
    'Authentication error. Please sign in.': 'todo',
    'Boolean cannot represent a non boolean value: {0}': 'todo',
    'Can only validate strings as acronyms but got a: {0}': 'todo',
    'Can only validate strings as domains but got a: {0}': 'todo',
    'Can only validate strings as email address but got a: {0}': 'todo',
    'Can only validate strings as phone numbers but got a: {0}': 'todo',
    'Can only validate strings as selectors but got a: {0}': 'todo',
    'Can only validate strings as slug but got a: {0}': 'todo',
    'Can only validate strings as year but got a: {0}': 'todo',
    'Category of computed summary which the other fields relate to.': 'todo',
    'Category percentages based on the category totals.': 'todo',
    'Category totals for quick viewing.': 'todo',
    'Could not retrieve specified domain.': 'todo',
    'Could not retrieve specified organization.': 'todo',
    'DKIM record retrieved during the scan of the domain.': 'todo',
    'DKIM selector strings corresponding to this domain.': 'todo',
    'DKIM, DMARC, and SPF scan results.': 'todo',
    'DMARC phase found during scan.': 'todo',
    'DMARC record retrieved during scan.': 'todo',
    'Degree to which HTTPS is enforced on the server based on behaviour.':
      'todo',
    'Denotes how long the domain should only be accessed using HTTPS': 'todo',
    'Denotes whether the domain has been submitted and included within HSTS preload list.':
      'todo',
    'Domain Keys Identified Mail (DKIM) selector strings associated with domain.':
      'todo',
    'Domain from SMTP banner message.': 'todo',
    'Domain object containing information for a given domain.': 'todo',
    'Domain that scans will be ran on.': 'todo',
    'Domain-based Message Authentication, Reporting, and Conformance (DMARC) is a scalable mechanism by which a mail-originating organization can express domain-level policies and preferences for message validation, disposition, and reporting, that a mail-receiving organization can use to improve mail handling.':
      'todo',
    'Domain-based Message Authentication, Reporting, and Conformance (DMARC) scan results.':
      'todo',
    'DomainKeys Identified Mail (DKIM) Signatures scan results.': 'todo',
    "DomainKeys Identified Mail (DKIM) permits a person, role, or organization that owns the signing domain to claim some responsibility for a message by associating the domain with the message.  This can be an author's organization, an operational relay, or one of their agents.":
      'todo',
    'Domains used for DKIM validation': 'todo',
    'Domains used for SPF validation.': 'todo',
    'Email address that the user will use to authenticate with.': 'todo',
    'Email on the Internet can be forged in a number of ways.  In particular, existing protocols place no restriction on what a sending host can use as the "MAIL FROM" of a message or the domain given on the SMTP HELO/EHLO commands.  Version 1 of the Sender Policy Framework (SPF) protocol is where ADministrative Management Domains (ADMDs) can explicitly authorize the hosts that are allowed to use their domain names, and a receiving host can check such authorization.':
      'todo',
    'Email summary computed values, used to build summary cards.': 'todo',
    'End date for date filter.': 'todo',
    'End date of data collection.': 'todo',
    'Enum used when requesting a manual scan to determine what type of scan is to be ran.':
      'todo',
    'Error when retrieving dmarc report information. Please try again.': 'todo',
    'Float cannot represent non numeric value: {0}': 'todo',
    'Guidance for any issues that were found from the report.': 'todo',
    'HTTPS, and SSL scan results.': 'todo',
    'Has the user completed two factor authentication.': 'todo',
    'Has the user email verified their account.': 'todo',
    'Host from reverse DNS of source IP address.': 'todo',
    'Hyper Text Transfer Protocol Secure scan results.': 'todo',
    'ID cannot represent a non string value: {0}': 'todo',
    'ID cannot represent a non-string and non-integer value:  {0}': 'todo',
    'IP address of sending server.': 'todo',
    'If an account with this username is found, a password reset link will be found in your inbox.':
      'todo',
    'If an account with this username is found, an email verification link will be found in your inbox.':
      'todo',
    'Individual scans results for each dkim selector.': 'todo',
    'Individual scans results for the given dkim selector.': 'todo',
    'Informs the user if the email was sent successfully.': 'todo',
    'Informs the user if the invite or invite email was successfully sent.':
      'todo',
    'Informs the user if the password reset email was sent successfully.':
      'todo',
    'Informs the user if the password reset was successful, and to redirect to sign in page.':
      'todo',
    'Informs the user if the scan was dispatched successfully.': 'todo',
    'Informs the user if the text message was successfully sent.': 'todo',
    'Informs the user if the user role update was successful.': 'todo',
    'Informs user if account was successfully verified.': 'todo',
    'Instruction of what a recipient should do if there is not a match to your SPF record.':
      'todo',
    'Int cannot represent non 32-bit signed integer value: {value}': 'todo',
    'Int cannot represent non-integer value: {0}': 'todo',
    'Invalid token, please request a new one.': 'todo',
    'Is DKIM aligned.': 'todo',
    'Is SPF aligned.': 'todo',
    'JWT used for accessing controlled content.': 'todo',
    'Key tags found during DMARC Scan.': 'todo',
    'Key tags found during scan.': 'todo',
    'List of SummaryCategory objects with data for different computed categories.':
      'todo',
    'List of senders that are failing DKIM checks.': 'todo',
    'List of senders that are failing DMARC checks.': 'todo',
    'List of senders that are failing SPF checks.': 'todo',
    'List of senders that are passing all checks.': 'todo',
    'Mutation allows the modification of domains if domain is updated through out its life-cycle':
      'todo',
    'Mutation allows the modification of organizations if any changes to the organization may occur.':
      'todo',
    'Mutation used to create a new domain for an organization.': 'todo',
    'Name displayed to other users.': 'todo',
    'New passwords do not match. Please try again.': 'todo',
    'No domain with the provided domain could be found.': 'todo',
    'No organization with the provided slug could be found.': 'todo',
    'Object that contains information for each data collection period.': 'todo',
    'Object that contains the various senders and details for each category.':
      'todo',
    'Organization object containing information for a given Organization.':
      'todo',
    'Passing both `first` and `last` to paginate the `affiliation` is not supported.':
      'todo',
    'Passing both `first` and `last` to paginate the `dkimResults` connection is not supported.':
      'todo',
    'Passing both `first` and `last` to paginate the `dkim` connection is not supported.':
      'todo',
    'Passing both `first` and `last` to paginate the `dmarc` connection is not supported.':
      'todo',
    'Passing both `first` and `last` to paginate the `domain` connection is not supported.':
      'todo',
    'Passing both `first` and `last` to paginate the `https` connection is not supported.':
      'todo',
    'Passing both `first` and `last` to paginate the `organization` connection is not supported.':
      'todo',
    'Passing both `first` and `last` to paginate the `spf` connection is not supported.':
      'todo',
    'Passing both `first` and `last` to paginate the `ssl` connection is not supported.':
      'todo',
    'Password is not strong enough. Please try again.': 'todo',
    'Password is too short.': 'todo',
    'Password was successfully reset.': 'todo',
    'Password was successfully updated.': 'todo',
    'Passwords do not match.': 'todo',
    'Percentage compared to other categories.': 'todo',
    'Percentage of messages that are failing all checks.': 'todo',
    'Percentage of messages that are passing all checks.': 'todo',
    'Percentage of messages that are passing only dkim.': 'todo',
    'Percentage of messages that are passing only spf.': 'todo',
    'Pointer to a DKIM public key record in DNS.': 'todo',
    'Presence and completeness of HSTS implementation.': 'todo',
    'Profile successfully updated.': 'todo',
    'Query used to check if the user has an admin role.': 'todo',
    'Requesting `{amount}` records on the `affiliations` exceeds the `{argSet}` limit of 100 records.':
      'todo',
    'Requesting `{amount}` records on the `domain` connection exceeds the `{argSet}` limit of 100 records.':
      'todo',
    'Requesting `{amount}` records on the `organization` connection exceeds the `{argSet}` limit of 100 records.':
      'todo',
    'Requesting {amount} records on the `dkimResults` connection exceeds the `{argSet}` limit of 100 records.':
      'todo',
    'Requesting {amount} records on the `dkim` connection exceeds the `{argSet}` limit of 100 records.':
      'todo',
    'Requesting {amount} records on the `dmarc` connection exceeds the `{argSet}` limit of 100 records.':
      'todo',
    'Requesting {amount} records on the `https` connection exceeds the `{argSet}` limit of 100 records.':
      'todo',
    'Requesting {amount} records on the `spf` connection exceeds the `{argSet}` limit of 100 records.':
      'todo',
    'Requesting {amount} records on the `ssl` connection exceeds the `{argSet}` limit of 100 records.':
      'todo',
    'Results of DKIM, DMARC, and SPF scans on the given domain.': 'todo',
    'Results of HTTPS, and SSL scan on the given domain.': 'todo',
    'Retrieve a specific domain by providing a domain.': 'todo',
    'Root Mutation Object': 'todo',
    'SPF record retrieved during the scan of the given domain.': 'todo',
    'Secure Socket Layer scan results.': 'todo',
    'Security code found in text msg, or email inbox.': 'todo',
    'Select all information on a selected organization that a user has access to.':
      'todo',
    'Select domains a user has access to.': 'todo',
    'Select organizations a user has access to.': 'todo',
    'Sender Policy Framework (SPF) scan results.': 'todo',
    'Size of the Public Key in bits': 'todo',
    'Slugified name of the organization.': 'todo',
    'Start date for date filter.': 'todo',
    'Start date of data collection.': 'todo',
    'State of the HTTPS implementation on the server and any issues therein.':
      'todo',
    'Status string to inform the user if the domain was successfully removed.':
      'todo',
    'Status string to inform the user if the organization was successfully removed.':
      'todo',
    'String cannot represent a non string value: {0}': 'todo',
    'String that conforms to a domain structure.': 'todo',
    'Successfully invited user to organization, and sent notification email.':
      'todo',
    'Successfully removed domain: {0} from {1}.': 'todo',
    'Successfully removed organization: {0}.': 'todo',
    'Successfully sent invitation to service, and organization email.': 'todo',
    'Successfully two factor authenticated.': 'todo',
    'Successfully verified account.': 'todo',
    'Summarized DMARC aggregate reports.': 'todo',
    'The DMARC enforcement action that the receiver took, either none, quarantine, or reject.':
      'todo',
    'The English acronym of the organization.': 'todo',
    'The English name of the organization.': 'todo',
    'The English translation of the city the organization resides in.': 'todo',
    'The English translation of the country the organization resides in.':
      'todo',
    'The English translation of the province the organization resides in.':
      'todo',
    'The English translation of the sector the organization belongs to.':
      'todo',
    'The English translation of the zone the organization belongs to.': 'todo',
    'The French acronym of the organization.': 'todo',
    'The French name of the organization.': 'todo',
    'The French translation of the city the organization resides in.': 'todo',
    'The French translation of the country the organization resides in.':
      'todo',
    'The French translation of the province the organization resides in.':
      'todo',
    'The French translation of the sector the organization belongs to.': 'todo',
    'The ID of the object': 'todo',
    'The ID of the object.': 'todo',
    'The JWT found in the url, redirected from the email they received.':
      'todo',
    'The JWT that is retrieved from the sign in mutation.': 'todo',
    'The `Boolean` scalar type represents `true` or `false`.': 'todo',
    'The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).':
      'todo',
    'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.':
      'todo',
    'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.':
      'todo',
    'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.':
      'todo',
    'The address/domain used in the "From" field.': 'todo',
    'The affiliated organizations information.': 'todo',
    'The affiliated users information.': 'todo',
    'The amount of DNS lookups.': 'todo',
    'The authenticated users information, and JWT.': 'todo',
    'The city in which the organization resides.': 'todo',
    'The country in which the organization resides.': 'todo',
    'The dkim scan information that this result belongs to.': 'todo',
    'The domain that the scan will be ran on.': 'todo',
    'The domain the scan was ran on.': 'todo',
    'The domain you wish to retrieve information for.': 'todo',
    'The domains which are associated with this organization.': 'todo',
    'The email the user signed up with.': 'todo',
    'The full name of the organization.': 'todo',
    'The global ID of the organization used for permission checks.': 'todo',
    'The global id of the domain that is being updated.': 'todo',
    'The global id of the domain you wish to remove.': 'todo',
    'The global id of the organization to be updated.': 'todo',
    'The global id of the organization you wish to assign this domain to.':
      'todo',
    'The global id of the organization you wish you remove.': 'todo',
    'The language in which the email will be sent in.': 'todo',
    'The last 30 days.': 'todo',
    'The last time that a scan was ran on this domain.': 'todo',
    'The month in which the returned data is relevant to.': 'todo',
    'The month of April.': 'todo',
    'The month of August.': 'todo',
    'The month of December.': 'todo',
    'The month of February.': 'todo',
    'The month of January.': 'todo',
    'The month of July.': 'todo',
    'The month of June.': 'todo',
    'The month of March.': 'todo',
    'The month of May.': 'todo',
    'The month of November.': 'todo',
    'The month of October.': 'todo',
    'The month of September.': 'todo',
    'The name that will be displayed to other users.': 'todo',
    'The new password the user wishes to change to.': 'todo',
    'The new url of the of the old domain.': 'todo',
    'The newly created domain.': 'todo',
    'The newly created organization.': 'todo',
    'The number of domains associated with this organization.': 'todo',
    'The organization that the admin, and the user both belong to.': 'todo',
    'The organization that this domain belongs to.': 'todo',
    'The organization you wish to invite the user to.': 'todo',
    'The organization you wish to remove the domain from.': 'todo',
    'The organizations acronym.': 'todo',
    'The password the user signed up with': 'todo',
    'The password the user will authenticate with.': 'todo',
    'The percentage of messages to which the DMARC policy is to be applied.':
      'todo',
    'The phone number that the text message will be sent to.': 'todo',
    'The province in which the organization resides.': 'todo',
    'The requested policy you wish mailbox providers to apply when your email fails DMARC authentication and alignment checks.':
      'todo',
    'The results of DKIM verification of the message. Can be pass, fail, neutral, soft-fail, temp-error, or perm-error.':
      'todo',
    'The results of DKIM verification of the message. Can be pass, fail, neutral, temp-error, or perm-error.':
      'todo',
    'The role that the admin wants to give to the selected user.': 'todo',
    'The role which you would like this user to have.': 'todo',
    'The sector which the organization belongs to.': 'todo',
    'The selector the scan was ran on.': 'todo',
    'The slugified organization name you want to retrieve data for.': 'todo',
    'The status if the user profile update was successful.': 'todo',
    'The status of verifying the two factor authentication.': 'todo',
    'The time the scan was initiated.': 'todo',
    'The time when the scan was initiated.': 'todo',
    'The total amount of messages sent by this domain.': 'todo',
    'The two factor code that was received via text message.': 'todo',
    'The updated DKIM selector strings corresponding to this domain.': 'todo',
    'The updated display name the user wishes to change to.': 'todo',
    'The updated preferred language the user wishes to change to.': 'todo',
    'The updated user name the user wishes to change to.': 'todo',
    'The username of the user you wish to update their role to.': 'todo',
    'The users current password to verify it is the current user.': 'todo',
    'The users email address used for sending the verification email.': 'todo',
    'The users new password.': 'todo',
    'The users preferred language.': 'todo',
    'The year in which the returned data is relevant to.': 'todo',
    'The zone which the organization belongs to.': 'todo',
    'This mutation allows a user to provide their username and request that a password reset email be sent to their account with a reset token in a url.':
      'todo',
    'This mutation allows admins and higher to invite users to any of their organizations, if the invited user does not have an account, they will be able to sign-up and be assigned to that organization in one mutation.':
      'todo',
    'This mutation allows for new users to sign up for our sites services.':
      'todo',
    'This mutation allows super admins, and admins of the given organization to update the permission level of a given user that already belongs to the given organization.':
      'todo',
    'This mutation allows the creation of an organization inside the database.':
      'todo',
    'This mutation allows the removal of unused domains.': 'todo',
    'This mutation allows the removal of unused organizations.': 'todo',
    'This mutation allows the user to take the token they received in their email to reset their password.':
      'todo',
    'This mutation allows the user to two factor authenticate.': 'todo',
    'This mutation allows the user to update their account password.': 'todo',
    'This mutation allows the user to update their user profile to change various details of their current profile.':
      'todo',
    'This mutation allows the user to verify their account through a token sent in an email.':
      'todo',
    'This mutation allows users to give their credentials and be taken to the authentication page to verify their account':
      'todo',
    'This mutation allows users to give their credentials and retrieve a token that gives them access to restricted content.':
      'todo',
    'This mutation is used for re-sending a verification email if it failed during user creation.':
      'todo',
    'This mutation is used for sending a text message with a random six digit code used to verify the user.':
      'todo',
    'This mutation is used to run a manual scan on a requested domain.': 'todo',
    'This object can be queried to retrieve the current logged in users information or if the user is an org or super admin they can query a user by their user name':
      'todo',
    'This object contains the information for each type of summary that has been pre-computed':
      'todo',
    'This object contains the list of different categories for pre-computed summary data with the computed total for how many domains in total are being compared.':
      'todo',
    'This object displays the percentages of the category totals.': 'todo',
    'This object displays the total amount of messages that fit into each category.':
      'todo',
    'This table contains the data fields for senders who are in the DKIM fail category.':
      'todo',
    'This table contains the data fields for senders who are in the DMARC failure category.':
      'todo',
    'This table contains the data fields for senders who are in the Full Pass category.':
      'todo',
    'This table contains the data fields for senders who are in the SPF fail category.':
      'todo',
    'This tag is used to indicate a requested policy for all subdomains where mail is failing the DMARC authentication and alignment checks.':
      'todo',
    'Token sent via email, and located in url.': 'todo',
    'Token used to verify during authentication.': 'todo',
    'Too many failed login attempts, please reset your password, and try again.':
      'todo',
    'Total count of domains that fall into this category.': 'todo',
    'Total domains that were check under this summary.': 'todo',
    'Total messages from this sender.': 'todo',
    'Two factor code has been successfully sent, you will receive a text message shortly.':
      'todo',
    "Type of scan to preform on the requested domain ('WEB' or 'MAIL').":
      'todo',
    'Unable to authenticate. Please try again.': 'todo',
    'Unable to check permission. Please try again.': 'todo',
    'Unable to create domain. Please try again.': 'todo',
    'Unable to create organization. Please try again.': 'todo',
    'Unable to find dkim result. Please try again.': 'todo',
    'Unable to find dkim scan. Please try again.': 'todo',
    'Unable to find dmarc scan. Please try again.': 'todo',
    'Unable to find domain. Please try again.': 'todo',
    'Unable to find https scan. Please try again.': 'todo',
    'Unable to find organization. Please try again.': 'todo',
    'Unable to find spf scan. Please try again.': 'todo',
    'Unable to find ssl scan. Please try again.': 'todo',
    'Unable to find user affiliation(s). Please try again.': 'todo',
    'Unable to find user. Please try again.': 'todo',
    'Unable to invite user. Please try again.': 'todo',
    'Unable to invite yourself to an org. Please try again.': 'todo',
    'Unable to load affiliations. Please try again.': 'todo',
    'Unable to load dkim results. Please try again.': 'todo',
    'Unable to load dkim scans. Please try again.': 'todo',
    'Unable to load dmarc scans. Please try again.': 'todo',
    'Unable to load domains. Please try again.': 'todo',
    'Unable to load https scans. Please try again.': 'todo',
    'Unable to load organizations. Please try again.': 'todo',
    'Unable to load spf scans. Please try again.': 'todo',
    'Unable to load ssl scans. Please try again.': 'todo',
    'Unable to query affiliations. Please try again.': 'todo',
    'Unable to query domains. Please try again.': 'todo',
    'Unable to query organizations. Please try again.': 'todo',
    'Unable to remove domain. Please try again.': 'todo',
    'Unable to remove organization. Please try again.': 'todo',
    'Unable to reset password. Please try again.': 'todo',
    'Unable to retrieve dmarc report information for: {domain}': 'todo',
    'Unable to retrieve {0} for domain: {domain}.': 'todo',
    'Unable to send TFA code, please try again.': 'todo',
    'Unable to send org invite email. Please try again.': 'todo',
    'Unable to send password reset email. Please try again.': 'todo',
    'Unable to send two factor authentication message. Please try again.':
      'todo',
    'Unable to send verification email. Please try again.': 'todo',
    'Unable to sign in, please try again.': 'todo',
    'Unable to sign up. Please try again.': 'todo',
    'Unable to two factor authenticate. Please try again.': 'todo',
    'Unable to update domain. Please try again.': 'todo',
    'Unable to update organization. Please try again.': 'todo',
    'Unable to update password, current password does not match. Please try again.':
      'todo',
    'Unable to update password, new passwords do not match. Please try again.':
      'todo',
    'Unable to update password, passwords are required to be 12 characters or longer. Please try again.':
      'todo',
    'Unable to update password. Please try again.': 'todo',
    'Unable to update profile. Please try again.': 'todo',
    'Unable to update users role. Please invite user to the organization.':
      'todo',
    'Unable to update users role. Please try again.': 'todo',
    'Unable to update your own role. Please try again.': 'todo',
    'Unable to verify account. Please request a new email.': 'todo',
    'Unable to verify account. Please try again.': 'todo',
    'Unable to verify if user is an admin, please try again.': 'todo',
    'Url that you would like to be added to the database.': 'todo',
    'Used for defining if DMARC and DKIM scans should be preformed.': 'todo',
    'Used for defining if English is the preferred language.': 'todo',
    'Used for defining if French is the preferred language.': 'todo',
    'Used for defining if HTTPS and SSL scans should be preformed.': 'todo',
    'User Affiliations containing the permission level for the given organization, the users information, and the organizations information.':
      'todo',
    'User name for the account you would like to receive a password reset link for.':
      'todo',
    'User role was updated successfully.': 'todo',
    'User that has just been created or signed in.': 'todo',
    "User's level of access to a given organization.": 'todo',
    'Username already in use.': 'todo',
    'Users affiliations to various organizations.': 'todo',
    'Users email address.': 'todo',
    'Users email that you would like to invite to your org.': 'todo',
    'Users preferred language.': 'todo',
    'Value is not a string: {0}': 'todo',
    'Value is not a valid acronym: {value}': 'todo',
    'Value is not a valid domain: {value}': 'todo',
    'Value is not a valid email address: {value}': 'todo',
    'Value is not a valid phone number of the form +17895551234 (10-15 digits): {value}':
      'todo',
    'Value is not a valid selector: {value}': 'todo',
    'Value is not a valid slug: {value}': 'todo',
    'Value is not a valid year: {value}': 'todo',
    'Value is not of type string: {0}': 'todo',
    'Value is not string: {0}': 'todo',
    'Various senders for each category.': 'todo',
    "We've sent you a text message with an authentication code to sign into Pulse.":
      'todo',
    "We've sent you an email with an authentication code to sign into Pulse.":
      'todo',
    'Web summary computed values, used to build summary cards.': 'todo',
    'Wether the authentication code was sent through text, or email.': 'todo',
    'Wether the organization is a verified organization.': 'todo',
    'You must provide a `first` or `last` value to properly paginate the `affiliation`.':
      'todo',
    'You must provide a `first` or `last` value to properly paginate the `dkimResults` connection.':
      'todo',
    'You must provide a `first` or `last` value to properly paginate the `dkim` connection.':
      'todo',
    'You must provide a `first` or `last` value to properly paginate the `dmarc` connection.':
      'todo',
    'You must provide a `first` or `last` value to properly paginate the `domain` connection.':
      'todo',
    'You must provide a `first` or `last` value to properly paginate the `https` connection.':
      'todo',
    'You must provide a `first` or `last` value to properly paginate the `organization` connection.':
      'todo',
    'You must provide a `first` or `last` value to properly paginate the `spf` connection.':
      'todo',
    'You must provide a `first` or `last` value to properly paginate the `ssl` connection.':
      'todo',
    '`{argSet}` must be of type `number` not `{typeSet}`.': 'todo',
    '`{argSet}` on the `affiliations` cannot be less than zero.': 'todo',
    '`{argSet}` on the `dkimResults` connection cannot be less than zero.':
      'todo',
    '`{argSet}` on the `dkim` connection cannot be less than zero.': 'todo',
    '`{argSet}` on the `dmarc` connection cannot be less than zero.': 'todo',
    '`{argSet}` on the `domain` connection cannot be less than zero.': 'todo',
    '`{argSet}` on the `https` connection cannot be less than zero.': 'todo',
    '`{argSet}` on the `organization` connection cannot be less than zero.':
      'todo',
    '`{argSet}` on the `spf` connection cannot be less than zero.': 'todo',
    '`{argSet}` on the `ssl` connection cannot be less than zero.': 'todo',
  },
}
