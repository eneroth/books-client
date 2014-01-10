// Compiled by ClojureScript 0.0-2138
goog.provide('chord.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async');
chord.client.read_from_ch_BANG_ = (function read_from_ch_BANG_(ch,ws){return ws.onmessage = (function (ev){var message = ev.data;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$35,message], null));
});
});
chord.client.write_to_ch_BANG_ = (function write_to_ch_BANG_(ch,ws){var c__5523__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_15200){var state_val_15201 = (state_15200[1]);if((state_val_15201 === 7))
{var inst_15196 = (state_15200[2]);var state_15200__$1 = state_15200;var statearr_15202_15217 = state_15200__$1;(statearr_15202_15217[2] = inst_15196);
(statearr_15202_15217[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_15201 === 6))
{var state_15200__$1 = state_15200;var statearr_15203_15218 = state_15200__$1;(statearr_15203_15218[2] = null);
(statearr_15203_15218[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_15201 === 5))
{var inst_15190 = (state_15200[7]);var inst_15192 = ws.send(inst_15190);var state_15200__$1 = (function (){var statearr_15204 = state_15200;(statearr_15204[8] = inst_15192);
return statearr_15204;
})();var statearr_15205_15219 = state_15200__$1;(statearr_15205_15219[2] = null);
(statearr_15205_15219[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_15201 === 4))
{var inst_15190 = (state_15200[7]);var inst_15190__$1 = (state_15200[2]);var state_15200__$1 = (function (){var statearr_15206 = state_15200;(statearr_15206[7] = inst_15190__$1);
return statearr_15206;
})();if(cljs.core.truth_(inst_15190__$1))
{var statearr_15207_15220 = state_15200__$1;(statearr_15207_15220[1] = 5);
} else
{var statearr_15208_15221 = state_15200__$1;(statearr_15208_15221[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_15201 === 3))
{var inst_15198 = (state_15200[2]);var state_15200__$1 = state_15200;return cljs.core.async.impl.ioc_helpers.return_chan(state_15200__$1,inst_15198);
} else
{if((state_val_15201 === 2))
{var state_15200__$1 = state_15200;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15200__$1,4,ch);
} else
{if((state_val_15201 === 1))
{var state_15200__$1 = state_15200;var statearr_15209_15222 = state_15200__$1;(statearr_15209_15222[2] = null);
(statearr_15209_15222[1] = 2);
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
var state_machine__5509__auto____0 = (function (){var statearr_15213 = [null,null,null,null,null,null,null,null,null];(statearr_15213[0] = state_machine__5509__auto__);
(statearr_15213[1] = 1);
return statearr_15213;
});
var state_machine__5509__auto____1 = (function (state_15200){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_15200);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e15214){if((e15214 instanceof Object))
{var ex__5512__auto__ = e15214;var statearr_15215_15223 = state_15200;(statearr_15215_15223[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_15200);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e15214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__15224 = state_15200;
state_15200 = G__15224;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_15200){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_15200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_15216 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_15216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_15216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return c__5523__auto__;
});
chord.client.make_open_ch = (function make_open_ch(ws,v){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();ws.onopen = (function (){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,v);
return cljs.core.async.close_BANG_(ch);
});
return ch;
});
chord.client.on_error = (function on_error(ws,read_ch){return ws.onerror = (function (ev){var error = ev.data;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(read_ch,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$36,error], null));
});
});
chord.client.on_close = (function on_close(ws,read_ch,write_ch){return ws.onclose = (function (){cljs.core.async.close_BANG_(read_ch);
return cljs.core.async.close_BANG_(write_ch);
});
});
chord.client.combine_chs = (function combine_chs(ws,read_ch,write_ch){if(typeof chord.client.t15228 !== 'undefined')
{} else
{
/**
* @constructor
*/
chord.client.t15228 = (function (write_ch,read_ch,ws,combine_chs,meta15229){
this.write_ch = write_ch;
this.read_ch = read_ch;
this.ws = ws;
this.combine_chs = combine_chs;
this.meta15229 = meta15229;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.client.t15228.cljs$lang$type = true;
chord.client.t15228.cljs$lang$ctorStr = "chord.client/t15228";
chord.client.t15228.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"chord.client/t15228");
});
chord.client.t15228.prototype.cljs$core$async$impl$protocols$Channel$ = true;
chord.client.t15228.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.close_BANG_(self__.read_ch);
cljs.core.async.impl.protocols.close_BANG_(self__.write_ch);
return self__.ws.close();
});
chord.client.t15228.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
chord.client.t15228.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,msg,handler){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.write_ch,msg,handler);
});
chord.client.t15228.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
chord.client.t15228.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
});
chord.client.t15228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15230){var self__ = this;
var _15230__$1 = this;return self__.meta15229;
});
chord.client.t15228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15230,meta15229__$1){var self__ = this;
var _15230__$1 = this;return (new chord.client.t15228(self__.write_ch,self__.read_ch,self__.ws,self__.combine_chs,meta15229__$1));
});
chord.client.__GT_t15228 = (function __GT_t15228(write_ch__$1,read_ch__$1,ws__$1,combine_chs__$1,meta15229){return (new chord.client.t15228(write_ch__$1,read_ch__$1,ws__$1,combine_chs__$1,meta15229));
});
}
return (new chord.client.t15228(write_ch,read_ch,ws,combine_chs,null));
});
/**
* Creates websockets connection and returns a 2-sided channel when the websocket is opened.
* Arguments:
* ws-url           - (required) link to websocket service
* :reading-buffer  - (optional) hash-map with settings for reading channel
* :writing-buffer  - (optional) hash-map with settings for writing channel
* 
* supported keys for channel's options:
* 
* * type - type of channel's buffer [:fixed :sliding :dropping :unbuffered] (default :unbuffered)
* * size - size of buffer (required for [:fixed :sliding :dropping])
* 
* Usage:
* (:require [cljs.core.async :as a])
* 
* 
* (a/<! (ws-ch "ws://127.0.0.1:6437"))
* 
* (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
* 
* (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
* :write-ch (a/chan (a/dropping-buffer 10))}))
* @param {...*} var_args
*/
chord.client.ws_ch = (function() { 
var ws_ch__delegate = function (ws_url,p__15231){var vec__15236 = p__15231;var map__15237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15236,0,null);var map__15237__$1 = ((cljs.core.seq_QMARK_(map__15237))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15237):map__15237);var write_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15237__$1,cljs.core.constant$keyword$77);var read_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15237__$1,cljs.core.constant$keyword$78);var web_socket = (new WebSocket(ws_url));var read_ch__$1 = (function (){var G__15238 = (function (){var or__3408__auto__ = read_ch;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})();chord.client.read_from_ch_BANG_(G__15238,web_socket);
return G__15238;
})();var write_ch__$1 = (function (){var G__15239 = (function (){var or__3408__auto__ = write_ch;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})();chord.client.write_to_ch_BANG_(G__15239,web_socket);
return G__15239;
})();var combined_ch = chord.client.combine_chs(web_socket,read_ch__$1,write_ch__$1);var socket_ch = chord.client.make_open_ch(web_socket,combined_ch);chord.client.on_error(web_socket,read_ch__$1);
chord.client.on_close(web_socket,read_ch__$1,write_ch__$1);
return socket_ch;
};
var ws_ch = function (ws_url,var_args){
var p__15231 = null;if (arguments.length > 1) {
  p__15231 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return ws_ch__delegate.call(this,ws_url,p__15231);};
ws_ch.cljs$lang$maxFixedArity = 1;
ws_ch.cljs$lang$applyTo = (function (arglist__15240){
var ws_url = cljs.core.first(arglist__15240);
var p__15231 = cljs.core.rest(arglist__15240);
return ws_ch__delegate(ws_url,p__15231);
});
ws_ch.cljs$core$IFn$_invoke$arity$variadic = ws_ch__delegate;
return ws_ch;
})()
;
