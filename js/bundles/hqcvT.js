var pageComponent=webpackJsonppageComponent([31],{334:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),l=n(r),h=a(1),g=n(h);a(4),a(5),a(3),a(7),a(2),a(8),a(6),a(9),a(10),a(11),a(12),a(13),a(14);var p=a(335),m=n(p),u=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),t}(l.default);g.default.register(u,m.default),t.default=u},335:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.hqcvT=void 0;var r,l=a(0),h=n(l),g=a(1),p=n(g);goog.loadModule(function(e){function t(e,t,n){var r=function(){i("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&s(t),o("div"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarState1@2x.jpg 2x","src","../../../images/ManagementBarState1.jpg","alt","state one of the management bar"),o("img"),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarState2@2x.jpg 2x","src","../../../images/ManagementBarState2.jpg","alt","state two of the management bar"),o("img"),o("p"),i("p"),i("em"),s("Note: The management bar doesn't have borders. They are used here to provide you with feedback about its height."),o("em"),o("p"),i("h3",null,null,"id","usage"),s("Usage"),o("h3"),i("p"),s("The Management Bar is always part of a bigger structure and works along with other data management patterns like tables, lists or cards, and its functionality is directly related to them. The Management Bar has two main states:"),o("p"),i("h4"),s("State 1"),o("h4"),i("p"),s("It is the default state."),o("p"),i("p"),s("It displays tools focused on filtering, sorting and data visualization."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarState1Parts@2x.jpg 2x","src","../../../images/ManagementBarState1Parts.jpg","alt","state one of the management bar with points to explain the different components inside it"),o("img"),o("p"),i("ol"),i("li"),s("Checkbox: To select all elements in the current page"),o("li"),i("li"),s("Filter and Order: dropdown with dropdown menu associated. Please see "),i("a",null,null,"href","../dropdowns.html"),s("dropdown with groups"),o("a"),o("li"),i("li"),s("Sort toggle button: The arrow identifies the sorting order depending on the selected option inside Filter and Order dropdown. The main attribute, usually the name, states the default sort parameter."),o("li"),i("li"),s("Search bar to filter out the current dataset."),o("li"),i("li"),s("Visualization button to select the desired visualization."),o("li"),i("li"),s("Plus button to add content and folders into the dataset."),o("li"),o("ol"),i("h4"),s("State 2"),o("h4"),i("p"),s("It displays contextual tools associated to specific items selected. It is only activated when one or more items from the visualization are selected."),o("p"),i("p"),s("The background color and the way to show the icons of the bar in this state changes to differentiate from the default state and establish a visual relation with other forms of showing this tools."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarState2Parts@2x.jpg 2x","src","../../../images/ManagementBarState2Parts.jpg","alt","state two of the management bar with points to explain the different components inside it"),o("img"),o("p"),i("ol"),i("li"),s("Checkbox: To select all elements in the current page"),o("li"),i("li"),s("Counter: Selected elements counter"),o("li"),i("li"),s("Select all: To select all elements in the dataset"),o("li"),i("li"),s("Quick actions: set of quick actions with a visual representation"),o("li"),i("li"),s("Actions menu: on interaction displays a dropdown menu with all the actions that can be applied over the selected dataset."),o("li"),o("ol"),i("h3",null,null,"id","requirements"),s("Requirements"),o("h3"),i("ul"),i("li"),s("The Management Bar has to be fixed on the header of the page so it can be always visible during the vertical scroll."),o("li"),i("li"),s("On the default state of the bar, filter and order tools have to be always on the left side and visualization and information tools on the right."),o("li"),i("li"),s("On the second state, the tools for selected items appear always on the right side of the bar and vary according to the items selected."),o("li"),i("li"),s("Tools shown in the Management Bar are only the ones that the type of data displayed requires it in a specific context."),o("li"),i("li"),s("A user can only sort and filter by those elements that are visible in the current visualization."),o("li"),o("ul"),i("h3",null,null,"id","example-of-use"),s("Example of use"),o("h3"),i("h4"),s("Selection"),o("h4"),i("p"),s("How selection works using the management bar:"),o("p"),i("ul"),i("li"),s("State 1: A click in the checkbox, off state, selects all the elements in the current page."),o("li"),i("li"),s("State 1 and 2: The checkbox is marked with a dash when the selection is partial in the whole dataset."),o("li"),i("li"),s("State 2: Even if the checkbox is with a dash a click selects all elements in the page."),o("li"),i("li"),s('State 2: There is a "Select all" that selects all elements in the dataset.'),o("li"),i("li"),s("State 2: Unselecting the checkbox deselects all selection done over the dataset."),o("li"),o("ul"),i("h4"),s("Filter and order"),o("h4"),i("p"),s("A dropdown button triggers a dropdowm menu with groups. This configuration is thought to clean the management bar providing the user with more specific mechanisms to find data."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarFilterOrder@2x.jpg 2x","src","../../../images/ManagementBarFilterOrder.jpg","alt","dropdown menu displayed from filter and order dropdown button to filter and sort"),o("img"),o("p"),i("p"),i("strong"),s("Filter by"),o("strong"),s(": used to filter in/out elements from the dataset."),o("p"),i("p"),i("strong"),s("Order by"),o("strong"),s(": used to order the dataset by one of the available attributes. In case there is no possible order or only one order this section must not appear."),o("p"),i("p"),i("strong"),s("Group by"),o("strong"),s(": used to group the dataset in different ways. A title and a data provider with the different classification terms per each criteria must be provided. In case there is no group by criteria or there is only one criteria this section must not appear."),o("p"),i("h4"),s("View change"),o("h4"),i("p"),s("This icon button allows to change visualization among tables, lists and cards."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarViewChange@2x.jpg 2x","src","../../../images/ManagementBarViewChange.jpg","alt","dropdown menu displayed from change view button dropdown button to change view"),o("img"),o("p"),i("p"),s("This button must not appear if there is only one possible visualization."),o("p"),i("h4"),s("Search"),o("h4"),i("p"),s("When a management bar contains a search field and it is used to filter elements, there is a thin stripe informing the user with the total number of results."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarResults@2x.png 2x","src","../../../images/ManagementBarResults.png","alt","state one after typing"),o("img"),o("p"),i("h4"),s("Layout Variations"),o("h4"),i("p"),s("The functionalities that are not going to be used in the management bar disappear. So the Search field grows towards the disappearing elements, as shown below."),o("p"),i("p"),s("The general exemple with all the functionalities:"),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarState1@2x.jpg 2x","src","../../../images/ManagementBarState1.jpg","alt","state one of the management bar"),o("img"),o("p"),i("p"),s("Some scenarios might force you to not have selection or filters. In this case you can freely remove what is not needed for your specific use case. In this example, we only need the search field, a button to change visualizations and the plus button to add elements into the dataset."),o("p");i("p"),i("img",null,null,"srcset","../../../images/ManagementBarState3@2x.jpg 2x","src","../../../images/ManagementBarState3.jpg","alt","state three without selection checkbox filter and order"),o("img"),o("p"),i("p"),s("Another possible scenario might not require you to have the visualizations and the plus buttons. In this case, the management bar layout will be as follows:"),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarState4@2x.jpg 2x","src","../../../images/ManagementBarState4.jpg","alt","state four without view change and plus button"),o("img"),o("p"),i("p"),s("Having the management toolbar only configured with the search field is the minimum possible configuration."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarState5@2x.jpg 2x","src","../../../images/ManagementBarState5.jpg","alt","state five only with search fild"),o("img"),o("p"),i("p"),s("Last but not least, a very common case, and aforementioned in View Case section, is to go without the visualizations button."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarState6@2x.jpg 2x","src","../../../images/ManagementBarState6.jpg","alt","state six without view change"),o("img"),o("p"),i("h3",null,null,"id","mobile"),s("Mobile"),o("h3"),i("h4"),s("State 1"),o("h4"),i("p"),s("In mobile version all actions have been transformed into icons to reduce spaces and limit the bar to only one line providing the interface with more space for content rather than tools."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarMobileState1@2x.jpg 2x","src","../../../images/ManagementBarMobileState1.jpg","alt","state one of the management bar mobile"),o("img"),o("p"),i("h4"),s("State 2"),o("h4"),i("p"),s("In contrast to the desktop version, no actions are facilitated outside the actions menu to clean the bar."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarMobileState2@2x.jpg 2x","src","../../../images/ManagementBarMobileState2.jpg","alt","state two of the management bar mobile"),o("img"),o("p"),i("h4"),s("Search"),o("h4"),i("p"),s("By tapping on the magnifying glass icon button, the management bar gets into this state. The search field hovers the whole bar providing a better interaction space."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarMobileSearch@2x.jpg 2x","src","../../../images/ManagementBarMobileSearch.jpg","alt","state two of the management bar mobile"),o("img"),o("p"),i("h4"),s("Search results"),o("h4"),i("p"),s("After tapping on intro in the search field the management bar return to state 1 with a summary line of the results found."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarMobileResults@2x.png 2x","src","../../../images/ManagementBarMobileResults.png","alt","state two of the management bar mobile"),o("img"),o("p"),i("h4"),s("Mobile Layout Variations"),o("h4"),i("p"),s("When not every feature appears in the management bar, the Search field grows towards the disappeared functionality."),o("p"),i("p"),s("The general case, with all the features:"),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarMobileState1@2x.jpg 2x","src","../../../images/ManagementBarMobileState1.jpg","alt","state one of the management bar mobile"),o("img"),o("p"),i("p"),s("The dataset has only the options of changing the view mode and adding new elements which is the example below."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarMobileState3@2x.jpg 2x","src","../../../images/ManagementBarMobileState3.jpg","alt","state three of the management bar mobile without selection filter and order"),o("img"),o("p"),i("p"),s("In this case, the options of selection and filter and order are available."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarMobileState4@2x.jpg 2x","src","../../../images/ManagementBarMobileState4.jpg","alt","state four of the management bar mobile without view change and plus button"),o("img"),o("p"),i("p"),s("The dataset display in this case, only allows to Search."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarMobileState5@2x.jpg 2x","src","../../../images/ManagementBarMobileState5.jpg","alt","state five of the management bar mobile only with the search field"),o("img"),o("p"),i("p"),s("The most common option allows all possibilities except the way to change the view."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/ManagementBarMobileState6@2x.jpg 2x","src","../../../images/ManagementBarMobileState6.jpg","alt","state six of the management bar mobile without change view"),o("img"),o("p"),i("p"),i("em"),s("Note: The management bar doesn't have borders. They are used here to provide you with feedback about its height."),o("em"),o("p"),i("input",null,null,"type","hidden","value",e.page.title),o("input"),i("input",null,null,"type","hidden","value",e.site.title),o("input")};l(a.$$assignDefaults({content:r},e),null,n)}goog.module("hqcvT.incrementaldom");var a=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),i=n.elementOpen,o=n.elementClose,s=(n.elementVoid,n.elementOpenStart,n.elementOpenEnd,n.text),l=(n.attr,p.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="hqcvT.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=r=e,e});var m=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),t}(h.default);p.default.register(m,r),t.hqcvT=m,t.templates=r,t.default=r}},[334]);