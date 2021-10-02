
const hi = localStorage.getItem("ID")
const pn = localStorage.getItem("phone")
$.ajax({
    type: 'POST',
    url: 'http://localhost:3000/r',
    crossDomain: true,
    data: 
    {
        'name': hi,
        'phone': pn,
    },
    dataType: 'json',
    success: function(responseData, textStatus, jqXHR) {
        var value = responseData
        console.log(value+'::'+ textStatus+':::'+jqXHR);
    },
    error: function (responseData, textStatus, errorThrown) {
        console.log(errorThrown+ '::' + textStatus +':' + responseData)
    }
});
