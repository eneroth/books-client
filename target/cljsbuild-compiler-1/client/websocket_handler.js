// Compiled by ClojureScript 0.0-2138
goog.provide('client.websocket_handler');
goog.require('cljs.core');
goog.require('client.channel_helpers');
goog.require('client.helper');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('chord.client');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('chord.client');
goog.require('client.helper');
goog.require('client.channel_helpers');
goog.require('client.channel_helpers');
client.websocket_handler.address = "ws://localhost:5000";
client.websocket_handler.address = "ws://tree-mind-tone.herokuapp.com";
/**
* Creates a message handler that shuts down when
* receiving a socket-closed-message.
* Optionally takes an identifier string that will
* be printed when go-loop is closed down. Returns
* the receiving channel.
* @param {...*} var_args
*/
client.websocket_handler.terminable_channel = (function() { 
var terminable_channel__delegate = function (in_channel,out_channel,identifier){var c__5523__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10681){var state_val_10682 = (state_10681[1]);if((state_val_10682 === 1))
{var state_10681__$1 = state_10681;var statearr_10683_10708 = state_10681__$1;(statearr_10683_10708[2] = null);
(statearr_10683_10708[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10682 === 2))
{var state_10681__$1 = state_10681;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10681__$1,4,in_channel);
} else
{if((state_val_10682 === 3))
{var inst_10679 = (state_10681[2]);var state_10681__$1 = state_10681;return cljs.core.async.impl.ioc_helpers.return_chan(state_10681__$1,inst_10679);
} else
{if((state_val_10682 === 4))
{var inst_10656 = (state_10681[7]);var inst_10656__$1 = (state_10681[2]);var state_10681__$1 = (function (){var statearr_10684 = state_10681;(statearr_10684[7] = inst_10656__$1);
return statearr_10684;
})();if(cljs.core.truth_(inst_10656__$1))
{var statearr_10685_10709 = state_10681__$1;(statearr_10685_10709[1] = 5);
} else
{var statearr_10686_10710 = state_10681__$1;(statearr_10686_10710[1] = 6);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10682 === 5))
{var inst_10656 = (state_10681[7]);var inst_10658 = client.channel_helpers.socket_closed_message_QMARK_(inst_10656);var inst_10659 = !(inst_10658);var state_10681__$1 = state_10681;if(inst_10659)
{var statearr_10687_10711 = state_10681__$1;(statearr_10687_10711[1] = 8);
} else
{var statearr_10688_10712 = state_10681__$1;(statearr_10688_10712[1] = 9);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10682 === 6))
{var state_10681__$1 = state_10681;var statearr_10689_10713 = state_10681__$1;(statearr_10689_10713[2] = null);
(statearr_10689_10713[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10682 === 7))
{var inst_10677 = (state_10681[2]);var state_10681__$1 = (function (){var statearr_10690 = state_10681;(statearr_10690[8] = inst_10677);
return statearr_10690;
})();var statearr_10691_10714 = state_10681__$1;(statearr_10691_10714[2] = out_channel);
(statearr_10691_10714[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10682 === 8))
{var inst_10656 = (state_10681[7]);var inst_10661 = client.helper.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["passing on message"], 0));var state_10681__$1 = (function (){var statearr_10692 = state_10681;(statearr_10692[9] = inst_10661);
return statearr_10692;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10681__$1,11,out_channel,inst_10656);
} else
{if((state_val_10682 === 9))
{var state_10681__$1 = state_10681;if(cljs.core.truth_(identifier))
{var statearr_10693_10715 = state_10681__$1;(statearr_10693_10715[1] = 12);
} else
{var statearr_10694_10716 = state_10681__$1;(statearr_10694_10716[1] = 13);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10682 === 10))
{var inst_10674 = (state_10681[2]);var state_10681__$1 = state_10681;var statearr_10695_10717 = state_10681__$1;(statearr_10695_10717[2] = inst_10674);
(statearr_10695_10717[1] = 7);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10682 === 11))
{var inst_10663 = (state_10681[2]);var inst_10664 = client.helper.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Done"], 0));var state_10681__$1 = (function (){var statearr_10696 = state_10681;(statearr_10696[10] = inst_10664);
(statearr_10696[11] = inst_10663);
return statearr_10696;
})();var statearr_10697_10718 = state_10681__$1;(statearr_10697_10718[2] = null);
(statearr_10697_10718[1] = 2);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10682 === 12))
{var inst_10668 = cljs.core.first(identifier);var inst_10669 = client.helper.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Closing down",inst_10668], 0));var state_10681__$1 = state_10681;var statearr_10698_10719 = state_10681__$1;(statearr_10698_10719[2] = inst_10669);
(statearr_10698_10719[1] = 14);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10682 === 13))
{var state_10681__$1 = state_10681;var statearr_10699_10720 = state_10681__$1;(statearr_10699_10720[2] = null);
(statearr_10699_10720[1] = 14);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10682 === 14))
{var inst_10672 = (state_10681[2]);var state_10681__$1 = state_10681;var statearr_10700_10721 = state_10681__$1;(statearr_10700_10721[2] = inst_10672);
(statearr_10700_10721[1] = 10);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10704 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10704[0] = state_machine__5509__auto__);
(statearr_10704[1] = 1);
return statearr_10704;
});
var state_machine__5509__auto____1 = (function (state_10681){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_10681);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10705){if((e10705 instanceof Object))
{var ex__5512__auto__ = e10705;var statearr_10706_10722 = state_10681;(statearr_10706_10722[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10681);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e10705;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__10723 = state_10681;
state_10681 = G__10723;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10681){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10707 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_10707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_10707;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return c__5523__auto__;
};
var terminable_channel = function (in_channel,out_channel,var_args){
var identifier = null;if (arguments.length > 2) {
  identifier = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return terminable_channel__delegate.call(this,in_channel,out_channel,identifier);};
terminable_channel.cljs$lang$maxFixedArity = 2;
terminable_channel.cljs$lang$applyTo = (function (arglist__10724){
var in_channel = cljs.core.first(arglist__10724);
arglist__10724 = cljs.core.next(arglist__10724);
var out_channel = cljs.core.first(arglist__10724);
var identifier = cljs.core.rest(arglist__10724);
return terminable_channel__delegate(in_channel,out_channel,identifier);
});
terminable_channel.cljs$core$IFn$_invoke$arity$variadic = terminable_channel__delegate;
return terminable_channel;
})()
;
/**
* Sends socket-closed-message's to all channels in collection
*/
client.websocket_handler.send_socket_closed_messages = (function send_socket_closed_messages(channels){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10725_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p1__10725_SHARP_,client.channel_helpers.socket_closed_message);
}),channels));
});
/**
* Establishes a loop that maintains a connection to a server.
* Will attempt reconnection if disconnected.
* 
* Returns two channels in a vector. The first is the channel
* on which data messages can be passed to and from server.
* The second is a meta channel that receives a messages each
* time the channel is either disconnected or connected.
*/
client.websocket_handler.open_connection = (function open_connection(){var write_to_client = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var read_from_client = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var status_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(1));var command_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5523__auto___10993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10944){var state_val_10945 = (state_10944[1]);if((state_val_10945 === 32))
{var state_10944__$1 = state_10944;var statearr_10946_10994 = state_10944__$1;(statearr_10946_10994[2] = null);
(statearr_10946_10994[1] = 33);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 1))
{var inst_10860 = client.channel_helpers.attempting_connect_message(client.websocket_handler.address);var state_10944__$1 = state_10944;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10944__$1,2,status_channel,inst_10860);
} else
{if((state_val_10945 === 33))
{var inst_10915 = (state_10944[2]);var state_10944__$1 = state_10944;var statearr_10947_10995 = state_10944__$1;(statearr_10947_10995[2] = inst_10915);
(statearr_10947_10995[1] = 30);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 2))
{var inst_10862 = (state_10944[2]);var state_10944__$1 = (function (){var statearr_10948 = state_10944;(statearr_10948[7] = inst_10862);
return statearr_10948;
})();var statearr_10949_10996 = state_10944__$1;(statearr_10949_10996[2] = null);
(statearr_10949_10996[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 34))
{var inst_10936 = (state_10944[2]);var state_10944__$1 = state_10944;var statearr_10950_10997 = state_10944__$1;(statearr_10950_10997[2] = inst_10936);
(statearr_10950_10997[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 3))
{var inst_10864 = chord.client.ws_ch(client.websocket_handler.address);var state_10944__$1 = state_10944;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10944__$1,5,inst_10864);
} else
{if((state_val_10945 === 4))
{var inst_10942 = (state_10944[2]);var state_10944__$1 = state_10944;return cljs.core.async.impl.ioc_helpers.return_chan(state_10944__$1,inst_10942);
} else
{if((state_val_10945 === 5))
{var inst_10866 = (state_10944[8]);var inst_10866__$1 = (state_10944[2]);var state_10944__$1 = (function (){var statearr_10951 = state_10944;(statearr_10951[8] = inst_10866__$1);
return statearr_10951;
})();if(cljs.core.truth_(inst_10866__$1))
{var statearr_10952_10998 = state_10944__$1;(statearr_10952_10998[1] = 6);
} else
{var statearr_10953_10999 = state_10944__$1;(statearr_10953_10999[1] = 7);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 6))
{var inst_10866 = (state_10944[8]);var inst_10869 = (function (){var ws_channel = inst_10866;return ((function (ws_channel,inst_10866,state_val_10945){
return (function (p1__10726_SHARP_){return cljs.core.contains_QMARK_(p1__10726_SHARP_,cljs.core.constant$keyword$36);
});
;})(ws_channel,inst_10866,state_val_10945))
})();var inst_10870 = cljs.core.async.split.cljs$core$IFn$_invoke$arity$2(inst_10869,inst_10866);var inst_10871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10870,0,null);var inst_10872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10870,1,null);var inst_10873 = client.channel_helpers.connection_successful_message(client.websocket_handler.address);var state_10944__$1 = (function (){var statearr_10954 = state_10944;(statearr_10954[9] = inst_10872);
(statearr_10954[10] = inst_10871);
return statearr_10954;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10944__$1,9,status_channel,inst_10873);
} else
{if((state_val_10945 === 7))
{var state_10944__$1 = state_10944;var statearr_10955_11000 = state_10944__$1;(statearr_10955_11000[2] = null);
(statearr_10955_11000[1] = 8);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 8))
{var inst_10939 = (state_10944[2]);var state_10944__$1 = (function (){var statearr_10956 = state_10944;(statearr_10956[11] = inst_10939);
return statearr_10956;
})();var statearr_10957_11001 = state_10944__$1;(statearr_10957_11001[2] = null);
(statearr_10957_11001[1] = 3);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 9))
{var inst_10875 = (state_10944[2]);var state_10944__$1 = (function (){var statearr_10958 = state_10944;(statearr_10958[12] = inst_10875);
return statearr_10958;
})();var statearr_10959_11002 = state_10944__$1;(statearr_10959_11002[2] = null);
(statearr_10959_11002[1] = 10);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 10))
{var inst_10872 = (state_10944[9]);var inst_10871 = (state_10944[10]);var inst_10878 = [inst_10872,read_from_client,inst_10871,command_channel];var inst_10879 = (new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10878,null));var state_10944__$1 = state_10944;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_10944__$1,12,inst_10879);
} else
{if((state_val_10945 === 11))
{var inst_10933 = (state_10944[2]);var inst_10934 = client.channel_helpers.attempting_connect_message(client.websocket_handler.address);var state_10944__$1 = (function (){var statearr_10960 = state_10944;(statearr_10960[13] = inst_10933);
return statearr_10960;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10944__$1,34,status_channel,inst_10934);
} else
{if((state_val_10945 === 12))
{var inst_10882 = (state_10944[14]);var inst_10881 = (state_10944[2]);var inst_10882__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10881,0,null);var inst_10883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10881,1,null);var state_10944__$1 = (function (){var statearr_10961 = state_10944;(statearr_10961[15] = inst_10883);
(statearr_10961[14] = inst_10882__$1);
return statearr_10961;
})();if(cljs.core.truth_(inst_10882__$1))
{var statearr_10962_11003 = state_10944__$1;(statearr_10962_11003[1] = 13);
} else
{var statearr_10963_11004 = state_10944__$1;(statearr_10963_11004[1] = 14);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 13))
{var inst_10883 = (state_10944[15]);var inst_10888 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(read_from_client,inst_10883);var state_10944__$1 = state_10944;if(inst_10888)
{var statearr_10964_11005 = state_10944__$1;(statearr_10964_11005[1] = 16);
} else
{var statearr_10965_11006 = state_10944__$1;(statearr_10965_11006[1] = 17);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 14))
{var state_10944__$1 = state_10944;var statearr_10966_11007 = state_10944__$1;(statearr_10966_11007[2] = null);
(statearr_10966_11007[1] = 15);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 15))
{var inst_10931 = (state_10944[2]);var state_10944__$1 = state_10944;var statearr_10967_11008 = state_10944__$1;(statearr_10967_11008[2] = inst_10931);
(statearr_10967_11008[1] = 11);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 16))
{var inst_10866 = (state_10944[8]);var inst_10882 = (state_10944[14]);var inst_10890 = client.channel_helpers.record_to_message(inst_10882);var state_10944__$1 = state_10944;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10944__$1,19,inst_10866,inst_10890);
} else
{if((state_val_10945 === 17))
{var inst_10883 = (state_10944[15]);var inst_10872 = (state_10944[9]);var inst_10894 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10872,inst_10883);var state_10944__$1 = state_10944;if(inst_10894)
{var statearr_10968_11009 = state_10944__$1;(statearr_10968_11009[1] = 20);
} else
{var statearr_10969_11010 = state_10944__$1;(statearr_10969_11010[1] = 21);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 18))
{var inst_10927 = (state_10944[2]);var state_10944__$1 = (function (){var statearr_10970 = state_10944;(statearr_10970[16] = inst_10927);
return statearr_10970;
})();var statearr_10971_11011 = state_10944__$1;(statearr_10971_11011[2] = null);
(statearr_10971_11011[1] = 10);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 19))
{var inst_10892 = (state_10944[2]);var state_10944__$1 = state_10944;var statearr_10972_11012 = state_10944__$1;(statearr_10972_11012[2] = inst_10892);
(statearr_10972_11012[1] = 18);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 20))
{var inst_10882 = (state_10944[14]);var inst_10896 = client.channel_helpers.message_to_record(inst_10882);var state_10944__$1 = state_10944;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10944__$1,23,write_to_client,inst_10896);
} else
{if((state_val_10945 === 21))
{var inst_10883 = (state_10944[15]);var inst_10871 = (state_10944[10]);var inst_10900 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10871,inst_10883);var state_10944__$1 = state_10944;if(inst_10900)
{var statearr_10973_11013 = state_10944__$1;(statearr_10973_11013[1] = 24);
} else
{var statearr_10974_11014 = state_10944__$1;(statearr_10974_11014[1] = 25);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 22))
{var inst_10925 = (state_10944[2]);var state_10944__$1 = state_10944;var statearr_10975_11015 = state_10944__$1;(statearr_10975_11015[2] = inst_10925);
(statearr_10975_11015[1] = 18);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 23))
{var inst_10898 = (state_10944[2]);var state_10944__$1 = state_10944;var statearr_10976_11016 = state_10944__$1;(statearr_10976_11016[2] = inst_10898);
(statearr_10976_11016[1] = 22);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 24))
{var inst_10882 = (state_10944[14]);var inst_10902 = client.channel_helpers.error_to_record(inst_10882);var state_10944__$1 = state_10944;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10944__$1,27,status_channel,inst_10902);
} else
{if((state_val_10945 === 25))
{var inst_10883 = (state_10944[15]);var inst_10906 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(command_channel,inst_10883);var state_10944__$1 = state_10944;if(inst_10906)
{var statearr_10977_11017 = state_10944__$1;(statearr_10977_11017[1] = 28);
} else
{var statearr_10978_11018 = state_10944__$1;(statearr_10978_11018[1] = 29);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 26))
{var inst_10923 = (state_10944[2]);var state_10944__$1 = state_10944;var statearr_10979_11019 = state_10944__$1;(statearr_10979_11019[2] = inst_10923);
(statearr_10979_11019[1] = 22);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 27))
{var inst_10904 = (state_10944[2]);var state_10944__$1 = state_10944;var statearr_10980_11020 = state_10944__$1;(statearr_10980_11020[2] = inst_10904);
(statearr_10980_11020[1] = 26);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 28))
{var inst_10882 = (state_10944[14]);var inst_10908 = cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(inst_10882);var inst_10909 = cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(client.channel_helpers.request_socket_close);var inst_10910 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10908,inst_10909);var state_10944__$1 = state_10944;if(inst_10910)
{var statearr_10981_11021 = state_10944__$1;(statearr_10981_11021[1] = 31);
} else
{var statearr_10982_11022 = state_10944__$1;(statearr_10982_11022[1] = 32);
}
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 29))
{var inst_10883 = (state_10944[15]);var inst_10917 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_10883)].join('');var inst_10918 = (new Error(inst_10917));var inst_10919 = (function(){throw inst_10918})();var state_10944__$1 = state_10944;var statearr_10983_11023 = state_10944__$1;(statearr_10983_11023[2] = inst_10919);
(statearr_10983_11023[1] = 30);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 30))
{var inst_10921 = (state_10944[2]);var state_10944__$1 = state_10944;var statearr_10984_11024 = state_10944__$1;(statearr_10984_11024[2] = inst_10921);
(statearr_10984_11024[1] = 26);
return cljs.core.constant$keyword$18;
} else
{if((state_val_10945 === 31))
{var inst_10866 = (state_10944[8]);var inst_10912 = cljs.core.async.close_BANG_(inst_10866);var state_10944__$1 = state_10944;var statearr_10985_11025 = state_10944__$1;(statearr_10985_11025[2] = inst_10912);
(statearr_10985_11025[1] = 33);
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
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10989[0] = state_machine__5509__auto__);
(statearr_10989[1] = 1);
return statearr_10989;
});
var state_machine__5509__auto____1 = (function (state_10944){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__(state_10944);if(cljs.core.keyword_identical_QMARK_(result__5511__auto__,cljs.core.constant$keyword$18))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10990){if((e10990 instanceof Object))
{var ex__5512__auto__ = e10990;var statearr_10991_11026 = state_10944;(statearr_10991_11026[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10944);
return cljs.core.constant$keyword$18;
} else
{if(cljs.core.constant$keyword$6)
{throw e10990;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5510__auto__,cljs.core.constant$keyword$18))
{{
var G__11027 = state_10944;
state_10944 = G__11027;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10944){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10992 = (f__5524__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5524__auto__.cljs$core$IFn$_invoke$arity$0() : f__5524__auto__.call(null));(statearr_10992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___10993);
return statearr_10992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5525__auto__);
}));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.channel_helpers.combine_channels(write_to_client,read_from_client),status_channel,command_channel], null);
});
