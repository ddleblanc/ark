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

module.exports = "<mat-toolbar>\n  <mat-icon id=\"left-nav-btn\" *ngIf=\"isPostRoute(router.url) || isUserRoute(router.url)\" class=\"example-tab-icon\"\n    (click)=\"onBackClicked()\">\n    arrow_back</mat-icon>\n  <span class=\"logo\">\n    <h1>{{title}}</h1>\n  </span>\n</mat-toolbar>\n<div class=\"main-container\">\n\n\n  <router-outlet></router-outlet>\n\n</div>\n<mat-tab-group [@bottomNavEnterAnimation] *ngIf=\"!isPostRoute(router.url) && !isUserRoute(router.url) \" mat-stretch-tabs\n  id=\"app-tab-group\" headerPosition=\"below\" (selectedTabChange)=\"navigateTo($event)\">\n  <mat-tab matRippleColor=\"#ff0000\">\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">home</mat-icon>\n    </ng-template>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">public</mat-icon>\n    </ng-template>\n\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">edit</mat-icon>\n    </ng-template>\n\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">favorite</mat-icon>\n    </ng-template>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">email</mat-icon>\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n\n\n\n\n\n\n\n\n\n\n\n<!-- \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<mat-toolbar>My App</mat-toolbar>\n<mat-tab-group mat-stretch-tabs id=\"tab-group\" headerPosition=\"below\" (selectedTabChange)=\"navigateTo($event)\">\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">home</mat-icon>\n    </ng-template>\n    <div class=\"main-container\">\n      <ng-template matTabContent>\n\n        <router-outlet></router-outlet>\n\n\n      </ng-template>\n    </div>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">person</mat-icon>\n    </ng-template>\n    <div class=\"main-container\">\n      <ng-template matTabContent>\n\n        <router-outlet></router-outlet>\n\n      </ng-template>\n    </div>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">favorite</mat-icon>\n    </ng-template>\n    <div class=\"main-container\">\n      <ng-template matTabContent>\n\n        <router-outlet></router-outlet>\n\n      </ng-template>\n    </div>\n  </mat-tab>\n</mat-tab-group> -->"

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

/***/ "./node_modules/raw-loader/index.js!./src/app/components/post-detail/post-detail-review/post-detail-review.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/post-detail/post-detail-review/post-detail-review.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>post-detail-review works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/post-detail/post-detail-summary/post-detail-summary.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/post-detail/post-detail-summary/post-detail-summary.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/post-detail/post-detail.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/post-detail/post-detail.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"post\">\n    <div class=\"page-container\">\n        <mat-card *ngIf=\"post.type === 'book' || post.type === 'documentary' \">\n            <img *ngIf=\"post.image\" [@fadeAnimation] id=\"post-bg\" mat-card-image src=\"{{post.image}}\"\n                alt=\"Photo of a Shiba Inu\">\n            <!-- <iframe *ngIf=\"post.video\" id=\"post-img_{{post._id}}\" width=\"100%\" height=\"100%\" [src]=\"post.video | safe\"\n                        frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                        allowfullscreen></iframe> -->\n            <mat-card-footer id=\"cover-footer\">\n                <img id=\"post-cover-img\" src=\"{{post.image}}\" alt=\"\"\n                    [ngClass]=\"{'book-cover': post.type === 'book' || post.type === 'documentary'}\">\n                <span id=\"media-details\" [@enterAnimation]>\n                    <h3 id=\"media-title\">{{post.title}}</h3>\n                    <h5>by <i>{{post.author}}</i> </h5>\n                    <!-- <app-rating [rating]=\"rating\" [starCount]=\"starCount\" [color]=\"starColor\"\n                        (ratingUpdated)=\"onRatingChanged($event)\"></app-rating> -->\n                    <!-- <h3>{{post.rating}}</h3> -->\n                    <!-- <ng-container *ngIf=\"post.tags\">\n                                <mat-chip-list aria-label=\"Fish selection\">\n                                    <mat-chip *ngFor=\"let tag of post.tags\">{{tag}}</mat-chip>\n                                </mat-chip-list>\n                            </ng-container> -->\n                </span>\n            </mat-card-footer>\n        </mat-card>\n\n        <img *ngIf=\"post.type !== 'book' && post.type !== 'documentary' \" id=\"post-cover-img\" src=\"{{post.image}}\"\n            alt=\"\">\n        <div id=\"post-detail-container\" [@enterAnimation]\n            [ngClass]=\"{'move-down':  post.type === 'book' || post.type === 'documentary', 'white-bg':  post.type !== 'book' && post.type !== 'documentary'  }\">\n            <h1 *ngIf=\"post.type !== 'book' && post.type !== 'documentary' \">{{post.title}}</h1>\n\n            <mat-card [ngClass]=\"{ 'no-padding':  post.type !== 'book' && post.type !== 'documentary'  }\"\n                (touchstart)=\"swipe($event, 'start')\" (touchend)=\"swipe($event, 'end')\">\n                <mat-tab-group *ngIf=\"post.type === 'book' || post.type === 'documentary'; else noBook\"\n                    mat-align-tabs=\"center\" [selectedIndex]=\"selectedTab\" (selectedTabChange)=\"navigateTo($event)\">\n                    <mat-tab label=\"Review\">\n\n                        <div class=\"main-container\">\n                            <ng-template matTabContent>\n                                <router-outlet></router-outlet>\n\n\n\n\n                            </ng-template>\n                        </div>\n                    </mat-tab>\n                    <mat-tab label=\"Summary\">\n                        <div class=\"main-container\">\n                            <ng-template matTabContent>\n                                <router-outlet></router-outlet>\n\n\n                            </ng-template>\n                        </div>\n                    </mat-tab>\n                </mat-tab-group>\n            </mat-card>\n\n\n\n            <ng-template #noBook>\n                <p>{{post.message}}</p>\n                <div class=\"swiper-container\" [swiper]=\"config\" [(index)]=\"index\"\n                    (indexChange)=\"switchPlayback($event)\">\n                    <div class=\"swiper-wrapper\" (click)=\"openFullscreen()\">\n\n                        <!-- <img class=\"swiper-slide\"\n                            src=\"https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80\"\n                            alt=\"\">\n\n\n                        <img class=\"swiper-slide\"\n                            src=\"https://images.unsplash.com/photo-1560146491-bb9556272788?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80\"\n                            alt=\"\"> -->\n\n\n                        <video autoplay loop class=\"swiper-slide\"\n                            src=\"https://giant.gfycat.com/FaroffAptBrahmanbull.webm\"></video>\n\n                        <video loop class=\"swiper-slide\"\n                            src=\"https://giant.gfycat.com/BlushingWelloffLeonberger.webm\"></video>\n\n                        <video loop class=\"swiper-slide\"\n                            src=\"https://giant.gfycat.com/WealthyBogusCrocodileskink.webm\"></video>\n\n                        <video loop class=\"swiper-slide\"\n                            src=\"https://thumbs.gfycat.com/SnivelingCompassionateBaleenwhale-mobile.mp4\"></video>\n\n                        <video loop class=\"swiper-slide\"\n                            src=\"https://giant.gfycat.com/WindingScrawnyFritillarybutterfly.webm\"></video>\n\n                        <video loop class=\"swiper-slide\"\n                            src=\"https://giant.gfycat.com/MistyImaginativeCow.webm\"></video>\n\n                    </div>\n\n                    <!-- <div class=\"swiper-scrollbar\"></div> -->\n                    <div class=\"swiper-pagination\"></div>\n\n\n                </div>\n            </ng-template>\n\n        </div>\n    </div>\n    <form class=\"comment-form\" (click)=\"openCommentSection()\">\n\n        <mat-form-field class=\"example-full-width\">\n            <textarea matInput placeholder=\"Leave a comment\"></textarea>\n        </mat-form-field>\n    </form>\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/post-detail/rating/rating.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/post-detail/rating/rating.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button class=\"star\" [color]=\"color\" *ngFor=\"let ratingId of ratingArr;index as i\" [id]=\"'star_'+i\"\n    (click)=\"onClick(i+1)\" [matTooltip]=\"ratingId+1\" matTooltipPosition=\"above\">\n    <mat-icon>\n        {{showIcon(i)}}\n    </mat-icon>\n</button>"

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
/* harmony import */ var _components_post_detail_post_detail_review_post_detail_review_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/post-detail/post-detail-review/post-detail-review.component */ "./src/app/components/post-detail/post-detail-review/post-detail-review.component.ts");
/* harmony import */ var _components_post_detail_post_detail_summary_post_detail_summary_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/post-detail/post-detail-summary/post-detail-summary.component */ "./src/app/components/post-detail/post-detail-summary/post-detail-summary.component.ts");
















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
    {
        path: 'post/:_id', component: _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_11__["PostDetailComponent"], children: [
            { path: 'review', component: _components_post_detail_post_detail_review_post_detail_review_component__WEBPACK_IMPORTED_MODULE_14__["PostDetailReviewComponent"] },
            { path: 'summary', component: _components_post_detail_post_detail_summary_post_detail_summary_component__WEBPACK_IMPORTED_MODULE_15__["PostDetailSummaryComponent"] }
        ]
    }
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

