# rx-fb
Rx wrapper for fb package

### Version
1.0.2

### Installation

```sh
$ npm install --save rx-fb
```

### Usage

```sh
'use strict';

require('dotenv').config({ silent: true });

const RxFB = require('rx-fb')

let rxfb = new RxFB({
    version:     FACEBOOK_API_VERSION,
    appId:       FACEBOOK_APP_ID,
    appSecret:   FACEBOOK_APP_SECRET,
    accessToken: FACEBOOK_ACCESS_TOKEN
});

let source = rxfb.all('VasaVasaKitchen/posts');

source.subscribe(
    response => console.log(response),
    error    => console.log(error),
    complete => console.log('complete')
);
```

License
----

MIT
