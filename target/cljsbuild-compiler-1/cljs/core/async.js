// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12164 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12164 = (function (f,fn_handler,meta12165){
this.f = f;
this.fn_handler = fn_handler;
this.meta12165 = meta12165;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12164.cljs$lang$type = true;
cljs.core.async.t12164.cljs$lang$ctorStr = "cljs.core.async/t12164";
cljs.core.async.t12164.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t12164");
});
cljs.core.async.t12164.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12166){var self__ = this;
var _12166__$1 = this;return self__.meta12165;
});
cljs.core.async.t12164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12166,meta12165__$1){var self__ = this;
var _12166__$1 = this;return (new cljs.core.async.t12164(self__.f,self__.fn_handler,meta12165__$1));
});
cljs.core.async.__GT_t12164 = (function __GT_t12164(f__$1,fn_handler__$1,meta12165){return (new cljs.core.async.t12164(f__$1,fn_handler__$1,meta12165));
});
}
return (new cljs.core.async.t12164(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12168 = buff;if(G__12168)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__12168.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12168.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__12168);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__12168);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_12169 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12169) : fn1.call(null,val_12169));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12169) : fn1.call(null,val_12169));
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.cljs$core$IFn$_invoke$arity$3(port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3396__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{(fn0.cljs$core$IFn$_invoke$arity$0 ? fn0.cljs$core$IFn$_invoke$arity$0() : fn0.call(null));
} else
{cljs.core.async.impl.dispatch.run(fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4250__auto___12170 = n;var x_12171 = 0;while(true){
if((x_12171 < n__4250__auto___12170))
{(a[x_12171] = 0);
{
var G__12172 = (x_12171 + 1);
x_12171 = G__12172;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__12173 = (i + 1);
i = G__12173;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t12177 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12177 = (function (flag,alt_flag,meta12178){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12178 = meta12178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12177.cljs$lang$type = true;
cljs.core.async.t12177.cljs$lang$ctorStr = "cljs.core.async/t12177";
cljs.core.async.t12177.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t12177");
});
cljs.core.async.t12177.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t12177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t12177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12179){var self__ = this;
var _12179__$1 = this;return self__.meta12178;
});
cljs.core.async.t12177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12179,meta12178__$1){var self__ = this;
var _12179__$1 = this;return (new cljs.core.async.t12177(self__.flag,self__.alt_flag,meta12178__$1));
});
cljs.core.async.__GT_t12177 = (function __GT_t12177(flag__$1,alt_flag__$1,meta12178){return (new cljs.core.async.t12177(flag__$1,alt_flag__$1,meta12178));
});
}
return (new cljs.core.async.t12177(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12183 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12183 = (function (cb,flag,alt_handler,meta12184){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12184 = meta12184;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12183.cljs$lang$type = true;
cljs.core.async.t12183.cljs$lang$ctorStr = "cljs.core.async/t12183";
cljs.core.async.t12183.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t12183");
});
cljs.core.async.t12183.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12183.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t12183.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t12183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12185){var self__ = this;
var _12185__$1 = this;return self__.meta12184;
});
cljs.core.async.t12183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12185,meta12184__$1){var self__ = this;
var _12185__$1 = this;return (new cljs.core.async.t12183(self__.cb,self__.flag,self__.alt_handler,meta12184__$1));
});
cljs.core.async.__GT_t12183 = (function __GT_t12183(cb__$1,flag__$1,alt_handler__$1,meta12184){return (new cljs.core.async.t12183(cb__$1,flag__$1,alt_handler__$1,meta12184));
});
}
return (new cljs.core.async.t12183(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12186_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12186_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12186_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3408__auto__ = wport;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12187 = (i + 1);
i = G__12187;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3408__auto__ = ret;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4092__auto__ = (function (){var and__3396__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3396__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3396__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12188){var map__12190 = p__12188;var map__12190__$1 = ((cljs.core.seq_QMARK_(map__12190))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12190):map__12190);var opts = map__12190__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12188 = null;if (arguments.length > 1) {
  p__12188 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12188);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12191){
var ports = cljs.core.first(arglist__12191);
var p__12188 = cljs.core.rest(arglist__12191);
return alts_BANG___delegate(ports,p__12188);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12199 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12199 = (function (ch,f,map_LT_,meta12200){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12200 = meta12200;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12199.cljs$lang$type = true;
cljs.core.async.t12199.cljs$lang$ctorStr = "cljs.core.async/t12199";
cljs.core.async.t12199.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t12199");
});
cljs.core.async.t12199.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12199.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t12199.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12199.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t12202 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12202 = (function (fn1,_,meta12200,ch,f,map_LT_,meta12203){
this.fn1 = fn1;
this._ = _;
this.meta12200 = meta12200;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12203 = meta12203;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12202.cljs$lang$type = true;
cljs.core.async.t12202.cljs$lang$ctorStr = "cljs.core.async/t12202";
cljs.core.async.t12202.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t12202");
});
cljs.core.async.t12202.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t12202.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t12202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__12192_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__12192_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12192_SHARP_) : self__.f.call(null,p1__12192_SHARP_)))) : f1.call(null,(((p1__12192_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__12192_SHARP_) : self__.f.call(null,p1__12192_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t12202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12204){var self__ = this;
var _12204__$1 = this;return self__.meta12203;
});
cljs.core.async.t12202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12204,meta12203__$1){var self__ = this;
var _12204__$1 = this;return (new cljs.core.async.t12202(self__.fn1,self__._,self__.meta12200,self__.ch,self__.f,self__.map_LT_,meta12203__$1));
});
cljs.core.async.__GT_t12202 = (function __GT_t12202(fn1__$1,___$2,meta12200__$1,ch__$2,f__$2,map_LT___$2,meta12203){return (new cljs.core.async.t12202(fn1__$1,___$2,meta12200__$1,ch__$2,f__$2,map_LT___$2,meta12203));
});
}
return (new cljs.core.async.t12202(fn1,___$1,self__.meta12200,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3396__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t12199.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12199.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t12199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12201){var self__ = this;
var _12201__$1 = this;return self__.meta12200;
});
cljs.core.async.t12199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12201,meta12200__$1){var self__ = this;
var _12201__$1 = this;return (new cljs.core.async.t12199(self__.ch,self__.f,self__.map_LT_,meta12200__$1));
});
cljs.core.async.__GT_t12199 = (function __GT_t12199(ch__$1,f__$1,map_LT___$1,meta12200){return (new cljs.core.async.t12199(ch__$1,f__$1,map_LT___$1,meta12200));
});
}
return (new cljs.core.async.t12199(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12208 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12208 = (function (ch,f,map_GT_,meta12209){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12209 = meta12209;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12208.cljs$lang$type = true;
cljs.core.async.t12208.cljs$lang$ctorStr = "cljs.core.async/t12208";
cljs.core.async.t12208.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t12208");
});
cljs.core.async.t12208.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12208.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t12208.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12208.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t12208.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12208.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t12208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12210){var self__ = this;
var _12210__$1 = this;return self__.meta12209;
});
cljs.core.async.t12208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12210,meta12209__$1){var self__ = this;
var _12210__$1 = this;return (new cljs.core.async.t12208(self__.ch,self__.f,self__.map_GT_,meta12209__$1));
});
cljs.core.async.__GT_t12208 = (function __GT_t12208(ch__$1,f__$1,map_GT___$1,meta12209){return (new cljs.core.async.t12208(ch__$1,f__$1,map_GT___$1,meta12209));
});
}
return (new cljs.core.async.t12208(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12214 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12214 = (function (ch,p,filter_GT_,meta12215){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12215 = meta12215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12214.cljs$lang$type = true;
cljs.core.async.t12214.cljs$lang$ctorStr = "cljs.core.async/t12214";
cljs.core.async.t12214.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t12214");
});
cljs.core.async.t12214.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12214.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t12214.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12214.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t12214.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12214.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t12214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12216){var self__ = this;
var _12216__$1 = this;return self__.meta12215;
});
cljs.core.async.t12214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12216,meta12215__$1){var self__ = this;
var _12216__$1 = this;return (new cljs.core.async.t12214(self__.ch,self__.p,self__.filter_GT_,meta12215__$1));
});
cljs.core.async.__GT_t12214 = (function __GT_t12214(ch__$1,p__$1,filter_GT___$1,meta12215){return (new cljs.core.async.t12214(ch__$1,p__$1,filter_GT___$1,meta12215));
});
}
return (new cljs.core.async.t12214(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5523__auto___12299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_12278){var state_val_12279 = (state_12278[1]);if((state_val_12279 === 1))
{var state_12278__$1 = state_12278;var statearr_12280_12300 = state_12278__$1;(statearr_12280_12300[2] = null);
(statearr_12280_12300[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12279 === 2))
{var state_12278__$1 = state_12278;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12278__$1,4,ch);
} else
{if((state_val_12279 === 3))
{var inst_12276 = (state_12278[2]);var state_12278__$1 = state_12278;return cljs.core.async.impl.ioc_helpers.return_chan(state_12278__$1,inst_12276);
} else
{if((state_val_12279 === 4))
{var inst_12260 = (state_12278[7]);var inst_12260__$1 = (state_12278[2]);var inst_12261 = (inst_12260__$1 == null);var state_12278__$1 = (function (){var statearr_12281 = state_12278;(statearr_12281[7] = inst_12260__$1);
return statearr_12281;
})();if(cljs.core.truth_(inst_12261))
{var statearr_12282_12301 = state_12278__$1;(statearr_12282_12301[1] = 5);
} else
{var statearr_12283_12302 = state_12278__$1;(statearr_12283_12302[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12279 === 5))
{var inst_12263 = cljs.core.async.close_BANG_(out);var state_12278__$1 = state_12278;var statearr_12284_12303 = state_12278__$1;(statearr_12284_12303[2] = inst_12263);
(statearr_12284_12303[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12279 === 6))
{var inst_12260 = (state_12278[7]);var inst_12265 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12260) : p.call(null,inst_12260));var state_12278__$1 = state_12278;if(cljs.core.truth_(inst_12265))
{var statearr_12285_12304 = state_12278__$1;(statearr_12285_12304[1] = 8);
} else
{var statearr_12286_12305 = state_12278__$1;(statearr_12286_12305[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12279 === 7))
{var inst_12274 = (state_12278[2]);var state_12278__$1 = state_12278;var statearr_12287_12306 = state_12278__$1;(statearr_12287_12306[2] = inst_12274);
(statearr_12287_12306[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12279 === 8))
{var inst_12260 = (state_12278[7]);var state_12278__$1 = state_12278;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12278__$1,11,out,inst_12260);
} else
{if((state_val_12279 === 9))
{var state_12278__$1 = state_12278;var statearr_12288_12307 = state_12278__$1;(statearr_12288_12307[2] = null);
(statearr_12288_12307[1] = 10);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12279 === 10))
{var inst_12271 = (state_12278[2]);var state_12278__$1 = (function (){var statearr_12289 = state_12278;(statearr_12289[8] = inst_12271);
return statearr_12289;
})();var statearr_12290_12308 = state_12278__$1;(statearr_12290_12308[2] = null);
(statearr_12290_12308[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12279 === 11))
{var inst_12268 = (state_12278[2]);var state_12278__$1 = state_12278;var statearr_12291_12309 = state_12278__$1;(statearr_12291_12309[2] = inst_12268);
(statearr_12291_12309[1] = 10);
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
var state_machine__5509__auto____0 = (function (){var statearr_12295 = [null,null,null,null,null,null,null,null,null];(statearr_12295[0] = state_machine__5509__auto__);
(statearr_12295[1] = 1);
return statearr_12295;
});
var state_machine__5509__auto____1 = (function (state_12278){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_12278);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e12296){if((e12296 instanceof Object))
{var ex__5512__auto__ = e12296;var statearr_12297_12310 = state_12278;(statearr_12297_12310[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12278);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e12296;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__12311 = state_12278;
state_12278 = G__12311;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_12278){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_12278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_12298 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_12298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___12299);
return statearr_12298;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5523__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_12463){var state_val_12464 = (state_12463[1]);if((state_val_12464 === 1))
{var state_12463__$1 = state_12463;var statearr_12465_12502 = state_12463__$1;(statearr_12465_12502[2] = null);
(statearr_12465_12502[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12464 === 2))
{var state_12463__$1 = state_12463;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12463__$1,4,in$);
} else
{if((state_val_12464 === 3))
{var inst_12461 = (state_12463[2]);var state_12463__$1 = state_12463;return cljs.core.async.impl.ioc_helpers.return_chan(state_12463__$1,inst_12461);
} else
{if((state_val_12464 === 4))
{var inst_12409 = (state_12463[7]);var inst_12409__$1 = (state_12463[2]);var inst_12410 = (inst_12409__$1 == null);var state_12463__$1 = (function (){var statearr_12466 = state_12463;(statearr_12466[7] = inst_12409__$1);
return statearr_12466;
})();if(cljs.core.truth_(inst_12410))
{var statearr_12467_12503 = state_12463__$1;(statearr_12467_12503[1] = 5);
} else
{var statearr_12468_12504 = state_12463__$1;(statearr_12468_12504[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12464 === 5))
{var inst_12412 = cljs.core.async.close_BANG_(out);var state_12463__$1 = state_12463;var statearr_12469_12505 = state_12463__$1;(statearr_12469_12505[2] = inst_12412);
(statearr_12469_12505[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12464 === 6))
{var inst_12409 = (state_12463[7]);var inst_12414 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12409) : f.call(null,inst_12409));var inst_12419 = cljs.core.seq(inst_12414);var inst_12420 = inst_12419;var inst_12421 = null;var inst_12422 = 0;var inst_12423 = 0;var state_12463__$1 = (function (){var statearr_12470 = state_12463;(statearr_12470[8] = inst_12423);
(statearr_12470[9] = inst_12422);
(statearr_12470[10] = inst_12421);
(statearr_12470[11] = inst_12420);
return statearr_12470;
})();var statearr_12471_12506 = state_12463__$1;(statearr_12471_12506[2] = null);
(statearr_12471_12506[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12464 === 7))
{var inst_12459 = (state_12463[2]);var state_12463__$1 = state_12463;var statearr_12472_12507 = state_12463__$1;(statearr_12472_12507[2] = inst_12459);
(statearr_12472_12507[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12464 === 8))
{var inst_12423 = (state_12463[8]);var inst_12422 = (state_12463[9]);var inst_12425 = (inst_12423 < inst_12422);var inst_12426 = inst_12425;var state_12463__$1 = state_12463;if(cljs.core.truth_(inst_12426))
{var statearr_12473_12508 = state_12463__$1;(statearr_12473_12508[1] = 10);
} else
{var statearr_12474_12509 = state_12463__$1;(statearr_12474_12509[1] = 11);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12464 === 9))
{var inst_12456 = (state_12463[2]);var state_12463__$1 = (function (){var statearr_12475 = state_12463;(statearr_12475[12] = inst_12456);
return statearr_12475;
})();var statearr_12476_12510 = state_12463__$1;(statearr_12476_12510[2] = null);
(statearr_12476_12510[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12464 === 10))
{var inst_12423 = (state_12463[8]);var inst_12421 = (state_12463[10]);var inst_12428 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12421,inst_12423);var state_12463__$1 = state_12463;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12463__$1,13,out,inst_12428);
} else
{if((state_val_12464 === 11))
{var inst_12434 = (state_12463[13]);var inst_12420 = (state_12463[11]);var inst_12434__$1 = cljs.core.seq(inst_12420);var state_12463__$1 = (function (){var statearr_12480 = state_12463;(statearr_12480[13] = inst_12434__$1);
return statearr_12480;
})();if(inst_12434__$1)
{var statearr_12481_12511 = state_12463__$1;(statearr_12481_12511[1] = 14);
} else
{var statearr_12482_12512 = state_12463__$1;(statearr_12482_12512[1] = 15);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12464 === 12))
{var inst_12454 = (state_12463[2]);var state_12463__$1 = state_12463;var statearr_12483_12513 = state_12463__$1;(statearr_12483_12513[2] = inst_12454);
(statearr_12483_12513[1] = 9);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12464 === 13))
{var inst_12423 = (state_12463[8]);var inst_12422 = (state_12463[9]);var inst_12421 = (state_12463[10]);var inst_12420 = (state_12463[11]);var inst_12430 = (state_12463[2]);var inst_12431 = (inst_12423 + 1);var tmp12477 = inst_12422;var tmp12478 = inst_12421;var tmp12479 = inst_12420;var inst_12420__$1 = tmp12479;var inst_12421__$1 = tmp12478;var inst_12422__$1 = tmp12477;var inst_12423__$1 = inst_12431;var state_12463__$1 = (function (){var statearr_12484 = state_12463;(statearr_12484[14] = inst_12430);
(statearr_12484[8] = inst_12423__$1);
(statearr_12484[9] = inst_12422__$1);
(statearr_12484[10] = inst_12421__$1);
(statearr_12484[11] = inst_12420__$1);
return statearr_12484;
})();var statearr_12485_12514 = state_12463__$1;(statearr_12485_12514[2] = null);
(statearr_12485_12514[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12464 === 14))
{var inst_12434 = (state_12463[13]);var inst_12436 = cljs.core.chunked_seq_QMARK_(inst_12434);var state_12463__$1 = state_12463;if(inst_12436)
{var statearr_12486_12515 = state_12463__$1;(statearr_12486_12515[1] = 17);
} else
{var statearr_12487_12516 = state_12463__$1;(statearr_12487_12516[1] = 18);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12464 === 15))
{var state_12463__$1 = state_12463;var statearr_12488_12517 = state_12463__$1;(statearr_12488_12517[2] = null);
(statearr_12488_12517[1] = 16);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12464 === 16))
{var inst_12452 = (state_12463[2]);var state_12463__$1 = state_12463;var statearr_12489_12518 = state_12463__$1;(statearr_12489_12518[2] = inst_12452);
(statearr_12489_12518[1] = 12);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12464 === 17))
{var inst_12434 = (state_12463[13]);var inst_12438 = cljs.core.chunk_first(inst_12434);var inst_12439 = cljs.core.chunk_rest(inst_12434);var inst_12440 = cljs.core.count(inst_12438);var inst_12420 = inst_12439;var inst_12421 = inst_12438;var inst_12422 = inst_12440;var inst_12423 = 0;var state_12463__$1 = (function (){var statearr_12490 = state_12463;(statearr_12490[8] = inst_12423);
(statearr_12490[9] = inst_12422);
(statearr_12490[10] = inst_12421);
(statearr_12490[11] = inst_12420);
return statearr_12490;
})();var statearr_12491_12519 = state_12463__$1;(statearr_12491_12519[2] = null);
(statearr_12491_12519[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12464 === 18))
{var inst_12434 = (state_12463[13]);var inst_12443 = cljs.core.first(inst_12434);var state_12463__$1 = state_12463;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12463__$1,20,out,inst_12443);
} else
{if((state_val_12464 === 19))
{var inst_12449 = (state_12463[2]);var state_12463__$1 = state_12463;var statearr_12492_12520 = state_12463__$1;(statearr_12492_12520[2] = inst_12449);
(statearr_12492_12520[1] = 16);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12464 === 20))
{var inst_12434 = (state_12463[13]);var inst_12445 = (state_12463[2]);var inst_12446 = cljs.core.next(inst_12434);var inst_12420 = inst_12446;var inst_12421 = null;var inst_12422 = 0;var inst_12423 = 0;var state_12463__$1 = (function (){var statearr_12493 = state_12463;(statearr_12493[8] = inst_12423);
(statearr_12493[9] = inst_12422);
(statearr_12493[10] = inst_12421);
(statearr_12493[11] = inst_12420);
(statearr_12493[15] = inst_12445);
return statearr_12493;
})();var statearr_12494_12521 = state_12463__$1;(statearr_12494_12521[2] = null);
(statearr_12494_12521[1] = 8);
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
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_12498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12498[0] = state_machine__5509__auto__);
(statearr_12498[1] = 1);
return statearr_12498;
});
var state_machine__5509__auto____1 = (function (state_12463){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_12463);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e12499){if((e12499 instanceof Object))
{var ex__5512__auto__ = e12499;var statearr_12500_12522 = state_12463;(statearr_12500_12522[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12463);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e12499;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__12523 = state_12463;
state_12463 = G__12523;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_12463){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_12463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_12501 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_12501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_12501;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return c__5523__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5523__auto___12604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_12583){var state_val_12584 = (state_12583[1]);if((state_val_12584 === 1))
{var state_12583__$1 = state_12583;var statearr_12585_12605 = state_12583__$1;(statearr_12585_12605[2] = null);
(statearr_12585_12605[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12584 === 2))
{var state_12583__$1 = state_12583;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12583__$1,4,from);
} else
{if((state_val_12584 === 3))
{var inst_12581 = (state_12583[2]);var state_12583__$1 = state_12583;return cljs.core.async.impl.ioc_helpers.return_chan(state_12583__$1,inst_12581);
} else
{if((state_val_12584 === 4))
{var inst_12566 = (state_12583[7]);var inst_12566__$1 = (state_12583[2]);var inst_12567 = (inst_12566__$1 == null);var state_12583__$1 = (function (){var statearr_12586 = state_12583;(statearr_12586[7] = inst_12566__$1);
return statearr_12586;
})();if(cljs.core.truth_(inst_12567))
{var statearr_12587_12606 = state_12583__$1;(statearr_12587_12606[1] = 5);
} else
{var statearr_12588_12607 = state_12583__$1;(statearr_12588_12607[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12584 === 5))
{var state_12583__$1 = state_12583;if(cljs.core.truth_(close_QMARK_))
{var statearr_12589_12608 = state_12583__$1;(statearr_12589_12608[1] = 8);
} else
{var statearr_12590_12609 = state_12583__$1;(statearr_12590_12609[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12584 === 6))
{var inst_12566 = (state_12583[7]);var state_12583__$1 = state_12583;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12583__$1,11,to,inst_12566);
} else
{if((state_val_12584 === 7))
{var inst_12579 = (state_12583[2]);var state_12583__$1 = state_12583;var statearr_12591_12610 = state_12583__$1;(statearr_12591_12610[2] = inst_12579);
(statearr_12591_12610[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12584 === 8))
{var inst_12570 = cljs.core.async.close_BANG_(to);var state_12583__$1 = state_12583;var statearr_12592_12611 = state_12583__$1;(statearr_12592_12611[2] = inst_12570);
(statearr_12592_12611[1] = 10);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12584 === 9))
{var state_12583__$1 = state_12583;var statearr_12593_12612 = state_12583__$1;(statearr_12593_12612[2] = null);
(statearr_12593_12612[1] = 10);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12584 === 10))
{var inst_12573 = (state_12583[2]);var state_12583__$1 = state_12583;var statearr_12594_12613 = state_12583__$1;(statearr_12594_12613[2] = inst_12573);
(statearr_12594_12613[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12584 === 11))
{var inst_12576 = (state_12583[2]);var state_12583__$1 = (function (){var statearr_12595 = state_12583;(statearr_12595[8] = inst_12576);
return statearr_12595;
})();var statearr_12596_12614 = state_12583__$1;(statearr_12596_12614[2] = null);
(statearr_12596_12614[1] = 2);
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
var state_machine__5509__auto____0 = (function (){var statearr_12600 = [null,null,null,null,null,null,null,null,null];(statearr_12600[0] = state_machine__5509__auto__);
(statearr_12600[1] = 1);
return statearr_12600;
});
var state_machine__5509__auto____1 = (function (state_12583){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_12583);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e12601){if((e12601 instanceof Object))
{var ex__5512__auto__ = e12601;var statearr_12602_12615 = state_12583;(statearr_12602_12615[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12583);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e12601;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__12616 = state_12583;
state_12583 = G__12616;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_12583){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_12583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_12603 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_12603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___12604);
return statearr_12603;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5523__auto___12703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_12681){var state_val_12682 = (state_12681[1]);if((state_val_12682 === 1))
{var state_12681__$1 = state_12681;var statearr_12683_12704 = state_12681__$1;(statearr_12683_12704[2] = null);
(statearr_12683_12704[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12682 === 2))
{var state_12681__$1 = state_12681;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12681__$1,4,ch);
} else
{if((state_val_12682 === 3))
{var inst_12679 = (state_12681[2]);var state_12681__$1 = state_12681;return cljs.core.async.impl.ioc_helpers.return_chan(state_12681__$1,inst_12679);
} else
{if((state_val_12682 === 4))
{var inst_12662 = (state_12681[7]);var inst_12662__$1 = (state_12681[2]);var inst_12663 = (inst_12662__$1 == null);var state_12681__$1 = (function (){var statearr_12684 = state_12681;(statearr_12684[7] = inst_12662__$1);
return statearr_12684;
})();if(cljs.core.truth_(inst_12663))
{var statearr_12685_12705 = state_12681__$1;(statearr_12685_12705[1] = 5);
} else
{var statearr_12686_12706 = state_12681__$1;(statearr_12686_12706[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12682 === 5))
{var inst_12665 = cljs.core.async.close_BANG_(tc);var inst_12666 = cljs.core.async.close_BANG_(fc);var state_12681__$1 = (function (){var statearr_12687 = state_12681;(statearr_12687[8] = inst_12665);
return statearr_12687;
})();var statearr_12688_12707 = state_12681__$1;(statearr_12688_12707[2] = inst_12666);
(statearr_12688_12707[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12682 === 6))
{var inst_12662 = (state_12681[7]);var inst_12668 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12662) : p.call(null,inst_12662));var state_12681__$1 = state_12681;if(cljs.core.truth_(inst_12668))
{var statearr_12689_12708 = state_12681__$1;(statearr_12689_12708[1] = 9);
} else
{var statearr_12690_12709 = state_12681__$1;(statearr_12690_12709[1] = 10);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12682 === 7))
{var inst_12677 = (state_12681[2]);var state_12681__$1 = state_12681;var statearr_12691_12710 = state_12681__$1;(statearr_12691_12710[2] = inst_12677);
(statearr_12691_12710[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12682 === 8))
{var inst_12674 = (state_12681[2]);var state_12681__$1 = (function (){var statearr_12692 = state_12681;(statearr_12692[9] = inst_12674);
return statearr_12692;
})();var statearr_12693_12711 = state_12681__$1;(statearr_12693_12711[2] = null);
(statearr_12693_12711[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12682 === 9))
{var state_12681__$1 = state_12681;var statearr_12694_12712 = state_12681__$1;(statearr_12694_12712[2] = tc);
(statearr_12694_12712[1] = 11);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12682 === 10))
{var state_12681__$1 = state_12681;var statearr_12695_12713 = state_12681__$1;(statearr_12695_12713[2] = fc);
(statearr_12695_12713[1] = 11);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12682 === 11))
{var inst_12662 = (state_12681[7]);var inst_12672 = (state_12681[2]);var state_12681__$1 = state_12681;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12681__$1,8,inst_12672,inst_12662);
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
var state_machine__5509__auto____0 = (function (){var statearr_12699 = [null,null,null,null,null,null,null,null,null,null];(statearr_12699[0] = state_machine__5509__auto__);
(statearr_12699[1] = 1);
return statearr_12699;
});
var state_machine__5509__auto____1 = (function (state_12681){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_12681);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e12700){if((e12700 instanceof Object))
{var ex__5512__auto__ = e12700;var statearr_12701_12714 = state_12681;(statearr_12701_12714[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12681);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e12700;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__12715 = state_12681;
state_12681 = G__12715;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_12681){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_12681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_12702 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_12702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___12703);
return statearr_12702;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5523__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_12762){var state_val_12763 = (state_12762[1]);if((state_val_12763 === 7))
{var inst_12758 = (state_12762[2]);var state_12762__$1 = state_12762;var statearr_12764_12780 = state_12762__$1;(statearr_12764_12780[2] = inst_12758);
(statearr_12764_12780[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12763 === 6))
{var inst_12751 = (state_12762[7]);var inst_12748 = (state_12762[8]);var inst_12755 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_12748,inst_12751) : f.call(null,inst_12748,inst_12751));var inst_12748__$1 = inst_12755;var state_12762__$1 = (function (){var statearr_12765 = state_12762;(statearr_12765[8] = inst_12748__$1);
return statearr_12765;
})();var statearr_12766_12781 = state_12762__$1;(statearr_12766_12781[2] = null);
(statearr_12766_12781[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12763 === 5))
{var inst_12748 = (state_12762[8]);var state_12762__$1 = state_12762;var statearr_12767_12782 = state_12762__$1;(statearr_12767_12782[2] = inst_12748);
(statearr_12767_12782[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12763 === 4))
{var inst_12751 = (state_12762[7]);var inst_12751__$1 = (state_12762[2]);var inst_12752 = (inst_12751__$1 == null);var state_12762__$1 = (function (){var statearr_12768 = state_12762;(statearr_12768[7] = inst_12751__$1);
return statearr_12768;
})();if(cljs.core.truth_(inst_12752))
{var statearr_12769_12783 = state_12762__$1;(statearr_12769_12783[1] = 5);
} else
{var statearr_12770_12784 = state_12762__$1;(statearr_12770_12784[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12763 === 3))
{var inst_12760 = (state_12762[2]);var state_12762__$1 = state_12762;return cljs.core.async.impl.ioc_helpers.return_chan(state_12762__$1,inst_12760);
} else
{if((state_val_12763 === 2))
{var state_12762__$1 = state_12762;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12762__$1,4,ch);
} else
{if((state_val_12763 === 1))
{var inst_12748 = init;var state_12762__$1 = (function (){var statearr_12771 = state_12762;(statearr_12771[8] = inst_12748);
return statearr_12771;
})();var statearr_12772_12785 = state_12762__$1;(statearr_12772_12785[2] = null);
(statearr_12772_12785[1] = 2);
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
var state_machine__5509__auto____0 = (function (){var statearr_12776 = [null,null,null,null,null,null,null,null,null];(statearr_12776[0] = state_machine__5509__auto__);
(statearr_12776[1] = 1);
return statearr_12776;
});
var state_machine__5509__auto____1 = (function (state_12762){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_12762);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e12777){if((e12777 instanceof Object))
{var ex__5512__auto__ = e12777;var statearr_12778_12786 = state_12762;(statearr_12778_12786[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12762);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e12777;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__12787 = state_12762;
state_12762 = G__12787;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_12762){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_12762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_12779 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_12779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_12779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return c__5523__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5523__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_12849){var state_val_12850 = (state_12849[1]);if((state_val_12850 === 1))
{var inst_12829 = cljs.core.seq(coll);var inst_12830 = inst_12829;var state_12849__$1 = (function (){var statearr_12851 = state_12849;(statearr_12851[7] = inst_12830);
return statearr_12851;
})();var statearr_12852_12870 = state_12849__$1;(statearr_12852_12870[2] = null);
(statearr_12852_12870[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12850 === 2))
{var inst_12830 = (state_12849[7]);var state_12849__$1 = state_12849;if(cljs.core.truth_(inst_12830))
{var statearr_12853_12871 = state_12849__$1;(statearr_12853_12871[1] = 4);
} else
{var statearr_12854_12872 = state_12849__$1;(statearr_12854_12872[1] = 5);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12850 === 3))
{var inst_12847 = (state_12849[2]);var state_12849__$1 = state_12849;return cljs.core.async.impl.ioc_helpers.return_chan(state_12849__$1,inst_12847);
} else
{if((state_val_12850 === 4))
{var inst_12830 = (state_12849[7]);var inst_12833 = cljs.core.first(inst_12830);var state_12849__$1 = state_12849;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12849__$1,7,ch,inst_12833);
} else
{if((state_val_12850 === 5))
{var state_12849__$1 = state_12849;if(cljs.core.truth_(close_QMARK_))
{var statearr_12855_12873 = state_12849__$1;(statearr_12855_12873[1] = 8);
} else
{var statearr_12856_12874 = state_12849__$1;(statearr_12856_12874[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_12850 === 6))
{var inst_12845 = (state_12849[2]);var state_12849__$1 = state_12849;var statearr_12857_12875 = state_12849__$1;(statearr_12857_12875[2] = inst_12845);
(statearr_12857_12875[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12850 === 7))
{var inst_12830 = (state_12849[7]);var inst_12835 = (state_12849[2]);var inst_12836 = cljs.core.next(inst_12830);var inst_12830__$1 = inst_12836;var state_12849__$1 = (function (){var statearr_12858 = state_12849;(statearr_12858[8] = inst_12835);
(statearr_12858[7] = inst_12830__$1);
return statearr_12858;
})();var statearr_12859_12876 = state_12849__$1;(statearr_12859_12876[2] = null);
(statearr_12859_12876[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12850 === 8))
{var inst_12840 = cljs.core.async.close_BANG_(ch);var state_12849__$1 = state_12849;var statearr_12860_12877 = state_12849__$1;(statearr_12860_12877[2] = inst_12840);
(statearr_12860_12877[1] = 10);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12850 === 9))
{var state_12849__$1 = state_12849;var statearr_12861_12878 = state_12849__$1;(statearr_12861_12878[2] = null);
(statearr_12861_12878[1] = 10);
return cljs.core.constant$keyword$18;
} else
{if((state_val_12850 === 10))
{var inst_12843 = (state_12849[2]);var state_12849__$1 = state_12849;var statearr_12862_12879 = state_12849__$1;(statearr_12862_12879[2] = inst_12843);
(statearr_12862_12879[1] = 6);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_12866 = [null,null,null,null,null,null,null,null,null];(statearr_12866[0] = state_machine__5509__auto__);
(statearr_12866[1] = 1);
return statearr_12866;
});
var state_machine__5509__auto____1 = (function (state_12849){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_12849);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e12867){if((e12867 instanceof Object))
{var ex__5512__auto__ = e12867;var statearr_12868_12880 = state_12849;(statearr_12868_12880[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12849);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e12867;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__12881 = state_12849;
state_12849 = G__12881;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_12849){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_12849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_12869 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_12869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_12869;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return c__5523__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count(100,coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12883 = {};return obj12883;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3396__auto__ = _;if(and__3396__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4029__auto__ = (((_ == null))?null:_);return (function (){var or__3408__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12885 = {};return obj12885;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13109 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13109 = (function (cs,ch,mult,meta13110){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13110 = meta13110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13109.cljs$lang$type = true;
cljs.core.async.t13109.cljs$lang$ctorStr = "cljs.core.async/t13109";
cljs.core.async.t13109.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t13109");
});})(cs))
;
cljs.core.async.t13109.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13109.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13109.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13109.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13109.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13109.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13109.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13111){var self__ = this;
var _13111__$1 = this;return self__.meta13110;
});})(cs))
;
cljs.core.async.t13109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13111,meta13110__$1){var self__ = this;
var _13111__$1 = this;return (new cljs.core.async.t13109(self__.cs,self__.ch,self__.mult,meta13110__$1));
});})(cs))
;
cljs.core.async.__GT_t13109 = ((function (cs){
return (function __GT_t13109(cs__$1,ch__$1,mult__$1,meta13110){return (new cljs.core.async.t13109(cs__$1,ch__$1,mult__$1,meta13110));
});})(cs))
;
}
return (new cljs.core.async.t13109(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5523__auto___13332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_13246){var state_val_13247 = (state_13246[1]);if((state_val_13247 === 32))
{var inst_13114 = (state_13246[7]);var inst_13190 = (state_13246[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_13246,31,Object,null,30);var inst_13197 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13190,inst_13114,done);var state_13246__$1 = state_13246;var statearr_13248_13333 = state_13246__$1;(statearr_13248_13333[2] = inst_13197);
cljs.core.async.impl.ioc_helpers.process_exception(state_13246__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 1))
{var state_13246__$1 = state_13246;var statearr_13249_13334 = state_13246__$1;(statearr_13249_13334[2] = null);
(statearr_13249_13334[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 33))
{var inst_13203 = (state_13246[9]);var inst_13205 = cljs.core.chunked_seq_QMARK_(inst_13203);var state_13246__$1 = state_13246;if(inst_13205)
{var statearr_13250_13335 = state_13246__$1;(statearr_13250_13335[1] = 36);
} else
{var statearr_13251_13336 = state_13246__$1;(statearr_13251_13336[1] = 37);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 2))
{var state_13246__$1 = state_13246;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13246__$1,4,ch);
} else
{if((state_val_13247 === 34))
{var state_13246__$1 = state_13246;var statearr_13252_13337 = state_13246__$1;(statearr_13252_13337[2] = null);
(statearr_13252_13337[1] = 35);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 3))
{var inst_13244 = (state_13246[2]);var state_13246__$1 = state_13246;return cljs.core.async.impl.ioc_helpers.return_chan(state_13246__$1,inst_13244);
} else
{if((state_val_13247 === 35))
{var inst_13228 = (state_13246[2]);var state_13246__$1 = state_13246;var statearr_13253_13338 = state_13246__$1;(statearr_13253_13338[2] = inst_13228);
(statearr_13253_13338[1] = 29);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 4))
{var inst_13114 = (state_13246[7]);var inst_13114__$1 = (state_13246[2]);var inst_13115 = (inst_13114__$1 == null);var state_13246__$1 = (function (){var statearr_13254 = state_13246;(statearr_13254[7] = inst_13114__$1);
return statearr_13254;
})();if(cljs.core.truth_(inst_13115))
{var statearr_13255_13339 = state_13246__$1;(statearr_13255_13339[1] = 5);
} else
{var statearr_13256_13340 = state_13246__$1;(statearr_13256_13340[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 36))
{var inst_13203 = (state_13246[9]);var inst_13207 = cljs.core.chunk_first(inst_13203);var inst_13208 = cljs.core.chunk_rest(inst_13203);var inst_13209 = cljs.core.count(inst_13207);var inst_13182 = inst_13208;var inst_13183 = inst_13207;var inst_13184 = inst_13209;var inst_13185 = 0;var state_13246__$1 = (function (){var statearr_13257 = state_13246;(statearr_13257[10] = inst_13183);
(statearr_13257[11] = inst_13182);
(statearr_13257[12] = inst_13185);
(statearr_13257[13] = inst_13184);
return statearr_13257;
})();var statearr_13258_13341 = state_13246__$1;(statearr_13258_13341[2] = null);
(statearr_13258_13341[1] = 25);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 5))
{var inst_13121 = cljs.core.deref(cs);var inst_13122 = cljs.core.seq(inst_13121);var inst_13123 = inst_13122;var inst_13124 = null;var inst_13125 = 0;var inst_13126 = 0;var state_13246__$1 = (function (){var statearr_13259 = state_13246;(statearr_13259[14] = inst_13126);
(statearr_13259[15] = inst_13125);
(statearr_13259[16] = inst_13124);
(statearr_13259[17] = inst_13123);
return statearr_13259;
})();var statearr_13260_13342 = state_13246__$1;(statearr_13260_13342[2] = null);
(statearr_13260_13342[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 37))
{var inst_13203 = (state_13246[9]);var inst_13212 = cljs.core.first(inst_13203);var state_13246__$1 = (function (){var statearr_13261 = state_13246;(statearr_13261[18] = inst_13212);
return statearr_13261;
})();var statearr_13262_13343 = state_13246__$1;(statearr_13262_13343[2] = null);
(statearr_13262_13343[1] = 41);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 6))
{var inst_13174 = (state_13246[19]);var inst_13173 = cljs.core.deref(cs);var inst_13174__$1 = cljs.core.keys(inst_13173);var inst_13175 = cljs.core.count(inst_13174__$1);var inst_13176 = cljs.core.reset_BANG_(dctr,inst_13175);var inst_13181 = cljs.core.seq(inst_13174__$1);var inst_13182 = inst_13181;var inst_13183 = null;var inst_13184 = 0;var inst_13185 = 0;var state_13246__$1 = (function (){var statearr_13263 = state_13246;(statearr_13263[20] = inst_13176);
(statearr_13263[19] = inst_13174__$1);
(statearr_13263[10] = inst_13183);
(statearr_13263[11] = inst_13182);
(statearr_13263[12] = inst_13185);
(statearr_13263[13] = inst_13184);
return statearr_13263;
})();var statearr_13264_13344 = state_13246__$1;(statearr_13264_13344[2] = null);
(statearr_13264_13344[1] = 25);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 38))
{var inst_13225 = (state_13246[2]);var state_13246__$1 = state_13246;var statearr_13265_13345 = state_13246__$1;(statearr_13265_13345[2] = inst_13225);
(statearr_13265_13345[1] = 35);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 7))
{var inst_13242 = (state_13246[2]);var state_13246__$1 = state_13246;var statearr_13266_13346 = state_13246__$1;(statearr_13266_13346[2] = inst_13242);
(statearr_13266_13346[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 39))
{var inst_13203 = (state_13246[9]);var inst_13221 = (state_13246[2]);var inst_13222 = cljs.core.next(inst_13203);var inst_13182 = inst_13222;var inst_13183 = null;var inst_13184 = 0;var inst_13185 = 0;var state_13246__$1 = (function (){var statearr_13267 = state_13246;(statearr_13267[21] = inst_13221);
(statearr_13267[10] = inst_13183);
(statearr_13267[11] = inst_13182);
(statearr_13267[12] = inst_13185);
(statearr_13267[13] = inst_13184);
return statearr_13267;
})();var statearr_13268_13347 = state_13246__$1;(statearr_13268_13347[2] = null);
(statearr_13268_13347[1] = 25);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 8))
{var inst_13126 = (state_13246[14]);var inst_13125 = (state_13246[15]);var inst_13128 = (inst_13126 < inst_13125);var inst_13129 = inst_13128;var state_13246__$1 = state_13246;if(cljs.core.truth_(inst_13129))
{var statearr_13269_13348 = state_13246__$1;(statearr_13269_13348[1] = 10);
} else
{var statearr_13270_13349 = state_13246__$1;(statearr_13270_13349[1] = 11);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 40))
{var inst_13212 = (state_13246[18]);var inst_13213 = (state_13246[2]);var inst_13214 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_13215 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13212);var state_13246__$1 = (function (){var statearr_13271 = state_13246;(statearr_13271[22] = inst_13214);
(statearr_13271[23] = inst_13213);
return statearr_13271;
})();var statearr_13272_13350 = state_13246__$1;(statearr_13272_13350[2] = inst_13215);
cljs.core.async.impl.ioc_helpers.process_exception(state_13246__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 9))
{var inst_13171 = (state_13246[2]);var state_13246__$1 = state_13246;var statearr_13273_13351 = state_13246__$1;(statearr_13273_13351[2] = inst_13171);
(statearr_13273_13351[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 41))
{var inst_13114 = (state_13246[7]);var inst_13212 = (state_13246[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_13246,40,Object,null,39);var inst_13219 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13212,inst_13114,done);var state_13246__$1 = state_13246;var statearr_13274_13352 = state_13246__$1;(statearr_13274_13352[2] = inst_13219);
cljs.core.async.impl.ioc_helpers.process_exception(state_13246__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 10))
{var inst_13126 = (state_13246[14]);var inst_13124 = (state_13246[16]);var inst_13132 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13124,inst_13126);var inst_13133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13132,0,null);var inst_13134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13132,1,null);var state_13246__$1 = (function (){var statearr_13275 = state_13246;(statearr_13275[24] = inst_13133);
return statearr_13275;
})();if(cljs.core.truth_(inst_13134))
{var statearr_13276_13353 = state_13246__$1;(statearr_13276_13353[1] = 13);
} else
{var statearr_13277_13354 = state_13246__$1;(statearr_13277_13354[1] = 14);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 42))
{var state_13246__$1 = state_13246;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13246__$1,45,dchan);
} else
{if((state_val_13247 === 11))
{var inst_13123 = (state_13246[17]);var inst_13143 = (state_13246[25]);var inst_13143__$1 = cljs.core.seq(inst_13123);var state_13246__$1 = (function (){var statearr_13278 = state_13246;(statearr_13278[25] = inst_13143__$1);
return statearr_13278;
})();if(inst_13143__$1)
{var statearr_13279_13355 = state_13246__$1;(statearr_13279_13355[1] = 16);
} else
{var statearr_13280_13356 = state_13246__$1;(statearr_13280_13356[1] = 17);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 43))
{var state_13246__$1 = state_13246;var statearr_13281_13357 = state_13246__$1;(statearr_13281_13357[2] = null);
(statearr_13281_13357[1] = 44);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 12))
{var inst_13169 = (state_13246[2]);var state_13246__$1 = state_13246;var statearr_13282_13358 = state_13246__$1;(statearr_13282_13358[2] = inst_13169);
(statearr_13282_13358[1] = 9);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 44))
{var inst_13239 = (state_13246[2]);var state_13246__$1 = (function (){var statearr_13283 = state_13246;(statearr_13283[26] = inst_13239);
return statearr_13283;
})();var statearr_13284_13359 = state_13246__$1;(statearr_13284_13359[2] = null);
(statearr_13284_13359[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 13))
{var inst_13133 = (state_13246[24]);var inst_13136 = cljs.core.async.close_BANG_(inst_13133);var state_13246__$1 = state_13246;var statearr_13285_13360 = state_13246__$1;(statearr_13285_13360[2] = inst_13136);
(statearr_13285_13360[1] = 15);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 45))
{var inst_13236 = (state_13246[2]);var state_13246__$1 = state_13246;var statearr_13289_13361 = state_13246__$1;(statearr_13289_13361[2] = inst_13236);
(statearr_13289_13361[1] = 44);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 14))
{var state_13246__$1 = state_13246;var statearr_13290_13362 = state_13246__$1;(statearr_13290_13362[2] = null);
(statearr_13290_13362[1] = 15);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 15))
{var inst_13126 = (state_13246[14]);var inst_13125 = (state_13246[15]);var inst_13124 = (state_13246[16]);var inst_13123 = (state_13246[17]);var inst_13139 = (state_13246[2]);var inst_13140 = (inst_13126 + 1);var tmp13286 = inst_13125;var tmp13287 = inst_13124;var tmp13288 = inst_13123;var inst_13123__$1 = tmp13288;var inst_13124__$1 = tmp13287;var inst_13125__$1 = tmp13286;var inst_13126__$1 = inst_13140;var state_13246__$1 = (function (){var statearr_13291 = state_13246;(statearr_13291[14] = inst_13126__$1);
(statearr_13291[15] = inst_13125__$1);
(statearr_13291[16] = inst_13124__$1);
(statearr_13291[17] = inst_13123__$1);
(statearr_13291[27] = inst_13139);
return statearr_13291;
})();var statearr_13292_13363 = state_13246__$1;(statearr_13292_13363[2] = null);
(statearr_13292_13363[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 16))
{var inst_13143 = (state_13246[25]);var inst_13145 = cljs.core.chunked_seq_QMARK_(inst_13143);var state_13246__$1 = state_13246;if(inst_13145)
{var statearr_13293_13364 = state_13246__$1;(statearr_13293_13364[1] = 19);
} else
{var statearr_13294_13365 = state_13246__$1;(statearr_13294_13365[1] = 20);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 17))
{var state_13246__$1 = state_13246;var statearr_13295_13366 = state_13246__$1;(statearr_13295_13366[2] = null);
(statearr_13295_13366[1] = 18);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 18))
{var inst_13167 = (state_13246[2]);var state_13246__$1 = state_13246;var statearr_13296_13367 = state_13246__$1;(statearr_13296_13367[2] = inst_13167);
(statearr_13296_13367[1] = 12);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 19))
{var inst_13143 = (state_13246[25]);var inst_13147 = cljs.core.chunk_first(inst_13143);var inst_13148 = cljs.core.chunk_rest(inst_13143);var inst_13149 = cljs.core.count(inst_13147);var inst_13123 = inst_13148;var inst_13124 = inst_13147;var inst_13125 = inst_13149;var inst_13126 = 0;var state_13246__$1 = (function (){var statearr_13297 = state_13246;(statearr_13297[14] = inst_13126);
(statearr_13297[15] = inst_13125);
(statearr_13297[16] = inst_13124);
(statearr_13297[17] = inst_13123);
return statearr_13297;
})();var statearr_13298_13368 = state_13246__$1;(statearr_13298_13368[2] = null);
(statearr_13298_13368[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 20))
{var inst_13143 = (state_13246[25]);var inst_13153 = cljs.core.first(inst_13143);var inst_13154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13153,0,null);var inst_13155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13153,1,null);var state_13246__$1 = (function (){var statearr_13299 = state_13246;(statearr_13299[28] = inst_13154);
return statearr_13299;
})();if(cljs.core.truth_(inst_13155))
{var statearr_13300_13369 = state_13246__$1;(statearr_13300_13369[1] = 22);
} else
{var statearr_13301_13370 = state_13246__$1;(statearr_13301_13370[1] = 23);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 21))
{var inst_13164 = (state_13246[2]);var state_13246__$1 = state_13246;var statearr_13302_13371 = state_13246__$1;(statearr_13302_13371[2] = inst_13164);
(statearr_13302_13371[1] = 18);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 22))
{var inst_13154 = (state_13246[28]);var inst_13157 = cljs.core.async.close_BANG_(inst_13154);var state_13246__$1 = state_13246;var statearr_13303_13372 = state_13246__$1;(statearr_13303_13372[2] = inst_13157);
(statearr_13303_13372[1] = 24);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 23))
{var state_13246__$1 = state_13246;var statearr_13304_13373 = state_13246__$1;(statearr_13304_13373[2] = null);
(statearr_13304_13373[1] = 24);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 24))
{var inst_13143 = (state_13246[25]);var inst_13160 = (state_13246[2]);var inst_13161 = cljs.core.next(inst_13143);var inst_13123 = inst_13161;var inst_13124 = null;var inst_13125 = 0;var inst_13126 = 0;var state_13246__$1 = (function (){var statearr_13305 = state_13246;(statearr_13305[14] = inst_13126);
(statearr_13305[15] = inst_13125);
(statearr_13305[16] = inst_13124);
(statearr_13305[17] = inst_13123);
(statearr_13305[29] = inst_13160);
return statearr_13305;
})();var statearr_13306_13374 = state_13246__$1;(statearr_13306_13374[2] = null);
(statearr_13306_13374[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 25))
{var inst_13185 = (state_13246[12]);var inst_13184 = (state_13246[13]);var inst_13187 = (inst_13185 < inst_13184);var inst_13188 = inst_13187;var state_13246__$1 = state_13246;if(cljs.core.truth_(inst_13188))
{var statearr_13307_13375 = state_13246__$1;(statearr_13307_13375[1] = 27);
} else
{var statearr_13308_13376 = state_13246__$1;(statearr_13308_13376[1] = 28);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 26))
{var inst_13174 = (state_13246[19]);var inst_13232 = (state_13246[2]);var inst_13233 = cljs.core.seq(inst_13174);var state_13246__$1 = (function (){var statearr_13309 = state_13246;(statearr_13309[30] = inst_13232);
return statearr_13309;
})();if(inst_13233)
{var statearr_13310_13377 = state_13246__$1;(statearr_13310_13377[1] = 42);
} else
{var statearr_13311_13378 = state_13246__$1;(statearr_13311_13378[1] = 43);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 27))
{var inst_13183 = (state_13246[10]);var inst_13185 = (state_13246[12]);var inst_13190 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13183,inst_13185);var state_13246__$1 = (function (){var statearr_13312 = state_13246;(statearr_13312[8] = inst_13190);
return statearr_13312;
})();var statearr_13313_13379 = state_13246__$1;(statearr_13313_13379[2] = null);
(statearr_13313_13379[1] = 32);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 28))
{var inst_13203 = (state_13246[9]);var inst_13182 = (state_13246[11]);var inst_13203__$1 = cljs.core.seq(inst_13182);var state_13246__$1 = (function (){var statearr_13317 = state_13246;(statearr_13317[9] = inst_13203__$1);
return statearr_13317;
})();if(inst_13203__$1)
{var statearr_13318_13380 = state_13246__$1;(statearr_13318_13380[1] = 33);
} else
{var statearr_13319_13381 = state_13246__$1;(statearr_13319_13381[1] = 34);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 29))
{var inst_13230 = (state_13246[2]);var state_13246__$1 = state_13246;var statearr_13320_13382 = state_13246__$1;(statearr_13320_13382[2] = inst_13230);
(statearr_13320_13382[1] = 26);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 30))
{var inst_13183 = (state_13246[10]);var inst_13182 = (state_13246[11]);var inst_13185 = (state_13246[12]);var inst_13184 = (state_13246[13]);var inst_13199 = (state_13246[2]);var inst_13200 = (inst_13185 + 1);var tmp13314 = inst_13183;var tmp13315 = inst_13182;var tmp13316 = inst_13184;var inst_13182__$1 = tmp13315;var inst_13183__$1 = tmp13314;var inst_13184__$1 = tmp13316;var inst_13185__$1 = inst_13200;var state_13246__$1 = (function (){var statearr_13321 = state_13246;(statearr_13321[31] = inst_13199);
(statearr_13321[10] = inst_13183__$1);
(statearr_13321[11] = inst_13182__$1);
(statearr_13321[12] = inst_13185__$1);
(statearr_13321[13] = inst_13184__$1);
return statearr_13321;
})();var statearr_13322_13383 = state_13246__$1;(statearr_13322_13383[2] = null);
(statearr_13322_13383[1] = 25);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13247 === 31))
{var inst_13190 = (state_13246[8]);var inst_13191 = (state_13246[2]);var inst_13192 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_13193 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13190);var state_13246__$1 = (function (){var statearr_13323 = state_13246;(statearr_13323[32] = inst_13191);
(statearr_13323[33] = inst_13192);
return statearr_13323;
})();var statearr_13324_13384 = state_13246__$1;(statearr_13324_13384[2] = inst_13193);
cljs.core.async.impl.ioc_helpers.process_exception(state_13246__$1);
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
var state_machine__5509__auto____0 = (function (){var statearr_13328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13328[0] = state_machine__5509__auto__);
(statearr_13328[1] = 1);
return statearr_13328;
});
var state_machine__5509__auto____1 = (function (state_13246){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_13246);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e13329){if((e13329 instanceof Object))
{var ex__5512__auto__ = e13329;var statearr_13330_13385 = state_13246;(statearr_13330_13385[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13246);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e13329;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__13386 = state_13246;
state_13246 = G__13386;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_13246){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_13246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_13331 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_13331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___13332);
return statearr_13331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj13388 = {};return obj13388;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$26,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$27);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$26);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v))))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$27,chs);var pauses = pick(cljs.core.constant$keyword$25,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$28,solos,cljs.core.constant$keyword$29,pick(cljs.core.constant$keyword$26,chs),cljs.core.constant$keyword$30,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$25)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13498 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13498 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13499){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta13499 = meta13499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13498.cljs$lang$type = true;
cljs.core.async.t13498.cljs$lang$ctorStr = "cljs.core.async/t13498";
cljs.core.async.t13498.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t13498");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13498.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13498.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13498.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13498.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13498.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13498.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13498.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13498.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13500){var self__ = this;
var _13500__$1 = this;return self__.meta13499;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13500,meta13499__$1){var self__ = this;
var _13500__$1 = this;return (new cljs.core.async.t13498(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13499__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13498 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13498(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13499){return (new cljs.core.async.t13498(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13499));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13498(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5523__auto___13607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_13565){var state_val_13566 = (state_13565[1]);if((state_val_13566 === 1))
{var inst_13504 = (state_13565[7]);var inst_13504__$1 = calc_state();var inst_13505 = cljs.core.seq_QMARK_(inst_13504__$1);var state_13565__$1 = (function (){var statearr_13567 = state_13565;(statearr_13567[7] = inst_13504__$1);
return statearr_13567;
})();if(inst_13505)
{var statearr_13568_13608 = state_13565__$1;(statearr_13568_13608[1] = 2);
} else
{var statearr_13569_13609 = state_13565__$1;(statearr_13569_13609[1] = 3);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13566 === 2))
{var inst_13504 = (state_13565[7]);var inst_13507 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_13504);var state_13565__$1 = state_13565;var statearr_13570_13610 = state_13565__$1;(statearr_13570_13610[2] = inst_13507);
(statearr_13570_13610[1] = 4);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13566 === 3))
{var inst_13504 = (state_13565[7]);var state_13565__$1 = state_13565;var statearr_13571_13611 = state_13565__$1;(statearr_13571_13611[2] = inst_13504);
(statearr_13571_13611[1] = 4);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13566 === 4))
{var inst_13504 = (state_13565[7]);var inst_13510 = (state_13565[2]);var inst_13511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13510,cljs.core.constant$keyword$30);var inst_13512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13510,cljs.core.constant$keyword$29);var inst_13513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13510,cljs.core.constant$keyword$28);var inst_13514 = inst_13504;var state_13565__$1 = (function (){var statearr_13572 = state_13565;(statearr_13572[8] = inst_13513);
(statearr_13572[9] = inst_13514);
(statearr_13572[10] = inst_13512);
(statearr_13572[11] = inst_13511);
return statearr_13572;
})();var statearr_13573_13612 = state_13565__$1;(statearr_13573_13612[2] = null);
(statearr_13573_13612[1] = 5);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13566 === 5))
{var inst_13514 = (state_13565[9]);var inst_13517 = cljs.core.seq_QMARK_(inst_13514);var state_13565__$1 = state_13565;if(inst_13517)
{var statearr_13574_13613 = state_13565__$1;(statearr_13574_13613[1] = 7);
} else
{var statearr_13575_13614 = state_13565__$1;(statearr_13575_13614[1] = 8);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13566 === 6))
{var inst_13563 = (state_13565[2]);var state_13565__$1 = state_13565;return cljs.core.async.impl.ioc_helpers.return_chan(state_13565__$1,inst_13563);
} else
{if((state_val_13566 === 7))
{var inst_13514 = (state_13565[9]);var inst_13519 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_13514);var state_13565__$1 = state_13565;var statearr_13576_13615 = state_13565__$1;(statearr_13576_13615[2] = inst_13519);
(statearr_13576_13615[1] = 9);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13566 === 8))
{var inst_13514 = (state_13565[9]);var state_13565__$1 = state_13565;var statearr_13577_13616 = state_13565__$1;(statearr_13577_13616[2] = inst_13514);
(statearr_13577_13616[1] = 9);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13566 === 9))
{var inst_13522 = (state_13565[12]);var inst_13522__$1 = (state_13565[2]);var inst_13523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13522__$1,cljs.core.constant$keyword$30);var inst_13524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13522__$1,cljs.core.constant$keyword$29);var inst_13525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13522__$1,cljs.core.constant$keyword$28);var state_13565__$1 = (function (){var statearr_13578 = state_13565;(statearr_13578[12] = inst_13522__$1);
(statearr_13578[13] = inst_13524);
(statearr_13578[14] = inst_13525);
return statearr_13578;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_13565__$1,10,inst_13523);
} else
{if((state_val_13566 === 10))
{var inst_13529 = (state_13565[15]);var inst_13530 = (state_13565[16]);var inst_13528 = (state_13565[2]);var inst_13529__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13528,0,null);var inst_13530__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13528,1,null);var inst_13531 = (inst_13529__$1 == null);var inst_13532 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13530__$1,change);var inst_13533 = (inst_13531) || (inst_13532);var state_13565__$1 = (function (){var statearr_13579 = state_13565;(statearr_13579[15] = inst_13529__$1);
(statearr_13579[16] = inst_13530__$1);
return statearr_13579;
})();if(cljs.core.truth_(inst_13533))
{var statearr_13580_13617 = state_13565__$1;(statearr_13580_13617[1] = 11);
} else
{var statearr_13581_13618 = state_13565__$1;(statearr_13581_13618[1] = 12);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13566 === 11))
{var inst_13529 = (state_13565[15]);var inst_13535 = (inst_13529 == null);var state_13565__$1 = state_13565;if(cljs.core.truth_(inst_13535))
{var statearr_13582_13619 = state_13565__$1;(statearr_13582_13619[1] = 14);
} else
{var statearr_13583_13620 = state_13565__$1;(statearr_13583_13620[1] = 15);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13566 === 12))
{var inst_13530 = (state_13565[16]);var inst_13544 = (state_13565[17]);var inst_13525 = (state_13565[14]);var inst_13544__$1 = (inst_13525.cljs$core$IFn$_invoke$arity$1 ? inst_13525.cljs$core$IFn$_invoke$arity$1(inst_13530) : inst_13525.call(null,inst_13530));var state_13565__$1 = (function (){var statearr_13584 = state_13565;(statearr_13584[17] = inst_13544__$1);
return statearr_13584;
})();if(cljs.core.truth_(inst_13544__$1))
{var statearr_13585_13621 = state_13565__$1;(statearr_13585_13621[1] = 17);
} else
{var statearr_13586_13622 = state_13565__$1;(statearr_13586_13622[1] = 18);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13566 === 13))
{var inst_13561 = (state_13565[2]);var state_13565__$1 = state_13565;var statearr_13587_13623 = state_13565__$1;(statearr_13587_13623[2] = inst_13561);
(statearr_13587_13623[1] = 6);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13566 === 14))
{var inst_13530 = (state_13565[16]);var inst_13537 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_13530);var state_13565__$1 = state_13565;var statearr_13588_13624 = state_13565__$1;(statearr_13588_13624[2] = inst_13537);
(statearr_13588_13624[1] = 16);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13566 === 15))
{var state_13565__$1 = state_13565;var statearr_13589_13625 = state_13565__$1;(statearr_13589_13625[2] = null);
(statearr_13589_13625[1] = 16);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13566 === 16))
{var inst_13540 = (state_13565[2]);var inst_13541 = calc_state();var inst_13514 = inst_13541;var state_13565__$1 = (function (){var statearr_13590 = state_13565;(statearr_13590[9] = inst_13514);
(statearr_13590[18] = inst_13540);
return statearr_13590;
})();var statearr_13591_13626 = state_13565__$1;(statearr_13591_13626[2] = null);
(statearr_13591_13626[1] = 5);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13566 === 17))
{var inst_13544 = (state_13565[17]);var state_13565__$1 = state_13565;var statearr_13592_13627 = state_13565__$1;(statearr_13592_13627[2] = inst_13544);
(statearr_13592_13627[1] = 19);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13566 === 18))
{var inst_13530 = (state_13565[16]);var inst_13524 = (state_13565[13]);var inst_13525 = (state_13565[14]);var inst_13547 = cljs.core.empty_QMARK_(inst_13525);var inst_13548 = (inst_13524.cljs$core$IFn$_invoke$arity$1 ? inst_13524.cljs$core$IFn$_invoke$arity$1(inst_13530) : inst_13524.call(null,inst_13530));var inst_13549 = cljs.core.not(inst_13548);var inst_13550 = (inst_13547) && (inst_13549);var state_13565__$1 = state_13565;var statearr_13593_13628 = state_13565__$1;(statearr_13593_13628[2] = inst_13550);
(statearr_13593_13628[1] = 19);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13566 === 19))
{var inst_13552 = (state_13565[2]);var state_13565__$1 = state_13565;if(cljs.core.truth_(inst_13552))
{var statearr_13594_13629 = state_13565__$1;(statearr_13594_13629[1] = 20);
} else
{var statearr_13595_13630 = state_13565__$1;(statearr_13595_13630[1] = 21);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13566 === 20))
{var inst_13529 = (state_13565[15]);var state_13565__$1 = state_13565;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13565__$1,23,out,inst_13529);
} else
{if((state_val_13566 === 21))
{var state_13565__$1 = state_13565;var statearr_13596_13631 = state_13565__$1;(statearr_13596_13631[2] = null);
(statearr_13596_13631[1] = 22);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13566 === 22))
{var inst_13522 = (state_13565[12]);var inst_13558 = (state_13565[2]);var inst_13514 = inst_13522;var state_13565__$1 = (function (){var statearr_13597 = state_13565;(statearr_13597[9] = inst_13514);
(statearr_13597[19] = inst_13558);
return statearr_13597;
})();var statearr_13598_13632 = state_13565__$1;(statearr_13598_13632[2] = null);
(statearr_13598_13632[1] = 5);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13566 === 23))
{var inst_13555 = (state_13565[2]);var state_13565__$1 = state_13565;var statearr_13599_13633 = state_13565__$1;(statearr_13599_13633[2] = inst_13555);
(statearr_13599_13633[1] = 22);
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
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_13603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13603[0] = state_machine__5509__auto__);
(statearr_13603[1] = 1);
return statearr_13603;
});
var state_machine__5509__auto____1 = (function (state_13565){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_13565);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e13604){if((e13604 instanceof Object))
{var ex__5512__auto__ = e13604;var statearr_13605_13634 = state_13565;(statearr_13605_13634[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13565);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e13604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__13635 = state_13565;
state_13565 = G__13635;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_13565){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_13565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_13606 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_13606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___13607);
return statearr_13606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj13637 = {};return obj13637;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3408__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3408__auto__,mults){
return (function (p1__13638_SHARP_){if(cljs.core.truth_((p1__13638_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13638_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13638_SHARP_.call(null,topic))))
{return p1__13638_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13638_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3408__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13763 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13763 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13764){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13764 = meta13764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13763.cljs$lang$type = true;
cljs.core.async.t13763.cljs$lang$ctorStr = "cljs.core.async/t13763";
cljs.core.async.t13763.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t13763");
});})(mults,ensure_mult))
;
cljs.core.async.t13763.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13763.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13763.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13763.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13763.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13763.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13763.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13763.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13765){var self__ = this;
var _13765__$1 = this;return self__.meta13764;
});})(mults,ensure_mult))
;
cljs.core.async.t13763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13765,meta13764__$1){var self__ = this;
var _13765__$1 = this;return (new cljs.core.async.t13763(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13764__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13763 = ((function (mults,ensure_mult){
return (function __GT_t13763(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13764){return (new cljs.core.async.t13763(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13764));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13763(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5523__auto___13887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_13839){var state_val_13840 = (state_13839[1]);if((state_val_13840 === 1))
{var state_13839__$1 = state_13839;var statearr_13841_13888 = state_13839__$1;(statearr_13841_13888[2] = null);
(statearr_13841_13888[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 2))
{var state_13839__$1 = state_13839;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13839__$1,4,ch);
} else
{if((state_val_13840 === 3))
{var inst_13837 = (state_13839[2]);var state_13839__$1 = state_13839;return cljs.core.async.impl.ioc_helpers.return_chan(state_13839__$1,inst_13837);
} else
{if((state_val_13840 === 4))
{var inst_13768 = (state_13839[7]);var inst_13768__$1 = (state_13839[2]);var inst_13769 = (inst_13768__$1 == null);var state_13839__$1 = (function (){var statearr_13842 = state_13839;(statearr_13842[7] = inst_13768__$1);
return statearr_13842;
})();if(cljs.core.truth_(inst_13769))
{var statearr_13843_13889 = state_13839__$1;(statearr_13843_13889[1] = 5);
} else
{var statearr_13844_13890 = state_13839__$1;(statearr_13844_13890[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 5))
{var inst_13775 = cljs.core.deref(mults);var inst_13776 = cljs.core.vals(inst_13775);var inst_13777 = cljs.core.seq(inst_13776);var inst_13778 = inst_13777;var inst_13779 = null;var inst_13780 = 0;var inst_13781 = 0;var state_13839__$1 = (function (){var statearr_13845 = state_13839;(statearr_13845[8] = inst_13778);
(statearr_13845[9] = inst_13779);
(statearr_13845[10] = inst_13780);
(statearr_13845[11] = inst_13781);
return statearr_13845;
})();var statearr_13846_13891 = state_13839__$1;(statearr_13846_13891[2] = null);
(statearr_13846_13891[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 6))
{var inst_13816 = (state_13839[12]);var inst_13818 = (state_13839[13]);var inst_13768 = (state_13839[7]);var inst_13816__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13768) : topic_fn.call(null,inst_13768));var inst_13817 = cljs.core.deref(mults);var inst_13818__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13817,inst_13816__$1);var state_13839__$1 = (function (){var statearr_13847 = state_13839;(statearr_13847[12] = inst_13816__$1);
(statearr_13847[13] = inst_13818__$1);
return statearr_13847;
})();if(cljs.core.truth_(inst_13818__$1))
{var statearr_13848_13892 = state_13839__$1;(statearr_13848_13892[1] = 19);
} else
{var statearr_13849_13893 = state_13839__$1;(statearr_13849_13893[1] = 20);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 7))
{var inst_13835 = (state_13839[2]);var state_13839__$1 = state_13839;var statearr_13850_13894 = state_13839__$1;(statearr_13850_13894[2] = inst_13835);
(statearr_13850_13894[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 8))
{var inst_13780 = (state_13839[10]);var inst_13781 = (state_13839[11]);var inst_13783 = (inst_13781 < inst_13780);var inst_13784 = inst_13783;var state_13839__$1 = state_13839;if(cljs.core.truth_(inst_13784))
{var statearr_13854_13895 = state_13839__$1;(statearr_13854_13895[1] = 10);
} else
{var statearr_13855_13896 = state_13839__$1;(statearr_13855_13896[1] = 11);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 9))
{var inst_13814 = (state_13839[2]);var state_13839__$1 = state_13839;var statearr_13856_13897 = state_13839__$1;(statearr_13856_13897[2] = inst_13814);
(statearr_13856_13897[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 10))
{var inst_13778 = (state_13839[8]);var inst_13779 = (state_13839[9]);var inst_13780 = (state_13839[10]);var inst_13781 = (state_13839[11]);var inst_13786 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13779,inst_13781);var inst_13787 = cljs.core.async.muxch_STAR_(inst_13786);var inst_13788 = cljs.core.async.close_BANG_(inst_13787);var inst_13789 = (inst_13781 + 1);var tmp13851 = inst_13778;var tmp13852 = inst_13779;var tmp13853 = inst_13780;var inst_13778__$1 = tmp13851;var inst_13779__$1 = tmp13852;var inst_13780__$1 = tmp13853;var inst_13781__$1 = inst_13789;var state_13839__$1 = (function (){var statearr_13857 = state_13839;(statearr_13857[14] = inst_13788);
(statearr_13857[8] = inst_13778__$1);
(statearr_13857[9] = inst_13779__$1);
(statearr_13857[10] = inst_13780__$1);
(statearr_13857[11] = inst_13781__$1);
return statearr_13857;
})();var statearr_13858_13898 = state_13839__$1;(statearr_13858_13898[2] = null);
(statearr_13858_13898[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 11))
{var inst_13792 = (state_13839[15]);var inst_13778 = (state_13839[8]);var inst_13792__$1 = cljs.core.seq(inst_13778);var state_13839__$1 = (function (){var statearr_13859 = state_13839;(statearr_13859[15] = inst_13792__$1);
return statearr_13859;
})();if(inst_13792__$1)
{var statearr_13860_13899 = state_13839__$1;(statearr_13860_13899[1] = 13);
} else
{var statearr_13861_13900 = state_13839__$1;(statearr_13861_13900[1] = 14);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 12))
{var inst_13812 = (state_13839[2]);var state_13839__$1 = state_13839;var statearr_13862_13901 = state_13839__$1;(statearr_13862_13901[2] = inst_13812);
(statearr_13862_13901[1] = 9);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 13))
{var inst_13792 = (state_13839[15]);var inst_13794 = cljs.core.chunked_seq_QMARK_(inst_13792);var state_13839__$1 = state_13839;if(inst_13794)
{var statearr_13863_13902 = state_13839__$1;(statearr_13863_13902[1] = 16);
} else
{var statearr_13864_13903 = state_13839__$1;(statearr_13864_13903[1] = 17);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 14))
{var state_13839__$1 = state_13839;var statearr_13865_13904 = state_13839__$1;(statearr_13865_13904[2] = null);
(statearr_13865_13904[1] = 15);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 15))
{var inst_13810 = (state_13839[2]);var state_13839__$1 = state_13839;var statearr_13866_13905 = state_13839__$1;(statearr_13866_13905[2] = inst_13810);
(statearr_13866_13905[1] = 12);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 16))
{var inst_13792 = (state_13839[15]);var inst_13796 = cljs.core.chunk_first(inst_13792);var inst_13797 = cljs.core.chunk_rest(inst_13792);var inst_13798 = cljs.core.count(inst_13796);var inst_13778 = inst_13797;var inst_13779 = inst_13796;var inst_13780 = inst_13798;var inst_13781 = 0;var state_13839__$1 = (function (){var statearr_13867 = state_13839;(statearr_13867[8] = inst_13778);
(statearr_13867[9] = inst_13779);
(statearr_13867[10] = inst_13780);
(statearr_13867[11] = inst_13781);
return statearr_13867;
})();var statearr_13868_13906 = state_13839__$1;(statearr_13868_13906[2] = null);
(statearr_13868_13906[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 17))
{var inst_13792 = (state_13839[15]);var inst_13801 = cljs.core.first(inst_13792);var inst_13802 = cljs.core.async.muxch_STAR_(inst_13801);var inst_13803 = cljs.core.async.close_BANG_(inst_13802);var inst_13804 = cljs.core.next(inst_13792);var inst_13778 = inst_13804;var inst_13779 = null;var inst_13780 = 0;var inst_13781 = 0;var state_13839__$1 = (function (){var statearr_13869 = state_13839;(statearr_13869[16] = inst_13803);
(statearr_13869[8] = inst_13778);
(statearr_13869[9] = inst_13779);
(statearr_13869[10] = inst_13780);
(statearr_13869[11] = inst_13781);
return statearr_13869;
})();var statearr_13870_13907 = state_13839__$1;(statearr_13870_13907[2] = null);
(statearr_13870_13907[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 18))
{var inst_13807 = (state_13839[2]);var state_13839__$1 = state_13839;var statearr_13871_13908 = state_13839__$1;(statearr_13871_13908[2] = inst_13807);
(statearr_13871_13908[1] = 15);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 19))
{var state_13839__$1 = state_13839;var statearr_13872_13909 = state_13839__$1;(statearr_13872_13909[2] = null);
(statearr_13872_13909[1] = 24);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 20))
{var state_13839__$1 = state_13839;var statearr_13873_13910 = state_13839__$1;(statearr_13873_13910[2] = null);
(statearr_13873_13910[1] = 21);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 21))
{var inst_13832 = (state_13839[2]);var state_13839__$1 = (function (){var statearr_13874 = state_13839;(statearr_13874[17] = inst_13832);
return statearr_13874;
})();var statearr_13875_13911 = state_13839__$1;(statearr_13875_13911[2] = null);
(statearr_13875_13911[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 22))
{var inst_13829 = (state_13839[2]);var state_13839__$1 = state_13839;var statearr_13876_13912 = state_13839__$1;(statearr_13876_13912[2] = inst_13829);
(statearr_13876_13912[1] = 21);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 23))
{var inst_13816 = (state_13839[12]);var inst_13820 = (state_13839[2]);var inst_13821 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13816);var state_13839__$1 = (function (){var statearr_13877 = state_13839;(statearr_13877[18] = inst_13820);
return statearr_13877;
})();var statearr_13878_13913 = state_13839__$1;(statearr_13878_13913[2] = inst_13821);
cljs.core.async.impl.ioc_helpers.process_exception(state_13839__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_13840 === 24))
{var inst_13818 = (state_13839[13]);var inst_13768 = (state_13839[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_13839,23,Object,null,22);var inst_13825 = cljs.core.async.muxch_STAR_(inst_13818);var state_13839__$1 = state_13839;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13839__$1,25,inst_13825,inst_13768);
} else
{if((state_val_13840 === 25))
{var inst_13827 = (state_13839[2]);var state_13839__$1 = state_13839;var statearr_13879_13914 = state_13839__$1;(statearr_13879_13914[2] = inst_13827);
cljs.core.async.impl.ioc_helpers.process_exception(state_13839__$1);
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
var state_machine__5509__auto____0 = (function (){var statearr_13883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13883[0] = state_machine__5509__auto__);
(statearr_13883[1] = 1);
return statearr_13883;
});
var state_machine__5509__auto____1 = (function (state_13839){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_13839);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e13884){if((e13884 instanceof Object))
{var ex__5512__auto__ = e13884;var statearr_13885_13915 = state_13839;(statearr_13885_13915[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13839);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e13884;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__13916 = state_13839;
state_13839 = G__13916;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_13839){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_13839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_13886 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_13886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___13887);
return statearr_13886;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5523__auto___14053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_14023){var state_val_14024 = (state_14023[1]);if((state_val_14024 === 1))
{var state_14023__$1 = state_14023;var statearr_14025_14054 = state_14023__$1;(statearr_14025_14054[2] = null);
(statearr_14025_14054[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14024 === 2))
{var inst_13986 = cljs.core.reset_BANG_(dctr,cnt);var inst_13987 = 0;var state_14023__$1 = (function (){var statearr_14026 = state_14023;(statearr_14026[7] = inst_13986);
(statearr_14026[8] = inst_13987);
return statearr_14026;
})();var statearr_14027_14055 = state_14023__$1;(statearr_14027_14055[2] = null);
(statearr_14027_14055[1] = 4);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14024 === 3))
{var inst_14021 = (state_14023[2]);var state_14023__$1 = state_14023;return cljs.core.async.impl.ioc_helpers.return_chan(state_14023__$1,inst_14021);
} else
{if((state_val_14024 === 4))
{var inst_13987 = (state_14023[8]);var inst_13989 = (inst_13987 < cnt);var state_14023__$1 = state_14023;if(cljs.core.truth_(inst_13989))
{var statearr_14028_14056 = state_14023__$1;(statearr_14028_14056[1] = 6);
} else
{var statearr_14029_14057 = state_14023__$1;(statearr_14029_14057[1] = 7);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_14024 === 5))
{var inst_14007 = (state_14023[2]);var state_14023__$1 = (function (){var statearr_14030 = state_14023;(statearr_14030[9] = inst_14007);
return statearr_14030;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14023__$1,12,dchan);
} else
{if((state_val_14024 === 6))
{var state_14023__$1 = state_14023;var statearr_14031_14058 = state_14023__$1;(statearr_14031_14058[2] = null);
(statearr_14031_14058[1] = 11);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14024 === 7))
{var state_14023__$1 = state_14023;var statearr_14032_14059 = state_14023__$1;(statearr_14032_14059[2] = null);
(statearr_14032_14059[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14024 === 8))
{var inst_14005 = (state_14023[2]);var state_14023__$1 = state_14023;var statearr_14033_14060 = state_14023__$1;(statearr_14033_14060[2] = inst_14005);
(statearr_14033_14060[1] = 5);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14024 === 9))
{var inst_13987 = (state_14023[8]);var inst_14000 = (state_14023[2]);var inst_14001 = (inst_13987 + 1);var inst_13987__$1 = inst_14001;var state_14023__$1 = (function (){var statearr_14034 = state_14023;(statearr_14034[10] = inst_14000);
(statearr_14034[8] = inst_13987__$1);
return statearr_14034;
})();var statearr_14035_14061 = state_14023__$1;(statearr_14035_14061[2] = null);
(statearr_14035_14061[1] = 4);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14024 === 10))
{var inst_13991 = (state_14023[2]);var inst_13992 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_14023__$1 = (function (){var statearr_14036 = state_14023;(statearr_14036[11] = inst_13991);
return statearr_14036;
})();var statearr_14037_14062 = state_14023__$1;(statearr_14037_14062[2] = inst_13992);
cljs.core.async.impl.ioc_helpers.process_exception(state_14023__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14024 === 11))
{var inst_13987 = (state_14023[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_14023,10,Object,null,9);var inst_13996 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13987) : chs__$1.call(null,inst_13987));var inst_13997 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13987) : done.call(null,inst_13987));var inst_13998 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13996,inst_13997);var state_14023__$1 = state_14023;var statearr_14038_14063 = state_14023__$1;(statearr_14038_14063[2] = inst_13998);
cljs.core.async.impl.ioc_helpers.process_exception(state_14023__$1);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14024 === 12))
{var inst_14009 = (state_14023[12]);var inst_14009__$1 = (state_14023[2]);var inst_14010 = cljs.core.some(cljs.core.nil_QMARK_,inst_14009__$1);var state_14023__$1 = (function (){var statearr_14039 = state_14023;(statearr_14039[12] = inst_14009__$1);
return statearr_14039;
})();if(cljs.core.truth_(inst_14010))
{var statearr_14040_14064 = state_14023__$1;(statearr_14040_14064[1] = 13);
} else
{var statearr_14041_14065 = state_14023__$1;(statearr_14041_14065[1] = 14);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_14024 === 13))
{var inst_14012 = cljs.core.async.close_BANG_(out);var state_14023__$1 = state_14023;var statearr_14042_14066 = state_14023__$1;(statearr_14042_14066[2] = inst_14012);
(statearr_14042_14066[1] = 15);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14024 === 14))
{var inst_14009 = (state_14023[12]);var inst_14014 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_14009);var state_14023__$1 = state_14023;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14023__$1,16,out,inst_14014);
} else
{if((state_val_14024 === 15))
{var inst_14019 = (state_14023[2]);var state_14023__$1 = state_14023;var statearr_14043_14067 = state_14023__$1;(statearr_14043_14067[2] = inst_14019);
(statearr_14043_14067[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14024 === 16))
{var inst_14016 = (state_14023[2]);var state_14023__$1 = (function (){var statearr_14044 = state_14023;(statearr_14044[13] = inst_14016);
return statearr_14044;
})();var statearr_14045_14068 = state_14023__$1;(statearr_14045_14068[2] = null);
(statearr_14045_14068[1] = 2);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_14049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14049[0] = state_machine__5509__auto__);
(statearr_14049[1] = 1);
return statearr_14049;
});
var state_machine__5509__auto____1 = (function (state_14023){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_14023);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e14050){if((e14050 instanceof Object))
{var ex__5512__auto__ = e14050;var statearr_14051_14069 = state_14023;(statearr_14051_14069[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_14023);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e14050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__14070 = state_14023;
state_14023 = G__14070;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_14023){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_14023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_14052 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_14052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___14053);
return statearr_14052;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5523__auto___14178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_14154){var state_val_14155 = (state_14154[1]);if((state_val_14155 === 1))
{var inst_14125 = cljs.core.vec(chs);var inst_14126 = inst_14125;var state_14154__$1 = (function (){var statearr_14156 = state_14154;(statearr_14156[7] = inst_14126);
return statearr_14156;
})();var statearr_14157_14179 = state_14154__$1;(statearr_14157_14179[2] = null);
(statearr_14157_14179[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14155 === 2))
{var inst_14126 = (state_14154[7]);var inst_14128 = cljs.core.count(inst_14126);var inst_14129 = (inst_14128 > 0);var state_14154__$1 = state_14154;if(cljs.core.truth_(inst_14129))
{var statearr_14158_14180 = state_14154__$1;(statearr_14158_14180[1] = 4);
} else
{var statearr_14159_14181 = state_14154__$1;(statearr_14159_14181[1] = 5);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_14155 === 3))
{var inst_14152 = (state_14154[2]);var state_14154__$1 = state_14154;return cljs.core.async.impl.ioc_helpers.return_chan(state_14154__$1,inst_14152);
} else
{if((state_val_14155 === 4))
{var inst_14126 = (state_14154[7]);var state_14154__$1 = state_14154;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_14154__$1,7,inst_14126);
} else
{if((state_val_14155 === 5))
{var inst_14148 = cljs.core.async.close_BANG_(out);var state_14154__$1 = state_14154;var statearr_14160_14182 = state_14154__$1;(statearr_14160_14182[2] = inst_14148);
(statearr_14160_14182[1] = 6);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14155 === 6))
{var inst_14150 = (state_14154[2]);var state_14154__$1 = state_14154;var statearr_14161_14183 = state_14154__$1;(statearr_14161_14183[2] = inst_14150);
(statearr_14161_14183[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14155 === 7))
{var inst_14134 = (state_14154[8]);var inst_14133 = (state_14154[9]);var inst_14133__$1 = (state_14154[2]);var inst_14134__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14133__$1,0,null);var inst_14135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14133__$1,1,null);var inst_14136 = (inst_14134__$1 == null);var state_14154__$1 = (function (){var statearr_14162 = state_14154;(statearr_14162[8] = inst_14134__$1);
(statearr_14162[10] = inst_14135);
(statearr_14162[9] = inst_14133__$1);
return statearr_14162;
})();if(cljs.core.truth_(inst_14136))
{var statearr_14163_14184 = state_14154__$1;(statearr_14163_14184[1] = 8);
} else
{var statearr_14164_14185 = state_14154__$1;(statearr_14164_14185[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_14155 === 8))
{var inst_14134 = (state_14154[8]);var inst_14135 = (state_14154[10]);var inst_14133 = (state_14154[9]);var inst_14126 = (state_14154[7]);var inst_14138 = (function (){var c = inst_14135;var v = inst_14134;var vec__14131 = inst_14133;var cs = inst_14126;return ((function (c,v,vec__14131,cs,inst_14134,inst_14135,inst_14133,inst_14126,state_val_14155){
return (function (p1__14071_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__14071_SHARP_);
});
;})(c,v,vec__14131,cs,inst_14134,inst_14135,inst_14133,inst_14126,state_val_14155))
})();var inst_14139 = cljs.core.filterv(inst_14138,inst_14126);var inst_14126__$1 = inst_14139;var state_14154__$1 = (function (){var statearr_14165 = state_14154;(statearr_14165[7] = inst_14126__$1);
return statearr_14165;
})();var statearr_14166_14186 = state_14154__$1;(statearr_14166_14186[2] = null);
(statearr_14166_14186[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14155 === 9))
{var inst_14134 = (state_14154[8]);var state_14154__$1 = state_14154;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14154__$1,11,out,inst_14134);
} else
{if((state_val_14155 === 10))
{var inst_14146 = (state_14154[2]);var state_14154__$1 = state_14154;var statearr_14168_14187 = state_14154__$1;(statearr_14168_14187[2] = inst_14146);
(statearr_14168_14187[1] = 6);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14155 === 11))
{var inst_14126 = (state_14154[7]);var inst_14143 = (state_14154[2]);var tmp14167 = inst_14126;var inst_14126__$1 = tmp14167;var state_14154__$1 = (function (){var statearr_14169 = state_14154;(statearr_14169[7] = inst_14126__$1);
(statearr_14169[11] = inst_14143);
return statearr_14169;
})();var statearr_14170_14188 = state_14154__$1;(statearr_14170_14188[2] = null);
(statearr_14170_14188[1] = 2);
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
var state_machine__5509__auto____0 = (function (){var statearr_14174 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14174[0] = state_machine__5509__auto__);
(statearr_14174[1] = 1);
return statearr_14174;
});
var state_machine__5509__auto____1 = (function (state_14154){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_14154);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e14175){if((e14175 instanceof Object))
{var ex__5512__auto__ = e14175;var statearr_14176_14189 = state_14154;(statearr_14176_14189[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_14154);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e14175;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__14190 = state_14154;
state_14154 = G__14190;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_14154){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_14154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_14177 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_14177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___14178);
return statearr_14177;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5523__auto___14283 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_14260){var state_val_14261 = (state_14260[1]);if((state_val_14261 === 1))
{var inst_14237 = 0;var state_14260__$1 = (function (){var statearr_14262 = state_14260;(statearr_14262[7] = inst_14237);
return statearr_14262;
})();var statearr_14263_14284 = state_14260__$1;(statearr_14263_14284[2] = null);
(statearr_14263_14284[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14261 === 2))
{var inst_14237 = (state_14260[7]);var inst_14239 = (inst_14237 < n);var state_14260__$1 = state_14260;if(cljs.core.truth_(inst_14239))
{var statearr_14264_14285 = state_14260__$1;(statearr_14264_14285[1] = 4);
} else
{var statearr_14265_14286 = state_14260__$1;(statearr_14265_14286[1] = 5);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_14261 === 3))
{var inst_14257 = (state_14260[2]);var inst_14258 = cljs.core.async.close_BANG_(out);var state_14260__$1 = (function (){var statearr_14266 = state_14260;(statearr_14266[8] = inst_14257);
return statearr_14266;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_14260__$1,inst_14258);
} else
{if((state_val_14261 === 4))
{var state_14260__$1 = state_14260;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14260__$1,7,ch);
} else
{if((state_val_14261 === 5))
{var state_14260__$1 = state_14260;var statearr_14267_14287 = state_14260__$1;(statearr_14267_14287[2] = null);
(statearr_14267_14287[1] = 6);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14261 === 6))
{var inst_14255 = (state_14260[2]);var state_14260__$1 = state_14260;var statearr_14268_14288 = state_14260__$1;(statearr_14268_14288[2] = inst_14255);
(statearr_14268_14288[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14261 === 7))
{var inst_14242 = (state_14260[9]);var inst_14242__$1 = (state_14260[2]);var inst_14243 = (inst_14242__$1 == null);var inst_14244 = cljs.core.not(inst_14243);var state_14260__$1 = (function (){var statearr_14269 = state_14260;(statearr_14269[9] = inst_14242__$1);
return statearr_14269;
})();if(inst_14244)
{var statearr_14270_14289 = state_14260__$1;(statearr_14270_14289[1] = 8);
} else
{var statearr_14271_14290 = state_14260__$1;(statearr_14271_14290[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_14261 === 8))
{var inst_14242 = (state_14260[9]);var state_14260__$1 = state_14260;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14260__$1,11,out,inst_14242);
} else
{if((state_val_14261 === 9))
{var state_14260__$1 = state_14260;var statearr_14272_14291 = state_14260__$1;(statearr_14272_14291[2] = null);
(statearr_14272_14291[1] = 10);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14261 === 10))
{var inst_14252 = (state_14260[2]);var state_14260__$1 = state_14260;var statearr_14273_14292 = state_14260__$1;(statearr_14273_14292[2] = inst_14252);
(statearr_14273_14292[1] = 6);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14261 === 11))
{var inst_14237 = (state_14260[7]);var inst_14247 = (state_14260[2]);var inst_14248 = (inst_14237 + 1);var inst_14237__$1 = inst_14248;var state_14260__$1 = (function (){var statearr_14274 = state_14260;(statearr_14274[10] = inst_14247);
(statearr_14274[7] = inst_14237__$1);
return statearr_14274;
})();var statearr_14275_14293 = state_14260__$1;(statearr_14275_14293[2] = null);
(statearr_14275_14293[1] = 2);
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
var state_machine__5509__auto____0 = (function (){var statearr_14279 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14279[0] = state_machine__5509__auto__);
(statearr_14279[1] = 1);
return statearr_14279;
});
var state_machine__5509__auto____1 = (function (state_14260){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_14260);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e14280){if((e14280 instanceof Object))
{var ex__5512__auto__ = e14280;var statearr_14281_14294 = state_14260;(statearr_14281_14294[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_14260);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e14280;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__14295 = state_14260;
state_14260 = G__14295;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_14260){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_14260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_14282 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_14282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___14283);
return statearr_14282;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5523__auto___14392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_14367){var state_val_14368 = (state_14367[1]);if((state_val_14368 === 1))
{var inst_14344 = null;var state_14367__$1 = (function (){var statearr_14369 = state_14367;(statearr_14369[7] = inst_14344);
return statearr_14369;
})();var statearr_14370_14393 = state_14367__$1;(statearr_14370_14393[2] = null);
(statearr_14370_14393[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14368 === 2))
{var state_14367__$1 = state_14367;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14367__$1,4,ch);
} else
{if((state_val_14368 === 3))
{var inst_14364 = (state_14367[2]);var inst_14365 = cljs.core.async.close_BANG_(out);var state_14367__$1 = (function (){var statearr_14371 = state_14367;(statearr_14371[8] = inst_14364);
return statearr_14371;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_14367__$1,inst_14365);
} else
{if((state_val_14368 === 4))
{var inst_14347 = (state_14367[9]);var inst_14347__$1 = (state_14367[2]);var inst_14348 = (inst_14347__$1 == null);var inst_14349 = cljs.core.not(inst_14348);var state_14367__$1 = (function (){var statearr_14372 = state_14367;(statearr_14372[9] = inst_14347__$1);
return statearr_14372;
})();if(inst_14349)
{var statearr_14373_14394 = state_14367__$1;(statearr_14373_14394[1] = 5);
} else
{var statearr_14374_14395 = state_14367__$1;(statearr_14374_14395[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_14368 === 5))
{var inst_14344 = (state_14367[7]);var inst_14347 = (state_14367[9]);var inst_14351 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14347,inst_14344);var state_14367__$1 = state_14367;if(inst_14351)
{var statearr_14375_14396 = state_14367__$1;(statearr_14375_14396[1] = 8);
} else
{var statearr_14376_14397 = state_14367__$1;(statearr_14376_14397[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_14368 === 6))
{var state_14367__$1 = state_14367;var statearr_14378_14398 = state_14367__$1;(statearr_14378_14398[2] = null);
(statearr_14378_14398[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14368 === 7))
{var inst_14362 = (state_14367[2]);var state_14367__$1 = state_14367;var statearr_14379_14399 = state_14367__$1;(statearr_14379_14399[2] = inst_14362);
(statearr_14379_14399[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14368 === 8))
{var inst_14344 = (state_14367[7]);var tmp14377 = inst_14344;var inst_14344__$1 = tmp14377;var state_14367__$1 = (function (){var statearr_14380 = state_14367;(statearr_14380[7] = inst_14344__$1);
return statearr_14380;
})();var statearr_14381_14400 = state_14367__$1;(statearr_14381_14400[2] = null);
(statearr_14381_14400[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14368 === 9))
{var inst_14347 = (state_14367[9]);var state_14367__$1 = state_14367;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14367__$1,11,out,inst_14347);
} else
{if((state_val_14368 === 10))
{var inst_14359 = (state_14367[2]);var state_14367__$1 = state_14367;var statearr_14382_14401 = state_14367__$1;(statearr_14382_14401[2] = inst_14359);
(statearr_14382_14401[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14368 === 11))
{var inst_14347 = (state_14367[9]);var inst_14356 = (state_14367[2]);var inst_14344 = inst_14347;var state_14367__$1 = (function (){var statearr_14383 = state_14367;(statearr_14383[7] = inst_14344);
(statearr_14383[10] = inst_14356);
return statearr_14383;
})();var statearr_14384_14402 = state_14367__$1;(statearr_14384_14402[2] = null);
(statearr_14384_14402[1] = 2);
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
var state_machine__5509__auto____0 = (function (){var statearr_14388 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14388[0] = state_machine__5509__auto__);
(statearr_14388[1] = 1);
return statearr_14388;
});
var state_machine__5509__auto____1 = (function (state_14367){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_14367);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e14389){if((e14389 instanceof Object))
{var ex__5512__auto__ = e14389;var statearr_14390_14403 = state_14367;(statearr_14390_14403[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_14367);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e14389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__14404 = state_14367;
state_14367 = G__14404;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_14367){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_14367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_14391 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_14391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___14392);
return statearr_14391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5523__auto___14539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_14509){var state_val_14510 = (state_14509[1]);if((state_val_14510 === 1))
{var inst_14472 = (new Array(n));var inst_14473 = inst_14472;var inst_14474 = 0;var state_14509__$1 = (function (){var statearr_14511 = state_14509;(statearr_14511[7] = inst_14473);
(statearr_14511[8] = inst_14474);
return statearr_14511;
})();var statearr_14512_14540 = state_14509__$1;(statearr_14512_14540[2] = null);
(statearr_14512_14540[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14510 === 2))
{var state_14509__$1 = state_14509;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14509__$1,4,ch);
} else
{if((state_val_14510 === 3))
{var inst_14507 = (state_14509[2]);var state_14509__$1 = state_14509;return cljs.core.async.impl.ioc_helpers.return_chan(state_14509__$1,inst_14507);
} else
{if((state_val_14510 === 4))
{var inst_14477 = (state_14509[9]);var inst_14477__$1 = (state_14509[2]);var inst_14478 = (inst_14477__$1 == null);var inst_14479 = cljs.core.not(inst_14478);var state_14509__$1 = (function (){var statearr_14513 = state_14509;(statearr_14513[9] = inst_14477__$1);
return statearr_14513;
})();if(inst_14479)
{var statearr_14514_14541 = state_14509__$1;(statearr_14514_14541[1] = 5);
} else
{var statearr_14515_14542 = state_14509__$1;(statearr_14515_14542[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_14510 === 5))
{var inst_14482 = (state_14509[10]);var inst_14477 = (state_14509[9]);var inst_14473 = (state_14509[7]);var inst_14474 = (state_14509[8]);var inst_14481 = (inst_14473[inst_14474] = inst_14477);var inst_14482__$1 = (inst_14474 + 1);var inst_14483 = (inst_14482__$1 < n);var state_14509__$1 = (function (){var statearr_14516 = state_14509;(statearr_14516[11] = inst_14481);
(statearr_14516[10] = inst_14482__$1);
return statearr_14516;
})();if(cljs.core.truth_(inst_14483))
{var statearr_14517_14543 = state_14509__$1;(statearr_14517_14543[1] = 8);
} else
{var statearr_14518_14544 = state_14509__$1;(statearr_14518_14544[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_14510 === 6))
{var inst_14474 = (state_14509[8]);var inst_14495 = (inst_14474 > 0);var state_14509__$1 = state_14509;if(cljs.core.truth_(inst_14495))
{var statearr_14520_14545 = state_14509__$1;(statearr_14520_14545[1] = 12);
} else
{var statearr_14521_14546 = state_14509__$1;(statearr_14521_14546[1] = 13);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_14510 === 7))
{var inst_14505 = (state_14509[2]);var state_14509__$1 = state_14509;var statearr_14522_14547 = state_14509__$1;(statearr_14522_14547[2] = inst_14505);
(statearr_14522_14547[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14510 === 8))
{var inst_14482 = (state_14509[10]);var inst_14473 = (state_14509[7]);var tmp14519 = inst_14473;var inst_14473__$1 = tmp14519;var inst_14474 = inst_14482;var state_14509__$1 = (function (){var statearr_14523 = state_14509;(statearr_14523[7] = inst_14473__$1);
(statearr_14523[8] = inst_14474);
return statearr_14523;
})();var statearr_14524_14548 = state_14509__$1;(statearr_14524_14548[2] = null);
(statearr_14524_14548[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14510 === 9))
{var inst_14473 = (state_14509[7]);var inst_14487 = cljs.core.vec(inst_14473);var state_14509__$1 = state_14509;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14509__$1,11,out,inst_14487);
} else
{if((state_val_14510 === 10))
{var inst_14493 = (state_14509[2]);var state_14509__$1 = state_14509;var statearr_14525_14549 = state_14509__$1;(statearr_14525_14549[2] = inst_14493);
(statearr_14525_14549[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14510 === 11))
{var inst_14489 = (state_14509[2]);var inst_14490 = (new Array(n));var inst_14473 = inst_14490;var inst_14474 = 0;var state_14509__$1 = (function (){var statearr_14526 = state_14509;(statearr_14526[12] = inst_14489);
(statearr_14526[7] = inst_14473);
(statearr_14526[8] = inst_14474);
return statearr_14526;
})();var statearr_14527_14550 = state_14509__$1;(statearr_14527_14550[2] = null);
(statearr_14527_14550[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14510 === 12))
{var inst_14473 = (state_14509[7]);var inst_14497 = cljs.core.vec(inst_14473);var state_14509__$1 = state_14509;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14509__$1,15,out,inst_14497);
} else
{if((state_val_14510 === 13))
{var state_14509__$1 = state_14509;var statearr_14528_14551 = state_14509__$1;(statearr_14528_14551[2] = null);
(statearr_14528_14551[1] = 14);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14510 === 14))
{var inst_14502 = (state_14509[2]);var inst_14503 = cljs.core.async.close_BANG_(out);var state_14509__$1 = (function (){var statearr_14529 = state_14509;(statearr_14529[13] = inst_14502);
return statearr_14529;
})();var statearr_14530_14552 = state_14509__$1;(statearr_14530_14552[2] = inst_14503);
(statearr_14530_14552[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14510 === 15))
{var inst_14499 = (state_14509[2]);var state_14509__$1 = state_14509;var statearr_14531_14553 = state_14509__$1;(statearr_14531_14553[2] = inst_14499);
(statearr_14531_14553[1] = 14);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_14535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14535[0] = state_machine__5509__auto__);
(statearr_14535[1] = 1);
return statearr_14535;
});
var state_machine__5509__auto____1 = (function (state_14509){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_14509);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e14536){if((e14536 instanceof Object))
{var ex__5512__auto__ = e14536;var statearr_14537_14554 = state_14509;(statearr_14537_14554[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_14509);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e14536;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__14555 = state_14509;
state_14509 = G__14555;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_14509){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_14509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_14538 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_14538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___14539);
return statearr_14538;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5523__auto___14698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_14668){var state_val_14669 = (state_14668[1]);if((state_val_14669 === 1))
{var inst_14627 = [];var inst_14628 = inst_14627;var inst_14629 = cljs.core.constant$keyword$31;var state_14668__$1 = (function (){var statearr_14670 = state_14668;(statearr_14670[7] = inst_14629);
(statearr_14670[8] = inst_14628);
return statearr_14670;
})();var statearr_14671_14699 = state_14668__$1;(statearr_14671_14699[2] = null);
(statearr_14671_14699[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14669 === 2))
{var state_14668__$1 = state_14668;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14668__$1,4,ch);
} else
{if((state_val_14669 === 3))
{var inst_14666 = (state_14668[2]);var state_14668__$1 = state_14668;return cljs.core.async.impl.ioc_helpers.return_chan(state_14668__$1,inst_14666);
} else
{if((state_val_14669 === 4))
{var inst_14632 = (state_14668[9]);var inst_14632__$1 = (state_14668[2]);var inst_14633 = (inst_14632__$1 == null);var inst_14634 = cljs.core.not(inst_14633);var state_14668__$1 = (function (){var statearr_14672 = state_14668;(statearr_14672[9] = inst_14632__$1);
return statearr_14672;
})();if(inst_14634)
{var statearr_14673_14700 = state_14668__$1;(statearr_14673_14700[1] = 5);
} else
{var statearr_14674_14701 = state_14668__$1;(statearr_14674_14701[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_14669 === 5))
{var inst_14629 = (state_14668[7]);var inst_14636 = (state_14668[10]);var inst_14632 = (state_14668[9]);var inst_14636__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14632) : f.call(null,inst_14632));var inst_14637 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14636__$1,inst_14629);var inst_14638 = cljs.core.keyword_identical_QMARK_(inst_14629,cljs.core.constant$keyword$31);var inst_14639 = (inst_14637) || (inst_14638);var state_14668__$1 = (function (){var statearr_14675 = state_14668;(statearr_14675[10] = inst_14636__$1);
return statearr_14675;
})();if(cljs.core.truth_(inst_14639))
{var statearr_14676_14702 = state_14668__$1;(statearr_14676_14702[1] = 8);
} else
{var statearr_14677_14703 = state_14668__$1;(statearr_14677_14703[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_14669 === 6))
{var inst_14628 = (state_14668[8]);var inst_14653 = inst_14628.length;var inst_14654 = (inst_14653 > 0);var state_14668__$1 = state_14668;if(cljs.core.truth_(inst_14654))
{var statearr_14679_14704 = state_14668__$1;(statearr_14679_14704[1] = 12);
} else
{var statearr_14680_14705 = state_14668__$1;(statearr_14680_14705[1] = 13);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_14669 === 7))
{var inst_14664 = (state_14668[2]);var state_14668__$1 = state_14668;var statearr_14681_14706 = state_14668__$1;(statearr_14681_14706[2] = inst_14664);
(statearr_14681_14706[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14669 === 8))
{var inst_14628 = (state_14668[8]);var inst_14636 = (state_14668[10]);var inst_14632 = (state_14668[9]);var inst_14641 = inst_14628.push(inst_14632);var tmp14678 = inst_14628;var inst_14628__$1 = tmp14678;var inst_14629 = inst_14636;var state_14668__$1 = (function (){var statearr_14682 = state_14668;(statearr_14682[11] = inst_14641);
(statearr_14682[7] = inst_14629);
(statearr_14682[8] = inst_14628__$1);
return statearr_14682;
})();var statearr_14683_14707 = state_14668__$1;(statearr_14683_14707[2] = null);
(statearr_14683_14707[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14669 === 9))
{var inst_14628 = (state_14668[8]);var inst_14644 = cljs.core.vec(inst_14628);var state_14668__$1 = state_14668;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14668__$1,11,out,inst_14644);
} else
{if((state_val_14669 === 10))
{var inst_14651 = (state_14668[2]);var state_14668__$1 = state_14668;var statearr_14684_14708 = state_14668__$1;(statearr_14684_14708[2] = inst_14651);
(statearr_14684_14708[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14669 === 11))
{var inst_14636 = (state_14668[10]);var inst_14632 = (state_14668[9]);var inst_14646 = (state_14668[2]);var inst_14647 = [];var inst_14648 = inst_14647.push(inst_14632);var inst_14628 = inst_14647;var inst_14629 = inst_14636;var state_14668__$1 = (function (){var statearr_14685 = state_14668;(statearr_14685[12] = inst_14646);
(statearr_14685[13] = inst_14648);
(statearr_14685[7] = inst_14629);
(statearr_14685[8] = inst_14628);
return statearr_14685;
})();var statearr_14686_14709 = state_14668__$1;(statearr_14686_14709[2] = null);
(statearr_14686_14709[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14669 === 12))
{var inst_14628 = (state_14668[8]);var inst_14656 = cljs.core.vec(inst_14628);var state_14668__$1 = state_14668;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14668__$1,15,out,inst_14656);
} else
{if((state_val_14669 === 13))
{var state_14668__$1 = state_14668;var statearr_14687_14710 = state_14668__$1;(statearr_14687_14710[2] = null);
(statearr_14687_14710[1] = 14);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14669 === 14))
{var inst_14661 = (state_14668[2]);var inst_14662 = cljs.core.async.close_BANG_(out);var state_14668__$1 = (function (){var statearr_14688 = state_14668;(statearr_14688[14] = inst_14661);
return statearr_14688;
})();var statearr_14689_14711 = state_14668__$1;(statearr_14689_14711[2] = inst_14662);
(statearr_14689_14711[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_14669 === 15))
{var inst_14658 = (state_14668[2]);var state_14668__$1 = state_14668;var statearr_14690_14712 = state_14668__$1;(statearr_14690_14712[2] = inst_14658);
(statearr_14690_14712[1] = 14);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_14694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14694[0] = state_machine__5509__auto__);
(statearr_14694[1] = 1);
return statearr_14694;
});
var state_machine__5509__auto____1 = (function (state_14668){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_14668);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e14695){if((e14695 instanceof Object))
{var ex__5512__auto__ = e14695;var statearr_14696_14713 = state_14668;(statearr_14696_14713[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_14668);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e14695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__14714 = state_14668;
state_14668 = G__14714;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_14668){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_14668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_14697 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_14697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___14698);
return statearr_14697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
