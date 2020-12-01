# Track web security compliance documentation

*Tracker* is a web-based application that scans Government of Canada domains and reports on their configuration security. The application is currently in pre-alpha release and can be found at [tracker.alpha.canada.ca](https://tracker.alpha.canada.ca).  This repository contains companion documentation for the project and can be viewed at [https://canada-ca.github.io/tracker](https://canada-ca.github.io/tracker).

## Editing the documentation

The documentation uses [Jekyll](http://jekyllrb.com/) and the [DOCter](https://github.com/cfpb/DOCter) theme.

DOCter needs Jekyll and other dependencies to run locally. These can be installed with Bundler by running the following commands.

```
gem install bundler
bundle install
```

Run Jekyll:

```
bundle exec jekyll serve --watch --baseurl ''
```

Open it up in your browser: <http://localhost:4000/>


### _config.yml

Options within the `_config.yml` file allow you to control some of the site's
content and left column navigation.
