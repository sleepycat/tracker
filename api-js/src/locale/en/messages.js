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
    'A password confirmation of their new password.':
      'A password confirmation of their new password.',
    'A secondary password field used to confirm the user entered the correct password.':
      'A secondary password field used to confirm the user entered the correct password.',
    'A token sent by email, that will assign a user to an organization with a pre-determined role.':
      'A token sent by email, that will assign a user to an organization with a pre-determined role.',
    'Authentication error, please sign in again.':
      'Authentication error, please sign in again.',
    'Authentication error. Please sign in again.':
      'Authentication error. Please sign in again.',
    'Authentication error. Please sign in.':
      'Authentication error. Please sign in.',
    'Could not retrieve specified domain.':
      'Could not retrieve specified domain.',
    'Could not retrieve specified organization.':
      'Could not retrieve specified organization.',
    'DKIM selector strings corresponding to this domain.':
      'DKIM selector strings corresponding to this domain.',
    'Email address that the user will use to authenticate with.':
      'Email address that the user will use to authenticate with.',
    'Error when retrieving dmarc report information. Please try again.':
      'Error when retrieving dmarc report information. Please try again.',
    'If an account with this username is found, a password reset link will be found in your inbox.':
      'If an account with this username is found, a password reset link will be found in your inbox.',
    'If an account with this username is found, an email verification link will be found in your inbox.':
      'If an account with this username is found, an email verification link will be found in your inbox.',
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
    'Invalid token, please request a new one.':
      'Invalid token, please request a new one.',
    'Mutation allows the modification of domains if domain is updated through out its life-cycle':
      'Mutation allows the modification of domains if domain is updated through out its life-cycle',
    'Mutation allows the modification of organizations if any changes to the organization may occur.':
      'Mutation allows the modification of organizations if any changes to the organization may occur.',
    'Mutation used to create a new domain for an organization.':
      'Mutation used to create a new domain for an organization.',
    'New passwords do not match. Please try again.':
      'New passwords do not match. Please try again.',
    'No domain with the provided domain could be found.':
      'No domain with the provided domain could be found.',
    'No organization with the provided slug could be found.':
      'No organization with the provided slug could be found.',
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
    'Profile successfully updated.': 'Profile successfully updated.',
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
    'Root Mutation Object': 'Root Mutation Object',
    'Security code found in text msg, or email inbox.':
      'Security code found in text msg, or email inbox.',
    'Status string to inform the user if the domain was successfully removed.':
      'Status string to inform the user if the domain was successfully removed.',
    'Status string to inform the user if the organization was successfully removed.':
      'Status string to inform the user if the organization was successfully removed.',
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
    'The JWT found in the url, redirected from the email they received.':
      'The JWT found in the url, redirected from the email they received.',
    'The JWT that is retrieved from the sign in mutation.':
      'The JWT that is retrieved from the sign in mutation.',
    'The authenticated users information, and JWT.':
      'The authenticated users information, and JWT.',
    'The domain that the scan will be ran on.':
      'The domain that the scan will be ran on.',
    'The email the user signed up with.': 'The email the user signed up with.',
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
    'The name that will be displayed to other users.':
      'The name that will be displayed to other users.',
    'The new password the user wishes to change to.':
      'The new password the user wishes to change to.',
    'The new url of the of the old domain.':
      'The new url of the of the old domain.',
    'The newly created domain.': 'The newly created domain.',
    'The newly created organization.': 'The newly created organization.',
    'The organization that the admin, and the user both belong to.':
      'The organization that the admin, and the user both belong to.',
    'The organization you wish to invite the user to.':
      'The organization you wish to invite the user to.',
    'The organization you wish to remove the domain from.':
      'The organization you wish to remove the domain from.',
    'The password the user signed up with':
      'The password the user signed up with',
    'The password the user will authenticate with.':
      'The password the user will authenticate with.',
    'The phone number that the text message will be sent to.':
      'The phone number that the text message will be sent to.',
    'The role that the admin wants to give to the selected user.':
      'The role that the admin wants to give to the selected user.',
    'The role which you would like this user to have.':
      'The role which you would like this user to have.',
    'The status if the user profile update was successful.':
      'The status if the user profile update was successful.',
    'The status of verifying the two factor authentication.':
      'The status of verifying the two factor authentication.',
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
    'Token sent via email, and located in url.':
      'Token sent via email, and located in url.',
    'Token used to verify during authentication.':
      'Token used to verify during authentication.',
    'Too many failed login attempts, please reset your password, and try again.':
      'Too many failed login attempts, please reset your password, and try again.',
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
    'User name for the account you would like to receive a password reset link for.':
      'User name for the account you would like to receive a password reset link for.',
    'User role was updated successfully.':
      'User role was updated successfully.',
    'Username already in use.': 'Username already in use.',
    'Users email that you would like to invite to your org.':
      'Users email that you would like to invite to your org.',
    "We've sent you a text message with an authentication code to sign into Pulse.":
      "We've sent you a text message with an authentication code to sign into Pulse.",
    "We've sent you an email with an authentication code to sign into Pulse.":
      "We've sent you an email with an authentication code to sign into Pulse.",
    'Wether the authentication code was sent through text, or email.':
      'Wether the authentication code was sent through text, or email.',
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