module.exports = ":host {\n  box-sizing: border-box;\n  display: block;\n  height: 100%;\n}\n\n.mat-tab-body {\n  width: 100vw;\n}\n\n#app-tab-group {\n  z-index: 99;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\n}\n\n.mat-toolbar {\n  z-index: 99;\n  position: fixed;\n  top: 0;\n  background-color: #fff;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\n}\n\n.logo {\n  margin: auto;\n}\n\n.logo h1 {\n  -webkit-user-select: none;\n  /* Safari */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* IE10+/Edge */\n  user-select: none;\n  /* Standard */\n}\n\n#left-nav-btn {\n  position: absolute;\n  left: 16px;\n}\n\nh1 {\n  font-family: \"EB Garamond\", serif;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHdvcmtzcGFjZVxcYXJrXFxjbGllbnQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBRE1BO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDBDQUFBO0FDSEo7O0FEZ0JBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtBQ2JKOztBRGlCQTtFQUNFLFlBQUE7QUNkRjs7QURlRTtFQUNFLHlCQUFBO0VBQTJCLFdBQUE7RUFDL0Isc0JBQUE7RUFBd0IsWUFBQTtFQUN4QixxQkFBQTtFQUF1QixlQUFBO0VBQ3ZCLGlCQUFBO0VBQW1CLGFBQUE7QUNUbkI7O0FEYUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNWRjs7QURhQTtFQUNFLGlDQUFBO0VBQ0EsaUJBQUE7QUNWRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbi5tYXQtdGFiLWJvZHkge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gIFxyXG59XHJcblxyXG4jYXBwLXRhYi1ncm91cHtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwwLDAsMC4xKTtcclxuICB9XHJcbiAgLy8gI3RhYi1ncm91cCBtYXQtdGFiLWJvZHkge1xyXG4gIC8vICAgZmxleC1ncm93OiAxO1xyXG4gIC8vIH1cclxuXHJcbi8vIC5tYXQtdGFiLWxhYmVsIHtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgICY6aG92ZXIge1xyXG4vLyAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLm1hdC10b29sYmFyIHtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuXHJcbi5sb2dvIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgaDEge1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovICAgICAgICBcclxuLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xyXG4tbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFMTArL0VkZ2UgKi9cclxudXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkICovXHJcbiAgfVxyXG59XHJcblxyXG4jbGVmdC1uYXYtYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTZweDtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnRUIgR2FyYW1vbmQnLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufSIsIjpob3N0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1hdC10YWItYm9keSB7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuI2FwcC10YWItZ3JvdXAge1xuICB6LWluZGV4OiA5OTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5tYXQtdG9vbGJhciB7XG4gIHotaW5kZXg6IDk5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5sb2dvIGgxIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogU2FmYXJpICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBJRTEwKy9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAvKiBTdGFuZGFyZCAqL1xufVxuXG4jbGVmdC1uYXYtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNnB4O1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkVCIEdhcmFtb25kXCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

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
/* harmony import */ var _components_post_detail_rating_rating_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/post-detail/rating/rating.component */ "./src/app/components/post-detail/rating/rating.component.ts");
/* harmony import */ var _components_post_detail_post_detail_review_post_detail_review_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/post-detail/post-detail-review/post-detail-review.component */ "./src/app/components/post-detail/post-detail-review/post-detail-review.component.ts");
/* harmony import */ var _components_post_detail_post_detail_summary_post_detail_summary_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/post-detail/post-detail-summary/post-detail-summary.component */ "./src/app/components/post-detail/post-detail-summary/post-detail-summary.component.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
































const DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 1
};
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
            _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_25__["CommentComponent"],
            _components_post_detail_rating_rating_component__WEBPACK_IMPORTED_MODULE_27__["RatingComponent"],
            _components_post_detail_post_detail_review_post_detail_review_component__WEBPACK_IMPORTED_MODULE_28__["PostDetailReviewComponent"],
            _components_post_detail_post_detail_summary_post_detail_summary_component__WEBPACK_IMPORTED_MODULE_29__["PostDetailSummaryComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _modules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_30__["SwiperModule"]
        ],
        providers: [_services_post_service__WEBPACK_IMPORTED_MODULE_14__["PostService"], {
                provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_30__["SWIPER_CONFIG"],
                useValue: DEFAULT_SWIPER_CONFIG
            }],
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm90dG9tc2hlZXQvYm90dG9tc2hlZXQuY29tcG9uZW50LnNjc3MifQ== */"

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

module.exports = ".comment-section-container {\n  height: 50vh;\n}\n.comment-section-container .comments {\n  height: calc(100% - 40px);\n  overflow-y: scroll;\n}\n.comment-section-container .comments::after {\n  overflow: hidden;\n  pointer-events: none;\n  content: \"\";\n  z-index: 99;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: linear-gradient(0deg, white 0%, rgba(9, 9, 121, 0) 30%, rgba(0, 212, 255, 0) 100%);\n  width: 100%;\n  height: calc(100% - 48px);\n}\n.comment-section-container .comments .comment-container {\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.comment-section-container .comments .comment-container .avatar {\n  height: 40px;\n  width: 40px;\n  overflow: hidden;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n.comment-section-container .comments .comment-container .comment-content {\n  margin-left: 16px;\n  display: flex;\n  flex-direction: column;\n}\n.comment-section-container .comments .comment-container .comment-content .username {\n  margin: 0;\n}\n.comment-section-container .comments .comment-container .comment-content .comment {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n.comment-section-container .comments .comment-container .comment-content .comment::before {\n  content: '\"';\n}\n.comment-section-container .comments .comment-container .comment-content .comment::after {\n  content: '\"';\n}\n.comment-section-container .comments .comment-container .comment-content .time {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 10px;\n}\n.profile-picture {\n  height: 50px;\n  width: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n#comment-input {\n  padding: 0;\n}\ntextarea {\n  padding: 16px;\n  height: 48px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50L0M6XFx3b3Jrc3BhY2VcXGFya1xcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb21tZW50XFxjb21tZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjtBREFJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQ0VSO0FERFE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSw4RkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0daO0FERFE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7QUNHWjtBREZZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQ0loQjtBREZZO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNJaEI7QURIZ0I7RUFDSSxTQUFBO0FDS3BCO0FESGdCO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0twQjtBREpvQjtFQUNJLFlBQUE7QUNNeEI7QURKb0I7RUFDSSxZQUFBO0FDTXhCO0FESGdCO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0twQjtBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENBO0VBQ0ksVUFBQTtBQ0VKO0FEQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQtc2VjdGlvbi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgLmNvbW1lbnRzIHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDksOSwxMjEsMCkgMzAlLCByZ2JhKDAsMjEyLDI1NSwwKSAxMDAlKTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDhweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb21tZW50LWNvbnRhaW5lcntcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMDUpO1xyXG4gICAgICAgICAgICAuYXZhdGFye1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbW1lbnQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgLnVzZXJuYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXCInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1wiJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50aW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLnByb2ZpbGUtcGljdHVyZSB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiNjb21tZW50LWlucHV0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxudGV4dGFyZWEge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIi5jb21tZW50LXNlY3Rpb24tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1MHZoO1xufVxuLmNvbW1lbnQtc2VjdGlvbi1jb250YWluZXIgLmNvbW1lbnRzIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmNvbW1lbnQtc2VjdGlvbi1jb250YWluZXIgLmNvbW1lbnRzOjphZnRlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb250ZW50OiBcIlwiO1xuICB6LWluZGV4OiA5OTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCB3aGl0ZSAwJSwgcmdiYSg5LCA5LCAxMjEsIDApIDMwJSwgcmdiYSgwLCAyMTIsIDI1NSwgMCkgMTAwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ4cHgpO1xufVxuLmNvbW1lbnQtc2VjdGlvbi1jb250YWluZXIgLmNvbW1lbnRzIC5jb21tZW50LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuLmNvbW1lbnQtc2VjdGlvbi1jb250YWluZXIgLmNvbW1lbnRzIC5jb21tZW50LWNvbnRhaW5lciAuYXZhdGFyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jb21tZW50LXNlY3Rpb24tY29udGFpbmVyIC5jb21tZW50cyAuY29tbWVudC1jb250YWluZXIgLmNvbW1lbnQtY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbW1lbnQtc2VjdGlvbi1jb250YWluZXIgLmNvbW1lbnRzIC5jb21tZW50LWNvbnRhaW5lciAuY29tbWVudC1jb250ZW50IC51c2VybmFtZSB7XG4gIG1hcmdpbjogMDtcbn1cbi5jb21tZW50LXNlY3Rpb24tY29udGFpbmVyIC5jb21tZW50cyAuY29tbWVudC1jb250YWluZXIgLmNvbW1lbnQtY29udGVudCAuY29tbWVudCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb21tZW50LXNlY3Rpb24tY29udGFpbmVyIC5jb21tZW50cyAuY29tbWVudC1jb250YWluZXIgLmNvbW1lbnQtY29udGVudCAuY29tbWVudDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1wiJztcbn1cbi5jb21tZW50LXNlY3Rpb24tY29udGFpbmVyIC5jb21tZW50cyAuY29tbWVudC1jb250YWluZXIgLmNvbW1lbnQtY29udGVudCAuY29tbWVudDo6YWZ0ZXIge1xuICBjb250ZW50OiAnXCInO1xufVxuLmNvbW1lbnQtc2VjdGlvbi1jb250YWluZXIgLmNvbW1lbnRzIC5jb21tZW50LWNvbnRhaW5lciAuY29tbWVudC1jb250ZW50IC50aW1lIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ucHJvZmlsZS1waWN0dXJlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuI2NvbW1lbnQtaW5wdXQge1xuICBwYWRkaW5nOiAwO1xufVxuXG50ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzY292ZXIvZGlzY292ZXIuY29tcG9uZW50LnNjc3MifQ== */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuc2NzcyJ9 */"

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

