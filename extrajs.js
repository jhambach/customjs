// store the toolbar element for reference
var appmenu = document.getElementsByClassName("dropdown-menu"); 

// Create LI wrapper 
var appmenuitem = document.createElement("LI"); 

// Set the innerHTML of the LI wrapper to our link
// The <span ...</span> is just to add a "Beta" icon
appmenuitem.innerHTML = '<a href="https://support.snapcom.com" target="_blank">Support<span style="background-color: #d80000; color: #fff; margin-left: 2px; border-radius: 6px; font-size: .7em; padding: 3px 4px; vertical-align: super;">BETA</span></a>';

// Insert the LI element before the first existing item.
appmenu.insertAfter(appmenu,appmenuitem);
