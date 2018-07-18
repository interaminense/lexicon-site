var pageComponent=webpackJsonppageComponent([37],{342:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=i(0),s=n(a),u=i(1),c=n(u);i(4),i(5),i(3),i(7),i(2),i(8),i(6),i(9),i(10),i(11),i(12),i(13),i(14);var d=i(343),p=n(d),m=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),t}(s.default);c.default.register(m,p.default),t.default=m},343:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.KWoeG=void 0;var a,s=i(0),u=n(s),c=i(1),d=n(c);goog.loadModule(function(e){function t(e,t,n){var a=function(){o("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&r(t),l("div"),o("p"),o("img",null,null,"srcset","../../../images/TableInlineEdition@2x.jpg 2x","src","../../../images/TableInlineEdition.jpg","alt","table inline edition, view mode"),l("img"),l("p"),o("h3",null,null,"id","usage"),r("Usage"),l("h3"),o("ul"),o("li"),r("Inline edit table is the pattern to use when listing information that may require a quick edition. This pattern is oriented to scenarios like commerce where edition is a frequent action."),l("li"),o("li"),r('This table type always has the "Edit" button visible as its main identifying characteristic.'),l("li"),o("li"),r("Each row has two different modes:"),o("ul"),o("li"),r("View mode"),l("li"),o("li"),r("Edit mode"),l("li"),l("ul"),l("li"),o("li"),r("This table doesn't have a responsive version that works in mobile devices."),l("li"),l("ul"),o("h3",null,null,"id","row-modes"),r("Row modes"),l("h3"),o("h4"),r("View mode"),l("h4"),o("ul"),o("li"),r("It is the default status of the row and the table data is not editable in this mode."),l("li"),o("li"),r("To enter edit mode the user has to click on Edit button."),l("li"),o("li"),r('More actions are possible under the actions button. In case there is an edition screen for the element name it "Advanced edit".'),l("li"),l("ul"),o("p"),o("img",null,null,"srcset","../../../images/TableInlineEditRowView@2x.jpg 2x","src","../../../images/TableInlineEditRowView.jpg","alt","table inline edition row view configuration"),l("img"),l("p"),o("h4"),r("Edit mode"),l("h4"),o("ul"),o("li"),r("In this mode those row entries that are possible to edit get transformed into a certain input field: text field, numeric field, select, etc."),l("li"),o("li"),r("This mode has two different actions:"),o("ul"),o("li"),r("Save: saves the changes and gets into view mode."),l("li"),o("li"),r("Cancel: discards the changes and into view mode."),l("li"),l("ul"),l("li"),l("ul"),o("p"),o("img",null,null,"srcset","../../../images/TableInlineEditRowEdit@2x.jpg 2x","src","../../../images/TableInlineEditRowEdit.jpg","alt","table inline edition row edit configuration"),l("img"),l("p"),o("h3",null,null,"id","example"),r("Example"),l("h3"),o("p"),o("img",null,null,"srcset","../../../images/TableInlineEditionFocus@2x.jpg 2x","src","../../../images/TableInlineEditionFocus.jpg","alt","table inline edition with first row in edition mode and first field on focus"),l("img"),l("p"),o("h3",null,null,"id","attributes"),r("Attributes"),l("h3"),o("p"),o("img",null,null,"srcset","../../../images/TableInlineEditRowDesc@2x.jpg 2x","src","../../../images/TableInlineEditRowDesc.jpg","alt","table row attributes"),l("img"),l("p"),o("p"),r("The editable row can contain the same elements as a normal table row. We describe the previous example:"),l("p"),o("ol"),o("li"),r("Checkbox."),l("li"),o("li"),r("Main column text."),l("li"),o("li"),r("Other columns, where different components may appear."),l("li"),o("li"),r("Edit button."),l("li"),o("li"),r("Actions button."),l("li"),l("ol"),o("p"),r("It is important to remark that the minimum distance between two columns is 24px."),l("p"),o("p"),o("img",null,null,"srcset","../../../images/TableInlineEditRowMetrics1@2x.jpg 2x","src","../../../images/TableInlineEditRowMetrics1.jpg","alt","table row metrics"),l("img"),l("p"),o("input",null,null,"type","hidden","value",e.page.title),l("input"),o("input",null,null,"type","hidden","value",e.site.title),l("input")};s(i.$$assignDefaults({content:a},e),null,n)}goog.module("KWoeG.incrementaldom");var i=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),o=n.elementOpen,l=n.elementClose,r=(n.elementVoid,n.elementOpenStart,n.elementOpenEnd,n.text),s=(n.attr,d.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="KWoeG.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=a=e,e});var p=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),t}(u.default);d.default.register(p,a),t.KWoeG=p,t.templates=a,t.default=a}},[342]);