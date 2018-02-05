/* Assignment: Autocomplete with JavaScript */

function billingFunction() {
    "use strict";
    var sName = document.getElementById('shippingName'),
        sZip = document.getElementById('shippingZip'),
        bName = document.getElementById('billingName'),
        bZip = document.getElementById('billingZip'),
        checked = document.getElementById('same').checked;
    if (checked) {
        bName.value = sName.value;
        bZip.value = sZip.value;
    } else {
        bName.value = null;
        bZip.value = null;
    }
}