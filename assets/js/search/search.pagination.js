import SearchResult from "./search.result";

import {INDEX_NAME, TYPE_NAME} from './../constant'

const $ = require('jquery');

export default class Pagination {

    constructor(query, result, client, page) {
        this._results = result
        this.client = client
        this.page = page
        this.query = query

        document.addEventListener('click', function (e) {
            if (e.target.closest(`#btn-pagination`)) {
                let page = parseInt(e.target.attributes[2].value);
                let client = this.client
                this.client.search({
                    index: INDEX_NAME,
                    type: TYPE_NAME,
                    body: {
                        from: (page * 10) - 10,
                        size: 9,
                        query: {
                            bool: {
                                must: this.query
                            }
                        }
                    }
                }).then(function (resp) {
                    let resulta_html = new SearchResult(query, resp, client, page)
                    let divResultat = $('#section-body')
                    divResultat.empty()
                    divResultat.append(resulta_html.render())
                    e.preventDefault();
                }, function (err) {
                    console.log(err);
                });

            }
        }.bind(this));
    }

    render() {
        let total = this._results.hits.total
        let nombrePage = Math.round(total / 9)
        var i = 1;

        let pagination = ''

        if(this.page == 1)
            pagination = `<li class="disabled"><a aria-label="Previous"><span aria-hidden="true"><i class="fa fa-angle-left"></i></span></a></li>`
        else
            pagination = `<li><a aria-label="Previous" id="btn-pagination" data-page="${this.page - 1}" ><span aria-hidden="true"><i class="fa fa-angle-left"></i></span></a></li>`

        for (; i <= (nombrePage); i++) {
            if (i == this.page)
                pagination = pagination + `<li class="active"><a class="" id="btn-pagination" data-page="${i}">${i}</a></li>`
            else
                pagination = pagination + `<li><a class="" id="btn-pagination" data-page="${i}">${ i }</a></li>`
        }

        if(this.page == nombrePage)
            pagination = pagination + `<li class="disabled"><a aria-label="Next"><span aria-hidden="true"><i class="fa fa-angle-right"></i></span></a></li>`
        else
            pagination = pagination + `<li><a aria-label="Next" id="btn-pagination" data-page="${this.page + 1}"><span aria-hidden="true"><i class="fa fa-angle-right"></i></span></a></li>`

        return `
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <hr/>
                    <div class="pagination-main">
                        <ul class="pagination">
                            ${pagination}
                        </ul>
                    </div>
                </div>
        `
    }
}