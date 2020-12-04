if (location.pathname == "/portal/attendants")
{
let newBtn = $("<a>");
newBtn.attr("id","NewBtn");
newBtn.html("Professional Greetings");
newBtn.addClass('btn')
newBtn.attr("href","https://www.snaprecordings.com/?u=" + window.location.hostname)
newBtn.attr("target","_blank");
$('.action-container-right').prepend(newBtn);
}
if (location.pathname == "/portal/music")
{
let newBtn = $("<a>");
newBtn.attr("id","NewBtn");
newBtn.html("Custom Music On Hold");
newBtn.addClass('btn')
newBtn.attr("href","https://www.snaprecordings.com/?u=" + window.location.hostname)
newBtn.attr("target","_blank");
$('.action-container-right').prepend(newBtn);
}
