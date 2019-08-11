(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <mat-icon id=\"left-nav-btn\" *ngIf=\"isPostRoute(router.url) || isUserRoute(router.url)\" class=\"example-tab-icon\"\n    (click)=\"onBackClicked()\">\n    arrow_back</mat-icon>\n  <span class=\"logo\">\n    <h1>{{title}}</h1>\n  </span>\n</mat-toolbar>\n<div class=\"main-container\">\n\n\n  <router-outlet></router-outlet>\n\n</div>\n<mat-tab-group [@bottomNavEnterAnimation] *ngIf=\"!isPostRoute(router.url) && !isUserRoute(router.url) \" mat-stretch-tabs\n  id=\"app-tab-group\" headerPosition=\"below\" (selectedTabChange)=\"navigateTo($event)\">\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">home</mat-icon>\n    </ng-template>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">public</mat-icon>\n    </ng-template>\n\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">edit</mat-icon>\n    </ng-template>\n\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">favorite</mat-icon>\n    </ng-template>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">email</mat-icon>\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n\n\n\n\n\n\n\n\n\n\n\n<!-- \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<mat-toolbar>My App</mat-toolbar>\n<mat-tab-group mat-stretch-tabs id=\"tab-group\" headerPosition=\"below\" (selectedTabChange)=\"navigateTo($event)\">\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">home</mat-icon>\n    </ng-template>\n    <div class=\"main-container\">\n      <ng-template matTabContent>\n\n        <router-outlet></router-outlet>\n\n\n      </ng-template>\n    </div>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">person</mat-icon>\n    </ng-template>\n    <div class=\"main-container\">\n      <ng-template matTabContent>\n\n        <router-outlet></router-outlet>\n\n      </ng-template>\n    </div>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">favorite</mat-icon>\n    </ng-template>\n    <div class=\"main-container\">\n      <ng-template matTabContent>\n\n        <router-outlet></router-outlet>\n\n      </ng-template>\n    </div>\n  </mat-tab>\n</mat-tab-group> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/bottomsheet/bottomsheet.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/bottomsheet/bottomsheet.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n    <a mat-list-item (click)=\"setFeedSort('Hot')\">\n        <mat-icon mat-list-icon>whatshot</mat-icon>\n        <h4 mat-line>Hot</h4>\n    </a>\n    <a mat-list-item (click)=\"setFeedSort('New')\">\n        <mat-icon mat-list-icon>access_time</mat-icon>\n        <h4 mat-line>New</h4>\n    </a>\n    <a mat-list-item (click)=\"setFeedSort('Top')\">\n        <mat-icon mat-list-icon>bar_chart</mat-icon>\n        <h4 mat-line>Top</h4>\n    </a>\n    <a mat-list-item (click)=\"setFeedSort('Controversial')\">\n        <mat-icon mat-list-icon>pie_chart</mat-icon>\n        <h4 mat-line>Controversial</h4>\n    </a>\n    <a mat-list-item (click)=\"setFeedSort('Educational')\">\n        <mat-icon mat-list-icon>school</mat-icon>\n        <h4 mat-line>Educational</h4>\n    </a>\n</mat-nav-list>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/comment/comment.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/comment/comment.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comment-section-container\">\n    <div class=\"comments\">\n        <div *ngFor=\"let comment of comments\" class=\"comment-container\">\n            <img src=\"https://source.unsplash.com/random\" alt=\"\" class=\"avatar\">\n            <div class=\"comment-content\">\n                <h3 class=\"username\">{{comment.user.username}}</h3>\n                <p class=\"comment\">{{comment.comment}}</p>\n                <p class=\"time\">{{comment.createdAt | timeAgo}}</p>\n            </div>\n            <mat-divider></mat-divider>\n        </div>\n    </div>\n    <form class=\"comment-form\" id=\"comment-input\">\n\n        <textarea matInput placeholder=\"Leave a comment\" autofocus></textarea>\n    </form>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/create/create.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/create/create.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\" [@enterAnimation]>\n    <div id=\"post-detail-container\">\n        <h1>Create</h1>\n        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta voluptates facere beatae vero alias\n            accusamus\n            ipsum\n            vitae voluptas perferendis odit illum deleniti fugiat eveniet velit ratione, minima et. Beatae, distinctio?\n        </p>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/discover/discover.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/discover/discover.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\" [@enterAnimation]>\n    <div id=\"post-detail-container\">\n\n        <h1>Discover</h1>\n        <form class=\"example-form\">\n            <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Search..\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\n            </mat-form-field>\n        </form>\n        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta voluptates facere beatae vero alias\n            accusamus\n            ipsum\n            vitae voluptas perferendis odit illum deleniti fugiat eveniet velit ratione, minima et. Beatae, distinctio?\n        </p>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/favorites/favorites.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/favorites/favorites.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@enterAnimation]>\n    <div *ngFor=\"let post of posts.slice().reverse()\">\n        <app-post-list-item [post]=\"post\"></app-post-list-item>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/feed/feed.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/feed/feed.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@enterAnimation]>\n    <button mat-button (click)=\"openBottomSheet()\"><span>\n            <mat-icon *ngIf=\"sortby === 'Hot'\" mat-list-icon>whatshot</mat-icon>\n            <mat-icon *ngIf=\"sortby === 'New'\" mat-list-icon>access_time</mat-icon>\n            <mat-icon *ngIf=\"sortby === 'Top'\" mat-list-icon>bar_chart</mat-icon>\n            <mat-icon *ngIf=\"sortby === 'Controversial'\" mat-list-icon>pie_chart</mat-icon>\n            <mat-icon *ngIf=\"sortby === 'Educational'\" mat-list-icon>school</mat-icon>\n        </span>\n        <mat-form-field>\n            <mat-label>{{sortby}}</mat-label>\n            <mat-select>\n                <mat-option *ngFor=\"let food of foods\" [value]=\"sortby\">\n                    {{sortby}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n    </button>\n    <app-post-list [posts]=\"posts\"></app-post-list>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\" [@enterAnimation] (touchstart)=\"swipe($event, 'start')\" (touchend)=\"swipe($event, 'end')\">\n    <mat-tab-group mat-align-tabs=\"center\" [selectedIndex]=\"selectedTab\" (selectedTabChange)=\"navigateTo($event)\">\n        <mat-tab label=\"Feed\">\n\n            <div class=\"main-container\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\">\n                <ng-template matTabContent>\n                    <router-outlet></router-outlet>\n\n\n\n\n                </ng-template>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"Popular\">\n            <div class=\"main-container\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\">\n                <ng-template matTabContent>\n                    <router-outlet></router-outlet>\n\n\n                </ng-template>\n            </div>\n        </mat-tab>\n    </mat-tab-group>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/popular/popular.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/popular/popular.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@enterAnimation]>\n    <app-post-list [posts]=\"posts\"></app-post-list>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/messages/messages.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/messages/messages.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\" [@enterAnimation]>\n    <button\n        class=\"mat-button ng-tns-c53-50 contact {'unread':contact.unread} ng-trigger ng-trigger-animate ng-star-inserted\"\n        mat-button=\"\" ngclass=\"{'unread':contact.unread}\" style=\"\"><span class=\"mat-button-wrapper\">\n            <div fxlayout=\"row\" fxlayoutalign=\"start center\" class=\"ng-tns-c53-50\"\n                style=\"flex-direction: row; box-sizing: border-box; display: flex; place-content: center flex-start; align-items: center;\">\n                <div class=\"avatar-wrapper\" fxflex=\"0 1 auto\" fxlayoutalign=\"center center\"\n                    style=\"place-content: center; align-items: center; flex-direction: row; box-sizing: border-box; display: flex; flex: 0 1 auto;\">\n                    <img class=\"avatar\" src=\"https://source.unsplash.com/random\" alt=\"Alice Freeman\">\n                    <mat-icon class=\"mat-icon notranslate material-icons s-16 status online mat-icon-no-color\"\n                        role=\"img\" aria-hidden=\"true\"></mat-icon>\n                </div>\n                <div class=\"ng-tns-c53-50\" fxflex=\"\" fxlayout=\"row\"\n                    style=\"flex-direction: row; box-sizing: border-box; display: flex; flex: 1 1 0%;\">\n                    <div class=\"pr-4\" fxflex=\"\" fxlayout=\"column\" fxlayoutalign=\"center start\"\n                        style=\"flex-direction: column; box-sizing: border-box; display: flex; place-content: flex-start center; align-items: flex-start; flex: 1 1 0%;\">\n                        <div class=\"contact-name\">Alice Freeman</div>\n                        <div class=\"contact-last-message\">Thanks!</div>\n                    </div>\n                    <div class=\"ng-tns-c53-50\" fxlayout=\"column\" fxlayoutalign=\"start end\"\n                        style=\"flex-direction: column; box-sizing: border-box; display: flex; place-content: flex-end flex-start; align-items: flex-end;\">\n                        <div class=\"contact-last-message-time\"> Jun 12, 2017 </div>\n                        <!---->\n                        <div class=\"mt-4 unread-message-count accent ng-tns-c53-50 ng-star-inserted\" style=\"\">4</div>\n                    </div>\n                </div>\n            </div>\n        </span>\n        <div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div>\n        <div class=\"mat-button-focus-overlay\"></div>\n    </button>\n    <button\n        class=\"mat-button ng-tns-c53-50 contact {'unread':contact.unread} ng-trigger ng-trigger-animate ng-star-inserted\"\n        mat-button=\"\" ngclass=\"{'unread':contact.unread}\" style=\"\"><span class=\"mat-button-wrapper\">\n            <div fxlayout=\"row\" fxlayoutalign=\"start center\" class=\"ng-tns-c53-50\"\n                style=\"flex-direction: row; box-sizing: border-box; display: flex; place-content: center flex-start; align-items: center;\">\n                <div class=\"avatar-wrapper\" fxflex=\"0 1 auto\" fxlayoutalign=\"center center\"\n                    style=\"place-content: center; align-items: center; flex-direction: row; box-sizing: border-box; display: flex; flex: 0 1 auto;\">\n                    <img class=\"avatar\" src=\"https://source.unsplash.com/random\" alt=\"Alice Freeman\">\n                    <mat-icon class=\"mat-icon notranslate material-icons s-16 status online mat-icon-no-color\"\n                        role=\"img\" aria-hidden=\"true\"></mat-icon>\n                </div>\n                <div class=\"ng-tns-c53-50\" fxflex=\"\" fxlayout=\"row\"\n                    style=\"flex-direction: row; box-sizing: border-box; display: flex; flex: 1 1 0%;\">\n                    <div class=\"pr-4\" fxflex=\"\" fxlayout=\"column\" fxlayoutalign=\"center start\"\n                        style=\"flex-direction: column; box-sizing: border-box; display: flex; place-content: flex-start center; align-items: flex-start; flex: 1 1 0%;\">\n                        <div class=\"contact-name\">Alice Freeman</div>\n                        <div class=\"contact-last-message\">You are the worst!</div>\n                    </div>\n                    <div class=\"ng-tns-c53-50\" fxlayout=\"column\" fxlayoutalign=\"start end\"\n                        style=\"flex-direction: column; box-sizing: border-box; display: flex; place-content: flex-end flex-start; align-items: flex-end;\">\n                        <div class=\"contact-last-message-time\"> Jun 12, 2017 </div>\n                        <!---->\n                        <div class=\"mt-4 unread-message-count accent ng-tns-c53-50 ng-star-inserted\" style=\"\">4</div>\n                    </div>\n                </div>\n            </div>\n        </span>\n        <div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div>\n        <div class=\"mat-button-focus-overlay\"></div>\n    </button>\n    <button\n        class=\"mat-button ng-tns-c53-50 contact {'unread':contact.unread} ng-trigger ng-trigger-animate ng-star-inserted\"\n        mat-button=\"\" ngclass=\"{'unread':contact.unread}\" style=\"\"><span class=\"mat-button-wrapper\">\n            <div fxlayout=\"row\" fxlayoutalign=\"start center\" class=\"ng-tns-c53-50\"\n                style=\"flex-direction: row; box-sizing: border-box; display: flex; place-content: center flex-start; align-items: center;\">\n                <div class=\"avatar-wrapper\" fxflex=\"0 1 auto\" fxlayoutalign=\"center center\"\n                    style=\"place-content: center; align-items: center; flex-direction: row; box-sizing: border-box; display: flex; flex: 0 1 auto;\">\n                    <img class=\"avatar\" src=\"https://source.unsplash.com/random\" alt=\"Alice Freeman\">\n                    <mat-icon class=\"mat-icon notranslate material-icons s-16 status online mat-icon-no-color\"\n                        role=\"img\" aria-hidden=\"true\"></mat-icon>\n                </div>\n                <div class=\"ng-tns-c53-50\" fxflex=\"\" fxlayout=\"row\"\n                    style=\"flex-direction: row; box-sizing: border-box; display: flex; flex: 1 1 0%;\">\n                    <div class=\"pr-4\" fxflex=\"\" fxlayout=\"column\" fxlayoutalign=\"center start\"\n                        style=\"flex-direction: column; box-sizing: border-box; display: flex; place-content: flex-start center; align-items: flex-start; flex: 1 1 0%;\">\n                        <div class=\"contact-name\">Alice Freeman</div>\n                        <div class=\"contact-last-message\">On my way!</div>\n                    </div>\n                    <div class=\"ng-tns-c53-50\" fxlayout=\"column\" fxlayoutalign=\"start end\"\n                        style=\"flex-direction: column; box-sizing: border-box; display: flex; place-content: flex-end flex-start; align-items: flex-end;\">\n                        <div class=\"contact-last-message-time\"> Jun 12, 2017 </div>\n                        <!---->\n                        <div class=\"mt-4 unread-message-count accent ng-tns-c53-50 ng-star-inserted\" style=\"\">4</div>\n                    </div>\n                </div>\n            </div>\n        </span>\n        <div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div>\n        <div class=\"mat-button-focus-overlay\"></div>\n    </button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/post-detail/post-detail.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/post-detail/post-detail.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"post\">\n    <div class=\"page-container\">\n        <img id=\"post-cover-img\" src=\"{{post.image}}\" alt=\"\"\n            [ngClass]=\"{'book-cover': post.type === 'book' || post.type === 'documentary'}\">\n        <span *ngIf=\"post.type === 'book' || post.type === 'documentary' \" id=\"media-details\" [@enterAnimation]>\n            <h3 id=\"media-title\">{{post.title}}</h3>\n            <h3>by <i>{{post.author}}</i> </h3>\n            <ng-container *ngIf=\"post.tags\">\n                <mat-chip-list aria-label=\"Fish selection\">\n                    <mat-chip *ngFor=\"let tag of post.tags\">{{tag}}</mat-chip>\n                </mat-chip-list>\n            </ng-container>\n        </span>\n        <div id=\"post-detail-container\" [@enterAnimation]>\n            <h1>{{post.title}}</h1>\n\n            <mat-tab-group *ngIf=\"post.type === 'book' || post.type === 'documentary'; else noBook\"\n                mat-align-tabs=\"center\">\n                <mat-tab label=\"Review\">\n\n                    <div class=\"main-container\">\n                        <ng-template matTabContent>\n                            <p>{{post.message}}</p>\n\n\n\n\n                        </ng-template>\n                    </div>\n                </mat-tab>\n                <mat-tab label=\"Summary\">\n                    <div class=\"main-container\">\n                        <ng-template matTabContent>\n                            <p>{{post.summary}}</p>\n\n\n                        </ng-template>\n                    </div>\n                </mat-tab>\n            </mat-tab-group>\n\n            <ng-template #noBook>\n                <p>{{post.message}}</p>\n            </ng-template>\n\n        </div>\n    </div>\n    <form class=\"comment-form\" (click)=\"openCommentSection()\">\n\n        <mat-form-field class=\"example-full-width\">\n            <textarea matInput placeholder=\"Leave a comment\"></textarea>\n        </mat-form-field>\n    </form>\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/post-list/post-list-item/post-list-item.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/post-list/post-list-item/post-list-item.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\" id=\"post-item\">\n    <mat-card>\n        <mat-card-header>\n            <div mat-card-avatar class=\"post-item-header-image\" (click)=\"onUserSelected()\"></div>\n            <mat-card-title (click)=\"onUserSelected()\">{{post.user}}</mat-card-title>\n            <mat-card-subtitle>{{post.title}}</mat-card-subtitle>\n        </mat-card-header>\n        <img *ngIf=\"post.image\" (click)=\"onPostItemSelected()\" id=\"post-img_{{post._id}}\" mat-card-image\n            src=\"{{post.image}}\" alt=\"Photo of a Shiba Inu\">\n        <!-- <iframe *ngIf=\"post.video\" id=\"post-img_{{post._id}}\" width=\"100%\" height=\"100%\" [src]=\"post.video | safe\"\n            frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n            allowfullscreen></iframe> -->\n        <mat-card-actions>\n            <button id=\"fav-btn\" mat-icon-button aria-label=\"Example icon-button with a heart icon\">\n                <mat-icon>favorite</mat-icon>\n            </button>\n            <button id=\"share-btn\" mat-icon-button aria-label=\"Example icon-button with a heart icon\">\n                <mat-icon>share</mat-icon>\n            </button>\n        </mat-card-actions>\n    </mat-card>\n</div>\n<div id=\"whiteout\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/post-list/post-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/post-list/post-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let post of posts\">\n    <app-post-list-item [post]=\"post\"></app-post-list-item>\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\" [@enterAnimation]>\n    <h1>Profile</h1>\n    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta voluptates facere beatae vero alias accusamus\n        ipsum\n        vitae voluptas perferendis odit illum deleniti fugiat eveniet velit ratione, minima et. Beatae, distinctio?</p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user/user.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user/user.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\" [@enterAnimation] (touchstart)=\"swipe($event, 'start')\" (touchend)=\"swipe($event, 'end')\">\n    <mat-tab-group mat-align-tabs=\"center\" [selectedIndex]=\"selectedTab\" (selectedTabChange)=\"navigateTo($event)\">\n        <mat-tab label=\"VIDEOS\">\n\n            <div class=\"main-container\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\">\n                <ng-template matTabContent>\n                    <router-outlet></router-outlet>\n                </ng-template>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"ARTICLES\">\n            <div class=\"main-container\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\">\n                <ng-template matTabContent>\n                    <router-outlet></router-outlet>\n\n\n                </ng-template>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"BOOKS\">\n            <div class=\"main-container\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\">\n                <ng-template matTabContent>\n                    <router-outlet></router-outlet>\n\n\n                </ng-template>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"Files\">\n            <div class=\"main-container\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\">\n                <ng-template matTabContent>\n                    <router-outlet></router-outlet>\n\n\n                </ng-template>\n            </div>\n        </mat-tab>\n    </mat-tab-group>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/video-list/video-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/video-list/video-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"video-list-container\">\n    <mat-list>\n        <h3 mat-subheader>Documentaries</h3>\n        <mat-grid-list *ngFor=\"let vid of vids\" cols=\"8\" rowHeight=\"1:2\">\n            <mat-grid-tile colspan=\"3\"><img class=\"video-thumbnail\" src=\"https://source.unsplash.com/random\" alt=\"\">\n            </mat-grid-tile>\n            <mat-grid-tile class=\"video-details\" colspan=\"5\">\n                <mat-list class=\"mat-list-inner\">\n                    <mat-list-item>\n                        <h4 mat-line>Video Title</h4>\n                        <p mat-line> {{date}} </p>\n                    </mat-list-item>\n                </mat-list>\n            </mat-grid-tile>\n        </mat-grid-list>\n\n        <!-- <mat-divider></mat-divider>\n    <h3 mat-subheader>Notes</h3>\n    <mat-list-item *ngFor=\"let note of notes\">\n        <mat-icon mat-list-icon>note</mat-icon>\n        <h4 mat-line>{{note.name}}</h4>\n        <p mat-line> {{note.updated | date}} </p>\n    </mat-list-item> -->\n    </mat-list>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/videos/videos.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/videos/videos.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-video-list></app-video-list>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");
/* harmony import */ var _components_home_feed_feed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/feed/feed.component */ "./src/app/components/home/feed/feed.component.ts");
/* harmony import */ var _components_home_popular_popular_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/popular/popular.component */ "./src/app/components/home/popular/popular.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/app/components/messages/messages.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_discover_discover_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/discover/discover.component */ "./src/app/components/discover/discover.component.ts");
/* harmony import */ var _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/post-detail/post-detail.component */ "./src/app/components/post-detail/post-detail.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/videos/videos.component */ "./src/app/components/videos/videos.component.ts");














