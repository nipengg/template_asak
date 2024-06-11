// Create cards on smaller screens
function createCards() {
    var cardContainer = $('#cards');
    cardContainer.empty();
    $('#dataTable tbody tr').each(function () {
        var row = $(this);
        var card = $('<div class="card"></div>');
        var cardBody = $('<div class="card-body"></div>');

        row.find('td').each(function (index) {
            var header = $('#dataTable thead th').eq(index).text();
            var data = $(this).html();
            cardBody.append('<p><strong>' + header + ':</strong> ' + data + '</p>');
        });

        card.append(cardBody);
        cardContainer.append(card);
    });
}

// Run on load
createCards();

// Run on window resize
$(window).resize(function () {
    createCards();
});