import React from 'react'
import { t, Trans } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { number, object } from 'yup'
import { Box, Button, Heading, useToast } from '@chakra-ui/core'
import { useHistory, useParams } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { Formik } from 'formik'
import { useUserState } from './UserState'
import { AUTHENTICATE } from './graphql/mutations'
import AuthenticateField from './AuthenticateField'
import { fieldRequirements } from './fieldRequirements'

export default function TwoFactorAuthenticatePage() {
  const { login } = useUserState()
  const history = useHistory()
  const toast = useToast()
  const { i18n } = useLingui()
  const { authenticateToken } = useParams()

  const validationSchema = object().shape({
    twoFactorCode: number()
      .typeError(i18n._(fieldRequirements.twoFactorCode.typeError))
      .required(i18n._(fieldRequirements.twoFactorCode.required)),
  })

  const [authenticate, { loading, error }] = useMutation(AUTHENTICATE, {
    onError() {
      toast({
        title: i18n._(t`An error occurred.`),
        description: i18n._(
          t`Unable to sign in to your account, please try again.`,
        ),
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    },
    onCompleted({ authenticate }) {
      login({
        jwt: authenticate.authResult.authToken,
        tfa: authenticate.authResult.user.tfaValidated,
        userName: authenticate.authResult.user.userName,
      })
      // // redirect to the home page.
      history.push('/')
      // // Display a welcome message
      toast({
        title: i18n._(t`Sign In.`),
        description: i18n._(t`Welcome, you are successfully signed in!`),
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    },
  })

  if (loading)
    return (
      <p>
        <Trans>Loading...</Trans>
      </p>
    )
  if (error) return <p>{String(error)}</p>

  return (
    <Box px="2em" mx="auto" overflow="hidden">
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          twoFactorCode: '',
          authenticateToken: authenticateToken,
        }}
        onSubmit={async (values) => {
          authenticate({
            variables: {
              authenticationCode: parseInt(values.twoFactorCode),
              authenticateToken: values.authenticateToken,
            },
          })
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form
            onSubmit={handleSubmit}
            role="form"
            aria-label="form"
            name="form"
          >
            <Heading as="h1" fontSize="2xl" mb="12" textAlign="center">
              <Trans>Two Factor Authentication</Trans>
            </Heading>

            <AuthenticateField name="twoFactorCode" mb="4" />

            <Button isLoading={isSubmitting} type="submit" variantColor="teal">
              <Trans>Submit</Trans>
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  )
}