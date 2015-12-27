angular
    .module('booksCart')
    .service('CartService', function() {
        var cart = {
            items: [],
            totalQuantity: 0,
            totalPrice: 0
        };

        var findInCart = function(bookId) {
            for (var i = 0; i < cart.items.length; i++)
                if (cart.items[i] && cart.items[i].bookId == bookId)
                    return i;

        };

        this.getCart = function() {
            return cart;
        };

        this.add = function(book) {
            var cartIndex = findInCart(book.id);

            if (cartIndex !== undefined)
                cart.items[cartIndex].quantity++;
            else
                cart.items.push({
                    bookId: book.id,
                    title: book.title,
                    price: book.price,
                    quantity: 1
                });

            cart.totalPrice += book.price;
            cart.totalQuantity += 1;
        };

    })