const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            { path: 'feed', component: _components_home_feed_feed_component__WEBPACK_IMPORTED_MODULE_6__["FeedComponent"] },
            { path: 'popular', component: _components_home_popular_popular_component__WEBPACK_IMPORTED_MODULE_7__["PopularComponent"] }
        ]
    },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'user/:username', redirectTo: 'user/:username/videos', pathMatch: 'full' },
    {
        path: 'user/:username', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
        children: [
            { path: 'videos', component: _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_13__["VideosComponent"] }
        ]
    },
    { path: 'favorites', component: _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_5__["FavoritesComponent"] },
    { path: 'messages', component: _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"] },
    { path: 'create', component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_9__["CreateComponent"] },
    { path: 'discover', component: _components_discover_discover_component__WEBPACK_IMPORTED_MODULE_10__["DiscoverComponent"] },
    { path: 'post/:_id', component: _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_11__["PostDetailComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  box-sizing: border-box;\n  display: block;\n  height: 100%;\n}\n\n.mat-tab-body {\n  width: 100vw;\n}\n\n#app-tab-group {\n  z-index: 99;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\n}\n\n.mat-toolbar {\n  z-index: 99;\n  position: fixed;\n  top: 0;\n  background-color: #fff;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\n}\n\n.logo {\n  margin: auto;\n}\n\n.logo h1 {\n  -webkit-user-select: none;\n  /* Safari */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* IE10+/Edge */\n  user-select: none;\n  /* Standard */\n}\n\n#left-nav-btn {\n  position: absolute;\n  left: 16px;\n}\n\nh1 {\n  font-family: \"EB Garamond\", serif;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0M6XFx3b3Jrc3BhY2VcXGFya1xcY2xpZW50XFxzcmNcXGFwcFxcY29tcG9uZW50cy8uLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi4vYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBRE1BO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDBDQUFBO0FDSEo7O0FEZ0JBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtBQ2JKOztBRGdCQTtFQUNFLFlBQUE7QUNiRjs7QURjRTtFQUNFLHlCQUFBO0VBQTJCLFdBQUE7RUFDL0Isc0JBQUE7RUFBd0IsWUFBQTtFQUN4QixxQkFBQTtFQUF1QixlQUFBO0VBQ3ZCLGlCQUFBO0VBQW1CLGFBQUE7QUNSbkI7O0FEWUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNURjs7QURZQTtFQUNFLGlDQUFBO0VBQ0EsaUJBQUE7QUNURiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4ubWF0LXRhYi1ib2R5IHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICBcclxufVxyXG5cclxuI2FwcC10YWItZ3JvdXB7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgfVxyXG4gIC8vICN0YWItZ3JvdXAgbWF0LXRhYi1ib2R5IHtcclxuICAvLyAgIGZsZXgtZ3JvdzogMTtcclxuICAvLyB9XHJcblxyXG4vLyAubWF0LXRhYi1sYWJlbCB7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICAmOmhvdmVyIHtcclxuLy8gICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaDEge1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovICAgICAgICBcclxuLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xyXG4tbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFMTArL0VkZ2UgKi9cclxudXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkICovXHJcbiAgfVxyXG59XHJcblxyXG4jbGVmdC1uYXYtYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTZweDtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnRUIgR2FyYW1vbmQnLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufSIsIjpob3N0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1hdC10YWItYm9keSB7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuI2FwcC10YWItZ3JvdXAge1xuICB6LWluZGV4OiA5OTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5tYXQtdG9vbGJhciB7XG4gIHotaW5kZXg6IDk5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5sb2dvIGgxIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogU2FmYXJpICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBJRTEwKy9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAvKiBTdGFuZGFyZCAqL1xufVxuXG4jbGVmdC1uYXYtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNnB4O1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkVCIEdhcmFtb25kXCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_toolbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/toolbar.service */ "./src/app/services/toolbar.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");






let AppComponent = class AppComponent {
    constructor(router, location, _toolbarService) {
        this.router = router;
        this.location = location;
        this._toolbarService = _toolbarService;
    }
    ngOnInit() {
        this._toolbarService.currentTitle$.subscribe(title => {
            this.title = title;
        });
    }
    navigateTo({ index }) {
        let route;
        switch (index) {
            case 0:
                route = 'home';
                break;
            case 1:
                route = 'discover';
                break;
            case 2:
                route = 'create';
                break;
            case 3:
                route = 'favorites';
                break;
            case 4:
                route = 'messages';
                break;
            default:
            // code block .
        }
        // console.log(index)
        this.router.navigate([`/${route}`]);
    }
    onBackClicked() {
        this.location.back();
    }
    isPostRoute(value) {
        return /^\/post(\/|$)/.test(value);
    }
    isUserRoute(value) {
        return /^\/user(\/|$)/.test(value);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _services_toolbar_service__WEBPACK_IMPORTED_MODULE_4__["ToolbarService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])("bottomNavEnterAnimation", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: "translateY(70px)", opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])("320ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: "translateY(0px)", opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: "translateY(0px)", opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])("420ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: "translateY(70px)", opacity: 0 }))
                ])
            ]),
        ],
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");
/* harmony import */ var _components_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/post-list/post-list.component */ "./src/app/components/post-list/post-list.component.ts");
/* harmony import */ var _components_post_list_post_list_item_post_list_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/post-list/post-list-item/post-list-item.component */ "./src/app/components/post-list/post-list-item/post-list-item.component.ts");
/* harmony import */ var _components_home_feed_feed_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/feed/feed.component */ "./src/app/components/home/feed/feed.component.ts");
/* harmony import */ var _components_home_popular_popular_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/popular/popular.component */ "./src/app/components/home/popular/popular.component.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/app/components/messages/messages.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_discover_discover_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/discover/discover.component */ "./src/app/components/discover/discover.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/post-detail/post-detail.component */ "./src/app/components/post-detail/post-detail.component.ts");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/safe.pipe */ "./src/app/pipes/safe.pipe.ts");
/* harmony import */ var _components_bottomsheet_bottomsheet_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/bottomsheet/bottomsheet.component */ "./src/app/components/bottomsheet/bottomsheet.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/video-list/video-list.component */ "./src/app/components/video-list/video-list.component.ts");
/* harmony import */ var _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/videos/videos.component */ "./src/app/components/videos/videos.component.ts");
/* harmony import */ var _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/comment/comment.component */ "./src/app/components/comment/comment.component.ts");
/* harmony import */ var _pipes_timeAgo_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pipes/timeAgo.pipe */ "./src/app/pipes/timeAgo.pipe.ts");



























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__["FavoritesComponent"],
            _components_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_10__["PostListComponent"],
            _components_post_list_post_list_item_post_list_item_component__WEBPACK_IMPORTED_MODULE_11__["PostListItemComponent"],
            _components_home_feed_feed_component__WEBPACK_IMPORTED_MODULE_12__["FeedComponent"],
            _components_home_popular_popular_component__WEBPACK_IMPORTED_MODULE_13__["PopularComponent"],
            _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_15__["MessagesComponent"],
            _components_create_create_component__WEBPACK_IMPORTED_MODULE_16__["CreateComponent"],
            _components_discover_discover_component__WEBPACK_IMPORTED_MODULE_17__["DiscoverComponent"],
            _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_19__["PostDetailComponent"],
            _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_20__["SafePipe"],
            _pipes_timeAgo_pipe__WEBPACK_IMPORTED_MODULE_26__["TimaAgoPipe"],
            _components_bottomsheet_bottomsheet_component__WEBPACK_IMPORTED_MODULE_21__["BottomsheetComponent"],
            _components_user_user_component__WEBPACK_IMPORTED_MODULE_22__["UserComponent"],
            _components_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_23__["VideoListComponent"],
            _components_videos_videos_component__WEBPACK_IMPORTED_MODULE_24__["VideosComponent"],
            _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_25__["CommentComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _modules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"]
        ],
        providers: [_services_post_service__WEBPACK_IMPORTED_MODULE_14__["PostService"]],
        entryComponents: [_components_bottomsheet_bottomsheet_component__WEBPACK_IMPORTED_MODULE_21__["BottomsheetComponent"], _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_25__["CommentComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/bottomsheet/bottomsheet.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/bottomsheet/bottomsheet.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3R0b21zaGVldC9ib3R0b21zaGVldC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/bottomsheet/bottomsheet.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/bottomsheet/bottomsheet.component.ts ***!
  \*****************************************************************/
/*! exports provided: BottomsheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomsheetComponent", function() { return BottomsheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_sort_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sort.service */ "./src/app/services/sort.service.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");




let BottomsheetComponent = class BottomsheetComponent {
    constructor(_sortService, _bottomSheet) {
        this._sortService = _sortService;
        this._bottomSheet = _bottomSheet;
    }
    ngOnInit() {
    }
    setFeedSort(sort) {
        this._sortService.setFeedSort(sort);
        this._bottomSheet.dismiss();
    }
};
BottomsheetComponent.ctorParameters = () => [
    { type: src_app_services_sort_service__WEBPACK_IMPORTED_MODULE_2__["SortService"] },
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"] }
];
BottomsheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bottomsheet',
        template: __webpack_require__(/*! raw-loader!./bottomsheet.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/bottomsheet/bottomsheet.component.html"),
        styles: [__webpack_require__(/*! ./bottomsheet.component.scss */ "./src/app/components/bottomsheet/bottomsheet.component.scss")]
    })
], BottomsheetComponent);



