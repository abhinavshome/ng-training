angular
    .module('customFilterApp', [])
    .filter('ordinal', function() {

        // Create the return function
        // set the required parameter name to **number**
        return function(number) {

            // Ensure that the passed in data is a number
            if (isNaN(number) || number < 1) {

                // If the data is not a number or is less than one (thus not having a cardinal value) return it unmodified.
                return number;

            } else {

                // If the data we are applying the filter to is a number, perform the actions to check it's ordinal suffix and apply it.

                var lastDigit = number % 10;
                var secondLastDigit = Math.floor(number / 10) % 10;

                if (secondLastDigit == 1 || lastDigit > 3) {
                    return number + 'th';
                } else if (lastDigit === 1) {
                    return number + 'st';
                } else if (lastDigit === 2) {
                    return number + 'nd';
                } else if (lastDigit === 3) {
                    return number + 'rd';
                }

            }
        }
    })
    .filter('capitalize', function() {

        // Create the return function and set the required parameter as well as an optional paramater
        return function(input, char) {

        	input = input || '';

            if (isNaN(input)) {

                // If the input data is not a number, perform the operations to capitalize the correct letter.
                var char = char - 1 || 0;
                var letter = input.charAt(char).toUpperCase();
                var out = [];

                for (var i = 0; i < input.length; i++) {

                    if (i == char) {
                        out.push(letter);
                    } else {
                        out.push(input[i]);
                    }

                }

                return out.join('');

            } else {
                return input;
            }

        }

    });;
