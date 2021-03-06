const upsertOwnership = async ({ ownership, key, query }) => {
  try {
    await query`
      LET givenDomains = ${ownership}
      LET orgAcronym = ${String(key)}

      FOR domain IN givenDomains
          LET domainId = (FOR d IN domains FILTER d.domain == domain RETURN d._id)
          FILTER LENGTH(domainId) > 0
              LET ownershipKey = (FOR v, e IN 1..1 ANY domainId[0] ownership RETURN e._key)
              LET orgId = (FOR org IN organizations FILTER (org.orgDetails.en.acronym == orgAcronym) || (org.orgDetails.fr.acronym == orgAcronym) RETURN org._id)
              FILTER LENGTH(orgId) > 0
              UPSERT { _to: domainId[0] }
                  INSERT { _from: orgId[0], _to: domainId[0] }
                  UPDATE { _from: orgId[0], _to: domainId[0] }
                  IN ownership
              RETURN { doc: NEW, type: OLD ? 'update' : 'insert' }
      `
  } catch (err) {
    console.error(
      `Error occurred while inserting/updating ownerships for ${String(
        key,
      )}: ${err}`,
    )
  }
}

module.exports = {
  upsertOwnership,
}