/***/ }),

/***/ "./src/app/components/comment/comment.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/comment/comment.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment-section-container {\n  height: 50vh;\n}\n.comment-section-container .comments {\n  height: calc(100% - 40px);\n  overflow-y: scroll;\n}\n.comment-section-container .comments::after {\n  overflow: hidden;\n  pointer-events: none;\n  content: \"\";\n  z-index: 99;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: linear-gradient(0deg, white 0%, rgba(9, 9, 121, 0) 30%, rgba(0, 212, 255, 0) 100%);\n  width: 100%;\n  height: calc(100% - 48px);\n}\n.comment-section-container .comments .comment-container {\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.comment-section-container .comments .comment-container .avatar {\n  height: 40px;\n  width: 40px;\n  overflow: hidden;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n.comment-section-container .comments .comment-container .comment-content {\n  margin-left: 16px;\n  display: flex;\n  flex-direction: column;\n}\n.comment-section-container .comments .comment-container .comment-content .username {\n  margin: 0;\n}\n.comment-section-container .comments .comment-container .comment-content .comment {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n.comment-section-container .comments .comment-container .comment-content .comment::before {\n  content: '\"';\n}\n.comment-section-container .comments .comment-container .comment-content .comment::after {\n  content: '\"';\n}\n.comment-section-container .comments .comment-container .comment-content .time {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 10px;\n}\n.profile-picture {\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n#comment-input {\n  padding: 0;\n}\ntextarea {\n  padding: 16px;\n  height: 48px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQvQzpcXHdvcmtzcGFjZVxcYXJrXFxjbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL2NvbW1lbnRcXGNvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJjb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7QURBSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUNFUjtBRERRO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsOEZBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNHWjtBRERRO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0FDR1o7QURGWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUNJaEI7QURGWTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDSWhCO0FESGdCO0VBQ0ksU0FBQTtBQ0twQjtBREhnQjtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNLcEI7QURKb0I7RUFDSSxZQUFBO0FDTXhCO0FESm9CO0VBQ0ksWUFBQTtBQ014QjtBREhnQjtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNLcEI7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDQTtFQUNJLFVBQUE7QUNFSjtBREFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDR0oiLCJmaWxlIjoiY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQtc2VjdGlvbi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgLmNvbW1lbnRzIHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDksOSwxMjEsMCkgMzAlLCByZ2JhKDAsMjEyLDI1NSwwKSAxMDAlKTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDhweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb21tZW50LWNvbnRhaW5lcntcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMDUpO1xyXG4gICAgICAgICAgICAuYXZhdGFye1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbW1lbnQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgLnVzZXJuYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXCInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1wiJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLnByb2ZpbGUtcGljdHVyZSB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiNjb21tZW50LWlucHV0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxudGV4dGFyZWEge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIi5jb21tZW50LXNlY3Rpb24tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1MHZoO1xufVxuLmNvbW1lbnQtc2VjdGlvbi1jb250YWluZXIgLmNvbW1lbnRzIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmNvbW1lbnQtc2VjdGlvbi1jb250YWluZXIgLmNvbW1lbnRzOjphZnRlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb250ZW50OiBcIlwiO1xuICB6LWluZGV4OiA5OTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCB3aGl0ZSAwJSwgcmdiYSg5LCA5LCAxMjEsIDApIDMwJSwgcmdiYSgwLCAyMTIsIDI1NSwgMCkgMTAwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ4cHgpO1xufVxuLmNvbW1lbnQtc2VjdGlvbi1jb250YWluZXIgLmNvbW1lbnRzIC5jb21tZW50LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuLmNvbW1lbnQtc2VjdGlvbi1jb250YWluZXIgLmNvbW1lbnRzIC5jb21tZW50LWNvbnRhaW5lciAuYXZhdGFyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jb21tZW50LXNlY3Rpb24tY29udGFpbmVyIC5jb21tZW50cyAuY29tbWVudC1jb250YWluZXIgLmNvbW1lbnQtY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbW1lbnQtc2VjdGlvbi1jb250YWluZXIgLmNvbW1lbnRzIC5jb21tZW50LWNvbnRhaW5lciAuY29tbWVudC1jb250ZW50IC51c2VybmFtZSB7XG4gIG1hcmdpbjogMDtcbn1cbi5jb21tZW50LXNlY3Rpb24tY29udGFpbmVyIC5jb21tZW50cyAuY29tbWVudC1jb250YWluZXIgLmNvbW1lbnQtY29udGVudCAuY29tbWVudCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb21tZW50LXNlY3Rpb24tY29udGFpbmVyIC5jb21tZW50cyAuY29tbWVudC1jb250YWluZXIgLmNvbW1lbnQtY29udGVudCAuY29tbWVudDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1wiJztcbn1cbi5jb21tZW50LXNlY3Rpb24tY29udGFpbmVyIC5jb21tZW50cyAuY29tbWVudC1jb250YWluZXIgLmNvbW1lbnQtY29udGVudCAuY29tbWVudDo6YWZ0ZXIge1xuICBjb250ZW50OiAnXCInO1xufVxuLmNvbW1lbnQtc2VjdGlvbi1jb250YWluZXIgLmNvbW1lbnRzIC5jb21tZW50LWNvbnRhaW5lciAuY29tbWVudC1jb250ZW50IC50aW1lIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ucHJvZmlsZS1waWN0dXJlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuI2NvbW1lbnQtaW5wdXQge1xuICBwYWRkaW5nOiAwO1xufVxuXG50ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/comment/comment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/comment/comment.component.ts ***!
  \*********************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let CommentComponent = class CommentComponent {
    constructor(post) {
        this.post = post;
        this.userId = "1";
        this.clickEvent = new MouseEvent("click", {
            "view": window,
            "bubbles": true,
            "cancelable": false
        });
    }
    ngOnInit() {
        this.comments = this.post.post.comments;
        console.log(this.post);
        let input = document.getElementById('comment-input');
        input.dispatchEvent(this.clickEvent);
    }
};
CommentComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"],] }] }
];
CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comment',
        template: __webpack_require__(/*! raw-loader!./comment.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/comment/comment.component.html"),
        styles: [__webpack_require__(/*! ./comment.component.scss */ "./src/app/components/comment/comment.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"]))
], CommentComponent);



