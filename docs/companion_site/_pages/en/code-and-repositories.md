---
layout: page
title:  "Code and repositories"
lang: en
permalink: "/code-and-repositories/"
trans_url: "/codes-et-referentiels/"
---

## How *Tracker* works

**Data**

*GC Tracker* currently measures `.gc.ca` and `.canada.ca` subdomains that are publicly accessible over HTTP. These domains and subdomains are provided by the Digital Transformation Office within the Treasury Board of Canada Secretariat.  In addition, *GC Tracker* also provides tailored implementation guidance based on the results of the domain scans.

**Architecture**

*GC Tracker* is built in accordance to TBS OCIO's architectural guidance outlined in their [Directive on Service and Digital](https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32602#claA.2.3.10).  As such, it is architected as a set of distributed, containerized microservices.  

**Stack**

* Platform: The *Tracker* application is a cloud native application that is orchestrated using [Kubernetes](https://kubernetes.io).  
* API: The *Tracker* API is exclusively focused on serving data, rather than HTML. It is a [GraphQL API](https://graphql.org/), chosen because of its composability, legibility and for the way it [enables both security and security automation](https://www.youtube.com/watch?v=gqvyCdyp3Nw).  It is built with the [Express webserver](https://expressjs.com/) using the [express-graphql middleware](https://github.com/graphql/express-graphql), and follows the [Relay specifications for pagination](https://relay.dev/graphql/connections.htm).
* Frontend: This frontend is an example of a Single Page Application (SPA) on the [Web Platform](https://platform.html5.org/).  The frontend is written using the [React framework](https://reactjs.org/) and is complimented by the [Chakra-UI component library](https://chakra-ui.com/) to help ensure a modular and accessible UI.
* Datastore: *Tracker* relies on the [ArangoDB](https://www.arangodb.com) multi-model database.  
* Scanners: The domain scans rely on a series of containerized open source tools such as [checkdmarc](https://pypi.org/project/checkdmarc), [dkimpy](https://pypi.org/project/dkimpy), and [sslyze](https://github.com/nabla-c0de/sslyze).

## Repository

**[tracker](https://github.com/canada-ca/tracker)**

This repository holds the code for the entire *Tracker* deployment. The scanning tools measures the behaviour of four “endpoints” of every domain and subdomain: `http://`, `http://www`, `https://`, and `https://www`. Data from these endpoints is used to characterize the overall behaviour of a domain or subdomain. 

The *[tracker](https://github.com/canada-ca/tracker/tree/master/docs)* repository contains further documentation on:
* Platform overlays for deploying to Google Cloud Platform or locally to Minikube
* Information on how to set up/configure the API dev environment
* Documentation on the various components and links to additional resources
* How to edit existing components or add new components to the scanning system



