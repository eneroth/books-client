// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.util');
goog.require('cljs.core');
goog.require('goog.Uri');
sablono.util._STAR_base_url_STAR_ = null;
sablono.util.ToString = (function (){var obj14916 = {};return obj14916;
})();
sablono.util.to_str = (function to_str(x){if((function (){var and__3396__auto__ = x;if(and__3396__auto__)
{return x.sablono$util$ToString$to_str$arity$1;
} else
{return and__3396__auto__;
}
})())
{return x.sablono$util$ToString$to_str$arity$1(x);
} else
{var x__4029__auto__ = (((x == null))?null:x);return (function (){var or__3408__auto__ = (sablono.util.to_str[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (sablono.util.to_str["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol("ToString.to-str",x);
}
}
})().call(null,x);
}
});
sablono.util.ToURI = (function (){var obj14918 = {};return obj14918;
})();
sablono.util.to_uri = (function to_uri(x){if((function (){var and__3396__auto__ = x;if(and__3396__auto__)
{return x.sablono$util$ToURI$to_uri$arity$1;
} else
{return and__3396__auto__;
}
})())
{return x.sablono$util$ToURI$to_uri$arity$1(x);
} else
{var x__4029__auto__ = (((x == null))?null:x);return (function (){var or__3408__auto__ = (sablono.util.to_uri[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (sablono.util.to_uri["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol("ToURI.to-uri",x);
}
}
})().call(null,x);
}
});
/**
* Converts its arguments into a string using to-str.
* @param {...*} var_args
*/
sablono.util.as_str = (function() { 
var as_str__delegate = function (xs){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.to_str,xs));
};
var as_str = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return as_str__delegate.call(this,xs);};
as_str.cljs$lang$maxFixedArity = 0;
as_str.cljs$lang$applyTo = (function (arglist__14919){
var xs = cljs.core.seq(arglist__14919);
return as_str__delegate(xs);
});
as_str.cljs$core$IFn$_invoke$arity$variadic = as_str__delegate;
return as_str;
})()
;
(sablono.util.ToString["_"] = true);
(sablono.util.to_str["_"] = (function (x){return [cljs.core.str(x)].join('');
}));
(sablono.util.ToString["number"] = true);
(sablono.util.to_str["number"] = (function (x){return [cljs.core.str(x)].join('');
}));
(sablono.util.ToString["null"] = true);
(sablono.util.to_str["null"] = (function (_){return "";
}));
goog.Uri.prototype.sablono$util$ToString$ = true;
goog.Uri.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){var x__$1 = this;if(cljs.core.truth_((function (){var or__3408__auto__ = x__$1.hasDomain();if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return ((x__$1.getPath() == null)) || (cljs.core.not(cljs.core.re_matches(/^\/.*/,x__$1.getPath())));
}
})()))
{return [cljs.core.str(x__$1)].join('');
} else
{var base = [cljs.core.str(sablono.util._STAR_base_url_STAR_)].join('');if(cljs.core.truth_(cljs.core.re_matches(/.*\/$/,base)))
{return [cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(base,0,(cljs.core.count(base) - 1))),cljs.core.str(x__$1)].join('');
} else
{return [cljs.core.str(base),cljs.core.str(x__$1)].join('');
}
}
});
cljs.core.Keyword.prototype.sablono$util$ToString$ = true;
cljs.core.Keyword.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){var x__$1 = this;return cljs.core.name(x__$1);
});
(sablono.util.ToURI["_"] = true);
(sablono.util.to_uri["_"] = (function (x){return (new goog.Uri([cljs.core.str(x)].join('')));
}));
goog.Uri.prototype.sablono$util$ToURI$ = true;
goog.Uri.prototype.sablono$util$ToURI$to_uri$arity$1 = (function (x){var x__$1 = this;return x__$1;
});