module.exports = "mat-icon {\n  vertical-align: middle;\n}\n\n::ng-deep .mat-form-field-underline {\n  display: none;\n}\n\nmat-form-field {\n  position: absolute;\n  top: -4px;\n}\n\nbutton {\n  width: 100%;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2ZlZWQvQzpcXHdvcmtzcGFjZVxcYXJrXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGZlZWRcXGZlZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9mZWVkL2ZlZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVFO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDQ047O0FERUU7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9mZWVkL2ZlZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtaWNvbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTRweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH0iLCJtYXQtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"

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

module.exports = ".mat-tab-group {\n  background-color: #fff;\n  border: none;\n}\n\n.mat-tab-header {\n  border: none;\n  opacity: 0;\n}\n\n.mat-tab-body-wrapper {\n  background-color: #f5f5f5;\n}\n\n.mat-tab-list {\n  position: fixed;\n  top: 0;\n  left: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFx3b3Jrc3BhY2VcXGFya1xcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWItZ3JvdXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm1hdC10YWItaGVhZGVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWJvZHktd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4ubWF0LXRhYi1saXN0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDogMTAwcHg7XHJcbn0iLCIubWF0LXRhYi1ncm91cCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm1hdC10YWItaGVhZGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4ubWF0LXRhYi1saXN0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDEwMHB4O1xufSJdfQ== */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9wb3B1bGFyL3BvcHVsYXIuY29tcG9uZW50LnNjc3MifQ== */"

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

module.exports = "chat-chats-sidenav .sidenav-content .chat-list .contact, chat-chats-sidenav .sidenav-content .contact-list .contact {\n  white-space: normal;\n  text-align: left;\n  letter-spacing: 0.01em;\n  min-height: 88px;\n  border-bottom: 1px solid;\n  padding: 16px;\n  font-weight: 400;\n  border-radius: 0;\n}\n\n.avatar {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nbutton {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXNzYWdlcy9DOlxcd29ya3NwYWNlXFxhcmtcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWVzc2FnZXNcXG1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjaGF0LWNoYXRzLXNpZGVuYXYgLnNpZGVuYXYtY29udGVudCAuY2hhdC1saXN0IC5jb250YWN0LCBjaGF0LWNoYXRzLXNpZGVuYXYgLnNpZGVuYXYtY29udGVudCAuY29udGFjdC1saXN0IC5jb250YWN0IHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMWVtO1xyXG4gICAgbWluLWhlaWdodDogODhweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgICB3aWR0aDogNzJweDtcclxuICAgIGhlaWdodDogNzJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufSIsImNoYXQtY2hhdHMtc2lkZW5hdiAuc2lkZW5hdi1jb250ZW50IC5jaGF0LWxpc3QgLmNvbnRhY3QsIGNoYXQtY2hhdHMtc2lkZW5hdiAuc2lkZW5hdi1jb250ZW50IC5jb250YWN0LWxpc3QgLmNvbnRhY3Qge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBtaW4taGVpZ2h0OiA4OHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5hdmF0YXIge1xuICB3aWR0aDogNzJweDtcbiAgaGVpZ2h0OiA3MnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufSJdfQ== */"

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

/***/ "./src/app/components/post-detail/post-detail-review/post-detail-review.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/post-detail/post-detail-review/post-detail-review.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1kZXRhaWwvcG9zdC1kZXRhaWwtcmV2aWV3L3Bvc3QtZGV0YWlsLXJldmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/post-detail/post-detail-review/post-detail-review.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/post-detail/post-detail-review/post-detail-review.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PostDetailReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailReviewComponent", function() { return PostDetailReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostDetailReviewComponent = class PostDetailReviewComponent {
    constructor() { }
    ngOnInit() {
    }
};
PostDetailReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-detail-review',
        template: __webpack_require__(/*! raw-loader!./post-detail-review.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/post-detail/post-detail-review/post-detail-review.component.html"),
        styles: [__webpack_require__(/*! ./post-detail-review.component.scss */ "./src/app/components/post-detail/post-detail-review/post-detail-review.component.scss")]
    })
], PostDetailReviewComponent);



/***/ }),

/***/ "./src/app/components/post-detail/post-detail-summary/post-detail-summary.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/post-detail/post-detail-summary/post-detail-summary.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1kZXRhaWwvcG9zdC1kZXRhaWwtc3VtbWFyeS9wb3N0LWRldGFpbC1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/post-detail/post-detail-summary/post-detail-summary.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/post-detail/post-detail-summary/post-detail-summary.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PostDetailSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailSummaryComponent", function() { return PostDetailSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostDetailSummaryComponent = class PostDetailSummaryComponent {
    constructor() { }
    ngOnInit() {
    }
};
PostDetailSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-detail-summary',
        template: __webpack_require__(/*! raw-loader!./post-detail-summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/post-detail/post-detail-summary/post-detail-summary.component.html"),
        styles: [__webpack_require__(/*! ./post-detail-summary.component.scss */ "./src/app/components/post-detail/post-detail-summary/post-detail-summary.component.scss")]
    })
], PostDetailSummaryComponent);



/***/ }),