/***/ }),

/***/ "./src/app/components/create/create.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/create/create.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var src_app_services_toolbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toolbar.service */ "./src/app/services/toolbar.service.ts");




let CreateComponent = class CreateComponent {
    constructor(_toolbarService) {
        this._toolbarService = _toolbarService;
    }
    ngOnInit() {
        this._toolbarService.setTitle('ARK');
    }
};
CreateComponent.ctorParameters = () => [
    { type: src_app_services_toolbar_service__WEBPACK_IMPORTED_MODULE_3__["ToolbarService"] }
];
CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create',
        template: __webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/create/create.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("enterAnimation", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/components/create/create.component.scss")]
    })
], CreateComponent);



/***/ }),

/***/ "./src/app/components/discover/discover.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/discover/discover.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNjb3Zlci9kaXNjb3Zlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/discover/discover.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/discover/discover.component.ts ***!
  \***********************************************************/
/*! exports provided: MyErrorStateMatcher, DiscoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverComponent", function() { return DiscoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_toolbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toolbar.service */ "./src/app/services/toolbar.service.ts");





/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let DiscoverComponent = class DiscoverComponent {
    constructor(_toolbarService) {
        this._toolbarService = _toolbarService;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []);
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
        this._toolbarService.setTitle('ARK');
    }
};
DiscoverComponent.ctorParameters = () => [
    { type: src_app_services_toolbar_service__WEBPACK_IMPORTED_MODULE_4__["ToolbarService"] }
];
DiscoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-discover',
        template: __webpack_require__(/*! raw-loader!./discover.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/discover/discover.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("enterAnimation", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./discover.component.scss */ "./src/app/components/discover/discover.component.scss")]
    })
], DiscoverComponent);



