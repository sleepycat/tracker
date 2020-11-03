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
    'An enum used to assign, and test users roles.': 'todo',
    "An enum used to define user's language.": 'todo',
    'An enum used to select information from the dmarc-report-api.': 'todo',
    'Authentication error, please sign in again.': 'todo',
    'Authentication error. Please sign in again.': 'todo',
    'Authentication error. Please sign in.': 'todo',
    'Boolean cannot represent a non boolean value: {0}': 'todo',
    'Can only validate strings as acronyms but got a: {0}': 'todo',
    'Can only validate strings as domains but got a: {0}': 'todo',
    'Can only validate strings as selectors but got a: {0}': 'todo',
    'Can only validate strings as slug but got a: {0}': 'todo',
    'Can only validate strings as year but got a: {0}': 'todo',
    'Could not retrieve specified domain.': 'todo',
    'Could not retrieve specified organization.': 'todo',
    'DKIM selector strings corresponding to this domain.': 'todo',
    'Email address that the user will use to authenticate with.': 'todo',
    'Enum used when requesting a manual scan to determine what type of scan is to be ran.':
      'todo',
    'Error when retrieving dmarc report information. Please try again.': 'todo',
    'Float cannot represent non numeric value: {0}': 'todo',
    'ID cannot represent a non string value: {0}': 'todo',
    'ID cannot represent a non-string and non-integer value:  {0}': 'todo',
    'If an account with this username is found, a password reset link will be found in your inbox.':
      'todo',
    'If an account with this username is found, an email verification link will be found in your inbox.':
      'todo',
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
    'Int cannot represent non 32-bit signed integer value: {value}': 'todo',
    'Int cannot represent non-integer value: {0}': 'todo',
    'Invalid token, please request a new one.': 'todo',
    'Mutation allows the modification of domains if domain is updated through out its life-cycle':
      'todo',
    'Mutation allows the modification of organizations if any changes to the organization may occur.':
      'todo',
    'Mutation used to create a new domain for an organization.': 'todo',
    'New passwords do not match. Please try again.': 'todo',
    'No domain with the provided domain could be found.': 'todo',
    'No organization with the provided slug could be found.': 'todo',
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
    'Profile successfully updated.': 'todo',
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
    'Root Mutation Object': 'todo',
    'Security code found in text msg, or email inbox.': 'todo',
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
    'The authenticated users information, and JWT.': 'todo',
    'The domain that the scan will be ran on.': 'todo',
    'The email the user signed up with.': 'todo',
    'The global ID of the organization used for permission checks.': 'todo',
    'The global id of the domain that is being updated.': 'todo',
    'The global id of the domain you wish to remove.': 'todo',
    'The global id of the organization to be updated.': 'todo',
    'The global id of the organization you wish to assign this domain to.':
      'todo',
    'The global id of the organization you wish you remove.': 'todo',
    'The language in which the email will be sent in.': 'todo',
    'The last 30 days.': 'todo',
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
    'The organization that the admin, and the user both belong to.': 'todo',
    'The organization you wish to invite the user to.': 'todo',
    'The organization you wish to remove the domain from.': 'todo',
    'The password the user signed up with': 'todo',
    'The password the user will authenticate with.': 'todo',
    'The phone number that the text message will be sent to.': 'todo',
    'The role that the admin wants to give to the selected user.': 'todo',
    'The role which you would like this user to have.': 'todo',
    'The status if the user profile update was successful.': 'todo',
    'The status of verifying the two factor authentication.': 'todo',
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
    'Token sent via email, and located in url.': 'todo',
    'Token used to verify during authentication.': 'todo',
    'Too many failed login attempts, please reset your password, and try again.':
      'todo',
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
    'User name for the account you would like to receive a password reset link for.':
      'todo',
    'User role was updated successfully.': 'todo',
    'Username already in use.': 'todo',
    'Users email that you would like to invite to your org.': 'todo',
    'Value is not a string: {0}': 'todo',
    'Value is not a valid acronym: {value}': 'todo',
    'Value is not a valid domain: {value}': 'todo',
    'Value is not a valid selector: {value}': 'todo',
    'Value is not a valid slug: {value}': 'todo',
    'Value is not a valid year: {value}': 'todo',
    'Value is not string: {0}': 'todo',
    "We've sent you a text message with an authentication code to sign into Pulse.":
      'todo',
    "We've sent you an email with an authentication code to sign into Pulse.":
      'todo',
    'Wether the authentication code was sent through text, or email.': 'todo',
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
