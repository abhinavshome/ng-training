function Promise() {
    this.state = 'pending';

    this.then = function(successCallback, errorCallback) {
        this.successFun = successCallback;
        this.errorFun = errorCallback;
    };

    this.start = function() {
        var self = this;
        setTimeout(function() {
            var weatherResponse = Math.floor((Math.random() * 10) + 1) % 3;

            if (weatherResponse == 0) {
                self.state = 'rejected';
                self.errorFun();
            } else if (weatherResponse == 1) {
                self.state = 'fulfilled';
                self.successFun('sunny');
            } else {
                self.state = 'fulfilled';
                self.successFun('rainy');
            }
        }, 3000);
    }
}

var promise = new Promise();


promise.then(function(data) {
        if (data == 'sunny') {
            console.log('Wohoo! I am going to play cricket');
        } else if (data == 'rainy') {
            console.log('Oops! No problem! I will watch TV');
        }
    },
    function function_name(argument) {
        console.log("These weather guys are useless");
    });

promise.start();

//Check the status every half second
var check = 1.0;
setInterval(function() {
    console.log(0.5 * check++, 'seconds :: Status of promise: ', promise.state);
}, 500);