/***/ }),

/***/ "./src/app/components/favorites/favorites.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/favorites/favorites.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var src_app_services_toolbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toolbar.service */ "./src/app/services/toolbar.service.ts");





let FavoritesComponent = class FavoritesComponent {
    constructor(postService, _toolbarService) {
        this.postService = postService;
        this._toolbarService = _toolbarService;
    }
    ngOnInit() {
        this.posts = this.postService.getPosts();
        this._toolbarService.setTitle('ARK');
    }
};
FavoritesComponent.ctorParameters = () => [
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: src_app_services_toolbar_service__WEBPACK_IMPORTED_MODULE_4__["ToolbarService"] }
];
FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites',
        template: __webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/favorites/favorites.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("enterAnimation", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./favorites.component.scss */ "./src/app/components/favorites/favorites.component.scss")]
    })
], FavoritesComponent);



/***/ }),

/***/ "./src/app/components/home/feed/feed.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/home/feed/feed.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-icon {\n  vertical-align: middle;\n}\n\n::ng-deep .mat-form-field-underline {\n  display: none;\n}\n\nmat-form-field {\n  position: absolute;\n  top: -4px;\n}\n\nbutton {\n  width: 100%;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvZmVlZC9DOlxcd29ya3NwYWNlXFxhcmtcXGNsaWVudFxcc3JjXFxhcHBcXGNvbXBvbmVudHMvaG9tZVxcZmVlZFxcZmVlZC5jb21wb25lbnQuc2NzcyIsImhvbWUvZmVlZC9mZWVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFRTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0NOOztBREVFO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDQ04iLCJmaWxlIjoiaG9tZS9mZWVkL2ZlZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtaWNvbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTRweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH0iLCJtYXQtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/feed/feed.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/home/feed/feed.component.ts ***!
  \********************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _bottomsheet_bottomsheet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../bottomsheet/bottomsheet.component */ "./src/app/components/bottomsheet/bottomsheet.component.ts");
/* harmony import */ var src_app_services_sort_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sort.service */ "./src/app/services/sort.service.ts");







let FeedComponent = class FeedComponent {
    constructor(postService, _sortService, _bottomSheet) {
        this.postService = postService;
        this._sortService = _sortService;
        this._bottomSheet = _bottomSheet;
        this.sortby = "New";
    }
    openBottomSheet() {
        this._bottomSheet.open(_bottomsheet_bottomsheet_component__WEBPACK_IMPORTED_MODULE_5__["BottomsheetComponent"]);
    }
    ngOnInit() {
        this._sortService.currentSort$.subscribe(sort => {
            this.sortby = sort;
            console.log("YEAAAAH BWOOOY " + this.sortby);
        });
        this.posts = this.postService.getPosts();
    }
};
FeedComponent.ctorParameters = () => [
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: src_app_services_sort_service__WEBPACK_IMPORTED_MODULE_6__["SortService"] },
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"] }
];
FeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed',
        template: __webpack_require__(/*! raw-loader!./feed.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/feed/feed.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("enterAnimation", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./feed.component.scss */ "./src/app/components/home/feed/feed.component.scss")]
    })
], FeedComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab-group {\n  background-color: #fff;\n  border: none;\n}\n\n.mat-tab-header {\n  border: none;\n  opacity: 0;\n}\n\n.mat-tab-body-wrapper {\n  background-color: #f5f5f5;\n}\n\n.mat-tab-list {\n  position: fixed;\n  top: 0;\n  left: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvQzpcXHdvcmtzcGFjZVxcYXJrXFxjbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL2hvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoiaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWItZ3JvdXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm1hdC10YWItaGVhZGVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWJvZHktd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4ubWF0LXRhYi1saXN0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDogMTAwcHg7XHJcbn0iLCIubWF0LXRhYi1ncm91cCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm1hdC10YWItaGVhZGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4ubWF0LXRhYi1saXN0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDEwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_toolbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toolbar.service */ "./src/app/services/toolbar.service.ts");





let HomeComponent = class HomeComponent {
    constructor(router, route, _toolbarService) {
        this.router = router;
        this.route = route;
        this._toolbarService = _toolbarService;
    }
    swipe(e, when) {
        const coord = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
        const time = new Date().getTime();
        if (when === 'start') {
            this.swipeCoord = coord;
            this.swipeTime = time;
        }
        else if (when === 'end') {
            const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
            const duration = time - this.swipeTime;
            if (duration < 1000 //
                && Math.abs(direction[0]) > 30 // Long enough
                && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
                const swipe = direction[0] < 0 ? 'next' : 'previous';
                // Do whatever you want with swipe
                switch (swipe) {
                    case 'next':
                        this.selectedTab = 1;
                        break;
                    case 'previous':
                        this.selectedTab = 0;
                        break;
                    default:
                    // code block
                }
            }
        }
    }
    navigateTo({ index }) {
        let route;
        switch (index) {
            case 0:
                route = 'feed';
                break;
            case 1:
                route = 'popular';
                break;
            default:
            // code block
        }
        // console.log(index)
        this.router.navigate([`${route}`], { relativeTo: this.route });
    }
    ngOnInit() {
        this.router.navigate([`feed`], { relativeTo: this.route });
        this._toolbarService.setTitle('ARK');
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_toolbar_service__WEBPACK_IMPORTED_MODULE_4__["ToolbarService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("enterAnimation", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/home/popular/popular.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/home/popular/popular.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lL3BvcHVsYXIvcG9wdWxhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/home/popular/popular.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/home/popular/popular.component.ts ***!
  \**************************************************************/
/*! exports provided: PopularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularComponent", function() { return PopularComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");




let PopularComponent = class PopularComponent {
    constructor(postService) {
        this.postService = postService;
    }
    ngOnInit() {
        this.posts = this.postService.getPosts().slice().reverse();
    }
};
PopularComponent.ctorParameters = () => [
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] }
];
PopularComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popular',
        template: __webpack_require__(/*! raw-loader!./popular.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/popular/popular.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("enterAnimation", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./popular.component.scss */ "./src/app/components/home/popular/popular.component.scss")]
    })
], PopularComponent);



/***/ }),

