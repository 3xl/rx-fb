'use strict';

require('dotenv').config({ silent: true });

const RxFB = require('./index.js')

let rxfb = new RxFB({
    version:     process.env.FACEBOOK_API_VERSION,
    appId:       process.env.FACEBOOK_APP_ID,
    appSecret:   process.env.FACEBOOK_APP_SECRET,
    accessToken: process.env.FACEBOOK_ACCESS_TOKEN
});

let source = rxfb.all('VasaVasaKitchen/posts', { fields: ['description', 'type', 'created_time'] });

source.subscribe(
    response => console.log(response),
    error    => console.log(error),
    complete => console.log('complete')
);