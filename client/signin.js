//TODO meteorize and amplify this
var localStorageKey = 'signup-list';

function clearStorage(){
    delete window.localStorage[localStorageKey];
}

function addRegistrant(name, email){
    var jsonList = window.localStorage[localStorageKey];
    var list = jsonList ? $.parseJSON(jsonList) : [];
    list.push({n: name, e: email});
    window.localStorage[localStorageKey] = JSON.stringify(list);

    console.log(window.localStorage);
}

function createList(){
    var jsonList = window.localStorage[localStorageKey];
    var list = jsonList ? $.parseJSON(jsonList) : [];

    var listText = 'name, email\n';
    $.each(list, function(index, item){
        listText += item.n + ',' + item.e + '\n';
    });
    $('#data').text(listText);
}

function displayList(){
    $("#form").hide();
    $("#list").show();
}
function displayForm(){
    $("#list").hide();
    $("#form").show();
}
function resetForm(){
    $('#name').val("");
    $('#email').val("");
    $('.confirm').css('opacity', 1);
    setTimeout(function(){ $('.confirm').fadeTo('slow',0); }, 2000);
}