/***/ "./src/app/components/post-detail/post-detail.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/post-detail/post-detail.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Swiper 4.5.0\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2019 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: February 22, 2019\n */\n.swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}\n.swiper-container-no-flexbox .swiper-slide{float:left}\n.swiper-container-vertical>.swiper-wrapper{flex-direction:column}\n.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}\n.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translate3d(0,0,0)}\n.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}\n.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}\n.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}\n.swiper-slide-invisible-blank{visibility:hidden}\n.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}\n.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}\n.swiper-container-3d{perspective:1200px}\n.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}\n.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}\n.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{touch-action:pan-y}\n.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{touch-action:pan-x}\n.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}\n.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}\n.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}\n.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}\n.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-lock{display:none}\n.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}\n.swiper-pagination.swiper-pagination-hidden{opacity:0}\n.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}\n.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}\n.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}\nbutton.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}\n.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}\n.swiper-pagination-bullet-active{opacity:1;background:#007aff}\n.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}\n.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s top,.2s -webkit-transform;transition:.2s transform,.2s top;transition:.2s transform,.2s top,.2s -webkit-transform}\n.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s left,.2s -webkit-transform;transition:.2s transform,.2s left;transition:.2s transform,.2s left,.2s -webkit-transform}\n.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s right,.2s -webkit-transform;transition:.2s transform,.2s right;transition:.2s transform,.2s right,.2s -webkit-transform}\n.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}\n.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}\n.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}\n.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}\n.swiper-pagination-progressbar.swiper-pagination-white{background:rgba(255,255,255,.25)}\n.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}\n.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}\n.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}\n.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}\n.swiper-pagination-lock{display:none}\n.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}\n.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}\n.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}\n.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}\n.swiper-scrollbar-cursor-drag{cursor:move}\n.swiper-scrollbar-lock{display:none}\n.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}\n.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}\n.swiper-slide-zoomed{cursor:move}\n.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}\n.swiper-lazy-preloader:after{display:block;content:'';width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}\n.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}\n@-webkit-keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}\n@keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}\n.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}\n.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}\n.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}\n.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-cube{overflow:visible}\n.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}\n.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}\n.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}\n.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}\n.swiper-container-flip{overflow:visible}\n.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}\n.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}\n#post-cover-img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n.page-container {\n  background-color: #f5f5f5;\n  padding-bottom: 100px;\n}\n#post-detail-container {\n  padding: 0;\n}\n.white-bg {\n  background-color: #fff;\n  padding: 16px !important;\n}\n.mat-tab-group {\n  background-color: #fff;\n  border: none;\n}\n.mat-tab-header {\n  border: none;\n  opacity: 0;\n}\n.mat-tab-body-wrapper {\n  background-color: #fff;\n}\n.mat-tab-list {\n  position: fixed;\n  top: 0;\n  left: 100px;\n}\n.book-cover {\n  transform: translateY(-100px);\n  width: 25% !important;\n  margin-left: 16px;\n}\n#cover-footer {\n  position: relative;\n  height: 74px;\n}\n#media-details {\n  width: 60%;\n  position: absolute;\n  right: 16px;\n  top: 8px;\n}\n#media-title {\n  margin-top: -4px;\n  margin-bottom: 0px;\n}\nh5 {\n  margin: 0;\n  margin-bottom: 16px;\n}\n.move-down {\n  margin-top: 8px;\n}\n#post-bg {\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nmat-card {\n  border-radius: 0px;\n  border-bottom: 1px solid #ccc;\n  box-shadow: none !important;\n}\nh1 {\n  margin-top: 0;\n}\n.no-padding {\n  padding: 0px !important;\n}\n.swiper-container {\n  height: 200px;\n  border-radius: 16px;\n}\n.swiper-container img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.swiper-container video {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.swiper-pagination {\n  z-index: 99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zd2lwZXIvZGlzdC9jc3Mvc3dpcGVyLm1pbi5jc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1kZXRhaWwvQzpcXHdvcmtzcGFjZVxcYXJrXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBvc3QtZGV0YWlsXFxwb3N0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3N0LWRldGFpbC9wb3N0LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztFQVVFO0FBQ0Ysa0JBQWtCLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxTQUFTO0FBQUMsMkNBQTJDLFVBQVU7QUFBQywyQ0FBNEoscUJBQXFCO0FBQUMsZ0JBQWdCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUE4RCxZQUFZLENBQXNILDZCQUE2QixDQUFnRixzQkFBc0I7QUFBQyx3REFBNkYsNEJBQTRCO0FBQUMsMkNBQXFGLGNBQWM7QUFBQyw0Q0FBK0gsbUNBQW1DLENBQUMsYUFBYTtBQUFDLGNBQXdELGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFzSCw2QkFBNkU7QUFBQyw4QkFBOEIsaUJBQWlCO0FBQUMsd0VBQXdFLFdBQVc7QUFBQyw2Q0FBeUgsc0JBQXNCLENBQTJJLG9DQUEyRjtBQUFDLHFCQUFnRCxrQkFBa0I7QUFBQywrU0FBbVYsMkJBQTJCO0FBQUMsOExBQThMLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVO0FBQUMsK0NBQXdTLHNFQUFzRTtBQUFDLGdEQUF1Uyx1RUFBdUU7QUFBQyw4Q0FBMlMscUVBQXFFO0FBQUMsaURBQXdTLHdFQUF3RTtBQUFDLGtGQUF5RyxrQkFBa0I7QUFBQyw4RUFBcUcsa0JBQWtCO0FBQUMsd0NBQXdDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsMEJBQTBCLENBQUMsMkJBQTJCO0FBQUMsc0ZBQXNGLFdBQVcsQ0FBQyxXQUFXLENBQUMsbUJBQW1CO0FBQUMsOERBQThELG1SQUFtUixDQUFDLFNBQVMsQ0FBQyxVQUFVO0FBQUMsOERBQThELG1SQUFtUixDQUFDLFVBQVUsQ0FBQyxTQUFTO0FBQUMsc0dBQXNHLG1SQUFtUjtBQUFDLHNHQUFzRyxtUkFBbVI7QUFBQyxzR0FBc0csbVJBQW1SO0FBQUMsc0dBQXNHLG1SQUFtUjtBQUFDLG9CQUFvQixZQUFZO0FBQUMsbUJBQW1CLGlCQUFpQixDQUFDLGlCQUFpQixDQUEwRCxzQkFBc0IsQ0FBc0MsNEJBQTRCLENBQUMsVUFBVTtBQUFDLDRDQUE0QyxTQUFTO0FBQUMsOEdBQThHLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVTtBQUFDLG1DQUFtQyxlQUFlLENBQUMsV0FBVztBQUFDLDZEQUFtSCxvQkFBb0IsQ0FBQyxpQkFBaUI7QUFBQyxvRUFBc0gsa0JBQWtCO0FBQUMseUVBQTJILGtCQUFrQjtBQUFDLHlFQUErSCxvQkFBb0I7QUFBQyw4RUFBb0ksb0JBQW9CO0FBQUMseUVBQStILG9CQUFvQjtBQUFDLDhFQUFvSSxvQkFBb0I7QUFBQywwQkFBMEIsU0FBUyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsVUFBVTtBQUFDLGdDQUFnQyxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBeUIsZUFBZSxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixDQUFDLGVBQWU7QUFBQyx1REFBdUQsY0FBYztBQUFDLGlDQUFpQyxTQUFTLENBQUMsa0JBQWtCO0FBQUMsc0RBQXNELFVBQVUsQ0FBQyxPQUFPLENBQXlDLCtCQUErQjtBQUFDLGdGQUFnRixZQUFZLENBQUMsYUFBYTtBQUFDLHdGQUF3RixPQUFPLENBQW1FLDBCQUEwQixDQUFDLFNBQVM7QUFBQyxrSEFBa0gsb0JBQW9CLENBQWtELHdDQUF3QyxDQUFxQyxnQ0FBZ0MsQ0FBQyxzREFBc0Q7QUFBQyxrRkFBa0YsWUFBWTtBQUFDLDBGQUEwRixRQUFRLENBQW1FLDBCQUEwQixDQUFDLGtCQUFrQjtBQUFDLG9IQUFzSyx5Q0FBeUMsQ0FBc0MsaUNBQWlDLENBQUMsdURBQXVEO0FBQUMsK0dBQWtLLDBDQUEwQyxDQUF1QyxrQ0FBa0MsQ0FBQyx3REFBd0Q7QUFBQywrQkFBK0IsMEJBQTBCLENBQUMsaUJBQWlCO0FBQUMsbUVBQW1FLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBbUQsa0JBQWtCLENBQWlFLHlCQUF5QjtBQUFDLHlGQUEySiwwQkFBMEI7QUFBQyw2SkFBNkosVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSztBQUFDLDZKQUE2SixTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLO0FBQUMsMERBQTBELGVBQWU7QUFBQyx1REFBdUQsZ0NBQWdDO0FBQUMsMkZBQTJGLGVBQWU7QUFBQywwREFBMEQsZUFBZTtBQUFDLHVEQUF1RCwwQkFBMEI7QUFBQywyRkFBMkYsZUFBZTtBQUFDLHdCQUF3QixZQUFZO0FBQUMsa0JBQWtCLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLHlCQUF5QjtBQUFDLCtDQUErQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUztBQUFDLDZDQUE2QyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVTtBQUFDLHVCQUF1QixXQUFXLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLO0FBQUMsOEJBQThCLFdBQVc7QUFBQyx1QkFBdUIsWUFBWTtBQUFDLHVCQUF1QixVQUFVLENBQUMsV0FBVyxDQUE4RCxZQUFZLENBQTZFLHNCQUFzQixDQUEyRSxrQkFBa0IsQ0FBQyxpQkFBaUI7QUFBQyxvRkFBb0YsY0FBYyxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0I7QUFBQyxxQkFBcUIsV0FBVztBQUFDLHVCQUF1QixVQUFVLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUF1RCxvQkFBb0IsQ0FBQyxpRUFBaUUsQ0FBQyx5REFBeUQ7QUFBQyw2QkFBNkIsYUFBYSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLHc3Q0FBdzdDLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQUMsMkJBQTJCO0FBQUMsbUNBQW1DLHE3Q0FBcTdDO0FBQUMseUNBQXlDLEtBQXNDLHdCQUF3QixDQUFDO0FBQUMsaUNBQWlDLEtBQXNDLHdCQUF3QixDQUFDO0FBQUMsdUNBQXVDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLGFBQWE7QUFBQyxnRUFBbUosbUNBQW1DO0FBQUMscUNBQXFDLG1CQUFtQixDQUFvRSwyQkFBMkI7QUFBQyxtREFBbUQsbUJBQW1CO0FBQUMsNkdBQTZHLG1CQUFtQjtBQUFDLHVCQUF1QixnQkFBZ0I7QUFBQyxxQ0FBcUMsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUF1RCxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsV0FBVztBQUFDLG1EQUFtRCxtQkFBbUI7QUFBQywwREFBc0gsdUJBQXVCO0FBQUMsNkdBQTZHLG1CQUFtQjtBQUFDLHdMQUF3TCxtQkFBbUIsQ0FBQyxrQkFBa0I7QUFBQyxzTUFBc00sU0FBUyxDQUFDLGtDQUFrQyxDQUFDLDBCQUEwQjtBQUFDLDJDQUEyQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTO0FBQUMsdUJBQXVCLGdCQUFnQjtBQUFDLHFDQUFxQyxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQywwQkFBMEIsQ0FBQyxTQUFTO0FBQUMsbURBQW1ELG1CQUFtQjtBQUFDLDZHQUE2RyxtQkFBbUI7QUFBQyxzTUFBc00sU0FBUyxDQUFDLGtDQUFrQyxDQUFDLDBCQUEwQjtBQUFDLDRDQUE0QyxzQkFBc0I7QUNWdmptQjtFQUVJLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsMENBQUE7QUNBSjtBREVBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQ0NKO0FERUE7RUFDSSxVQUFBO0FDQ0o7QURFQTtFQUNJLHNCQUFBO0VBQ0Esd0JBQUE7QUNDSjtBREVBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FDQ0o7QURFQTtFQUNJLHNCQUFBO0FDQ0o7QURFQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQ0NKO0FESUE7RUFDSSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNESjtBRElBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDREo7QURJQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDREo7QURJQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElBO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0FDREo7QURJQTtFQUNJLGVBQUE7QUNESjtBRElBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNESjtBRElBO0VBQ00sa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FDRE47QURJSTtFQUNJLGFBQUE7QUNEUjtBRElBO0VBQ0ksdUJBQUE7QUNESjtBRE1BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDSEo7QURJSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0ZSO0FESUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNGUjtBRE1BO0VBQ0ksV0FBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3N0LWRldGFpbC9wb3N0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3dpcGVyIDQuNS4wXG4gKiBNb3N0IG1vZGVybiBtb2JpbGUgdG91Y2ggc2xpZGVyIGFuZCBmcmFtZXdvcmsgd2l0aCBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9uc1xuICogaHR0cDovL3d3dy5pZGFuZ2Vyby51cy9zd2lwZXIvXG4gKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxOSBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICpcbiAqIFJlbGVhc2VkIG9uOiBGZWJydWFyeSAyMiwgMjAxOVxuICovXG4uc3dpcGVyLWNvbnRhaW5lcnttYXJnaW46MCBhdXRvO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjtsaXN0LXN0eWxlOm5vbmU7cGFkZGluZzowO3otaW5kZXg6MX0uc3dpcGVyLWNvbnRhaW5lci1uby1mbGV4Ym94IC5zd2lwZXItc2xpZGV7ZmxvYXQ6bGVmdH0uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXJ7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LnN3aXBlci13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDoxO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5Oi13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6LXdlYmtpdC10cmFuc2Zvcm07LW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sLXdlYmtpdC10cmFuc2Zvcm07LXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3h9LnN3aXBlci1jb250YWluZXItYW5kcm9pZCAuc3dpcGVyLXNsaWRlLC5zd2lwZXItd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKX0uc3dpcGVyLWNvbnRhaW5lci1tdWx0aXJvdz4uc3dpcGVyLXdyYXBwZXJ7LXdlYmtpdC1mbGV4LXdyYXA6d3JhcDstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXB9LnN3aXBlci1jb250YWluZXItZnJlZS1tb2RlPi5zd2lwZXItd3JhcHBlcnstd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0Oy1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O21hcmdpbjowIGF1dG99LnN3aXBlci1zbGlkZXstd2Via2l0LWZsZXgtc2hyaW5rOjA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5Oi13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6LXdlYmtpdC10cmFuc2Zvcm07LW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sLXdlYmtpdC10cmFuc2Zvcm19LnN3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmt7dmlzaWJpbGl0eTpoaWRkZW59LnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCwuc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0IC5zd2lwZXItc2xpZGV7aGVpZ2h0OmF1dG99LnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCAuc3dpcGVyLXdyYXBwZXJ7LXdlYmtpdC1ib3gtYWxpZ246c3RhcnQ7LXdlYmtpdC1hbGlnbi1pdGVtczpmbGV4LXN0YXJ0Oy1tcy1mbGV4LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OmhlaWdodCwtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OmhlaWdodCwtd2Via2l0LXRyYW5zZm9ybTstby10cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSxoZWlnaHQ7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0saGVpZ2h0O3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLGhlaWdodCwtd2Via2l0LXRyYW5zZm9ybX0uc3dpcGVyLWNvbnRhaW5lci0zZHstd2Via2l0LXBlcnNwZWN0aXZlOjEyMDBweDtwZXJzcGVjdGl2ZToxMjAwcHh9LnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1jdWJlLXNoYWRvdywuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7dHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkfS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LC5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6MTB9LnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdHtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLHJpZ2h0IHRvcCxsZWZ0IHRvcCxmcm9tKHJnYmEoMCwwLDAsLjUpKSx0byhyZ2JhKDAsMCwwLDApKSk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChyaWdodCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKTtiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudChyaWdodCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0LHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpfS5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0e2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AscmlnaHQgdG9wLGZyb20ocmdiYSgwLDAsMCwuNSkpLHRvKHJnYmEoMCwwLDAsMCkpKTtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQobGVmdCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3B7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IGJvdHRvbSxsZWZ0IHRvcCxmcm9tKHJnYmEoMCwwLDAsLjUpKSx0byhyZ2JhKDAsMCwwLDApKSk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudChib3R0b20scmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQoYm90dG9tLHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHRvcCxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b217YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxsZWZ0IGJvdHRvbSxmcm9tKHJnYmEoMCwwLDAsLjUpKSx0byhyZ2JhKDAsMCwwLDApKSk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AscmdiYSgwLDAsMCwuNSkscmdiYSgwLDAsMCwwKSk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQodG9wLHJnYmEoMCwwLDAsLjUpLHJnYmEoMCwwLDAsMCkpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxyZ2JhKDAsMCwwLC41KSxyZ2JhKDAsMCwwLDApKX0uc3dpcGVyLWNvbnRhaW5lci13cDgtaG9yaXpvbnRhbCwuc3dpcGVyLWNvbnRhaW5lci13cDgtaG9yaXpvbnRhbD4uc3dpcGVyLXdyYXBwZXJ7LW1zLXRvdWNoLWFjdGlvbjpwYW4teTt0b3VjaC1hY3Rpb246cGFuLXl9LnN3aXBlci1jb250YWluZXItd3A4LXZlcnRpY2FsLC5zd2lwZXItY29udGFpbmVyLXdwOC12ZXJ0aWNhbD4uc3dpcGVyLXdyYXBwZXJ7LW1zLXRvdWNoLWFjdGlvbjpwYW4teDt0b3VjaC1hY3Rpb246cGFuLXh9LnN3aXBlci1idXR0b24tbmV4dCwuc3dpcGVyLWJ1dHRvbi1wcmV2e3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7d2lkdGg6MjdweDtoZWlnaHQ6NDRweDttYXJnaW4tdG9wOi0yMnB4O3otaW5kZXg6MTA7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1zaXplOjI3cHggNDRweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXR9LnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWRpc2FibGVkLC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZHtvcGFjaXR5Oi4zNTtjdXJzb3I6YXV0bztwb2ludGVyLWV2ZW50czpub25lfS5zd2lwZXItYnV0dG9uLXByZXYsLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHR7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIwdmlld0JveCUzRCcwJTIwMCUyMDI3JTIwNDQnJTNFJTNDcGF0aCUyMGQlM0QnTTAlMkMyMkwyMiUyQzBsMi4xJTJDMi4xTDQuMiUyQzIybDE5LjklMkMxOS45TDIyJTJDNDRMMCUyQzIyTDAlMkMyMkwwJTJDMjJ6JyUyMGZpbGwlM0QnJTIzMDA3YWZmJyUyRiUzRSUzQyUyRnN2ZyUzRVwiKTtsZWZ0OjEwcHg7cmlnaHQ6YXV0b30uc3dpcGVyLWJ1dHRvbi1uZXh0LC5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1wcmV2e2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00yNyUyQzIyTDI3JTJDMjJMNSUyQzQ0bC0yLjEtMi4xTDIyLjglMkMyMkwyLjklMkMyLjFMNSUyQzBMMjclMkMyMkwyNyUyQzIyeiclMjBmaWxsJTNEJyUyMzAwN2FmZiclMkYlM0UlM0MlMkZzdmclM0VcIik7cmlnaHQ6MTBweDtsZWZ0OmF1dG99LnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLXdoaXRlLC5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24td2hpdGV7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIwdmlld0JveCUzRCcwJTIwMCUyMDI3JTIwNDQnJTNFJTNDcGF0aCUyMGQlM0QnTTAlMkMyMkwyMiUyQzBsMi4xJTJDMi4xTDQuMiUyQzIybDE5LjklMkMxOS45TDIyJTJDNDRMMCUyQzIyTDAlMkMyMkwwJTJDMjJ6JyUyMGZpbGwlM0QnJTIzZmZmZmZmJyUyRiUzRSUzQyUyRnN2ZyUzRVwiKX0uc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24td2hpdGUsLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi13aGl0ZXtiYWNrZ3JvdW5kLWltYWdlOnVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjB2aWV3Qm94JTNEJzAlMjAwJTIwMjclMjA0NCclM0UlM0NwYXRoJTIwZCUzRCdNMjclMkMyMkwyNyUyQzIyTDUlMkM0NGwtMi4xLTIuMUwyMi44JTJDMjJMMi45JTJDMi4xTDUlMkMwTDI3JTJDMjJMMjclMkMyMnonJTIwZmlsbCUzRCclMjNmZmZmZmYnJTJGJTNFJTNDJTJGc3ZnJTNFXCIpfS5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1ibGFjaywuc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWJsYWNre2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00wJTJDMjJMMjIlMkMwbDIuMSUyQzIuMUw0LjIlMkMyMmwxOS45JTJDMTkuOUwyMiUyQzQ0TDAlMkMyMkwwJTJDMjJMMCUyQzIyeiclMjBmaWxsJTNEJyUyMzAwMDAwMCclMkYlM0UlM0MlMkZzdmclM0VcIil9LnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWJsYWNrLC5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tYmxhY2t7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIwdmlld0JveCUzRCcwJTIwMCUyMDI3JTIwNDQnJTNFJTNDcGF0aCUyMGQlM0QnTTI3JTJDMjJMMjclMkMyMkw1JTJDNDRsLTIuMS0yLjFMMjIuOCUyQzIyTDIuOSUyQzIuMUw1JTJDMEwyNyUyQzIyTDI3JTJDMjJ6JyUyMGZpbGwlM0QnJTIzMDAwMDAwJyUyRiUzRSUzQyUyRnN2ZyUzRVwiKX0uc3dpcGVyLWJ1dHRvbi1sb2Nre2Rpc3BsYXk6bm9uZX0uc3dpcGVyLXBhZ2luYXRpb257cG9zaXRpb246YWJzb2x1dGU7dGV4dC1hbGlnbjpjZW50ZXI7LXdlYmtpdC10cmFuc2l0aW9uOi4zcyBvcGFjaXR5Oy1vLXRyYW5zaXRpb246LjNzIG9wYWNpdHk7dHJhbnNpdGlvbjouM3Mgb3BhY2l0eTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt6LWluZGV4OjEwfS5zd2lwZXItcGFnaW5hdGlvbi5zd2lwZXItcGFnaW5hdGlvbi1oaWRkZW57b3BhY2l0eTowfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMsLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSwuc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb257Ym90dG9tOjEwcHg7bGVmdDowO3dpZHRoOjEwMCV9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pY3tvdmVyZmxvdzpoaWRkZW47Zm9udC1zaXplOjB9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4zMyk7LW1zLXRyYW5zZm9ybTpzY2FsZSguMzMpO3RyYW5zZm9ybTpzY2FsZSguMzMpO3Bvc2l0aW9uOnJlbGF0aXZlfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7LW1zLXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1tYWluey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpOy1tcy10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNjYpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjY2KTt0cmFuc2Zvcm06c2NhbGUoLjY2KX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLXByZXYtcHJldnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguMzMpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjMzKTt0cmFuc2Zvcm06c2NhbGUoLjMzKX0uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW5leHR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjY2KTstbXMtdHJhbnNmb3JtOnNjYWxlKC42Nik7dHJhbnNmb3JtOnNjYWxlKC42Nil9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0LW5leHR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjMzKTstbXMtdHJhbnNmb3JtOnNjYWxlKC4zMyk7dHJhbnNmb3JtOnNjYWxlKC4zMyl9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHt3aWR0aDo4cHg7aGVpZ2h0OjhweDtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOjEwMCU7YmFja2dyb3VuZDojMDAwO29wYWNpdHk6LjJ9YnV0dG9uLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHtib3JkZXI6bm9uZTttYXJnaW46MDtwYWRkaW5nOjA7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX0uc3dpcGVyLXBhZ2luYXRpb24tY2xpY2thYmxlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7Y3Vyc29yOnBvaW50ZXJ9LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmV7b3BhY2l0eToxO2JhY2tncm91bmQ6IzAwN2FmZn0uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0c3tyaWdodDoxMHB4O3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNTAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC01MCUsMCl9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHttYXJnaW46NnB4IDA7ZGlzcGxheTpibG9ja30uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWN7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt3aWR0aDo4cHh9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7ZGlzcGxheTppbmxpbmUtYmxvY2s7LXdlYmtpdC10cmFuc2l0aW9uOi4ycyB0b3AsLjJzIC13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb246LjJzIHRvcCwuMnMgLXdlYmtpdC10cmFuc2Zvcm07LW8tdHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyB0b3A7dHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyB0b3A7dHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyB0b3AsLjJzIC13ZWJraXQtdHJhbnNmb3JtfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHttYXJnaW46MCA0cHh9LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWN7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7d2hpdGUtc3BhY2U6bm93cmFwfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7LXdlYmtpdC10cmFuc2l0aW9uOi4ycyBsZWZ0LC4ycyAtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uOi4ycyBsZWZ0LC4ycyAtd2Via2l0LXRyYW5zZm9ybTstby10cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIGxlZnQ7dHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyBsZWZ0O3RyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgbGVmdCwuMnMgLXdlYmtpdC10cmFuc2Zvcm19LnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbC5zd2lwZXItY29udGFpbmVyLXJ0bD4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXR7LXdlYmtpdC10cmFuc2l0aW9uOi4ycyByaWdodCwuMnMgLXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbjouMnMgcmlnaHQsLjJzIC13ZWJraXQtdHJhbnNmb3JtOy1vLXRyYW5zaXRpb246LjJzIHRyYW5zZm9ybSwuMnMgcmlnaHQ7dHJhbnNpdGlvbjouMnMgdHJhbnNmb3JtLC4ycyByaWdodDt0cmFuc2l0aW9uOi4ycyB0cmFuc2Zvcm0sLjJzIHJpZ2h0LC4ycyAtd2Via2l0LXRyYW5zZm9ybX0uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4yNSk7cG9zaXRpb246YWJzb2x1dGV9LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxse2JhY2tncm91bmQ6IzAwN2FmZjtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTstbXMtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7LW1zLXRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcH0uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxsey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3A7LW1zLXRyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wO3RyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLC5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZXt3aWR0aDoxMDAlO2hlaWdodDo0cHg7bGVmdDowO3RvcDowfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlLC5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsPi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhcnt3aWR0aDo0cHg7aGVpZ2h0OjEwMCU7bGVmdDowO3RvcDowfS5zd2lwZXItcGFnaW5hdGlvbi13aGl0ZSAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZXtiYWNrZ3JvdW5kOiNmZmZ9LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLXdoaXRle2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuMjUpfS5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi13aGl0ZSAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbHtiYWNrZ3JvdW5kOiNmZmZ9LnN3aXBlci1wYWdpbmF0aW9uLWJsYWNrIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZle2JhY2tncm91bmQ6IzAwMH0uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tYmxhY2t7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4yNSl9LnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLWJsYWNrIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxse2JhY2tncm91bmQ6IzAwMH0uc3dpcGVyLXBhZ2luYXRpb24tbG9ja3tkaXNwbGF5Om5vbmV9LnN3aXBlci1zY3JvbGxiYXJ7Ym9yZGVyLXJhZGl1czoxMHB4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy10b3VjaC1hY3Rpb246bm9uZTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEpfS5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1zY3JvbGxiYXJ7cG9zaXRpb246YWJzb2x1dGU7bGVmdDoxJTtib3R0b206M3B4O3otaW5kZXg6NTA7aGVpZ2h0OjVweDt3aWR0aDo5OCV9LnN3aXBlci1jb250YWluZXItdmVydGljYWw+LnN3aXBlci1zY3JvbGxiYXJ7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6M3B4O3RvcDoxJTt6LWluZGV4OjUwO3dpZHRoOjVweDtoZWlnaHQ6OTglfS5zd2lwZXItc2Nyb2xsYmFyLWRyYWd7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjUpO2JvcmRlci1yYWRpdXM6MTBweDtsZWZ0OjA7dG9wOjB9LnN3aXBlci1zY3JvbGxiYXItY3Vyc29yLWRyYWd7Y3Vyc29yOm1vdmV9LnN3aXBlci1zY3JvbGxiYXItbG9ja3tkaXNwbGF5Om5vbmV9LnN3aXBlci16b29tLWNvbnRhaW5lcnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7dGV4dC1hbGlnbjpjZW50ZXJ9LnN3aXBlci16b29tLWNvbnRhaW5lcj5jYW52YXMsLnN3aXBlci16b29tLWNvbnRhaW5lcj5pbWcsLnN3aXBlci16b29tLWNvbnRhaW5lcj5zdmd7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlOy1vLW9iamVjdC1maXQ6Y29udGFpbjtvYmplY3QtZml0OmNvbnRhaW59LnN3aXBlci1zbGlkZS16b29tZWR7Y3Vyc29yOm1vdmV9LnN3aXBlci1sYXp5LXByZWxvYWRlcnt3aWR0aDo0MnB4O2hlaWdodDo0MnB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3RvcDo1MCU7bWFyZ2luLWxlZnQ6LTIxcHg7bWFyZ2luLXRvcDotMjFweDt6LWluZGV4OjEwOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCU7LW1zLXRyYW5zZm9ybS1vcmlnaW46NTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlOy13ZWJraXQtYW5pbWF0aW9uOnN3aXBlci1wcmVsb2FkZXItc3BpbiAxcyBzdGVwcygxMixlbmQpIGluZmluaXRlO2FuaW1hdGlvbjpzd2lwZXItcHJlbG9hZGVyLXNwaW4gMXMgc3RlcHMoMTIsZW5kKSBpbmZpbml0ZX0uc3dpcGVyLWxhenktcHJlbG9hZGVyOmFmdGVye2Rpc3BsYXk6YmxvY2s7Y29udGVudDonJzt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIwdmlld0JveCUzRCcwJTIwMCUyMDEyMCUyMDEyMCclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIweG1sbnMlM0F4bGluayUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjE5OTklMkZ4bGluayclM0UlM0NkZWZzJTNFJTNDbGluZSUyMGlkJTNEJ2wnJTIweDElM0QnNjAnJTIweDIlM0QnNjAnJTIweTElM0QnNyclMjB5MiUzRCcyNyclMjBzdHJva2UlM0QnJTIzNmM2YzZjJyUyMHN0cm9rZS13aWR0aCUzRCcxMSclMjBzdHJva2UtbGluZWNhcCUzRCdyb3VuZCclMkYlM0UlM0MlMkZkZWZzJTNFJTNDZyUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDYwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSg5MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTIwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxNTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4zNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDE4MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjQ2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjEwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNTYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyNDAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy42NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDI3MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjc1JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzAwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuODUnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgzMzAlMjA2MCUyQzYwKSclMkYlM0UlM0MlMkZnJTNFJTNDJTJGc3ZnJTNFXCIpO2JhY2tncm91bmQtcG9zaXRpb246NTAlO2JhY2tncm91bmQtc2l6ZToxMDAlO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdH0uc3dpcGVyLWxhenktcHJlbG9hZGVyLXdoaXRlOmFmdGVye2JhY2tncm91bmQtaW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIwdmlld0JveCUzRCcwJTIwMCUyMDEyMCUyMDEyMCclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIweG1sbnMlM0F4bGluayUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjE5OTklMkZ4bGluayclM0UlM0NkZWZzJTNFJTNDbGluZSUyMGlkJTNEJ2wnJTIweDElM0QnNjAnJTIweDIlM0QnNjAnJTIweTElM0QnNyclMjB5MiUzRCcyNyclMjBzdHJva2UlM0QnJTIzZmZmJyUyMHN0cm9rZS13aWR0aCUzRCcxMSclMjBzdHJva2UtbGluZWNhcCUzRCdyb3VuZCclMkYlM0UlM0MlMkZkZWZzJTNFJTNDZyUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDYwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSg5MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTIwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxNTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4zNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDE4MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjQ2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjEwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNTYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyNDAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy42NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDI3MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjc1JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzAwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuODUnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgzMzAlMjA2MCUyQzYwKSclMkYlM0UlM0MlMkZnJTNFJTNDJTJGc3ZnJTNFXCIpfUAtd2Via2l0LWtleWZyYW1lcyBzd2lwZXItcHJlbG9hZGVyLXNwaW57MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgc3dpcGVyLXByZWxvYWRlci1zcGluezEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX0uc3dpcGVyLWNvbnRhaW5lciAuc3dpcGVyLW5vdGlmaWNhdGlvbntwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjA7ei1pbmRleDotMTAwMH0uc3dpcGVyLWNvbnRhaW5lci1mYWRlLnN3aXBlci1jb250YWluZXItZnJlZS1tb2RlIC5zd2lwZXItc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDstby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH0uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGV7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eTstby10cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHk7dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5fS5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmV9LnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSwuc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG99LnN3aXBlci1jb250YWluZXItY3ViZXtvdmVyZmxvdzp2aXNpYmxlfS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZXtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47ei1pbmRleDoxO3Zpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowIDA7LW1zLXRyYW5zZm9ybS1vcmlnaW46MCAwO3RyYW5zZm9ybS1vcmlnaW46MCAwO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGV7cG9pbnRlci1ldmVudHM6bm9uZX0uc3dpcGVyLWNvbnRhaW5lci1jdWJlLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjEwMCUgMDstbXMtdHJhbnNmb3JtLW9yaWdpbjoxMDAlIDA7dHJhbnNmb3JtLW9yaWdpbjoxMDAlIDB9LnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG99LnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtbmV4dCwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtbmV4dCsuc3dpcGVyLXNsaWRlLC5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1wcmV2e3BvaW50ZXItZXZlbnRzOmF1dG87dmlzaWJpbGl0eTp2aXNpYmxlfS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLC5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCwuc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LC5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9we3otaW5kZXg6MDstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVufS5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1jdWJlLXNoYWRvd3twb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7Ym90dG9tOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOiMwMDA7b3BhY2l0eTouNjstd2Via2l0LWZpbHRlcjpibHVyKDUwcHgpO2ZpbHRlcjpibHVyKDUwcHgpO3otaW5kZXg6MH0uc3dpcGVyLWNvbnRhaW5lci1mbGlwe292ZXJmbG93OnZpc2libGV9LnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRle3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjt6LWluZGV4OjF9LnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGV7cG9pbnRlci1ldmVudHM6bm9uZX0uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlLC5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmV7cG9pbnRlci1ldmVudHM6YXV0b30uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwuc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwuc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcHt6LWluZGV4OjA7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbn0uc3dpcGVyLWNvbnRhaW5lci1jb3ZlcmZsb3cgLnN3aXBlci13cmFwcGVyey1tcy1wZXJzcGVjdGl2ZToxMjAwcHh9IiwiQGltcG9ydCAnfnN3aXBlci9kaXN0L2Nzcy9zd2lwZXIubWluLmNzcyc7XHJcbiNwb3N0LWNvdmVyLWltZyB7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG4ucGFnZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuI3Bvc3QtZGV0YWlsLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ud2hpdGUtYmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC10YWItZ3JvdXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm1hdC10YWItaGVhZGVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWJvZHktd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubWF0LXRhYi1saXN0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDogMTAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmJvb2stY292ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XHJcbiAgICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxufVxyXG5cclxuI2NvdmVyLWZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDc0cHg7XHJcbn1cclxuXHJcbiNtZWRpYS1kZXRhaWxzIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTZweDtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgXHJcbn1cclxuI21lZGlhLXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6LTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuaDUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLm1vdmUtZG93biB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbiNwb3N0LWJnIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4ubm8tcGFkZGluZ3tcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbi5zd2lwZXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgICB2aWRlbyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xyXG4gICAgei1pbmRleDogOTk7XHJcbn0iLCJAaW1wb3J0ICd+c3dpcGVyL2Rpc3QvY3NzL3N3aXBlci5taW4uY3NzJztcbiNwb3N0LWNvdmVyLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucGFnZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG5cbiNwb3N0LWRldGFpbC1jb250YWluZXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ud2hpdGUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtdGFiLWdyb3VwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubWF0LXRhYi1oZWFkZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tYXQtdGFiLWJvZHktd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5tYXQtdGFiLWxpc3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMTAwcHg7XG59XG5cbi5ib29rLWNvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XG4gIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbiNjb3Zlci1mb290ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNzRweDtcbn1cblxuI21lZGlhLWRldGFpbHMge1xuICB3aWR0aDogNjAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNnB4O1xuICB0b3A6IDhweDtcbn1cblxuI21lZGlhLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogLTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5oNSB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLm1vdmUtZG93biB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuI3Bvc3QtYmcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxubWF0LWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmgxIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnN3aXBlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuLnN3aXBlci1jb250YWluZXIgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uc3dpcGVyLWNvbnRhaW5lciB2aWRlbyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xuICB6LWluZGV4OiA5OTtcbn0iXX0= */"

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
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/components/post-detail/rating/rating.component.ts");