/***/ "./src/app/components/messages/messages.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/messages/messages.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "chat-chats-sidenav .sidenav-content .chat-list .contact, chat-chats-sidenav .sidenav-content .contact-list .contact {\n  white-space: normal;\n  text-align: left;\n  letter-spacing: 0.01em;\n  min-height: 88px;\n  border-bottom: 1px solid;\n  padding: 16px;\n  font-weight: 400;\n  border-radius: 0;\n}\n\n.avatar {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nbutton {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL0M6XFx3b3Jrc3BhY2VcXGFya1xcY2xpZW50XFxzcmNcXGFwcFxcY29tcG9uZW50cy9tZXNzYWdlc1xcbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJtZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjaGF0LWNoYXRzLXNpZGVuYXYgLnNpZGVuYXYtY29udGVudCAuY2hhdC1saXN0IC5jb250YWN0LCBjaGF0LWNoYXRzLXNpZGVuYXYgLnNpZGVuYXYtY29udGVudCAuY29udGFjdC1saXN0IC5jb250YWN0IHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMWVtO1xyXG4gICAgbWluLWhlaWdodDogODhweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgICB3aWR0aDogNzJweDtcclxuICAgIGhlaWdodDogNzJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufSIsImNoYXQtY2hhdHMtc2lkZW5hdiAuc2lkZW5hdi1jb250ZW50IC5jaGF0LWxpc3QgLmNvbnRhY3QsIGNoYXQtY2hhdHMtc2lkZW5hdiAuc2lkZW5hdi1jb250ZW50IC5jb250YWN0LWxpc3QgLmNvbnRhY3Qge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBtaW4taGVpZ2h0OiA4OHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5hdmF0YXIge1xuICB3aWR0aDogNzJweDtcbiAgaGVpZ2h0OiA3MnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/messages/messages.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/messages/messages.component.ts ***!
  \***********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var src_app_services_toolbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toolbar.service */ "./src/app/services/toolbar.service.ts");




let MessagesComponent = class MessagesComponent {
    constructor(_toolbarService) {
        this._toolbarService = _toolbarService;
    }
    ngOnInit() {
        this._toolbarService.setTitle('ARK');
    }
};
MessagesComponent.ctorParameters = () => [
    { type: src_app_services_toolbar_service__WEBPACK_IMPORTED_MODULE_3__["ToolbarService"] }
];
MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: __webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/messages/messages.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("enterAnimation", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/components/messages/messages.component.scss")]
    })
], MessagesComponent);



/***/ }),

/***/ "./src/app/components/post-detail/post-detail.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/post-detail/post-detail.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#post-cover-img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.page-container {\n  background-color: #fff;\n}\n\n.mat-tab-group {\n  background-color: #fff;\n  border: none;\n}\n\n.mat-tab-header {\n  border: none;\n  opacity: 0;\n}\n\n.mat-tab-body-wrapper {\n  background-color: #fff;\n}\n\n.mat-tab-list {\n  position: fixed;\n  top: 0;\n  left: 100px;\n}\n\n.book-cover {\n  transform: translateY(16px);\n  width: 25% !important;\n  margin-left: 16px;\n}\n\n#media-details {\n  width: 60%;\n  position: absolute;\n  right: 16px;\n  top: 72px;\n}\n\n#media-title {\n  margin-top: -4px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtZGV0YWlsL0M6XFx3b3Jrc3BhY2VcXGFya1xcY2xpZW50XFxzcmNcXGFwcFxcY29tcG9uZW50cy9wb3N0LWRldGFpbFxccG9zdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJwb3N0LWRldGFpbC9wb3N0LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsMENBQUE7QUNBSjs7QURFQTtFQUNJLHNCQUFBO0FDQ0o7O0FER0E7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDQUo7O0FES0E7RUFDSSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDRkoiLCJmaWxlIjoicG9zdC1kZXRhaWwvcG9zdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcG9zdC1jb3Zlci1pbWcge1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuLnBhZ2UtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4ubWF0LXRhYi1ncm91cCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubWF0LXRhYi1oZWFkZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm1hdC10YWItYm9keS13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWxpc3Qge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OiAxMDBweDtcclxufVxyXG5cclxuXHJcblxyXG4uYm9vay1jb3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTZweCk7XHJcbiAgICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxufVxyXG5cclxuI21lZGlhLWRldGFpbHMge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgdG9wOiA3MnB4O1xyXG4gICAgXHJcbn1cclxuI21lZGlhLXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6LTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufSIsIiNwb3N0LWNvdmVyLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucGFnZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LXRhYi1ncm91cCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm1hdC10YWItaGVhZGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LXRhYi1saXN0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDEwMHB4O1xufVxuXG4uYm9vay1jb3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNnB4KTtcbiAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuI21lZGlhLWRldGFpbHMge1xuICB3aWR0aDogNjAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNnB4O1xuICB0b3A6IDcycHg7XG59XG5cbiNtZWRpYS10aXRsZSB7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/post-detail/post-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/post-detail/post-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: PostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function() { return PostDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comment/comment.component */ "./src/app/components/comment/comment.component.ts");







let PostDetailComponent = class PostDetailComponent {
    constructor(route, postService, _bottomSheet) {
        this.route = route;
        this.postService = postService;
        this._bottomSheet = _bottomSheet;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.route.params.subscribe(params => { this.postId = params._id; console.log(params._id); });
        this.post = this.postService.getPostById(this.postId);
        console.log(this.post);
        let image = document.getElementById(`trick-img`);
        if (image) {
            document.body.removeChild(image);
            image.style.opacity = "0";
        }
    }
    openCommentSection() {
        this._bottomSheet.open(_comment_comment_component__WEBPACK_IMPORTED_MODULE_6__["CommentComponent"], { data: { post: this.post }, panelClass: 'comment-section-radius' });
    }
};
PostDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheet"] }
];
PostDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-detail',
        template: __webpack_require__(/*! raw-loader!./post-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/post-detail/post-detail.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])("enterAnimation", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateY(20px)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("500ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateY(0px)' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("500ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }))
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./post-detail.component.scss */ "./src/app/components/post-detail/post-detail.component.scss")]
    })
], PostDetailComponent);



/***/ }),

/***/ "./src/app/components/post-list/post-list-item/post-list-item.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/post-list/post-list-item/post-list-item.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#post-item {\n  width: 100%;\n  margin-bottom: 8px;\n}\n#post-item mat-card {\n  border-radius: 0px;\n  border-bottom: 1px solid #ccc;\n  box-shadow: none;\n}\n.post-item-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n.mat-card-title {\n  font-size: 12px;\n  font-weight: bold;\n}\n.mat-card-subtitle {\n  font-size: 12px;\n}\n.top {\n  transform: translateY(56px) !important;\n}\niframe {\n  position: absolute;\n  left: 0;\n}\nmat-card-actions {\n  position: relative;\n  padding: 0px !important;\n  margin: 0px !important;\n  height: 24px;\n}\n.mat-icon-button {\n  height: 24px;\n  width: 24px;\n  line-height: 24px;\n  margin-right: 16px;\n}\n#share-btn {\n  position: absolute;\n  right: 0;\n}\n#fav-btn {\n  position: absolute;\n  left: 0;\n}\n#whiteout {\n  opacity: 0;\n  pointer-events: none;\n  z-index: 97;\n  background-color: #fff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  transition: all 220ms;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtbGlzdC9wb3N0LWxpc3QtaXRlbS9DOlxcd29ya3NwYWNlXFxhcmtcXGNsaWVudFxcc3JjXFxhcHBcXGNvbXBvbmVudHMvcG9zdC1saXN0XFxwb3N0LWxpc3QtaXRlbVxccG9zdC1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJwb3N0LWxpc3QvcG9zdC1saXN0LWl0ZW0vcG9zdC1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNBSjtBRENJO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDQ047QURHRTtFQUNFLG1GQUFBO0VBQ0Esc0JBQUE7QUNBSjtBREdFO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQU47QURFRTtFQUNFLGVBQUE7QUNDSjtBREVBO0VBQ0Usc0NBQUE7QUNDRjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0FDRUY7QURTQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNORjtBRFNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTkY7QURTQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQ05GO0FEU0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7QUNORjtBRFNBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ05GIiwiZmlsZSI6InBvc3QtbGlzdC9wb3N0LWxpc3QtaXRlbS9wb3N0LWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jcG9zdC1pdGVte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBtYXQtY2FyZCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3N0LWl0ZW0taGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1NnB4KSAhaW1wb3J0YW50O1xyXG59XHJcbmlmcmFtZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgLy8gd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gLm1hdC1jYXJkIHtcclxuLy8gICBtYXgtd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuXHJcbi8vIG1hdC1jYXJkIHtcclxuLy8gICBtYXgtd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuXHJcbm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuLm1hdC1pY29uLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG5cclxuI3NoYXJlLWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4jZmF2LWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiN3aGl0ZW91dCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB6LWluZGV4OiA5NztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDIyMG1zO1xyXG59IiwiI3Bvc3QtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4jcG9zdC1pdGVtIG1hdC1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnBvc3QtaXRlbS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWF0LWNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50b3Age1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTZweCkgIWltcG9ydGFudDtcbn1cblxuaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufVxuXG5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4ubWF0LWljb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuI3NoYXJlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbiNmYXYtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufVxuXG4jd2hpdGVvdXQge1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogOTc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMjIwbXM7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/post-list/post-list-item/post-list-item.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/post-list/post-list-item/post-list-item.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PostListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListItemComponent", function() { return PostListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PostListItemComponent = class PostListItemComponent {
    constructor(router) {
        this.router = router;
        this.onPostItemSelected = this.debounce(() => {
            let image = document.getElementById(`post-img_${this.post._id}`);
            let whiteout = document.getElementById('whiteout');
            whiteout.style.opacity = "1";
            if (this.post.image && this.post.type === 'article') {
                let rect = image.getBoundingClientRect();
                // console.log(rect.top, rect.right, rect.bottom, rect.left);
                let trickImage = document.createElement("IMG");
                trickImage.id = "trick-img";
                trickImage.style.position = "fixed";
                trickImage.style.top = `0`;
                trickImage.style.transform = `translateY(${rect.top}px)`;
                trickImage.style.left = `${rect.left}`;
                trickImage.style.margin = '0px';
                trickImage.style.zIndex = "110";
                trickImage.style.width = "100%";
                trickImage.style.objectFit = "cover";
                trickImage.src = this.post.image;
                trickImage.style.transition = "all 420ms ease";
                trickImage.style.pointerEvents = "none";
                document.body.appendChild(trickImage);
                setTimeout(() => {
                    image.style.opacity = "0";
                    trickImage.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
                    trickImage.style.transform = `translateY(56px)`;
                    setTimeout(() => {
                        this.router.navigate(['post', this.post._id]);
                    }, 420);
                }, 20);
                console.log(trickImage);
            }
            else if (this.post.image && (this.post.type === 'book' || this.post.type === 'documentary')) {
                let rect = image.getBoundingClientRect();
                // console.log(rect.top, rect.right, rect.bottom, rect.left);
                let trickImage = document.createElement("IMG");
                trickImage.id = "trick-img";
                trickImage.style.position = "fixed";
                trickImage.style.top = `0`;
                trickImage.style.transform = `translateY(${rect.top}px)`;
                trickImage.style.left = `${rect.left}`;
                trickImage.style.margin = '0px';
                trickImage.style.zIndex = "110";
                trickImage.style.width = "100%";
                trickImage.style.objectFit = "cover";
                trickImage.src = this.post.image;
                trickImage.style.transition = "all 420ms ease";
                trickImage.style.pointerEvents = "none";
                document.body.appendChild(trickImage);
                setTimeout(() => {
                    trickImage.style.width = "25%";
                    image.style.opacity = "0";
                    trickImage.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
                    trickImage.style.transform = `translateY(72px) translateX(16px)`;
                    setTimeout(() => {
                        this.router.navigate(['post', this.post._id]);
                    }, 420);
                }, 20);
                console.log(trickImage);
            }
        }, 2000, 1);
    }
    ngOnInit() {
    }
    debounce(func, wait, immediate) {
        let timeout;
        return function () {
            let context = this, args = arguments;
            let later = function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow)
                func.apply(context, args);
        };
    }
    ;
    onUserSelected() {
        this.router.navigate(['user', 'dayz']);
    }
};
PostListItemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostListItemComponent.prototype, "post", void 0);
PostListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-list-item',
        template: __webpack_require__(/*! raw-loader!./post-list-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/post-list/post-list-item/post-list-item.component.html"),
        styles: [__webpack_require__(/*! ./post-list-item.component.scss */ "./src/app/components/post-list/post-list-item/post-list-item.component.scss")]
    })
], PostListItemComponent);



