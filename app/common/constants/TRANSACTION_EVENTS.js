'use strict';

var TRANSACTION_EVENTS = (function() {
    return {
        transactionFailure: 'Uh Oh! Something went wrong. Please check that your information is correct and try again.',
        paymentFailure: 'Uh Oh! Something went wrong. Your credit card information may not be valid.'
    };
}());

TRANSACTION_EVENTS.$inject = [];
module.exports = TRANSACTION_EVENTS;