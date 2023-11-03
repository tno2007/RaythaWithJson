var $kLWFh$stimulus = require("stimulus");
var $kLWFh$stimuluswebpackhelpers = require("stimulus/webpack-helpers");
var $kLWFh$vanillajsdatepicker = require("vanillajs-datepicker");
require("@hotwired/turbo");
var $kLWFh$bootstrap = require("bootstrap");
var $kLWFh$sweetalert2 = require("sweetalert2");
require("simplebar");
var $kLWFh$trix = require("trix");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}








const $95930220612465e5$var$d = document;
document.addEventListener("turbo:load", function() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
        return new $kLWFh$bootstrap.Popover(popoverTriggerEl);
    });
    const swalWithBootstrapButtons = (0, ($parcel$interopDefault($kLWFh$sweetalert2))).mixin({
        customClass: {
            confirmButton: "btn btn-primary me-3",
            cancelButton: "btn btn-gray"
        },
        buttonsStyling: false
    });
    // options
    const breakpoints = {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140
    };
    var sidebar = document.getElementById("sidebarMenu");
    if (sidebar && $95930220612465e5$var$d.body.clientWidth < breakpoints.lg) {
        sidebar.addEventListener("shown.bs.collapse", function() {
            document.querySelector("body").style.position = "fixed";
        });
        sidebar.addEventListener("hidden.bs.collapse", function() {
            document.querySelector("body").style.position = "relative";
        });
    }
    var iconNotifications = $95930220612465e5$var$d.querySelector(".notification-bell");
    if (iconNotifications) iconNotifications.addEventListener("shown.bs.dropdown", function() {
        iconNotifications.classList.remove("unread");
    });
    [].slice.call($95930220612465e5$var$d.querySelectorAll("[data-background]")).map(function(el) {
        el.style.background = "url(" + el.getAttribute("data-background") + ")";
    });
    [].slice.call($95930220612465e5$var$d.querySelectorAll("[data-background-lg]")).map(function(el) {
        if (document.body.clientWidth > breakpoints.lg) el.style.background = "url(" + el.getAttribute("data-background-lg") + ")";
    });
    [].slice.call($95930220612465e5$var$d.querySelectorAll("[data-background-color]")).map(function(el) {
        el.style.background = "url(" + el.getAttribute("data-background-color") + ")";
    });
    [].slice.call($95930220612465e5$var$d.querySelectorAll("[data-color]")).map(function(el) {
        el.style.color = "url(" + el.getAttribute("data-color") + ")";
    });
    //Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new $kLWFh$bootstrap.Tooltip(tooltipTriggerEl);
    });
    var datepickers = [].slice.call($95930220612465e5$var$d.querySelectorAll("[data-datepicker]"));
    var datepickersList = datepickers.map(function(el) {
        return new (0, $kLWFh$vanillajsdatepicker.Datepicker)(el, {
            buttonClass: "btn"
        });
    });
    var offcanvasElementList = [].slice.call(document.querySelectorAll(".offcanvas"));
    var offcanvasList = offcanvasElementList.map(function(offcanvasEl) {
        return new $kLWFh$bootstrap.Offcanvas(offcanvasEl);
    });
});
//Modify Trix toolbar to add more buttons
document.addEventListener("trix-before-initialize", ()=>{
    (0, ($parcel$interopDefault($kLWFh$trix))).config.attachments.preview.caption.name = false;
    (0, ($parcel$interopDefault($kLWFh$trix))).config.attachments.preview.caption.size = false;
    (0, ($parcel$interopDefault($kLWFh$trix))).config.blockAttributes.heading1 = {
        tagName: "h1",
        terminal: true,
        breakOnReturn: true,
        group: false
    };
    (0, ($parcel$interopDefault($kLWFh$trix))).config.blockAttributes.heading2 = {
        tagName: "h2",
        terminal: true,
        breakOnReturn: true,
        group: false
    };
    (0, ($parcel$interopDefault($kLWFh$trix))).config.blockAttributes.heading3 = {
        tagName: "h3",
        terminal: true,
        breakOnReturn: true,
        group: false
    };
    (0, ($parcel$interopDefault($kLWFh$trix))).config.blockAttributes.heading4 = {
        tagName: "h4",
        terminal: true,
        breakOnReturn: true,
        group: false
    };
    (0, ($parcel$interopDefault($kLWFh$trix))).config.blockAttributes.heading5 = {
        tagName: "h5",
        terminal: true,
        breakOnReturn: true,
        group: false
    };
    (0, ($parcel$interopDefault($kLWFh$trix))).config.blockAttributes.heading6 = {
        tagName: "h6",
        terminal: true,
        breakOnReturn: true,
        group: false
    };
});
const $95930220612465e5$var$application = (0, $kLWFh$stimulus.Application).start();
const $95930220612465e5$var$context = undefined("./controllers/", true, /^\.\/.*\.js$/);
$95930220612465e5$var$application.load((0, $kLWFh$stimuluswebpackhelpers.definitionsFromContext)($95930220612465e5$var$context));


//# sourceMappingURL=index.js.map
