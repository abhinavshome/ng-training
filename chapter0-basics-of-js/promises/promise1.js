function Promise() {
    var callback = null,
        state = 'unresolved',
        promiseToReturn = null;

    this.then = function(cb) {
        callback = cb;
        promiseToReturn = new Promise();
        return promiseToReturn;
    };

    this.resolve = function(data) {
        state = 'resolved';
        var returnVal = callback && callback(data);
        if (returnVal && returnVal.constructor == Promise) {
            returnVal.onResolve = function(d) {
                promiseToReturn.resolve(d);
            }
        } else {
            promiseToReturn && promiseToReturn.resolve(returnVal);
        }
        this.onResolve && this.onResolve(data);
    };
}


function findPhoneNumber(hotelWebAdress) {
    var p = new Promise();
    setTimeout(function() {
        var phoneNumber = '11111';
        console.log('LOG: phone number is ' + phoneNumber);
        p.resolve(phoneNumber);
    }, 2000);
    return p;
}

function doTableBooking(phoneNumber) {
	var p = new Promise();
    setTimeout(function() {
        var bookingId = 100;
        console.log('LOG: booking done on ' + phoneNumber + '. Bookind is is ' + bookingId);
        p.resolve(bookingId);
    }, 2500);
    return p;
}


function orderFood(bookingId, food) {
	var p = new Promise();
    setTimeout(function() {
        var orderId = 123;
        console.log('LOG: ' + food + ' ordered on table booking id ' + bookingId + '. Order ID is ' + orderId);
        p.resolve(orderId);
    }, 1500);
    return p;
}

function sendSMS (orderId) {
	console.log('SMS: ORDER CONFIRMED. ORDER ID ## ' + orderId);
}

findPhoneNumber('bestHotelInBabglore.com', function (phoneNumber) {
	doTableBooking(phoneNumber, function (bookingId) {
		orderFood(bookingId, 'Chhole Bhature', function (orderId) {
			sendSMS(orderId);
		});
	});
});

findPhoneNumber('bestHotelInBabglore.com')
    .then(function(phoneNumber) {
        return doTableBooking(phoneNumber);
    })
    .then(function(bookingId) {
        return orderFood(bookingId, 'Chhole Bhature');
    })
    .then(function(orderId) {
        sendSMS(orderId);
    });
