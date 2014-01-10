// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.render');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Regular expression that parses a CSS-style id and class from an element name.
*/
sablono.render.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
sablono.render.HtmlRenderer = (function (){var obj14907 = {};return obj14907;
})();
sablono.render.render_html = (function render_html(this$){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.sablono$render$HtmlRenderer$render_html$arity$1;
} else
{return and__3396__auto__;
}
})())
{return this$.sablono$render$HtmlRenderer$render_html$arity$1(this$);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (sablono.render.render_html[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (sablono.render.render_html["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol("HtmlRenderer.render-html",this$);
}
}
})().call(null,this$);
}
});
sablono.render.react_symbol = (function react_symbol(tag){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",[cljs.core.str("React.DOM."),cljs.core.str(cljs.core.name(tag))].join(''));
});
/**
* Removes all map entries where value is nil.
*/
sablono.render.compact_map = (function compact_map(m){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){var temp__4090__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);if(cljs.core.truth_(temp__4090__auto__))
{var v = temp__4090__auto__;return m__$1;
} else
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,cljs.core.keys(m));
});
/**
* Ensure an element vector is of the form [tag-name attrs content].
*/
sablono.render.normalize_element = (function normalize_element(p__14908){var vec__14911 = p__14908;var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14911,0,null);var content = cljs.core.nthnext(vec__14911,1);if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string')))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(tag),cljs.core.str(" is not a valid element name.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$16,tag,cljs.core.constant$keyword$41,content], null));
} else
{}
var vec__14912 = cljs.core.re_matches(sablono.render.re_tag,cljs.core.name(tag));var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14912,0,null);var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14912,1,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14912,2,null);var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14912,3,null);var tag_attrs = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,id,cljs.core.constant$keyword$43,(cljs.core.truth_(class$)?clojure.string.replace(class$,"."," "):null)], null);var map_attrs = cljs.core.first(content);if(cljs.core.map_QMARK_(map_attrs))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.render.compact_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tag_attrs,map_attrs], 0))),cljs.core.next(content)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.render.compact_map(tag_attrs),content], null);
}
});
/**
* Render an element vector as a HTML element.
*/
sablono.render.render_element = (function render_element(element){var vec__14914 = sablono.render.normalize_element(element);var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14914,0,null);var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14914,1,null);var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14914,2,null);var dom_fn = (React.DOM[cljs.core.name(tag)]);if(cljs.core.truth_(content))
{return (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js(attrs),sablono.render.render_html(content)) : dom_fn.call(null,cljs.core.clj__GT_js(attrs),sablono.render.render_html(content)));
} else
{return (dom_fn.cljs$core$IFn$_invoke$arity$1 ? dom_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.clj__GT_js(attrs)) : dom_fn.call(null,cljs.core.clj__GT_js(attrs)));
}
});
sablono.render.render_seq = (function render_seq(s){return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.render.render_html,s));
});
(sablono.render.HtmlRenderer["null"] = true);
(sablono.render.render_html["null"] = (function (this$){return null;
}));
(sablono.render.HtmlRenderer["_"] = true);
(sablono.render.render_html["_"] = (function (this$){return this$;
}));
cljs.core.PersistentVector.prototype.sablono$render$HtmlRenderer$ = true;
cljs.core.PersistentVector.prototype.sablono$render$HtmlRenderer$render_html$arity$1 = (function (this$){var this$__$1 = this;return sablono.render.render_element(this$__$1);
});
cljs.core.IndexedSeq.prototype.sablono$render$HtmlRenderer$ = true;
cljs.core.IndexedSeq.prototype.sablono$render$HtmlRenderer$render_html$arity$1 = (function (this$){var this$__$1 = this;return sablono.render.render_seq(this$__$1);
});
cljs.core.List.prototype.sablono$render$HtmlRenderer$ = true;
cljs.core.List.prototype.sablono$render$HtmlRenderer$render_html$arity$1 = (function (this$){var this$__$1 = this;return sablono.render.render_seq(this$__$1);
});
cljs.core.LazySeq.prototype.sablono$render$HtmlRenderer$ = true;
cljs.core.LazySeq.prototype.sablono$render$HtmlRenderer$render_html$arity$1 = (function (this$){var this$__$1 = this;return sablono.render.render_seq(this$__$1);
});
cljs.core.ChunkedSeq.prototype.sablono$render$HtmlRenderer$ = true;
cljs.core.ChunkedSeq.prototype.sablono$render$HtmlRenderer$render_html$arity$1 = (function (this$){var this$__$1 = this;return sablono.render.render_seq(this$__$1);
});
cljs.core.Cons.prototype.sablono$render$HtmlRenderer$ = true;
cljs.core.Cons.prototype.sablono$render$HtmlRenderer$render_html$arity$1 = (function (this$){var this$__$1 = this;return sablono.render.render_seq(this$__$1);
});
