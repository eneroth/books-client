// Compiled by ClojureScript 0.0-2138
goog.provide('client.core');
goog.require('cljs.core');
goog.require('client.channel_helpers');
goog.require('client.helper');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('goog.events');
goog.require('client.channel_helpers');
goog.require('sablono.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('client.websocket_handler');
goog.require('client.websocket_handler');
goog.require('client.helper');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('client.channel_helpers');
goog.require('goog.events');
client.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$79,cljs.core.PersistentVector.EMPTY], null));
client.core.om_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var vec__10199_10314 = cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((function (p1__10198_SHARP_){return client.channel_helpers.has_type(p1__10198_SHARP_,cljs.core.constant$keyword$80);
}),client.core.om_channel);var search_results_ch_10315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10199_10314,0,null);var rest_channel_10316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10199_10314,1,null);client.core.widget = (function widget(state,owner){if(typeof client.core.t10205 !== 'undefined')
{} else
{
/**
* @constructor
*/
client.core.t10205 = (function (owner,state,widget,rest_channel,search_results_ch,vec__10199,meta10206){
this.owner = owner;
this.state = state;
this.widget = widget;
this.rest_channel = rest_channel;
this.search_results_ch = search_results_ch;
this.vec__10199 = vec__10199;
this.meta10206 = meta10206;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
client.core.t10205.cljs$lang$type = true;
client.core.t10205.cljs$lang$ctorStr = "client.core/t10205";
client.core.t10205.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"client.core/t10205");
});
client.core.t10205.prototype.om$core$IRender$ = true;
client.core.t10205.prototype.om$core$IRender$render$arity$1 = (function (this__9500__auto__){var self__ = this;
var this__9500__auto____$1 = this;return React.DOM.div({},React.DOM.button({"id": "send"},"Hello world!"));
});
client.core.t10205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10207){var self__ = this;
var _10207__$1 = this;return self__.meta10206;
});
client.core.t10205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10207,meta10206__$1){var self__ = this;
var _10207__$1 = this;return (new client.core.t10205(self__.owner,self__.state,self__.widget,self__.rest_channel,self__.search_results_ch,self__.vec__10199,meta10206__$1));
});
client.core.__GT_t10205 = (function __GT_t10205(owner__$1,state__$1,widget__$1,rest_channel__$1,search_results_ch__$1,vec__10199__$1,meta10206){return (new client.core.t10205(owner__$1,state__$1,widget__$1,rest_channel__$1,search_results_ch__$1,vec__10199__$1,meta10206));
});
}
return (new client.core.t10205(owner,state,widget,rest_channel_10316,search_results_ch_10315,vec__10199_10314,null));
});
client.core.fake_error_button = (function fake_error_button(state,owner){if(typeof client.core.t10215 !== 'undefined')
{} else
{
/**
* @constructor
*/
client.core.t10215 = (function (owner,state,fake_error_button,rest_channel,search_results_ch,vec__10199,meta10216){
this.owner = owner;
this.state = state;
this.fake_error_button = fake_error_button;
this.rest_channel = rest_channel;
this.search_results_ch = search_results_ch;
this.vec__10199 = vec__10199;
this.meta10216 = meta10216;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
client.core.t10215.cljs$lang$type = true;
client.core.t10215.cljs$lang$ctorStr = "client.core/t10215";
client.core.t10215.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"client.core/t10215");
});
client.core.t10215.prototype.om$core$IRender$ = true;
client.core.t10215.prototype.om$core$IRender$render$arity$1 = (function (this__9500__auto__){var self__ = this;
var this__9500__auto____$1 = this;return React.DOM.div({},React.DOM.button({"id": "fake-error"},"Fake an error!"));
});
client.core.t10215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10217){var self__ = this;
var _10217__$1 = this;return self__.meta10216;
});
client.core.t10215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10217,meta10216__$1){var self__ = this;
var _10217__$1 = this;return (new client.core.t10215(self__.owner,self__.state,self__.fake_error_button,self__.rest_channel,self__.search_results_ch,self__.vec__10199,meta10216__$1));
});
client.core.__GT_t10215 = (function __GT_t10215(owner__$1,state__$1,fake_error_button__$1,rest_channel__$1,search_results_ch__$1,vec__10199__$1,meta10216){return (new client.core.t10215(owner__$1,state__$1,fake_error_button__$1,rest_channel__$1,search_results_ch__$1,vec__10199__$1,meta10216));
});
}
return (new client.core.t10215(owner,state,fake_error_button,rest_channel_10316,search_results_ch_10315,vec__10199_10314,null));
});
client.core.search_widget = (function search_widget(state,owner){if(typeof client.core.t10225 !== 'undefined')
{} else
{
/**
* @constructor
*/
client.core.t10225 = (function (owner,state,search_widget,rest_channel,search_results_ch,vec__10199,meta10226){
this.owner = owner;
this.state = state;
this.search_widget = search_widget;
this.rest_channel = rest_channel;
this.search_results_ch = search_results_ch;
this.vec__10199 = vec__10199;
this.meta10226 = meta10226;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
client.core.t10225.cljs$lang$type = true;
client.core.t10225.cljs$lang$ctorStr = "client.core/t10225";
client.core.t10225.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"client.core/t10225");
});
client.core.t10225.prototype.om$core$IRender$ = true;
client.core.t10225.prototype.om$core$IRender$render$arity$1 = (function (this__9500__auto__){var self__ = this;
var this__9500__auto____$1 = this;return React.DOM.div({"id": "search-box"},React.DOM.input({"id": "search-field", "placeholder": "Search for a book"}),React.DOM.button({"id": "search"},"Go!"));
});
client.core.t10225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10227){var self__ = this;
var _10227__$1 = this;return self__.meta10226;
});
client.core.t10225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10227,meta10226__$1){var self__ = this;
var _10227__$1 = this;return (new client.core.t10225(self__.owner,self__.state,self__.search_widget,self__.rest_channel,self__.search_results_ch,self__.vec__10199,meta10226__$1));
});
client.core.__GT_t10225 = (function __GT_t10225(owner__$1,state__$1,search_widget__$1,rest_channel__$1,search_results_ch__$1,vec__10199__$1,meta10226){return (new client.core.t10225(owner__$1,state__$1,search_widget__$1,rest_channel__$1,search_results_ch__$1,vec__10199__$1,meta10226));
});
}
return (new client.core.t10225(owner,state,search_widget,rest_channel_10316,search_results_ch_10315,vec__10199_10314,null));
});
client.core.search_item = (function search_item(item,owner){if(typeof client.core.t10233 !== 'undefined')
{} else
{
/**
* @constructor
*/
client.core.t10233 = (function (owner,item,search_item,rest_channel,search_results_ch,vec__10199,meta10234){
this.owner = owner;
this.item = item;
this.search_item = search_item;
this.rest_channel = rest_channel;
this.search_results_ch = search_results_ch;
this.vec__10199 = vec__10199;
this.meta10234 = meta10234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
client.core.t10233.cljs$lang$type = true;
client.core.t10233.cljs$lang$ctorStr = "client.core/t10233";
client.core.t10233.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"client.core/t10233");
});
client.core.t10233.prototype.om$core$IRender$ = true;
client.core.t10233.prototype.om$core$IRender$render$arity$1 = (function (this__9500__auto__){var self__ = this;
var this__9500__auto____$1 = this;return React.DOM.li({"id": "search-result"},sablono.render.render_html(cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(self__.item)));
});
client.core.t10233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10235){var self__ = this;
var _10235__$1 = this;return self__.meta10234;
});
client.core.t10233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10235,meta10234__$1){var self__ = this;
var _10235__$1 = this;return (new client.core.t10233(self__.owner,self__.item,self__.search_item,self__.rest_channel,self__.search_results_ch,self__.vec__10199,meta10234__$1));
});
client.core.__GT_t10233 = (function __GT_t10233(owner__$1,item__$1,search_item__$1,rest_channel__$1,search_results_ch__$1,vec__10199__$1,meta10234){return (new client.core.t10233(owner__$1,item__$1,search_item__$1,rest_channel__$1,search_results_ch__$1,vec__10199__$1,meta10234));
});
}
return (new client.core.t10233(owner,item,search_item,rest_channel_10316,search_results_ch_10315,vec__10199_10314,null));
});
client.core.results_widget = (function results_widget(state,owner){var search_results = cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(state);if(typeof client.core.t10239 !== 'undefined')
{} else
{
/**
* @constructor
*/
client.core.t10239 = (function (search_results,owner,state,results_widget,rest_channel,search_results_ch,vec__10199,meta10240){
this.search_results = search_results;
this.owner = owner;
this.state = state;
this.results_widget = results_widget;
this.rest_channel = rest_channel;
this.search_results_ch = search_results_ch;
this.vec__10199 = vec__10199;
this.meta10240 = meta10240;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
client.core.t10239.cljs$lang$type = true;
client.core.t10239.cljs$lang$ctorStr = "client.core/t10239";
client.core.t10239.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"client.core/t10239");
});
client.core.t10239.prototype.om$core$IRender$ = true;
client.core.t10239.prototype.om$core$IRender$render$arity$1 = (function (this__9500__auto__){var self__ = this;
var this__9500__auto____$1 = this;return React.DOM.ul({"id": "search-results"},sablono.render.render_html(om.core.build_all.cljs$core$IFn$_invoke$arity$3(client.core.search_item,cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,cljs.core.constant$keyword$42], null))));
});
client.core.t10239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10241){var self__ = this;
var _10241__$1 = this;return self__.meta10240;
});
client.core.t10239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10241,meta10240__$1){var self__ = this;
var _10241__$1 = this;return (new client.core.t10239(self__.search_results,self__.owner,self__.state,self__.results_widget,self__.rest_channel,self__.search_results_ch,self__.vec__10199,meta10240__$1));
});
client.core.__GT_t10239 = (function __GT_t10239(search_results__$1,owner__$1,state__$1,results_widget__$1,rest_channel__$1,search_results_ch__$1,vec__10199__$1,meta10240){return (new client.core.t10239(search_results__$1,owner__$1,state__$1,results_widget__$1,rest_channel__$1,search_results_ch__$1,vec__10199__$1,meta10240));
});
}
return (new client.core.t10239(search_results,owner,state,results_widget,rest_channel_10316,search_results_ch_10315,vec__10199_10314,null));
});
client.core.app = (function app(state,owner){if(typeof client.core.t10278 !== 'undefined')
{} else
{
/**
* @constructor
*/
client.core.t10278 = (function (owner,state,app,rest_channel,search_results_ch,vec__10199,meta10279){
this.owner = owner;
this.state = state;
this.app = app;
this.rest_channel = rest_channel;
this.search_results_ch = search_results_ch;
this.vec__10199 = vec__10199;
this.meta10279 = meta10279;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
client.core.t10278.cljs$lang$type = true;
client.core.t10278.cljs$lang$ctorStr = "client.core/t10278";
client.core.t10278.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"client.core/t10278");
});
client.core.t10278.prototype.om$core$IRender$ = true;
client.core.t10278.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var attrs10281 = om.core.build.cljs$core$IFn$_invoke$arity$2(client.core.search_widget,self__.state);if(cljs.core.map_QMARK_(attrs10281))
{return React.DOM.div(cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,attrs10281], 0))),sablono.render.render_html(om.core.build.cljs$core$IFn$_invoke$arity$2(client.core.results_widget,self__.state)));
} else
{return React.DOM.div({},sablono.render.render_html(attrs10281),sablono.render.render_html(om.core.build.cljs$core$IFn$_invoke$arity$2(client.core.results_widget,self__.state)));
}
});
client.core.t10278.prototype.om$core$IWillMount$ = true;
client.core.t10278.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__5523__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10297){var state_val_10298 = (state_10297[1]);if((state_val_10298 === 7))
{var inst_10293 = (state_10297[2]);var state_10297__$1 = state_10297;var statearr_10299_10317 = state_10297__$1;(statearr_10299_10317[2] = inst_10293);
(statearr_10299_10317[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10298 === 6))
{var state_10297__$1 = state_10297;var statearr_10300_10318 = state_10297__$1;(statearr_10300_10318[2] = null);
(statearr_10300_10318[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10298 === 5))
{var inst_10285 = (state_10297[7]);var inst_10287 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_10285], 0));var inst_10288 = client.helper.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_10287], 0));var inst_10289 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.constant$keyword$79,inst_10285);var state_10297__$1 = (function (){var statearr_10301 = state_10297;(statearr_10301[8] = inst_10289);
(statearr_10301[9] = inst_10288);
return statearr_10301;
})();var statearr_10302_10319 = state_10297__$1;(statearr_10302_10319[2] = null);
(statearr_10302_10319[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10298 === 4))
{var inst_10285 = (state_10297[7]);var inst_10284 = (state_10297[2]);var inst_10285__$1 = cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(inst_10284);var state_10297__$1 = (function (){var statearr_10303 = state_10297;(statearr_10303[7] = inst_10285__$1);
return statearr_10303;
})();if(cljs.core.truth_(inst_10285__$1))
{var statearr_10304_10320 = state_10297__$1;(statearr_10304_10320[1] = 5);
} else
{var statearr_10305_10321 = state_10297__$1;(statearr_10305_10321[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10298 === 3))
{var inst_10295 = (state_10297[2]);var state_10297__$1 = state_10297;return cljs.core.async.impl.ioc_helpers.return_chan(state_10297__$1,inst_10295);
} else
{if((state_val_10298 === 2))
{var state_10297__$1 = state_10297;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10297__$1,4,self__.search_results_ch);
} else
{if((state_val_10298 === 1))
{var state_10297__$1 = state_10297;var statearr_10306_10322 = state_10297__$1;(statearr_10306_10322[2] = null);
(statearr_10306_10322[1] = 2);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10310 = [null,null,null,null,null,null,null,null,null,null];(statearr_10310[0] = state_machine__5509__auto__);
(statearr_10310[1] = 1);
return statearr_10310;
});
var state_machine__5509__auto____1 = (function (state_10297){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_10297);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10311){if((e10311 instanceof Object))
{var ex__5512__auto__ = e10311;var statearr_10312_10323 = state_10297;(statearr_10312_10323[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10297);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e10311;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__10324 = state_10297;
state_10297 = G__10324;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10297){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10313 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_10313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_10313;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return c__5523__auto__;
});
client.core.t10278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10280){var self__ = this;
var _10280__$1 = this;return self__.meta10279;
});
client.core.t10278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10280,meta10279__$1){var self__ = this;
var _10280__$1 = this;return (new client.core.t10278(self__.owner,self__.state,self__.app,self__.rest_channel,self__.search_results_ch,self__.vec__10199,meta10279__$1));
});
client.core.__GT_t10278 = (function __GT_t10278(owner__$1,state__$1,app__$1,rest_channel__$1,search_results_ch__$1,vec__10199__$1,meta10279){return (new client.core.t10278(owner__$1,state__$1,app__$1,rest_channel__$1,search_results_ch__$1,vec__10199__$1,meta10279));
});
}
return (new client.core.t10278(owner,state,app,rest_channel_10316,search_results_ch_10315,vec__10199_10314,null));
});
om.core.root(client.core.app_state,client.core.app,goog.dom.getElement("app"));
/**
* Turns a vector of values into a vector of indexed maps.
* For example, [“moo” “oink”] becomes
* [{:id 0, :val “moo”} {:id 1, :val “oink”}]
*/
client.core.index_vec = (function index_vec(results){return cljs.core.vec(cljs.core.map_indexed((function (idx,value){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,idx,cljs.core.constant$keyword$34,value], null);
}),results));
});
client.core.server_channels = client.websocket_handler.open_connection();
client.core.app_channel = cljs.core.first(client.core.server_channels);
client.core.server_status_channel = cljs.core.second(client.core.server_channels);
client.core.command_channel = cljs.core.last(client.core.server_channels);
client.core.run = (function run(){var vec__10525 = cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((function (p1__10325_SHARP_){return client.channel_helpers.has_type(p1__10325_SHARP_,cljs.core.constant$keyword$81);
}),client.core.app_channel);var heartbeat_channel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10525,0,null);var rest_channel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10525,1,null);var vec__10526 = cljs.core.async.split.cljs$core$IFn$_invoke$arity$2(((function (vec__10525,heartbeat_channel,rest_channel){
return (function (p1__10326_SHARP_){return client.channel_helpers.has_type(p1__10326_SHARP_,cljs.core.constant$keyword$79);
});})(vec__10525,heartbeat_channel,rest_channel))
,rest_channel);var search_results_channel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10526,0,null);var rest_channel__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10526,1,null);var search_init_events = client.channel_helpers.clean_mix.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([client.channel_helpers.listen(goog.dom.getElement("search"),"click"),client.channel_helpers.listen(goog.dom.getElement("search-field"),"keyup")], 0));var c__5523__auto___10723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10559){var state_val_10560 = (state_10559[1]);if((state_val_10560 === 1))
{var state_10559__$1 = state_10559;var statearr_10561_10724 = state_10559__$1;(statearr_10561_10724[2] = null);
(statearr_10561_10724[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10560 === 2))
{var state_10559__$1 = state_10559;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10559__$1,4,client.core.server_status_channel);
} else
{if((state_val_10560 === 3))
{var inst_10557 = (state_10559[2]);var state_10559__$1 = state_10559;return cljs.core.async.impl.ioc_helpers.return_chan(state_10559__$1,inst_10557);
} else
{if((state_val_10560 === 4))
{var inst_10529 = (state_10559[7]);var inst_10529__$1 = (state_10559[2]);var state_10559__$1 = (function (){var statearr_10562 = state_10559;(statearr_10562[7] = inst_10529__$1);
return statearr_10562;
})();if(cljs.core.truth_(inst_10529__$1))
{var statearr_10563_10725 = state_10559__$1;(statearr_10563_10725[1] = 5);
} else
{var statearr_10564_10726 = state_10559__$1;(statearr_10564_10726[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10560 === 5))
{var inst_10529 = (state_10559[7]);var inst_10531 = cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(inst_10529);var inst_10532 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10531,cljs.core.constant$keyword$36);var state_10559__$1 = state_10559;if(inst_10532)
{var statearr_10565_10727 = state_10559__$1;(statearr_10565_10727[1] = 8);
} else
{var statearr_10566_10728 = state_10559__$1;(statearr_10566_10728[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10560 === 6))
{var state_10559__$1 = state_10559;var statearr_10567_10729 = state_10559__$1;(statearr_10567_10729[2] = null);
(statearr_10567_10729[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10560 === 7))
{var inst_10555 = (state_10559[2]);var state_10559__$1 = state_10559;var statearr_10568_10730 = state_10559__$1;(statearr_10568_10730[2] = inst_10555);
(statearr_10568_10730[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10560 === 8))
{var inst_10529 = (state_10559[7]);var inst_10534 = (state_10559[8]);var inst_10534__$1 = cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(inst_10529);var state_10559__$1 = (function (){var statearr_10569 = state_10559;(statearr_10569[8] = inst_10534__$1);
return statearr_10569;
})();if(cljs.core.truth_(inst_10534__$1))
{var statearr_10570_10731 = state_10559__$1;(statearr_10570_10731[1] = 11);
} else
{var statearr_10571_10732 = state_10559__$1;(statearr_10571_10732[1] = 12);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10560 === 9))
{var state_10559__$1 = state_10559;if(cljs.core.constant$keyword$6)
{var statearr_10572_10733 = state_10559__$1;(statearr_10572_10733[1] = 15);
} else
{var statearr_10573_10734 = state_10559__$1;(statearr_10573_10734[1] = 16);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10560 === 10))
{var inst_10551 = (state_10559[2]);var state_10559__$1 = (function (){var statearr_10574 = state_10559;(statearr_10574[9] = inst_10551);
return statearr_10574;
})();var statearr_10575_10735 = state_10559__$1;(statearr_10575_10735[2] = null);
(statearr_10575_10735[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10560 === 11))
{var inst_10534 = (state_10559[8]);var state_10559__$1 = state_10559;var statearr_10576_10736 = state_10559__$1;(statearr_10576_10736[2] = inst_10534);
(statearr_10576_10736[1] = 13);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10560 === 12))
{var state_10559__$1 = state_10559;var statearr_10577_10737 = state_10559__$1;(statearr_10577_10737[2] = "Unknown");
(statearr_10577_10737[1] = 13);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10560 === 13))
{var inst_10538 = (state_10559[2]);var inst_10539 = client.helper.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Websocket error:",inst_10538,"- attempting restart."], 0));var state_10559__$1 = (function (){var statearr_10578 = state_10559;(statearr_10578[10] = inst_10539);
return statearr_10578;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10559__$1,14,client.core.command_channel,client.channel_helpers.request_socket_close);
} else
{if((state_val_10560 === 14))
{var inst_10541 = (state_10559[2]);var state_10559__$1 = state_10559;var statearr_10579_10738 = state_10559__$1;(statearr_10579_10738[2] = inst_10541);
(statearr_10579_10738[1] = 10);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10560 === 15))
{var inst_10529 = (state_10559[7]);var inst_10544 = cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(inst_10529);var inst_10545 = [cljs.core.str("Connection status: "),cljs.core.str(inst_10544)].join('');var inst_10546 = client.helper.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_10545], 0));var state_10559__$1 = state_10559;var statearr_10580_10739 = state_10559__$1;(statearr_10580_10739[2] = inst_10546);
(statearr_10580_10739[1] = 17);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10560 === 16))
{var state_10559__$1 = state_10559;var statearr_10581_10740 = state_10559__$1;(statearr_10581_10740[2] = null);
(statearr_10581_10740[1] = 17);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10560 === 17))
{var inst_10549 = (state_10559[2]);var state_10559__$1 = state_10559;var statearr_10582_10741 = state_10559__$1;(statearr_10582_10741[2] = inst_10549);
(statearr_10582_10741[1] = 10);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10586 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10586[0] = state_machine__5509__auto__);
(statearr_10586[1] = 1);
return statearr_10586;
});
var state_machine__5509__auto____1 = (function (state_10559){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_10559);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10587){if((e10587 instanceof Object))
{var ex__5512__auto__ = e10587;var statearr_10588_10742 = state_10559;(statearr_10588_10742[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10559);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e10587;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__10743 = state_10559;
state_10559 = G__10743;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10559){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10589 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_10589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___10723);
return statearr_10589;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
var c__5523__auto___10744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10602){var state_val_10603 = (state_10602[1]);if((state_val_10603 === 7))
{var inst_10598 = (state_10602[2]);var state_10602__$1 = state_10602;var statearr_10604_10745 = state_10602__$1;(statearr_10604_10745[2] = inst_10598);
(statearr_10604_10745[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10603 === 6))
{var state_10602__$1 = state_10602;var statearr_10605_10746 = state_10602__$1;(statearr_10605_10746[2] = null);
(statearr_10605_10746[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10603 === 5))
{var inst_10594 = console.log("Received server heartbeat");var state_10602__$1 = (function (){var statearr_10606 = state_10602;(statearr_10606[7] = inst_10594);
return statearr_10606;
})();var statearr_10607_10747 = state_10602__$1;(statearr_10607_10747[2] = null);
(statearr_10607_10747[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10603 === 4))
{var inst_10592 = (state_10602[2]);var state_10602__$1 = state_10602;if(cljs.core.truth_(inst_10592))
{var statearr_10608_10748 = state_10602__$1;(statearr_10608_10748[1] = 5);
} else
{var statearr_10609_10749 = state_10602__$1;(statearr_10609_10749[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10603 === 3))
{var inst_10600 = (state_10602[2]);var state_10602__$1 = state_10602;return cljs.core.async.impl.ioc_helpers.return_chan(state_10602__$1,inst_10600);
} else
{if((state_val_10603 === 2))
{var state_10602__$1 = state_10602;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10602__$1,4,heartbeat_channel);
} else
{if((state_val_10603 === 1))
{var state_10602__$1 = state_10602;var statearr_10610_10750 = state_10602__$1;(statearr_10610_10750[2] = null);
(statearr_10610_10750[1] = 2);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10614 = [null,null,null,null,null,null,null,null];(statearr_10614[0] = state_machine__5509__auto__);
(statearr_10614[1] = 1);
return statearr_10614;
});
var state_machine__5509__auto____1 = (function (state_10602){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_10602);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10615){if((e10615 instanceof Object))
{var ex__5512__auto__ = e10615;var statearr_10616_10751 = state_10602;(statearr_10616_10751[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10602);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e10615;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__10752 = state_10602;
state_10602 = G__10752;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10602){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10617 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_10617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___10744);
return statearr_10617;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
var c__5523__auto___10753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10630){var state_val_10631 = (state_10630[1]);if((state_val_10631 === 5))
{var inst_10625 = (state_10630[2]);var state_10630__$1 = (function (){var statearr_10632 = state_10630;(statearr_10632[7] = inst_10625);
return statearr_10632;
})();var statearr_10633_10754 = state_10630__$1;(statearr_10633_10754[2] = null);
(statearr_10633_10754[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10631 === 4))
{var inst_10621 = (state_10630[2]);var inst_10622 = client.helper.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Sending client heartbeat"], 0));var inst_10623 = (new client.channel_helpers.Message(cljs.core.constant$keyword$81,"Client heartbeat"));var state_10630__$1 = (function (){var statearr_10634 = state_10630;(statearr_10634[8] = inst_10621);
(statearr_10634[9] = inst_10622);
return statearr_10634;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10630__$1,5,client.core.app_channel,inst_10623);
} else
{if((state_val_10631 === 3))
{var inst_10628 = (state_10630[2]);var state_10630__$1 = state_10630;return cljs.core.async.impl.ioc_helpers.return_chan(state_10630__$1,inst_10628);
} else
{if((state_val_10631 === 2))
{var inst_10619 = cljs.core.async.timeout(55000);var state_10630__$1 = state_10630;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10630__$1,4,inst_10619);
} else
{if((state_val_10631 === 1))
{var state_10630__$1 = state_10630;var statearr_10635_10755 = state_10630__$1;(statearr_10635_10755[2] = null);
(statearr_10635_10755[1] = 2);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10639 = [null,null,null,null,null,null,null,null,null,null];(statearr_10639[0] = state_machine__5509__auto__);
(statearr_10639[1] = 1);
return statearr_10639;
});
var state_machine__5509__auto____1 = (function (state_10630){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_10630);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10640){if((e10640 instanceof Object))
{var ex__5512__auto__ = e10640;var statearr_10641_10756 = state_10630;(statearr_10641_10756[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10630);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e10640;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__10757 = state_10630;
state_10630 = G__10757;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10630){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10642 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_10642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___10753);
return statearr_10642;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
var c__5523__auto___10758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10665){var state_val_10666 = (state_10665[1]);if((state_val_10666 === 1))
{var state_10665__$1 = state_10665;var statearr_10667_10759 = state_10665__$1;(statearr_10667_10759[2] = null);
(statearr_10667_10759[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10666 === 2))
{var state_10665__$1 = state_10665;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10665__$1,4,search_init_events);
} else
{if((state_val_10666 === 3))
{var inst_10663 = (state_10665[2]);var state_10665__$1 = state_10665;return cljs.core.async.impl.ioc_helpers.return_chan(state_10665__$1,inst_10663);
} else
{if((state_val_10666 === 4))
{var inst_10645 = (state_10665[7]);var inst_10645__$1 = (state_10665[2]);var state_10665__$1 = (function (){var statearr_10668 = state_10665;(statearr_10668[7] = inst_10645__$1);
return statearr_10668;
})();if(cljs.core.truth_(inst_10645__$1))
{var statearr_10669_10760 = state_10665__$1;(statearr_10669_10760[1] = 5);
} else
{var statearr_10670_10761 = state_10665__$1;(statearr_10670_10761[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10666 === 5))
{var inst_10645 = (state_10665[7]);var inst_10647 = cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(client.channel_helpers.key_types);var inst_10648 = client.channel_helpers.pressed_key_is_QMARK_(inst_10647,inst_10645);var state_10665__$1 = state_10665;if(inst_10648)
{var statearr_10671_10762 = state_10665__$1;(statearr_10671_10762[1] = 8);
} else
{var statearr_10672_10763 = state_10665__$1;(statearr_10672_10763[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10666 === 6))
{var state_10665__$1 = state_10665;var statearr_10673_10764 = state_10665__$1;(statearr_10673_10764[2] = null);
(statearr_10673_10764[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10666 === 7))
{var inst_10661 = (state_10665[2]);var state_10665__$1 = state_10665;var statearr_10674_10765 = state_10665__$1;(statearr_10674_10765[2] = inst_10661);
(statearr_10674_10765[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10666 === 8))
{var inst_10650 = goog.dom.getElement("search-field");var inst_10651 = inst_10650.value;var inst_10652 = (new client.channel_helpers.Message(cljs.core.constant$keyword$82,inst_10651));var state_10665__$1 = state_10665;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10665__$1,11,client.core.app_channel,inst_10652);
} else
{if((state_val_10666 === 9))
{var state_10665__$1 = state_10665;var statearr_10675_10766 = state_10665__$1;(statearr_10675_10766[2] = null);
(statearr_10675_10766[1] = 10);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10666 === 10))
{var inst_10657 = (state_10665[2]);var state_10665__$1 = (function (){var statearr_10676 = state_10665;(statearr_10676[8] = inst_10657);
return statearr_10676;
})();var statearr_10677_10767 = state_10665__$1;(statearr_10677_10767[2] = null);
(statearr_10677_10767[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10666 === 11))
{var inst_10654 = (state_10665[2]);var state_10665__$1 = state_10665;var statearr_10678_10768 = state_10665__$1;(statearr_10678_10768[2] = inst_10654);
(statearr_10678_10768[1] = 10);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10682 = [null,null,null,null,null,null,null,null,null];(statearr_10682[0] = state_machine__5509__auto__);
(statearr_10682[1] = 1);
return statearr_10682;
});
var state_machine__5509__auto____1 = (function (state_10665){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_10665);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10683){if((e10683 instanceof Object))
{var ex__5512__auto__ = e10683;var statearr_10684_10769 = state_10665;(statearr_10684_10769[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10665);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e10683;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__10770 = state_10665;
state_10665 = G__10770;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10665){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10685 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_10685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___10758);
return statearr_10685;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
var c__5523__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10705){var state_val_10706 = (state_10705[1]);if((state_val_10706 === 8))
{var inst_10697 = (state_10705[2]);var state_10705__$1 = (function (){var statearr_10707 = state_10705;(statearr_10707[7] = inst_10697);
return statearr_10707;
})();var statearr_10708_10771 = state_10705__$1;(statearr_10708_10771[2] = null);
(statearr_10708_10771[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10706 === 7))
{var inst_10701 = (state_10705[2]);var state_10705__$1 = state_10705;var statearr_10709_10772 = state_10705__$1;(statearr_10709_10772[2] = inst_10701);
(statearr_10709_10772[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10706 === 6))
{var state_10705__$1 = state_10705;var statearr_10710_10773 = state_10705__$1;(statearr_10710_10773[2] = null);
(statearr_10710_10773[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10706 === 5))
{var inst_10689 = (state_10705[8]);var inst_10691 = client.core.index_vec(inst_10689);var inst_10692 = (new client.channel_helpers.Message(cljs.core.constant$keyword$80,inst_10691));var inst_10693 = client.helper.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Received search results!"], 0));var inst_10694 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_10689], 0));var inst_10695 = client.helper.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_10694], 0));var state_10705__$1 = (function (){var statearr_10711 = state_10705;(statearr_10711[9] = inst_10695);
(statearr_10711[10] = inst_10693);
return statearr_10711;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10705__$1,8,client.core.om_channel,inst_10692);
} else
{if((state_val_10706 === 4))
{var inst_10689 = (state_10705[8]);var inst_10688 = (state_10705[2]);var inst_10689__$1 = cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(inst_10688);var state_10705__$1 = (function (){var statearr_10712 = state_10705;(statearr_10712[8] = inst_10689__$1);
return statearr_10712;
})();if(cljs.core.truth_(inst_10689__$1))
{var statearr_10713_10774 = state_10705__$1;(statearr_10713_10774[1] = 5);
} else
{var statearr_10714_10775 = state_10705__$1;(statearr_10714_10775[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10706 === 3))
{var inst_10703 = (state_10705[2]);var state_10705__$1 = state_10705;return cljs.core.async.impl.ioc_helpers.return_chan(state_10705__$1,inst_10703);
} else
{if((state_val_10706 === 2))
{var state_10705__$1 = state_10705;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10705__$1,4,search_results_channel);
} else
{if((state_val_10706 === 1))
{var state_10705__$1 = state_10705;var statearr_10715_10776 = state_10705__$1;(statearr_10715_10776[2] = null);
(statearr_10715_10776[1] = 2);
return cljs.core.constant$keyword$18;
} else
{return null;
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10719 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10719[0] = state_machine__5509__auto__);
(statearr_10719[1] = 1);
return statearr_10719;
});
var state_machine__5509__auto____1 = (function (state_10705){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_10705);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10720){if((e10720 instanceof Object))
{var ex__5512__auto__ = e10720;var statearr_10721_10777 = state_10705;(statearr_10721_10777[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10705);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e10720;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__10778 = state_10705;
state_10705 = G__10778;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10705){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10722 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_10722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_10722;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return c__5523__auto__;
});
client.core.main = (function main(){return client.core.run();
});