/***/ }),

/***/ "./src/app/components/post-list/post-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/post-list/post-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/post-list/post-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/post-list/post-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostListComponent = class PostListComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostListComponent.prototype, "posts", void 0);
PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-list',
        template: __webpack_require__(/*! raw-loader!./post-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/post-list/post-list.component.html"),
        styles: [__webpack_require__(/*! ./post-list.component.scss */ "./src/app/components/post-list/post-list.component.scss")]
    })
], PostListComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("enterAnimation", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/profile/profile.component.scss")]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/user/user.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-container {\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvQzpcXHdvcmtzcGFjZVxcYXJrXFxjbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL3VzZXJcXHVzZXIuY29tcG9uZW50LnNjc3MiLCJ1c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKIiwiZmlsZSI6InVzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59IiwiLnBhZ2UtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_toolbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toolbar.service */ "./src/app/services/toolbar.service.ts");





let UserComponent = class UserComponent {
    constructor(router, route, _toolbarService) {
        this.router = router;
        this.route = route;
        this._toolbarService = _toolbarService;
        this.selectedTab = 0;
        this.tabs = 3;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        // this.router.navigate([`videos`], { relativeTo: this.route });
        this._toolbarService.setTitle('DAYZ OF NOAH');
    }
    swipe(e, when) {
        const coord = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
        const time = new Date().getTime();
        if (when === 'start') {
            this.swipeCoord = coord;
            this.swipeTime = time;
        }
        else if (when === 'end') {
            const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
            const duration = time - this.swipeTime;
            if (duration < 1000 //
                && Math.abs(direction[0]) > 30 // Long enough
                && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
                const swipe = direction[0] < 0 ? 'next' : 'previous';
                // Do whatever you want with swipe
                switch (swipe) {
                    case 'next':
                        if (this.selectedTab < 3) {
                            this.selectedTab++;
                        }
                        break;
                    case 'previous':
                        if (this.selectedTab > 0) {
                            this.selectedTab--;
                        }
                        break;
                    default:
                    // code block
                }
            }
        }
    }
    navigateTo({ index }) {
        let route;
        switch (index) {
            case 0:
                route = 'documentaries';
                break;
            case 1:
                route = 'articles';
                break;
            case 2:
                route = 'books';
                break;
            case 3:
                route = 'files';
                break;
            default:
            // code block
        }
        // console.log(index)
        this.router.navigate([`${route}`], { relativeTo: this.route });
    }
};
UserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_toolbar_service__WEBPACK_IMPORTED_MODULE_4__["ToolbarService"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user/user.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("enterAnimation", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":leave", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("500ms", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/components/user/user.component.scss")]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/components/video-list/video-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/video-list/video-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-thumbnail {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.mat-grid-list {\n  margin-bottom: 16px;\n}\n\n.mat-figure {\n  position: relative;\n}\n\n.mat-list-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  text-align: left;\n}\n\n.mat-list-item-content {\n  padding-top: 0px;\n}\n\n.video-list-container {\n  background-color: #fff;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLWxpc3QvQzpcXHdvcmtzcGFjZVxcYXJrXFxjbGllbnRcXHNyY1xcYXBwXFxjb21wb25lbnRzL3ZpZGVvLWxpc3RcXHZpZGVvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJ2aWRlby1saXN0L3ZpZGVvLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FEYUE7RUFDSSxrQkFBQTtBQ1ZKOztBRFlBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FDVEo7O0FEV0E7RUFDSSxnQkFBQTtBQ1JKOztBRFVBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDUEoiLCJmaWxlIjoidmlkZW8tbGlzdC92aWRlby1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLXRodW1ibmFpbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4ubWF0LWdyaWQtbGlzdHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi8vIC52aWRlby1kZXRhaWxzIHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4vLyAgICAgaDQge1xyXG4vLyAgICAgICAgIG1hcmdpbjogMDtcclxuLy8gICAgIH1cclxuLy8gICAgIHAge1xyXG4vLyAgICAgICAgIG1hcmdpbjogMDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4ubWF0LWZpZ3VyZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1hdC1saXN0LWlubmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5tYXQtbGlzdC1pdGVtLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG4udmlkZW8tbGlzdC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn0iLCIudmlkZW8tdGh1bWJuYWlsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5tYXQtZ3JpZC1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLm1hdC1maWd1cmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXQtbGlzdC1pbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLnZpZGVvLWxpc3QtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/video-list/video-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/video-list/video-list.component.ts ***!
  \***************************************************************/
/*! exports provided: VideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListComponent", function() { return VideoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);



let VideoListComponent = class VideoListComponent {
    constructor() {
        this.date = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["distanceInWordsToNow"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(new Date(), 3), { addSuffix: true });
        this.vids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    ngOnInit() {
    }
};
VideoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video-list',
        template: __webpack_require__(/*! raw-loader!./video-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/video-list/video-list.component.html"),
        styles: [__webpack_require__(/*! ./video-list.component.scss */ "./src/app/components/video-list/video-list.component.scss")]
    })
], VideoListComponent);



/***/ }),

/***/ "./src/app/components/videos/videos.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/videos/videos.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlb3MvdmlkZW9zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/videos/videos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/videos/videos.component.ts ***!
  \*******************************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VideosComponent = class VideosComponent {
    constructor() { }
    ngOnInit() {
    }
};
VideosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-videos',
        template: __webpack_require__(/*! raw-loader!./videos.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/videos/videos.component.html"),
        styles: [__webpack_require__(/*! ./videos.component.scss */ "./src/app/components/videos/videos.component.scss")]
    })
], VideosComponent);



/***/ }),

/***/ "./src/app/modules/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/pipes/safe.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
    })
], SafePipe);



/***/ }),

/***/ "./src/app/pipes/timeAgo.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/timeAgo.pipe.ts ***!
  \***************************************/