let PostDetailComponent = class PostDetailComponent {
    constructor(router, route, postService, _bottomSheet) {
        this.router = router;
        this.route = route;
        this.postService = postService;
        this._bottomSheet = _bottomSheet;
        this.rating = 3;
        this.starCount = 5;
        this.starColor = _rating_rating_component__WEBPACK_IMPORTED_MODULE_7__["StarRatingColor"].primary;
        this.starColorP = _rating_rating_component__WEBPACK_IMPORTED_MODULE_7__["StarRatingColor"].primary;
        this.starColorW = _rating_rating_component__WEBPACK_IMPORTED_MODULE_7__["StarRatingColor"].warn;
        this.prevIndex = 0;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.router.navigate([`review`], { relativeTo: this.route });
        this.route.params.subscribe(params => { this.postId = params._id; console.log(params._id); });
        this.post = this.postService.getPostById(this.postId);
        console.log(this.post);
        let image = document.getElementById(`trick-img`);
        if (image) {
            document.body.removeChild(image);
            image.style.opacity = "0";
        }
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
    ngAfterViewInit() {
        let img = document.getElementById(`post-cover-img`);
        let rect = img.getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);
    }
    onRatingChanged(rating) {
        console.log(rating);
        this.rating = rating;
    }
    openCommentSection() {
        this._bottomSheet.open(_comment_comment_component__WEBPACK_IMPORTED_MODULE_6__["CommentComponent"], { data: { post: this.post }, panelClass: 'comment-section-radius' });
    }
    navigateTo({ index }) {
        let route;
        switch (index) {
            case 0:
                route = 'review';
                break;
            case 1:
                route = 'summary';
                break;
            default:
            // code block
        }
        // console.log(index)
        this.router.navigate([`${route}`], { relativeTo: this.route });
    }
    switchPlayback(i) {
        let videos = document.querySelectorAll(".swiper-slide");
        console.log(i);
        let previousVideo = videos[this.prevIndex];
        previousVideo.pause();
        this.currentVideo = videos[i];
        this.currentVideo.play();
        this.prevIndex = i;
    }
    openFullscreen() {
        if (this.currentVideo.requestFullscreen) {
            this.currentVideo.requestFullscreen();
        }
        else if (this.currentVideo.mozRequestFullScreen) { /* Firefox */
            this.currentVideo.mozRequestFullScreen();
        }
        else if (this.currentVideo.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            this.currentVideo.webkitRequestFullscreen();
        }
        else if (this.currentVideo.msRequestFullscreen) { /* IE/Edge */
            this.currentVideo.msRequestFullscreen();
        }
    }
};
PostDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
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
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])("fadeAnimation", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("500ms ease-in-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 }))
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

/***/ "./src/app/components/post-detail/rating/rating.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/post-detail/rating/rating.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".star {\n  height: 24px;\n  width: 24px;\n  padding: 0;\n  margin: 0;\n  margin-bottom: 16px;\n}\n\n.mat-icon-button {\n  line-height: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0LWRldGFpbC9yYXRpbmcvQzpcXHdvcmtzcGFjZVxcYXJrXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBvc3QtZGV0YWlsXFxyYXRpbmdcXHJhdGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3N0LWRldGFpbC9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3N0LWRldGFpbC9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXIge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLm1hdC1pY29uLWJ1dHRvbiB7XHJcbiAgICBsaW5lLWhlaWdodDogMHB4O1xyXG59IiwiLnN0YXIge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5tYXQtaWNvbi1idXR0b24ge1xuICBsaW5lLWhlaWdodDogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/post-detail/rating/rating.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/post-detail/rating/rating.component.ts ***!
  \*******************************************************************/
/*! exports provided: RatingComponent, StarRatingColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingColor", function() { return StarRatingColor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RatingComponent = class RatingComponent {
    constructor() {
        this.rating = 3;
        this.starCount = 5;
        this.color = 'accent';
        this.ratingUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ratingArr = [];
    }
    ngOnInit() {
        console.log("a " + this.starCount);
        for (let index = 0; index < this.starCount; index++) {
            this.ratingArr.push(index);
        }
    }
    onClick(rating) {
        console.log(rating);
        this.ratingUpdated.emit(rating);
        return false;
    }
    showIcon(index) {
        if (this.rating >= index + 1) {
            return 'star';
        }
        else {
            return 'star_border';
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('rating')
], RatingComponent.prototype, "rating", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('starCount')
], RatingComponent.prototype, "starCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('color')
], RatingComponent.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], RatingComponent.prototype, "ratingUpdated", void 0);
RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rating',
        template: __webpack_require__(/*! raw-loader!./rating.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/post-detail/rating/rating.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated,
        styles: [__webpack_require__(/*! ./rating.component.scss */ "./src/app/components/post-detail/rating/rating.component.scss")]
    })
], RatingComponent);

