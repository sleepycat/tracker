var Tables = {

  // wraps renderTable around a given $("table")
  // e.g. Tables.init($("table"), data)
  init: function(data, options) {
    // assign data
    if (!options.data) options.data = data;

    // add common options to all renderTables requests
    if (!options.responsive) options.responsive = true;

    var customInit = function() {}; // noop
    if (options.initComplete) customInit = options.initComplete;
    options.initComplete = function() {
      Utils.searchLinks(this);
      customInit(this);
    }

    // If the table prefix is french, load french translations
    if (options.prefix == 'fr') {
      options.oLanguage = {
          "sProcessing":     "Traitement en cours...",
          "sSearch":         "Rechercher&nbsp;:",
          "sLengthMenu":     "Afficher _MENU_ &eacute;l&eacute;ments",
          "sInfo":           "Affichage de l'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
          "sInfoEmpty":      "Affichage de l'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",
          "sInfoFiltered":   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
          "sInfoPostFix":    "",
          "sLoadingRecords": "Chargement en cours...",
          "sZeroRecords":    "Aucun &eacute;l&eacute;ment &agrave; afficher",
          "sEmptyTable":     "Aucune donn&eacute;e disponible dans le tableau",
          "oPaginate": {
            "sPrevious": "<<",
            "sNext": ">>"
          },
          "oAria": {
              "sSortAscending":  ": activer pour trier la colonne par ordre croissant",
              "sSortDescending": ": activer pour trier la colonne par ordre d&eacute;croissant"
          }
      }
    }

    // otherwise just load in better pagination
    // can also be used to load in custom options
    if(!options.oLanguage) {
      options.oLanguage = {
        "oPaginate": {
            "sPrevious": "<<",
            "sNext": ">>"
          }
      }
    }

    // Paginate to 100 per-page by default.
    if (!options.dom) options.dom = 'pCftrip';
    if (!options.pageLength) options.pageLength = 100;

    var table = $("table").DataTable(options);

    // Wire up accessible pagination controls.
    Utils.updatePagination();
    table.on("draw.dt",function(){
      Utils.updatePagination();
    });

    return table;
  },

  // sets some organization-table-specific options
  initAgency: function(data, options) {
    // Don't paginate organization tables by default.
    if (!options.pageLength) options.pageLength = 100;
    if (!options.dom) options.dom = 'pCftrip';

    return Tables.init(data, options);
  },

  // common render function for displaying booleans as Yes/No
  boolean: function(data, type) {
    // Note: return "No"/"Yes" for sorting as well,
    // as sorting by raw boolean values doesn't seem to work right.
    return {false: "No", true: "Yes"}[data];
  },

  // common render function for linking domains to canonical URLs
  canonical: function(data, type, row) {
    if (type == "sort") return data;
    else return "<a href=\"" + row.canonical + "\" target=\"blank\">" + data + "</a>";
  },

  // occasionally useful (see https/domains.js for example)
  noop: function() {return ""},

  // common render helper for percent bars
  percentBar: function(data) {
    return '' +
      '<div class="progress-bar-indication">' +
        '<span class="meter width' + data + '" style="width: ' + data + '%">' +
          '<p>' + data + '%</p>' +
        '</span>' +
      '</div>';
  },

  // common pattern for percent bars:
  // given row[report] and row[report][field], will
  // compare against row[report].eligible
  percent: function(report, field, totals) {
    if (!totals) totals = false; // be explicit

    return function(data, type, row) {
      var set = totals ? row.totals : row;
      var numerator = set[report][field];
      var denominator = set[report].eligible;

      // don't divide by 0!
      if (denominator == 0) {
        if (type == "sort") return -1; // shrug?
        else return "--";
      }

      var percent = Utils.percent(numerator, denominator);
      if (type == "sort") return percent;
      return Tables.percentBar(percent);
    }
  },

  // helpful for reports where parent domains have totals for subdomains
  percentTotals: function(report, field) {
    return Tables.percent(report, field, true);
  },

  // common rendering function for organization service/domain counts
  organizationServices: function(category) {
    return function(data, type, row) {
      if (type == "sort") return data;
      else return "" +
        "<a href=\"/" + category + "/domains/#" +
          QueryString.stringify({q: row.name}) + "\">" +
          data +
        "</a>";
    };
  }

};

$(function() {
  // if a datatable is searched, sync it to the URL hash
  $('table').on('search.dt', function(e, settings) {
    var query = $("input[type=search]").val();
    if (query)
      location.hash = QueryString.stringify({q: query});
    // TODO: Disabled because this callback runs on table init,
    // and zeroes out the location hash. Should be addressed.
    // else
    //   location.hash = '';
  });

  $('table').on('draw.dt', function() {
    // set max width on dataTable
    $(this).css('width', '100%');

    // add label for attribute for search
    $('.dataTables_filter label').attr('for', 'datatables-search');
    $('.dataTables_filter label').attr('class', 'block');
    $('#DataTables_Table_0_filter').find('input[type="search"]').attr('id', 'datatables-search');
    $('#DataTables_Table_0_filter').find('input[type="search"]').attr('class', 'inline-block border border-solid border-grey-darker');
  });
});
