(function() {
    'use strict';

    angular
        .module('app.examples.email')
        .filter('emailGroup', emailGroup);

    function emailGroup() {
        return filterFilter;

        ////////////////

        function filterFilter(emails, emailGroup) {
            return emails.filter(function(email) {
                var emailDate = moment(email.date, moment.ISO_8601);

                if(emailDate.isAfter(emailGroup.from) && emailDate.isBefore(emailGroup.to)) {
                    return email;
                }
            });
        }
    }

})();