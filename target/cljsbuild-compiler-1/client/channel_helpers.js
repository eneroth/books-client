// Compiled by ClojureScript 0.0-2138
goog.provide('client.channel_helpers');
goog.require('cljs.core');
goog.require('client.helper');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('goog.events');
goog.require('cljs.core.async');
goog.require('client.helper');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
client.channel_helpers.listen = (function listen(element,type){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();goog.events.listen(element,type,(function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,e);
}));
return out;
});
client.channel_helpers.key_types = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$32,13], null);
client.channel_helpers.pressed_key_is_QMARK_ = (function pressed_key_is_QMARK_(key_type,event){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.keyCode,key_type);
});

/**
* @constructor
* @param {*} type
* @param {*} val
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
client.channel_helpers.Message = (function (type,val,__meta,__extmap){
this.type = type;
this.val = val;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
client.channel_helpers.Message.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3983__auto__){var self__ = this;
var this__3983__auto____$1 = this;var h__3819__auto__ = self__.__hash;if(!((h__3819__auto__ == null)))
{return h__3819__auto__;
} else
{var h__3819__auto____$1 = cljs.core.hash_imap(this__3983__auto____$1);self__.__hash = h__3819__auto____$1;
return h__3819__auto____$1;
}
});
client.channel_helpers.Message.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3988__auto__,k__3989__auto__){var self__ = this;
var this__3988__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__3988__auto____$1,k__3989__auto__,null);
});
client.channel_helpers.Message.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3990__auto__,k8350,else__3991__auto__){var self__ = this;
var this__3990__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k8350,cljs.core.constant$keyword$33))
{return self__.type;
} else
{if(cljs.core.keyword_identical_QMARK_(k8350,cljs.core.constant$keyword$34))
{return self__.val;
} else
{if(cljs.core.constant$keyword$6)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8350,else__3991__auto__);
} else
{return null;
}
}
}
});
client.channel_helpers.Message.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3995__auto__,k__3996__auto__,G__8349){var self__ = this;
var this__3995__auto____$1 = this;var pred__8352 = cljs.core.keyword_identical_QMARK_;var expr__8353 = k__3996__auto__;if(cljs.core.truth_((pred__8352.cljs$core$IFn$_invoke$arity$2 ? pred__8352.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$33,expr__8353) : pred__8352.call(null,cljs.core.constant$keyword$33,expr__8353))))
{return (new client.channel_helpers.Message(G__8349,self__.val,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__8352.cljs$core$IFn$_invoke$arity$2 ? pred__8352.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$34,expr__8353) : pred__8352.call(null,cljs.core.constant$keyword$34,expr__8353))))
{return (new client.channel_helpers.Message(self__.type,G__8349,self__.__meta,self__.__extmap,null));
} else
{return (new client.channel_helpers.Message(self__.type,self__.val,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__3996__auto__,G__8349),null));
}
}
});
client.channel_helpers.Message.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4002__auto__,writer__4003__auto__,opts__4004__auto__){var self__ = this;
var this__4002__auto____$1 = this;var pr_pair__4005__auto__ = (function (keyval__4006__auto__){return cljs.core.pr_sequential_writer(writer__4003__auto__,cljs.core.pr_writer,""," ","",opts__4004__auto__,keyval__4006__auto__);
});return cljs.core.pr_sequential_writer(writer__4003__auto__,pr_pair__4005__auto__,"#client.channel-helpers.Message{",", ","}",opts__4004__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$33,self__.type],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$34,self__.val],null))], null),self__.__extmap));
});
client.channel_helpers.Message.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3993__auto__,entry__3994__auto__){var self__ = this;
var this__3993__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__3994__auto__))
{return cljs.core._assoc(this__3993__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3994__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3994__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__3993__auto____$1,entry__3994__auto__);
}
});
client.channel_helpers.Message.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4000__auto__){var self__ = this;
var this__4000__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$33,self__.type],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$34,self__.val],null))], null),self__.__extmap));
});
client.channel_helpers.Message.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3992__auto__){var self__ = this;
var this__3992__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
client.channel_helpers.Message.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3984__auto__,other__3985__auto__){var self__ = this;
var this__3984__auto____$1 = this;if(cljs.core.truth_((function (){var and__3396__auto__ = other__3985__auto__;if(cljs.core.truth_(and__3396__auto__))
{return ((this__3984__auto____$1.constructor === other__3985__auto__.constructor)) && (cljs.core.equiv_map(this__3984__auto____$1,other__3985__auto__));
} else
{return and__3396__auto__;
}
})()))
{return true;
} else
{return false;
}
});
client.channel_helpers.Message.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3987__auto__,G__8349){var self__ = this;
var this__3987__auto____$1 = this;return (new client.channel_helpers.Message(self__.type,self__.val,G__8349,self__.__extmap,self__.__hash));
});
client.channel_helpers.Message.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3986__auto__){var self__ = this;
var this__3986__auto____$1 = this;return self__.__meta;
});
client.channel_helpers.Message.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3997__auto__,k__3998__auto__){var self__ = this;
var this__3997__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$33,null,cljs.core.constant$keyword$34,null], null), null),k__3998__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__3997__auto____$1),self__.__meta),k__3998__auto__);
} else
{return (new client.channel_helpers.Message(self__.type,self__.val,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__3998__auto__)),null));
}
});
client.channel_helpers.Message.cljs$lang$type = true;
client.channel_helpers.Message.cljs$lang$ctorPrSeq = (function (this__4022__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"client.channel-helpers/Message");
});
client.channel_helpers.Message.cljs$lang$ctorPrWriter = (function (this__4022__auto__,writer__4023__auto__){return cljs.core._write(writer__4023__auto__,"client.channel-helpers/Message");
});
client.channel_helpers.__GT_Message = (function __GT_Message(type,val){return (new client.channel_helpers.Message(type,val));
});
client.channel_helpers.map__GT_Message = (function map__GT_Message(G__8351){return (new client.channel_helpers.Message(cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(G__8351),cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(G__8351),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8351,cljs.core.constant$keyword$33,cljs.core.array_seq([cljs.core.constant$keyword$34], 0))));
});
/**
* Takes a raw message from websocket and produces a record.
*/
client.channel_helpers.message_to_record = (function message_to_record(message){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(client.channel_helpers.__GT_Message,cljs.reader.read_string(cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(message)));
});
/**
* Takes a record and produces a string suitable
* for transfer over websocket.
*/
client.channel_helpers.record_to_message = (function record_to_message(record){return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vec(cljs.core.vals(record))], 0));
});
/**
* Takes a websocket error and converts to a standard message of type error
*/
client.channel_helpers.error_to_record = (function error_to_record(error){console.log(error);
return (new client.channel_helpers.Message(cljs.core.constant$keyword$36,cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(error)));
});
client.channel_helpers.socket_closed_message = (new client.channel_helpers.Message(cljs.core.constant$keyword$37,"Socket closed"));
client.channel_helpers.attempting_connect_message = (function attempting_connect_message(address){return (new client.channel_helpers.Message(cljs.core.constant$keyword$38,[cljs.core.str("Attempting to connect to server "),cljs.core.str(address)].join('')));
});
client.channel_helpers.connection_successful_message = (function connection_successful_message(address){return (new client.channel_helpers.Message(cljs.core.constant$keyword$39,[cljs.core.str("Server connection to "),cljs.core.str(address),cljs.core.str(" established!")].join('')));
});
client.channel_helpers.request_socket_close = (new client.channel_helpers.Message(cljs.core.constant$keyword$40,"Requesting to close websocket channel"));
client.channel_helpers.has_type = (function has_type(message,type){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(message));
});
client.channel_helpers.socket_closed_message_QMARK_ = (function socket_closed_message_QMARK_(message){return client.channel_helpers.has_type(message,cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(client.channel_helpers.socket_closed_message));
});
/**
* Takes any number of channels and puts any message from any
* of them on the returned channel.
* @param {...*} var_args
*/
client.channel_helpers.clean_mix = (function() { 
var clean_mix__delegate = function (channels){var out_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5523__auto___8421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_8404){var state_val_8405 = (state_8404[1]);if((state_val_8405 === 8))
{var inst_8396 = (state_8404[2]);var state_8404__$1 = (function (){var statearr_8406 = state_8404;(statearr_8406[7] = inst_8396);
return statearr_8406;
})();var statearr_8407_8422 = state_8404__$1;(statearr_8407_8422[2] = null);
(statearr_8407_8422[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_8405 === 7))
{var inst_8400 = (state_8404[2]);var state_8404__$1 = state_8404;var statearr_8408_8423 = state_8404__$1;(statearr_8408_8423[2] = inst_8400);
(statearr_8408_8423[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_8405 === 6))
{var state_8404__$1 = state_8404;var statearr_8409_8424 = state_8404__$1;(statearr_8409_8424[2] = null);
(statearr_8409_8424[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_8405 === 5))
{var inst_8392 = (state_8404[8]);var state_8404__$1 = state_8404;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8404__$1,8,out_chan,inst_8392);
} else
{if((state_val_8405 === 4))
{var inst_8392 = (state_8404[8]);var inst_8391 = (state_8404[2]);var inst_8392__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8391,0,null);var inst_8393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8391,1,null);var state_8404__$1 = (function (){var statearr_8410 = state_8404;(statearr_8410[8] = inst_8392__$1);
(statearr_8410[9] = inst_8393);
return statearr_8410;
})();if(cljs.core.truth_(inst_8392__$1))
{var statearr_8411_8425 = state_8404__$1;(statearr_8411_8425[1] = 5);
} else
{var statearr_8412_8426 = state_8404__$1;(statearr_8412_8426[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_8405 === 3))
{var inst_8402 = (state_8404[2]);var state_8404__$1 = state_8404;return cljs.core.async.impl.ioc_helpers.return_chan(state_8404__$1,inst_8402);
} else
{if((state_val_8405 === 2))
{var state_8404__$1 = state_8404;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_8404__$1,4,channels);
} else
{if((state_val_8405 === 1))
{var state_8404__$1 = state_8404;var statearr_8413_8427 = state_8404__$1;(statearr_8413_8427[2] = null);
(statearr_8413_8427[1] = 2);
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
var state_machine__5509__auto____0 = (function (){var statearr_8417 = [null,null,null,null,null,null,null,null,null,null];(statearr_8417[0] = state_machine__5509__auto__);
(statearr_8417[1] = 1);
return statearr_8417;
});
var state_machine__5509__auto____1 = (function (state_8404){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_8404);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e8418){if((e8418 instanceof Object))
{var ex__5512__auto__ = e8418;var statearr_8419_8428 = state_8404;(statearr_8419_8428[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_8404);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e8418;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__8429 = state_8404;
state_8404 = G__8429;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_8404){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_8404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_8420 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_8420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___8421);
return statearr_8420;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return out_chan;
};
var clean_mix = function (var_args){
var channels = null;if (arguments.length > 0) {
  channels = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return clean_mix__delegate.call(this,channels);};
clean_mix.cljs$lang$maxFixedArity = 0;
clean_mix.cljs$lang$applyTo = (function (arglist__8430){
var channels = cljs.core.seq(arglist__8430);
return clean_mix__delegate(channels);
});
clean_mix.cljs$core$IFn$_invoke$arity$variadic = clean_mix__delegate;
return clean_mix;
})()
;
client.channel_helpers.combine_channels = (function combine_channels(read_ch,write_ch){if(typeof client.channel_helpers.t8434 !== 'undefined')
{} else
{
/**
* @constructor
*/
client.channel_helpers.t8434 = (function (write_ch,read_ch,combine_channels,meta8435){
this.write_ch = write_ch;
this.read_ch = read_ch;
this.combine_channels = combine_channels;
this.meta8435 = meta8435;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
client.channel_helpers.t8434.cljs$lang$type = true;
client.channel_helpers.t8434.cljs$lang$ctorStr = "client.channel-helpers/t8434";
client.channel_helpers.t8434.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"client.channel-helpers/t8434");
});
client.channel_helpers.t8434.prototype.cljs$core$async$impl$protocols$Channel$ = true;
client.channel_helpers.t8434.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.close_BANG_(self__.read_ch);
return cljs.core.async.impl.protocols.close_BANG_(self__.write_ch);
});
client.channel_helpers.t8434.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
client.channel_helpers.t8434.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,msg,handler){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.write_ch,msg,handler);
});
client.channel_helpers.t8434.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
client.channel_helpers.t8434.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
});
client.channel_helpers.t8434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8436){var self__ = this;
var _8436__$1 = this;return self__.meta8435;
});
client.channel_helpers.t8434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8436,meta8435__$1){var self__ = this;
var _8436__$1 = this;return (new client.channel_helpers.t8434(self__.write_ch,self__.read_ch,self__.combine_channels,meta8435__$1));
});
client.channel_helpers.__GT_t8434 = (function __GT_t8434(write_ch__$1,read_ch__$1,combine_channels__$1,meta8435){return (new client.channel_helpers.t8434(write_ch__$1,read_ch__$1,combine_channels__$1,meta8435));
});
}
return (new client.channel_helpers.t8434(write_ch,read_ch,combine_channels,null));
});
