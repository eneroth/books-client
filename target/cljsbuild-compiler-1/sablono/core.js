// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('sablono.render');
goog.require('sablono.render');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__14808__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__14807 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14807,0,null);var body = cljs.core.nthnext(vec__14807,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__14808 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14808__delegate.call(this,args);};
G__14808.cljs$lang$maxFixedArity = 0;
G__14808.cljs$lang$applyTo = (function (arglist__14809){
var args = cljs.core.seq(arglist__14809);
return G__14808__delegate(args);
});
G__14808.cljs$core$IFn$_invoke$arity$variadic = G__14808__delegate;
return G__14808;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4119__auto__ = (function iter__14814(s__14815){return (new cljs.core.LazySeq(null,(function (){var s__14815__$1 = s__14815;while(true){
var temp__4092__auto__ = cljs.core.seq(s__14815__$1);if(temp__4092__auto__)
{var s__14815__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__14815__$2))
{var c__4117__auto__ = cljs.core.chunk_first(s__14815__$2);var size__4118__auto__ = cljs.core.count(c__4117__auto__);var b__14817 = cljs.core.chunk_buffer(size__4118__auto__);if((function (){var i__14816 = 0;while(true){
if((i__14816 < size__4118__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4117__auto__,i__14816);cljs.core.chunk_append(b__14817,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__14818 = (i__14816 + 1);
i__14816 = G__14818;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14817),iter__14814(cljs.core.chunk_rest(s__14815__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14817),null);
}
} else
{var args = cljs.core.first(s__14815__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__14814(cljs.core.rest(s__14815__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__(arglists);
});
/**
* Include a list of external javascript files.
* @param {...*} var_args
*/
sablono.core.include_js = (function() { 
var include_js__delegate = function (scripts){var iter__4119__auto__ = (function iter__14823(s__14824){return (new cljs.core.LazySeq(null,(function (){var s__14824__$1 = s__14824;while(true){
var temp__4092__auto__ = cljs.core.seq(s__14824__$1);if(temp__4092__auto__)
{var s__14824__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__14824__$2))
{var c__4117__auto__ = cljs.core.chunk_first(s__14824__$2);var size__4118__auto__ = cljs.core.count(c__4117__auto__);var b__14826 = cljs.core.chunk_buffer(size__4118__auto__);if((function (){var i__14825 = 0;while(true){
if((i__14825 < size__4118__auto__))
{var script = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4117__auto__,i__14825);cljs.core.chunk_append(b__14826,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$44,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$33,"text/javascript",cljs.core.constant$keyword$45,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([script], 0))], null)], null));
{
var G__14827 = (i__14825 + 1);
i__14825 = G__14827;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14826),iter__14823(cljs.core.chunk_rest(s__14824__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14826),null);
}
} else
{var script = cljs.core.first(s__14824__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$44,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$33,"text/javascript",cljs.core.constant$keyword$45,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([script], 0))], null)], null),iter__14823(cljs.core.rest(s__14824__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__(scripts);
};
var include_js = function (var_args){
var scripts = null;if (arguments.length > 0) {
  scripts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_js__delegate.call(this,scripts);};
include_js.cljs$lang$maxFixedArity = 0;
include_js.cljs$lang$applyTo = (function (arglist__14828){
var scripts = cljs.core.seq(arglist__14828);
return include_js__delegate(scripts);
});
include_js.cljs$core$IFn$_invoke$arity$variadic = include_js__delegate;
return include_js;
})()
;
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4119__auto__ = (function iter__14833(s__14834){return (new cljs.core.LazySeq(null,(function (){var s__14834__$1 = s__14834;while(true){
var temp__4092__auto__ = cljs.core.seq(s__14834__$1);if(temp__4092__auto__)
{var s__14834__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__14834__$2))
{var c__4117__auto__ = cljs.core.chunk_first(s__14834__$2);var size__4118__auto__ = cljs.core.count(c__4117__auto__);var b__14836 = cljs.core.chunk_buffer(size__4118__auto__);if((function (){var i__14835 = 0;while(true){
if((i__14835 < size__4118__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4117__auto__,i__14835);cljs.core.chunk_append(b__14836,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$33,"text/css",cljs.core.constant$keyword$47,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$48,"stylesheet"], null)], null));
{
var G__14837 = (i__14835 + 1);
i__14835 = G__14837;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14836),iter__14833(cljs.core.chunk_rest(s__14834__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14836),null);
}
} else
{var style = cljs.core.first(s__14834__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$33,"text/css",cljs.core.constant$keyword$47,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$48,"stylesheet"], null)], null),iter__14833(cljs.core.rest(s__14834__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__14838){
var styles = cljs.core.seq(arglist__14838);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wrap the supplied javascript up in script tags and a CDATA section.
*/
sablono.core.javascript_tag = (function javascript_tag(script){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$44,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$33,"text/javascript"], null),[cljs.core.str("//<![CDATA[\n"),cljs.core.str(script),cljs.core.str("\n//]]>")].join('')], null);
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to14839 = (function() { 
var link_to14839__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$47,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to14839 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to14839__delegate.call(this,url,content);};
link_to14839.cljs$lang$maxFixedArity = 1;
link_to14839.cljs$lang$applyTo = (function (arglist__14840){
var url = cljs.core.first(arglist__14840);
var content = cljs.core.rest(arglist__14840);
return link_to14839__delegate(url,content);
});
link_to14839.cljs$core$IFn$_invoke$arity$variadic = link_to14839__delegate;
return link_to14839;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to14839);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to14841 = (function() { 
var mail_to14841__delegate = function (e_mail,p__14842){var vec__14844 = p__14842;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14844,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$47,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3408__auto__ = content;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to14841 = function (e_mail,var_args){
var p__14842 = null;if (arguments.length > 1) {
  p__14842 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to14841__delegate.call(this,e_mail,p__14842);};
mail_to14841.cljs$lang$maxFixedArity = 1;
mail_to14841.cljs$lang$applyTo = (function (arglist__14845){
var e_mail = cljs.core.first(arglist__14845);
var p__14842 = cljs.core.rest(arglist__14845);
return mail_to14841__delegate(e_mail,p__14842);
});
mail_to14841.cljs$core$IFn$_invoke$arity$variadic = mail_to14841__delegate;
return mail_to14841;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to14841);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list14846 = (function unordered_list14846(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$50,(function (){var iter__4119__auto__ = (function iter__14851(s__14852){return (new cljs.core.LazySeq(null,(function (){var s__14852__$1 = s__14852;while(true){
var temp__4092__auto__ = cljs.core.seq(s__14852__$1);if(temp__4092__auto__)
{var s__14852__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__14852__$2))
{var c__4117__auto__ = cljs.core.chunk_first(s__14852__$2);var size__4118__auto__ = cljs.core.count(c__4117__auto__);var b__14854 = cljs.core.chunk_buffer(size__4118__auto__);if((function (){var i__14853 = 0;while(true){
if((i__14853 < size__4118__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4117__auto__,i__14853);cljs.core.chunk_append(b__14854,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,x], null));
{
var G__14855 = (i__14853 + 1);
i__14853 = G__14855;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14854),iter__14851(cljs.core.chunk_rest(s__14852__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14854),null);
}
} else
{var x = cljs.core.first(s__14852__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,x], null),iter__14851(cljs.core.rest(s__14852__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list14846);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list14856 = (function ordered_list14856(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$52,(function (){var iter__4119__auto__ = (function iter__14861(s__14862){return (new cljs.core.LazySeq(null,(function (){var s__14862__$1 = s__14862;while(true){
var temp__4092__auto__ = cljs.core.seq(s__14862__$1);if(temp__4092__auto__)
{var s__14862__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__14862__$2))
{var c__4117__auto__ = cljs.core.chunk_first(s__14862__$2);var size__4118__auto__ = cljs.core.count(c__4117__auto__);var b__14864 = cljs.core.chunk_buffer(size__4118__auto__);if((function (){var i__14863 = 0;while(true){
if((i__14863 < size__4118__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4117__auto__,i__14863);cljs.core.chunk_append(b__14864,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,x], null));
{
var G__14865 = (i__14863 + 1);
i__14863 = G__14865;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14864),iter__14861(cljs.core.chunk_rest(s__14862__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14864),null);
}
} else
{var x = cljs.core.first(s__14862__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,x], null),iter__14861(cljs.core.rest(s__14862__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list14856);
/**
* Create an image element.
*/
sablono.core.image14866 = (function() {
var image14866 = null;
var image14866__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image14866__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$54,alt], null)], null);
});
image14866 = function(src,alt){
switch(arguments.length){
case 1:
return image14866__1.call(this,src);
case 2:
return image14866__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image14866.cljs$core$IFn$_invoke$arity$1 = image14866__1;
image14866.cljs$core$IFn$_invoke$arity$2 = image14866__2;
return image14866;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image14866);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14867_SHARP_,p2__14868_SHARP_){return [cljs.core.str(p1__14867_SHARP_),cljs.core.str("["),cljs.core.str(p2__14868_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14869_SHARP_,p2__14870_SHARP_){return [cljs.core.str(p1__14869_SHARP_),cljs.core.str("-"),cljs.core.str(p2__14870_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$55,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$33,type,cljs.core.constant$keyword$56,sablono.core.make_name(name),cljs.core.constant$keyword$42,sablono.core.make_id(name),cljs.core.constant$keyword$11,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field14871 = (function() {
var hidden_field14871 = null;
var hidden_field14871__1 = (function (name){return hidden_field14871.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field14871__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field14871 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field14871__1.call(this,name);
case 2:
return hidden_field14871__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field14871.cljs$core$IFn$_invoke$arity$1 = hidden_field14871__1;
hidden_field14871.cljs$core$IFn$_invoke$arity$2 = hidden_field14871__2;
return hidden_field14871;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field14871);
/**
* Creates a new text input field.
*/
sablono.core.text_field14872 = (function() {
var text_field14872 = null;
var text_field14872__1 = (function (name){return text_field14872.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field14872__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field14872 = function(name,value){
switch(arguments.length){
case 1:
return text_field14872__1.call(this,name);
case 2:
return text_field14872__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field14872.cljs$core$IFn$_invoke$arity$1 = text_field14872__1;
text_field14872.cljs$core$IFn$_invoke$arity$2 = text_field14872__2;
return text_field14872;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field14872);
/**
* Creates a new password field.
*/
sablono.core.password_field14873 = (function() {
var password_field14873 = null;
var password_field14873__1 = (function (name){return password_field14873.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field14873__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field14873 = function(name,value){
switch(arguments.length){
case 1:
return password_field14873__1.call(this,name);
case 2:
return password_field14873__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field14873.cljs$core$IFn$_invoke$arity$1 = password_field14873__1;
password_field14873.cljs$core$IFn$_invoke$arity$2 = password_field14873__2;
return password_field14873;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field14873);
/**
* Creates a new email input field.
*/
sablono.core.email_field14874 = (function() {
var email_field14874 = null;
var email_field14874__1 = (function (name){return email_field14874.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field14874__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field14874 = function(name,value){
switch(arguments.length){
case 1:
return email_field14874__1.call(this,name);
case 2:
return email_field14874__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field14874.cljs$core$IFn$_invoke$arity$1 = email_field14874__1;
email_field14874.cljs$core$IFn$_invoke$arity$2 = email_field14874__2;
return email_field14874;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field14874);
/**
* Creates a check box.
*/
sablono.core.check_box14875 = (function() {
var check_box14875 = null;
var check_box14875__1 = (function (name){return check_box14875.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box14875__2 = (function (name,checked_QMARK_){return check_box14875.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box14875__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$55,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$33,"checkbox",cljs.core.constant$keyword$56,sablono.core.make_name(name),cljs.core.constant$keyword$42,sablono.core.make_id(name),cljs.core.constant$keyword$11,value,cljs.core.constant$keyword$57,checked_QMARK_], null)], null);
});
check_box14875 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box14875__1.call(this,name);
case 2:
return check_box14875__2.call(this,name,checked_QMARK_);
case 3:
return check_box14875__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box14875.cljs$core$IFn$_invoke$arity$1 = check_box14875__1;
check_box14875.cljs$core$IFn$_invoke$arity$2 = check_box14875__2;
check_box14875.cljs$core$IFn$_invoke$arity$3 = check_box14875__3;
return check_box14875;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box14875);
/**
* Creates a radio button.
*/
sablono.core.radio_button14876 = (function() {
var radio_button14876 = null;
var radio_button14876__1 = (function (group){return radio_button14876.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button14876__2 = (function (group,checked_QMARK_){return radio_button14876.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button14876__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$55,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$33,"radio",cljs.core.constant$keyword$56,sablono.core.make_name(group),cljs.core.constant$keyword$42,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$11,value,cljs.core.constant$keyword$57,checked_QMARK_], null)], null);
});
radio_button14876 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button14876__1.call(this,group);
case 2:
return radio_button14876__2.call(this,group,checked_QMARK_);
case 3:
return radio_button14876__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button14876.cljs$core$IFn$_invoke$arity$1 = radio_button14876__1;
radio_button14876.cljs$core$IFn$_invoke$arity$2 = radio_button14876__2;
radio_button14876.cljs$core$IFn$_invoke$arity$3 = radio_button14876__3;
return radio_button14876;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button14876);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options14877 = (function() {
var select_options14877 = null;
var select_options14877__1 = (function (coll){return select_options14877.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options14877__2 = (function (coll,selected){var iter__4119__auto__ = (function iter__14886(s__14887){return (new cljs.core.LazySeq(null,(function (){var s__14887__$1 = s__14887;while(true){
var temp__4092__auto__ = cljs.core.seq(s__14887__$1);if(temp__4092__auto__)
{var s__14887__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__14887__$2))
{var c__4117__auto__ = cljs.core.chunk_first(s__14887__$2);var size__4118__auto__ = cljs.core.count(c__4117__auto__);var b__14889 = cljs.core.chunk_buffer(size__4118__auto__);if((function (){var i__14888 = 0;while(true){
if((i__14888 < size__4118__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4117__auto__,i__14888);cljs.core.chunk_append(b__14889,((cljs.core.sequential_QMARK_(x))?(function (){var vec__14892 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14892,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14892,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,text], null),select_options14877.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$60,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$11,val,cljs.core.constant$keyword$61,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$61,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__14894 = (i__14888 + 1);
i__14888 = G__14894;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14889),iter__14886(cljs.core.chunk_rest(s__14887__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14889),null);
}
} else
{var x = cljs.core.first(s__14887__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__14893 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14893,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14893,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,text], null),select_options14877.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$60,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$11,val,cljs.core.constant$keyword$61,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$60,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$61,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__14886(cljs.core.rest(s__14887__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__(coll);
});
select_options14877 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options14877__1.call(this,coll);
case 2:
return select_options14877__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options14877.cljs$core$IFn$_invoke$arity$1 = select_options14877__1;
select_options14877.cljs$core$IFn$_invoke$arity$2 = select_options14877__2;
return select_options14877;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options14877);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down14895 = (function() {
var drop_down14895 = null;
var drop_down14895__2 = (function (name,options){return drop_down14895.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down14895__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$56,sablono.core.make_name(name),cljs.core.constant$keyword$42,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down14895 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down14895__2.call(this,name,options);
case 3:
return drop_down14895__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down14895.cljs$core$IFn$_invoke$arity$2 = drop_down14895__2;
drop_down14895.cljs$core$IFn$_invoke$arity$3 = drop_down14895__3;
return drop_down14895;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down14895);
/**
* Creates a text area element.
*/
sablono.core.text_area14896 = (function() {
var text_area14896 = null;
var text_area14896__1 = (function (name){return text_area14896.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area14896__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$56,sablono.core.make_name(name),cljs.core.constant$keyword$42,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area14896 = function(name,value){
switch(arguments.length){
case 1:
return text_area14896__1.call(this,name);
case 2:
return text_area14896__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area14896.cljs$core$IFn$_invoke$arity$1 = text_area14896__1;
text_area14896.cljs$core$IFn$_invoke$arity$2 = text_area14896__2;
return text_area14896;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area14896);
/**
* Creates a file upload input.
*/
sablono.core.file_upload14897 = (function file_upload14897(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload14897);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label14898 = (function label14898(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$59,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$64,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label14898);
/**
* Creates a submit button.
*/
sablono.core.submit_button14899 = (function submit_button14899(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$55,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$33,"submit",cljs.core.constant$keyword$11,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button14899);
/**
* Creates a form reset button.
*/
sablono.core.reset_button14900 = (function reset_button14900(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$55,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$33,"reset",cljs.core.constant$keyword$11,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button14900);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to14901 = (function() { 
var form_to14901__delegate = function (p__14902,body){var vec__14904 = p__14902;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14904,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14904,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$65,null,cljs.core.constant$keyword$66,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$68,method_str,cljs.core.constant$keyword$69,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$68,"POST",cljs.core.constant$keyword$69,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to14901 = function (p__14902,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to14901__delegate.call(this,p__14902,body);};
form_to14901.cljs$lang$maxFixedArity = 1;
form_to14901.cljs$lang$applyTo = (function (arglist__14905){
var p__14902 = cljs.core.first(arglist__14905);
var body = cljs.core.rest(arglist__14905);
return form_to14901__delegate(p__14902,body);
});
form_to14901.cljs$core$IFn$_invoke$arity$variadic = form_to14901__delegate;
return form_to14901;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to14901);