var StarRatingColor;
(function (StarRatingColor) {
    StarRatingColor["primary"] = "primary";
    StarRatingColor["accent"] = "accent";
    StarRatingColor["warn"] = "warn";
})(StarRatingColor || (StarRatingColor = {}));


/***/ }),

/***/ "./src/app/components/post-list/post-list-item/post-list-item.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/post-list/post-list-item/post-list-item.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#post-item {\n  width: 100%;\n  margin-bottom: 8px;\n}\n#post-item mat-card {\n  border-radius: 0px;\n  border-bottom: 1px solid #ccc;\n  box-shadow: none;\n}\n.post-item-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n.mat-card-title {\n  font-size: 12px;\n  font-weight: bold;\n}\n.mat-card-subtitle {\n  font-size: 12px;\n}\n.top {\n  transform: translateY(56px) !important;\n}\niframe {\n  position: absolute;\n  left: 0;\n}\nmat-card-actions {\n  position: relative;\n  padding: 0px !important;\n  margin: 0px !important;\n  height: 24px;\n}\n.mat-icon-button {\n  height: 24px;\n  width: 24px;\n  line-height: 24px;\n  margin-right: 16px;\n}\n#share-btn {\n  position: absolute;\n  right: 0;\n}\n#fav-btn {\n  position: absolute;\n  left: 0;\n}\n#whiteout {\n  opacity: 0;\n  pointer-events: none;\n  z-index: 97;\n  background-color: #fff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  transition: all 220ms;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0LWxpc3QvcG9zdC1saXN0LWl0ZW0vQzpcXHdvcmtzcGFjZVxcYXJrXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBvc3QtbGlzdFxccG9zdC1saXN0LWl0ZW1cXHBvc3QtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bvc3QtbGlzdC9wb3N0LWxpc3QtaXRlbS9wb3N0LWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEQ0k7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDTjtBREdFO0VBQ0UsbUZBQUE7RUFDQSxzQkFBQTtBQ0FKO0FER0U7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNBTjtBREVFO0VBQ0UsZUFBQTtBQ0NKO0FERUE7RUFDRSxzQ0FBQTtBQ0NGO0FEQ0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7QUNFRjtBRFNBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ05GO0FEU0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNORjtBRFNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDTkY7QURTQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtBQ05GO0FEU0E7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bvc3QtbGlzdC9wb3N0LWxpc3QtaXRlbS9wb3N0LWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jcG9zdC1pdGVte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBtYXQtY2FyZCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3N0LWl0ZW0taGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1NnB4KSAhaW1wb3J0YW50O1xyXG59XHJcbmlmcmFtZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgLy8gd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gLm1hdC1jYXJkIHtcclxuLy8gICBtYXgtd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuXHJcbi8vIG1hdC1jYXJkIHtcclxuLy8gICBtYXgtd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuXHJcbm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuLm1hdC1pY29uLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG5cclxuI3NoYXJlLWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4jZmF2LWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiN3aGl0ZW91dCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB6LWluZGV4OiA5NztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDIyMG1zO1xyXG59IiwiI3Bvc3QtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4jcG9zdC1pdGVtIG1hdC1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnBvc3QtaXRlbS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWF0LWNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50b3Age1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTZweCkgIWltcG9ydGFudDtcbn1cblxuaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufVxuXG5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4ubWF0LWljb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuI3NoYXJlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbiNmYXYtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufVxuXG4jd2hpdGVvdXQge1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogOTc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMjIwbXM7XG59Il19 */"

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
                    trickImage.style.transform = `translateY(176px) translateX(16px)`;
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

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

