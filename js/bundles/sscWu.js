var pageComponent=webpackJsonppageComponent([21],{192:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(0),r=n(s),u=a(1),c=n(u);a(4),a(5),a(3),a(7),a(2),a(8),a(6),a(9),a(10),a(11),a(12),a(13),a(14);var d=a(193),h=n(d),p=function(e){function t(){return l(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),t}(r.default);c.default.register(p,h.default),t.default=p},193:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.sscWu=void 0;var s,r=a(0),u=n(r),c=a(1),d=n(c);goog.loadModule(function(e){function t(e,t,n){var s=function(){l("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&r(t),i("div"),l("p"),r("A dataset display is the combination of a "),l("a",null,null,"href","./management_bar.html"),r("management bar"),i("a"),r(" with one or many data visualization types and a possible mechanism of pagination. The most common visualization types used are "),l("a",null,null,"href","./table.html"),r("table"),i("a"),r(", "),l("a",null,null,"href","./list.html"),r("list"),i("a"),r(" and "),l("a",null,null,"href","./card.html"),r("card"),i("a"),r("."),i("p"),l("div",null,null,"id","carouselExampleIndicators","class","carousel slide","data-ride","carousel"),l("ol",null,null,"class","carousel-indicators"),o("li",null,null,"data-target","#carouselExampleIndicators","data-slide-to","0","class","active"),o("li",null,null,"data-target","#carouselExampleIndicators","data-slide-to","1"),o("li",null,null,"data-target","#carouselExampleIndicators","data-slide-to","2"),i("ol"),l("div",null,null,"class","carousel-inner"),l("div",null,null,"class","carousel-item active"),l("img",null,null,"class","d-block w-100","src","../../../images/DTTableView.jpg","alt","First slide"),i("img"),i("div"),l("div",null,null,"class","carousel-item"),l("img",null,null,"class","d-block w-100","src","../../../images/DTListView.jpg","alt","Second slide"),i("img"),i("div"),l("div",null,null,"class","carousel-item"),l("img",null,null,"class","d-block w-100","src","../../../images/DTCardView.jpg","alt","Third slide"),i("img"),i("div"),i("div"),l("a",null,null,"class","carousel-control-prev","href","#carouselExampleIndicators","role","button","data-slide","prev"),l("svg",null,null,"class","lexicon-icon lexicon-icon-angle-left"),o("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#angle-left"),i("svg"),l("span",null,null,"class","sr-only"),r("Previous"),i("span"),i("a"),l("a",null,null,"class","carousel-control-next","href","#carouselExampleIndicators","role","button","data-slide","next"),l("svg",null,null,"class","lexicon-icon lexicon-icon-angle-right"),o("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#angle-right"),i("svg"),l("span",null,null,"class","sr-only"),r("Next"),i("span"),i("a"),i("div"),l("h3",null,null,"id","usage"),r("Usage"),i("h3"),l("p"),r("This pattern is used when the elements of the visualization require collective management, therefore the management bar becomes important as it facilitates tools needed to work with the dataset."),i("p"),l("ul"),l("li"),r("This pattern can be only used one time in a page."),i("li"),l("li"),r("Use it is you want to have several visualizations for a set of data."),i("li"),l("li"),r("Use it if you want to perform actions over the data at individual level or group level."),i("li"),l("li"),r("Only use the needed visualizations. Not all visualizations are appropriate for all data types."),i("li"),l("li"),r("When the result of a filter is an empty result, the filter must be possible to be changed to another filter not blocking the management bar usage. Always offer a descriptive message on empty datasets due to no elements or no match in the search."),i("li"),i("ul"),l("h4"),r("Use a list view"),i("h4"),l("ul"),l("li"),r("If you need to display a homogeneous sets of basic data."),i("li"),l("li"),r("If you need to sort, group, or filter simple data sets."),i("li"),l("li"),r("If you don’t need to compare between attributes of different items."),i("li"),l("li"),r("If you need to display a single-level hierarchy."),i("li"),l("li"),r("If you need to provide a quick identification of the basic content of a list item at a glance."),i("li"),i("ul"),l("h4"),r("Use a table view"),i("h4"),l("ul"),l("li"),r("If you need to manage complex data sets that need to be extensively sorted, grouped, filtered, or edited.."),i("li"),l("li"),r("If you need to compare between attributes of different items."),i("li"),l("li"),r("If you work with complex hierarchies."),i("li"),i("ul"),l("h4"),r("Use a grid view"),i("h4"),l("ul"),l("li"),r("If the primary content consists on images."),i("li"),i("ul"),l("h4"),r("Use of other visualization methods"),i("h4"),l("ul"),l("li"),r("Other visualization methods are also possible, such as map view, but you will have to implement it by yourself as it is not the most common case we have in our platform."),i("li"),i("ul"),l("h3",null,null,"id","empty-state"),r("Empty state"),i("h3"),l("p"),r("It is important to let the user know what happens in empty states and let them know what has happened and how to perform actions to move out from that empty state. All these scenarios can be found in detail at "),l("a",null,null,"href","./emptyStates.html"),r("empty states"),i("a"),r(" page."),i("p"),l("h3",null,null,"id","individual-actions"),r("Individual actions"),i("h3"),l("p"),r("Individual actions are all those actions that an element has. This actions are always possible to reach from the element itself through the actions menu. Some of this actions are also placed in the management bar when only one element from the dataset is selected. These actions are always represented by a metaphor, , they are buttons with icon. Only those actions that can be easily represented by an icon will be there. Not all possible represented by an icon must be there, only the ones considered as more relevant."),i("p"),l("p"),l("img",null,null,"srcset","../../../images/DatasetDisplayIndividualActions@2x.png 2x","src","../../../images/DatasetDisplayIndividualActions.png","alt","individual actions displayed both in management bar and from actions menu"),i("img"),i("p"),l("h3",null,null,"id","collective-actions"),r("Collective actions"),i("h3"),l("p"),r("Collective actions are shown in the management bar when more than one element is selected in the dataset. In case there are  collective actions that don't have an icon representation the can be placed in a dropdown triggered from the actions button."),i("p"),l("p"),l("img",null,null,"srcset","../../../images/DatasetDisplayGroupActions@2x.png 2x","src","../../../images/DatasetDisplayGroupActions.png","alt","collective actions displayed both in management bar and from actions menu"),i("img"),i("p"),l("h3",null,null,"id","filtering"),r("Filtering"),i("h3"),l("ul"),l("li"),r("Use filter only when you need them."),i("li"),l("li"),r("When a filter is applied from the management bar to a visualization type, the visualization type itself needs to update to show the specific data requested by the user."),i("li"),l("li"),r("A user is only able to filter by the elements that are displayed. Hidden elements can not be used for filtering as they must not appear among the filtering options."),i("li"),l("li"),r("When the result of a filter is an empty result, the filter must be possible to be changed to another filter not blocking the management bar usage."),i("li"),i("ul"),l("h3",null,null,"id","sorting"),r("Sorting"),i("h3"),l("p"),r("When sorting is applied from the management bar to a visualization type, the visualization type itself needs to update to show the specific data requested by the user."),i("p"),l("ul"),l("li"),r("A user is only able to sort by the elements that are displayed. Hidden elements can be used for sorting as they must not appear among the sorting options."),i("li"),l("li"),r("Tables are able to show the sorting applied in the column header. This update must be done in both ways:"),l("ul"),l("li"),r("When the user sorts using the column header the value must be marked on the sort panel and the arrow must indicate the “sort direction”."),i("li"),l("li"),r("When the user sorts using the sort panel and button, the action must be reflected in the appropriate column header."),i("li"),i("ul"),i("li"),i("ul");l("h3",null,null,"id","selection"),r("Selection"),i("h3"),l("p"),r("When an item is selected in any of the views the management bar must change state 2. This state has a different background color so the user can notice the change. Depending on the number of items selected in the visualization, the number of actions adapt."),i("p"),l("ul"),l("li"),r("One item selected: The available actions are the same as in the row."),i("li"),l("li"),r("More than one item selected: The available actions are the ones that apply to the group. The check box in the management bar selects/unselects all elements in the visualization."),i("li"),i("ul"),l("h3",null,null,"id","drag-and-drop-example"),r("Drag and drop example"),i("h3"),l("p"),l("img",null,null,"srcset","../../../images/DatasetDisplayDragDrop@2x.png 2x","src","../../../images/DatasetDisplayDragDrop.png","alt","collective actions displayed both in management bar and from actions menu"),i("img"),i("p"),l("h3",null,null,"id","change-view"),r("Change view"),i("h3"),l("p"),r("Changing view is something to have only when there is more than one visualization. Otherwise, this pattern must not appear in the management bar."),i("p"),l("p"),l("img",null,null,"src","../../../images/DatasetDisplayChangeView.gif","alt","dataset display view change animation"),i("img"),i("p"),l("input",null,null,"type","hidden","value",e.page.title),i("input"),l("input",null,null,"type","hidden","value",e.site.title),i("input")};u(a.$$assignDefaults({content:s},e),null,n)}goog.module("sscWu.incrementaldom");var a=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),l=n.elementOpen,i=n.elementClose,o=n.elementVoid,r=(n.elementOpenStart,n.elementOpenEnd,n.text),u=(n.attr,d.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="sscWu.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=s=e,e});var h=function(e){function t(){return l(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),t}(u.default);d.default.register(h,s),t.sscWu=h,t.templates=s,t.default=s}},[192]);