/*! exports provided: TimaAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimaAgoPipe", function() { return TimaAgoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TimaAgoPipe = class TimaAgoPipe {
    transform(date) {
        return date = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["distanceInWordsToNow"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"])(date, 0), { addSuffix: true });
    }
};
TimaAgoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
        name: 'timeAgo'
    })
], TimaAgoPipe);



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostService = class PostService {
    constructor() {
        this.types = ['book', 'documentary', 'quote', 'article'];
        this.posts = [
            {
                _id: 0,
                user: "Dayz",
                author: "Aldous Huxley",
                title: "Brave New World",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
                summary: "Brave New World is a dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in a futuristic World State of genetically modified citizens and an intelligence-based social hierarchy, the novel anticipates huge scientific developments in reproductive technology, sleep-learning, psychological manipulation, and classical conditioning that are combined to make a utopian society that goes challenged only by a single outsider.",
                image: "https://images-na.ssl-images-amazon.com/images/I/91e-zS-ZoXL.jpg",
                tags: ["They Live", "Obey"],
                type: "book",
                comments: [
                    {
                        user: { username: "Dayz" },
                        comment: "A Must Read!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "TSM Melissa" },
                        comment: "Yes! Always the classic!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "ACFAU" },
                        comment: "Thanks!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "Jordan Peterson" },
                        comment: "Read it",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    }
                ]
            },
            {
                _id: 1,
                user: "Know More News",
                author: "George Orwell",
                title: "1984",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
                image: "https://media0.giphy.com/media/OIu3fg1r9tAJ2/giphy.gif?cid=790b7611d7d1076864b016b218417becc0dc2901a2f42c8a&rid=giphy.gif",
                tags: ["Orwellian", "Brave New World"],
                type: "book",
                comments: [
                    {
                        user: { username: "Dayz" },
                        comment: "A Must Read!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "TSM Melissa" },
                        comment: "Yes! Always the classic!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "ACFAU" },
                        comment: "Thanks!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "Jordan Peterson" },
                        comment: "Read it",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    }
                ]
            },
            {
                _id: 2,
                user: "lxblvnc",
                author: "Amit Dave",
                title: "School children attend a yoga session at a camp in Ahmedabad, India.",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
                image: "https://amp.insider.com/images/5a00cb577f986543008b4659-960-657.jpg",
                type: "article",
                comments: [
                    {
                        user: { username: "Dayz" },
                        comment: "A Must Read!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "TSM Melissa" },
                        comment: "Yes! Always the classic!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "ACFAU" },
                        comment: "Thanks!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "Jordan Peterson" },
                        comment: "Read it",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    }
                ]
            },
            {
                _id: 3,
                user: "On Point Preparedness",
                author: "David W Cerny",
                title: "A man climbs a wall of ice in the city of Liberec, Czech Republic.",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
                image: "https://amp.insider.com/images/5a21648c3339b01d008b4574-960-626.jpg",
                type: "article",
                comments: [
                    {
                        user: { username: "Dayz" },
                        comment: "A Must Read!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "TSM Melissa" },
                        comment: "Yes! Always the classic!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "ACFAU" },
                        comment: "Thanks!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "Jordan Peterson" },
                        comment: "Read it",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    }
                ]
            },
            {
                _id: 4,
                user: "reallygraceful",
                author: "David W Cerny",
                title: "Kandy Freeman participates in a Black Lives Matter protest in front of Trump Tower in New York City.",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
                image: "https://amp.insider.com/images/5a00e71314e5aa27008b47a9-960-641.jpg",
                type: "article",
                comments: [
                    {
                        user: { username: "Dayz" },
                        comment: "A Must Read!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "TSM Melissa" },
                        comment: "Yes! Always the classic!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "ACFAU" },
                        comment: "Thanks!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "Jordan Peterson" },
                        comment: "Read it",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    }
                ]
            },
            {
                _id: 5,
                user: "RISE",
                author: "Nacho Doce",
                title: "Residents and tourists enjoy the sea at Barra da Tijuca beach during a summer day in Rio de Janeiro, Brazil.",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
                image: "https://amp.insider.com/images/5a216ec93339b063058b457e-960-557.jpg",
                type: "article",
                comments: [
                    {
                        user: { username: "Dayz" },
                        comment: "A Must Read!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "TSM Melissa" },
                        comment: "Yes! Always the classic!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "ACFAU" },
                        comment: "Thanks!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "Jordan Peterson" },
                        comment: "Read it",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    }
                ]
            },
            {
                _id: 6,
                user: "Steven Bancarz",
                author: "Mohammad Ismail",
                title: "Hanifa Doosti (center), 17, and other students of the Shaolin Wushu club show their Wushu skills to other students on a hilltop in Kabul, Afghanistan.",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
                image: "https://amp.insider.com/images/5a00f27614e5aacd0f8b474c-960-651.jpg",
                type: "article",
                comments: [
                    {
                        user: { username: "Dayz" },
                        comment: "A Must Read!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "TSM Melissa" },
                        comment: "Yes! Always the classic!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "ACFAU" },
                        comment: "Thanks!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "Jordan Peterson" },
                        comment: "Read it",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    }
                ]
            },
            {
                _id: 7,
                user: "StormCloudsGathering",
                author: "Jason Reed",
                title: "Switzerland's Roger Federer holds up the trophy after winning his men's singles final match against Spain's Rafael Nadal during the Australian Open, Melbourne, Australia.",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
                image: "https://amp.insider.com/images/5a1f0c593339b01f008b462a-960-656.jpg",
                type: "article",
                comments: [
                    {
                        user: { username: "Dayz" },
                        comment: "A Must Read!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "TSM Melissa" },
                        comment: "Yes! Always the classic!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "ACFAU" },
                        comment: "Thanks!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "Jordan Peterson" },
                        comment: "Read it",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    }
                ]
            },
            {
                _id: 8,
                user: "ChristianPrince",
                author: "Christopher Polk",
                title: "Beyonce performs at the 59th Grammy Awards in Los Angeles, California.",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
                image: "https://amp.insider.com/images/5a01c9e78ed9e524008b4676-960-592.jpg",
                type: "article",
                comments: [
                    {
                        user: { username: "Dayz" },
                        comment: "A Must Read!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "TSM Melissa" },
                        comment: "Yes! Always the classic!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "ACFAU" },
                        comment: "Thanks!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "Jordan Peterson" },
                        comment: "Read it",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    }
                ]
            },
            {
                _id: 9,
                user: "TheCrowHouse",
                author: "Dayz Of Noah",
                title: "THE MALE THOT: A Documentary (2019)",
                image: "https://cdn.lifehack.org/wp-content/uploads/2014/09/man-on-a-wire.jpg",
                video: "https://www.youtube.com/embed/v8Sah9PoXeA",
                type: "documentary",
                summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
                comments: [
                    {
                        user: { username: "Dayz" },
                        comment: "A Must Read!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "TSM Melissa" },
                        comment: "Yes! Always the classic!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "ACFAU" },
                        comment: "Thanks!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "Jordan Peterson" },
                        comment: "Read it",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    }
                ]
            },
            {
                _id: 10,
                user: "TruthStreamMedia",
                author: "Aldous Huxley",
                title: "A Documentary (2019)",
                quote: "You shall know the truth and the truth shall make you mad.",
                image: "https://source.unsplash.com/random",
                video: "https://www.youtube.com/embed/v8Sah9PoXeA",
                type: "documentary",
                summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
                comments: [
                    {
                        user: { username: "Dayz" },
                        comment: "A Must Read!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "TSM Melissa" },
                        comment: "Yes! Always the classic!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "ACFAU" },
                        comment: "Thanks!",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    },
                    {
                        user: { username: "Jordan Peterson" },
                        comment: "Read it",
                        createdAt: Date(),
                        likes: ["1", "2"]
                    }
                ]
            }
        ];
    }
    getPosts() {
        return this.posts;
    }
    getPostById(id) {
        let post = this.posts.filter(post => {
            return post._id == id;
        });
        return post[0];
    }
};
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostService);



/***/ }),

/***/ "./src/app/services/sort.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/sort.service.ts ***!
  \******************************************/
/*! exports provided: SortService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortService", function() { return SortService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let SortService = class SortService {
    constructor() {
        this.feedSort = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("New");
        this.currentSort$ = this.feedSort.asObservable();
    }
    setFeedSort(sort) {
        this.feedSort.next(sort);
    }
    getFeedSort() {
        return this.feedSort;
    }
};
SortService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SortService);



/***/ }),

/***/ "./src/app/services/toolbar.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/toolbar.service.ts ***!
  \*********************************************/
/*! exports provided: ToolbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarService", function() { return ToolbarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ToolbarService = class ToolbarService {
    constructor() {
        this.title = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("ARK");
        this.currentTitle$ = this.title.asObservable();
    }
    setTitle(title) {
        this.title.next(title);
    }
    getTitle() {
        return this.title;
    }
};
ToolbarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToolbarService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\workspace\ark\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map