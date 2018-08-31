import FormSearch from './search.params'
import SearchResult from './search/search.result'

const $ = require('jquery');
const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
  host: 'localhost:9200'
});
const INDEX_NAME = 'mamaison'
const TYPE_NAME = 'annonces'
const URL_IMAGE = ""

$(document).ready(function() {
  $('.form-search').on('submit',function(e){
    e.preventDefault();
    let form = $( this );
    const formSearch = new FormSearch(form);
    const q = formSearch.getParams();
    client.search({
      index: INDEX_NAME,
      type: TYPE_NAME,
      body: {
        query: {
          bool:{
              must: q
            }
        }
      }
    }).then(function (resp) {
        let resulta_html = new SearchResult(resp)
        let divResultat = $('#section-body')
        divResultat.empty()
        divResultat.append(resulta_html.render())
    }, function (err) {
        console.err(err.message);
    });
    
  });
});