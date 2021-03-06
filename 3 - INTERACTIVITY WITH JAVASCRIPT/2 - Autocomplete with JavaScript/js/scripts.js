/* Assignment: Autocomplete with JavaScript


function billingFunction() {
    "use strict";
    /*
    Responsible for setting and clearing the fields in Billing Information.
    Access the different elements of the DOM and then set the attributes.
    */

    var sName = document.getElementById('shippingName'),
        sZip = document.getElementById('shippingZip'),
        bName = document.getElementById('billingName'),
        bZip = document.getElementById('billingZip'),
        checked = document.getElementById('same').checked;

    if (checked) {
        /*
        Whenever the checkbox is checked, the code should automatically
        copy the values from Shipping Name ( sName ) and Shipping Zip ( sZip )into the
        Billing Name ( bName ) and Billing Zip ( bZip ).
        */
        bName.value = sName.value;
        bZip.value = sZip.value;

    } else {
        /*
        If the checkbox is unchecked, the
        Shipping Name and Shipping Zip should go blank.
        I changed this to billing name and billing zip 
        */
        bName.value = null;
        bZip.value = null;
    }
}
