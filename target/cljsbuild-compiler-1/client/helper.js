// Compiled by ClojureScript 0.0-2138
goog.provide('client.helper');
goog.require('cljs.core');
client.helper.log_message_formater = (function log_message_formater(prefix,string_to_log){var log_message = [cljs.core.str(prefix),cljs.core.str(": "),cljs.core.str(string_to_log)].join('');return log_message;
});
/**
* @param {...*} var_args
*/
client.helper.log = (function() { 
var log__delegate = function (string_to_log){return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",string_to_log)));
};
var log = function (var_args){
var string_to_log = null;if (arguments.length > 0) {
  string_to_log = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,string_to_log);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__10599){
var string_to_log = cljs.core.seq(arglist__10599);
return log__delegate(string_to_log);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
