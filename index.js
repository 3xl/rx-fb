'use strict';

const FB  = require('fb');
const Rx  = require('rx');
const url = require('url');

/**
 * Rx wrapping of fb package
 * 
 * @class RxFB
 */
class RxFB {
    
    /**
     * Creates an instance of RxFB.
     * 
     * @param {Object} config - initialization parameters
     * 
     * @memberOf RxFB
     */
    constructor(config) {
        this.api = Rx.Observable.fromCallback(new FB.Facebook(config).napi);
    }

    /**
     * Get all the edges without pagination
     * 
     * @param {String} edges
     * 
     * @memberOf RxFB
     */
    all(edges, fields = {}) {
        return Rx.Observable.defer(
            () => this.api(edges, fields).flatMap((response) => {
                let edgesStream, nextStream;

                if(response[1].data) {
                    edgesStream = Rx.Observable.from(response[1].data);

                    if(response[1].paging && response[1].paging.next != '') {
                        let fields = url.parse(response[1].paging.next, true).query;

                        nextStream = this.all(edges, fields);
                    }
                    else {
                        nextStream = Rx.Observable.empty();
                    }
                }

                return Rx.Observable.concat(edgesStream, nextStream);
            })
        );
    }
}

module.exports = RxFB;