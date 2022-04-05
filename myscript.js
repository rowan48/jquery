const prices = {
    'item-1': 100,
    'item-2': 50,
    'item-3': 70,
    'item-4': 80
}

let cartTotal = parseFloat(localStorage.getItem('cartTotal') ?? 0.0);
let quantity = parseFloat(localStorage.getItem('quantity') ?? 0.0);
console.log(quantity);


console.log(cartTotal);
$(() => {
    $('.quantity').html("total items:" + quantity);

    // add price to each item
    $('.item').each((i, el) => {
        const id = $(el).attr('id'),
            price = prices[id],
            name = $(el).children('h3').html();

        $(el).children('h3')
            .html(`${name}, ${price}`)

    })

    // add item price to cart total when buy
    // is clicked
    $('body').on('click', '.item .addbtn', function () {
        const btn = $(this),
            id = btn.parent('.item').attr('id'),
            price = prices[id];
        addToCartTotal(price);
        add_quantity();

    })
    $('body').on('click', '.item .remove ', function (e) {
        const btn = $(this),

        id = btn.parent('.item').attr('id'),
            price = prices[id];
        removeFromCart(price);
        sub_quantity();
            let item = btn.parent()
            item.remove()
        // console.log(btn.parent().parent(".droppable .basket"));
        console.log();
        // if(e.target==droppable.basket.ui-droppable){
        //     console.log("true");
        // }else{
        //     console.log("false");
        // }

    //     var is_exist = document.getElementsByClassName('basket');
    //     // console.log(is_exist);

    //     if (is_exist) {
    //         // console.log(is_exist);
    //   }
    //     else{
    //         // console.log(is_exist);

    //         let item = btn.parent()
    //         // console.log(item);

    //         item.remove()

    //     }
     


    })
    const removeFromCart = (price) => {
        cartTotal -= price;
        if (cartTotal <= 0) {
            localStorage.setItem('cartTotal', 0.0);
            $('.cart-total').html(
                !cartTotal ? '0.0' : 0.0
            );

        } else {
            localStorage.setItem('cartTotal', cartTotal);
            $('.cart-total').html(
                !cartTotal ? '0.0' : cartTotal
            );
        }
    }
    const addToCartTotal = (price) => {

        cartTotal += price;
        localStorage.setItem('cartTotal', cartTotal);
        $('.cart-total').html(
            !cartTotal ? '0.0' : cartTotal
        );

    }
    const add_quantity = () => {
        quantity++;
        localStorage.setItem('quantity', quantity);
        $('.quantity').html("total items:" + quantity);

    }
    const sub_quantity = () => {
        quantity--;
        if (quantity <= 0) {
            localStorage.setItem('quantity', 0.0);
            $('.quantity').html("total items:" + 0.0);
            $('.div').removeClass("item row");/*item row*/

        } else {
            localStorage.setItem('quantity', quantity);
            $('.quantity').html("total items:" + quantity);
            $('.div').removeClass(".basket .item");/*item row*/
            
        }


    }
    /************************************************************************************************************** */


    addToCartTotal(0);

    /************************************************************************************************************** */


    $(".draggable").draggable({
        revert: "invalid",
        stack: ".draggable",
        helper: 'clone'
    });
    $(".droppable").droppable({
        accept: ".draggable",
        drop: function (event, ui) {
            $(this)
            let remove=$(`<button style=" width=150px"class="remove">remove</button>`)
            ui.draggable.clone().appendTo('.basket');
            const itemno = ui.draggable.attr('id');
            console.log(itemno);
            price = prices[itemno];
            addToCartTotal(price);
            console.log(event);
            console.log(ui);
            add_quantity();
            // ui.draggable.append(remove);
            $(".basket .item").append(remove);

            $(".basket .item").draggable({
                stop: function (event, ui) {
                    $(this).remove()
                    removeFromCart(price);
                    sub_quantity();
                }
            });

        }

    });


    /************************************************************************************************************** */



    // $(".item").draggable({                
    //     revert: "invalid",
    //     stack: ".draggable",
    //     helper: 'clone'
    // });
    //     $(".draggable").droppable({
    //         accept: ".droppable",
    //         drop: function (event, ui) {
    //             $(this)
    //             ui.draggable.clone().appendTo('.item');
    //             const itemno=ui.draggable.attr('id');
    //             console.log(itemno);
    //             price = prices[itemno];
    //             addToCartTotal(price);
    //             console.log(event);
    //             console.log(ui);
    //             add_quantity();
    //         }

    //     });



})