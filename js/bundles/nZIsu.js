var pageComponent=webpackJsonppageComponent([18],{198:function(e,l,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function o(e,l){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||"object"!=typeof l&&"function"!=typeof l?e:l}function s(e,l){if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function, not "+typeof l);e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(e,l):e.__proto__=l)}Object.defineProperty(l,"__esModule",{value:!0});var r=t(0),n=i(r),p=t(1),u=i(p);t(4),t(5),t(3),t(7),t(2),t(8),t(6),t(9),t(10),t(11),t(12),t(13),t(14);var d=t(199),g=i(d),m=function(e){function l(){return a(this,l),o(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return s(l,e),l}(n.default);u.default.register(m,g.default),l.default=m},199:function(e,l,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function o(e,l){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||"object"!=typeof l&&"function"!=typeof l?e:l}function s(e,l){if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function, not "+typeof l);e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(e,l):e.__proto__=l)}Object.defineProperty(l,"__esModule",{value:!0}),l.templates=l.nZIsu=void 0;var r,n=t(0),p=i(n),u=t(1),d=i(u);goog.loadModule(function(e){function l(e,l,i){var r=function(){a("div",null,null,"class","page-description");var l=e.page.description;"function"==typeof l?l():null!=l&&s(l),o("div"),a("h3",null,null,"id","simple-file-upload"),s("Simple File Upload"),o("h3"),a("p"),s("Simple file upload is used to upload a simple file element."),o("p"),a("p"),a("img",null,null,"srcset","../../../images/FileUploadSimple@2x.png 2x","src","../../../images/FileUploadSimple.png","alt","file upload simple"),o("img"),o("p"),a("h3",null,null,"id","multiple-file-upload"),s("Multiple File Upload"),o("h3"),a("p"),s("Inside this categorization we have two different patterns: file uploader and image uploader. Both are pretty similar but the second one is more visual and adapted to the situation."),o("p"),a("p"),s("Both uploaders share the same "),a("strong"),s("upload area"),o("strong"),s(" which works in the following way:"),o("p"),a("ul"),a("li"),a("p"),s("It must always have 2 different states:"),o("p"),a("ul"),a("li"),a("p"),s("Default"),o("p"),a("ul"),a("li"),s("Message: to clarify file extension permitted, max size of each file."),o("li"),a("li"),s("Secondary button: as not always users would want to user the drag and drop feature. The button opens the operating system file uploader with the possibility of selecting multiple files."),o("li"),o("ul"),a("p"),a("img",null,null,"srcset","../../../images/FileUploadEmptyState@2x.png 2x","src","../../../images/FileUploadEmptyState.png","alt","file upload simple empty state"),o("img"),o("p"),o("li"),a("li"),a("p"),s("Active"),o("p"),a("ul"),a("li"),s("It contains an animation that invites users to drop documents on dropover state."),o("li"),o("ul"),a("p"),a("img",null,null,"srcset","../../../images/FileUploadEmptyStateHover@2x.png 2x","src","../../../images/FileUploadEmptyStateHover.png","alt","file upload simple empty state hover"),o("img"),o("p"),o("li"),o("ul"),o("li"),a("li"),a("p"),s("Once files have been added to the upload system, there must be always clear options to upload more files, explicit button and drag and drop option."),o("p"),o("li"),a("li"),a("p"),s("The scroll must be only vertical if needed."),o("p"),o("li"),a("li"),a("p"),s("Each file can be deleted individually."),o("p"),o("li"),a("li"),a("p"),s("Each file can retry the upload individually"),o("p"),o("li"),o("ul"),a("h4"),s("File Uploader"),o("h4"),a("p"),a("img",null,null,"srcset","../../../images/FileUpload@2x.png 2x","src","../../../images/FileUpload.png","alt","file upload simple"),o("img"),o("p"),a("ul"),a("li"),s("File uploader admits any kind of file further that images as it can be pdfs, docs, etc."),o("li"),a("li"),s("After dropping files in the area, a list with the upload status is displayed allowing the users to see the upload status of each single file."),o("li"),a("li"),s("Files that didn't complete the upload process provide the option to retry the upload."),o("li"),a("li"),s("Every file must be always possible to be removed."),o("li"),o("ul"),a("p"),s("In this example the file uploader counts with a form to predefine a certain configuration for the files uploaded."),o("p"),a("p"),a("img",null,null,"srcset","../../../images/FileUploaderErrorStatePanelOpen@2x.png 2x","src","../../../images/FileUploaderErrorStatePanelOpen.png","alt","file upload simple with errors"),o("img"),o("p"),a("p"),s("Files can be in different states:"),o("p"),a("ul"),a("li"),s("Default state: when the file is already uploaded"),o("li"),o("ul"),a("p"),a("img",null,null,"srcset","../../../images/FileUploadListDefault@2x.png 2x","src","../../../images/FileUploadListDefault.png","alt","file upload list row default state"),o("img"),o("p"),a("ul"),a("li"),s("Upload state: while the is the upload process"),o("li"),o("ul"),a("p"),a("img",null,null,"srcset","../../../images/FileUploadListProgress@2x.png 2x","src","../../../images/FileUploadListProgress.png","alt","file upload list row upload state"),o("img"),o("p"),a("ul"),a("li"),s("Error state: the file upload has failed"),o("li"),o("ul"),a("p"),a("img",null,null,"srcset","../../../images/FileUploadListError@2x.png 2x","src","../../../images/FileUploadListError.png","alt","file upload list row error state"),o("img"),o("p"),a("h4"),s("Image Uploader"),o("h4"),a("p"),a("img",null,null,"srcset","../../../images/FileUploadImageUpload@2x.png 2x","src","../../../images/FileUploadImageUpload.png","alt","file upload simple"),o("img"),o("p"),a("ul"),a("li"),s("Image uploader only admits image file types."),o("li"),a("li"),s("After dropping images in the area, a images grid appears allowing the user see the upload process."),o("li"),a("li"),s('The drag and drop area hots the image grid. This are must have a vertical scroll. The cell next to last uploaded image must have a "+" to invite the user to upload more files. Clicking in that cell opens the file upload for the specified files.'),o("li"),a("li"),s("Each images is represented by its squared thumbnail."),o("li"),a("li"),s("Images that didn't complete the upload process provide the option to retry the upload."),o("li"),a("li"),s("Every image must be always possible to be removed."),o("li"),o("ul"),a("p"),a("img",null,null,"srcset","../../../images/FileUploadImageUploadErrors@2x.png 2x","src","../../../images/FileUploadImageUploadErrors.png","alt","image upload with error state"),o("img"),o("p"),a("p"),s("Images can be in different states:"),o("p"),a("ul"),a("li"),s("Upload state: while the is the upload process. Left side default state, right side hover state."),o("li"),o("ul"),a("p"),a("img",null,null,"srcset","../../../images/FileUploadImageStates@2x.png 2x","src","../../../images/FileUploadImageStates.png","alt","image upload, upload state"),o("img"),o("p"),a("ul"),a("li"),s("Error state: the file upload has failed"),o("li"),o("ul"),a("p"),a("img",null,null,"srcset","../../../images/FileUploadImageStatesError@2x.png 2x","src","../../../images/FileUploadImageStatesError.png","alt","image upload error state"),o("img"),o("p"),a("ul"),a("li"),s("Default and hover image states: when the file is already uploaded"),o("li"),o("ul");a("p"),a("img",null,null,"srcset","../../../images/FileUploadImageStatesDefaultHover@2x.png 2x","src","../../../images/FileUploadImageStatesDefaultHover.png","alt","image default and hover state"),o("img"),o("p"),a("ul"),a("li"),s("It can be the case that the image uploader requires of checkboxes for a specific requirement"),o("li"),o("ul"),a("p"),a("img",null,null,"srcset","../../../images/FileUploadImageStatesChecbox@2x.png 2x","src","../../../images/FileUploadImageStatesChecbox.png","alt","image default and selected state"),o("img"),o("p"),a("input",null,null,"type","hidden","value",e.page.title),o("input"),a("input",null,null,"type","hidden","value",e.site.title),o("input")};n(t.$$assignDefaults({content:r},e),null,i)}goog.module("nZIsu.incrementaldom");var t=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var i=goog.require("incrementaldom"),a=i.elementOpen,o=i.elementClose,s=(i.elementVoid,i.elementOpenStart,i.elementOpenEnd,i.text),n=(i.attr,d.default.getTemplate("guide.incrementaldom","render"));return e.render=l,goog.DEBUG&&(l.soyTemplateName="nZIsu.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=r=e,e});var g=function(e){function l(){return a(this,l),o(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return s(l,e),l}(p.default);d.default.register(g,r),l.nZIsu=g,l.templates=r,l.default=r}},[198]);