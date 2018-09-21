import FormSearch from './search.params'
import SearchResult from './search/search.result'
import { INDEX_NAME } from './constant'
import { TYPE_NAME } from './constant'

const $ = require('jquery');
const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
    host: 'http://localhost:9200',
    requestTimeout: Infinity, // Tested
    keepAlive: true // Tested
});

const URL_IMAGE = ""

$(document).ready(function() {

    let query = ""

    $('.form-search').on('submit', function (e) {
        e.preventDefault();
        let form = $(this);
        const formSearch = new FormSearch(form);
        query = formSearch.getParams();
        client.search({
            index: INDEX_NAME,
            type: TYPE_NAME,
            body: {
                from : 0,
                size : 9,
                query: {
                    bool: {
                        must: query
                    }
                }
            }
        }).then(function (resp) {
            let resulta_html = new SearchResult(query,resp,client,1)
            console.log(resp)
            let divResultat = $('#section-body')
            divResultat.empty()
            divResultat.append(resulta_html.render())
        }, function (err) {
            console.log(err);
        });
    });

    $('#property-title').keyup(function(e) {
        let key = $('#property-title').val();
        if(key.length >= 3){
            $('.form-search').submit();
        }
    });

});