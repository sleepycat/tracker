import { t } from '@lingui/macro'

const {
  DMARC_REPORT_API_TOKEN,
  DMARC_REPORT_API_SECRET,
  DMARC_REPORT_API_URL,
} = process.env

export const dmarcReportLoader = ({
  generateGqlQuery,
  generateDetailTableFields,
  fetch,
  i18n,
}) => async ({ info, domain, userKey, tokenize }) => {
  const genGqlQuery = generateGqlQuery({ generateDetailTableFields })
  let data
  try {
    const gqlQuery = genGqlQuery({ info, domain })

    const authToken = tokenize({
      parameters: { apiKey: DMARC_REPORT_API_TOKEN },
      secret: DMARC_REPORT_API_SECRET,
      expPeriod: 0.25,
    })

    data = await fetch(DMARC_REPORT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authToken,
      },
      body: JSON.stringify({ query: gqlQuery }),
    }).then((response) => response.json())
  } catch (err) {
    console.error(
      `Fetch error occurred well User: ${userKey} was trying to retrieve ${info.fieldName} from the dmarc-report-api, error: ${err}`,
    )
    throw new Error(
      i18n._(t`Unable to retrieve ${info.fieldName} for domain: ${domain}.`),
    )
  }

  return data
}