module.exports = ".page-container {\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL0M6XFx3b3Jrc3BhY2VcXGFya1xcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyXFx1c2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59IiwiLnBhZ2UtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn0iXX0= */"

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

module.exports = ".video-thumbnail {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.mat-grid-list {\n  margin-bottom: 16px;\n}\n\n.mat-figure {\n  position: relative;\n}\n\n.mat-list-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  text-align: left;\n}\n\n.mat-list-item-content {\n  padding-top: 0px;\n}\n\n.video-list-container {\n  background-color: #fff;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWRlby1saXN0L0M6XFx3b3Jrc3BhY2VcXGFya1xcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFx2aWRlby1saXN0XFx2aWRlby1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3ZpZGVvLWxpc3QvdmlkZW8tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURhQTtFQUNJLGtCQUFBO0FDVko7O0FEWUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUNUSjs7QURXQTtFQUNJLGdCQUFBO0FDUko7O0FEVUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlkZW8tbGlzdC92aWRlby1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLXRodW1ibmFpbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4ubWF0LWdyaWQtbGlzdHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi8vIC52aWRlby1kZXRhaWxzIHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4vLyAgICAgaDQge1xyXG4vLyAgICAgICAgIG1hcmdpbjogMDtcclxuLy8gICAgIH1cclxuLy8gICAgIHAge1xyXG4vLyAgICAgICAgIG1hcmdpbjogMDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4ubWF0LWZpZ3VyZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1hdC1saXN0LWlubmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5tYXQtbGlzdC1pdGVtLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG4udmlkZW8tbGlzdC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn0iLCIudmlkZW8tdGh1bWJuYWlsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5tYXQtZ3JpZC1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLm1hdC1maWd1cmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXQtbGlzdC1pbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLnZpZGVvLWxpc3QtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufSJdfQ== */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlkZW9zL3ZpZGVvcy5jb21wb25lbnQuc2NzcyJ9 */"

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
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"]
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
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, corrupti rerum ratione culpa officia dolorem dicta. Cupiditate assumenda laborum magni, tempora odit provident temporibus totam reiciendis nostrum. Quaerat, possimus enim.",
                summary: "Brave New World is a dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in a futuristic World State of genetically modified citizens and an intelligence-based social hierarchy, the novel anticipates huge scientific developments in reproductive technology, sleep-learning, psychological manipulation, and classical conditioning that are combined to make a utopian society that goes challenged only by a single outsider.",
                image: "https://images-na.ssl-images-amazon.com/images/I/91e-zS-ZoXL.jpg",
                tags: ["They Live", "Obey"],
                type: "book",
                rating: 8.1,
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
                rating: 8.5,
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