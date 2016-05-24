//page 1
$(function() { //nick: check this is the same syntax as document.ready
    $('#orderqty').change(function() {
        calculateCart();
    });

    $('#nextButton').click(function() {
        var data = { // creating an object literal
            "Name": $('#ordername').val(),
            "Email": $('#orderemail').val(),
            "Price": $('#orderprice').attr('data-value'),
            "Qty": $('#orderqty').val(),
            "Ext": $('#orderext').text(),
            "Desc": $('#orderdesc').text(),
            "Id": $('#orderid').text()
        };

        var session = window.sessionStorage,
            dataString = JSON.stringify(data);
        console.log(dataString);

        session.setItem("cart", dataString);
        showPageTwo();
    });

    function calculateCart() {
        var price = parseFloat($('#orderprice').attr('data-value')),
            qty = parseInt($('#orderqty').val()),
            ext = parseFloat(price * qty);

        $('#orderext').html(ext.toFixed(2));
    }

    calculateCart();



    //page2


    function showPageTwo() {
        alert('showPageTwo');
        var session = window.sessionStorage,
            data = JSON.parse(session.getItem('cart'));

        $('#summaryname').text(data.Name);
        $('#summaryemail').text(data.Email);
        $('#summaryprice').text(data.Price);
        $('#summaryqty').text(data.Qty);
        $('#summaryext').text(data.Ext);
        $('#summarydesc').text(data.Desc);
        $('#summaryid').text(data.Id);
    }
});