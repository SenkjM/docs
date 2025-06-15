import{n,p as h,q as U,s as X,v as Y,x as s,y as d,d as Z,z as i,A as ee,B as S,C as oe,D as re,c as y,E as z,G as te,H as ne,I as de}from"./app-Dr385GFQ.js";import{r as b,c as ae,e as g}from"./resolve-slot-BnV7rnpS.js";const se=n([h("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Y({background:"var(--n-color-modal)"}),s("hoverable",[n("&:hover","box-shadow: var(--n-box-shadow);")]),s("content-segmented",[n(">",[d("content",{paddingTop:"var(--n-padding-bottom)"})])]),s("content-soft-segmented",[n(">",[d("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),s("footer-segmented",[n(">",[d("footer",{paddingTop:"var(--n-padding-bottom)"})])]),s("footer-soft-segmented",[n(">",[d("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),n(">",[h("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[d("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),d("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),d("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),d("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),d("content","flex: 1; min-width: 0;"),d("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[n("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),d("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),h("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[n("img",`
 display: block;
 width: 100%;
 `)]),s("bordered",`
 border: 1px solid var(--n-border-color);
 `,[n("&:target","border-color: var(--n-color-target);")]),s("action-segmented",[n(">",[d("action",[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),s("content-segmented, content-soft-segmented",[n(">",[d("content",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),s("footer-segmented, footer-soft-segmented",[n(">",[d("footer",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),s("embedded",`
 background-color: var(--n-color-embedded);
 `)]),U(h("card",`
 background: var(--n-color-modal);
 `,[s("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),X(h("card",`
 background: var(--n-color-popover);
 `,[s("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),ie={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},le=Object.assign(Object.assign({},S.props),ie),ge=Z({name:"Card",props:le,slots:Object,setup(o){const p=()=>{const{onClose:t}=o;t&&ae(t)},{inlineThemeDisabled:f,mergedClsPrefixRef:e,mergedRtlRef:u}=ee(o),c=S("Card","-card",se,oe,o,e),x=re("Card",u,e),v=y(()=>{const{size:t}=o,{self:{color:r,colorModal:l,colorTarget:C,textColor:m,titleTextColor:k,titleFontWeight:$,borderColor:w,actionColor:E,borderRadius:T,lineHeight:B,closeIconColor:R,closeIconColorHover:_,closeIconColorPressed:P,closeColorHover:F,closeColorPressed:O,closeBorderRadius:j,closeIconSize:I,closeSize:M,boxShadow:H,colorPopover:V,colorEmbedded:N,colorEmbeddedModal:A,colorEmbeddedPopover:D,[z("padding",t)]:L,[z("fontSize",t)]:W,[z("titleFontSize",t)]:q},common:{cubicBezierEaseInOut:G}}=c.value,{top:K,left:J,bottom:Q}=te(L);return{"--n-bezier":G,"--n-border-radius":T,"--n-color":r,"--n-color-modal":l,"--n-color-popover":V,"--n-color-embedded":N,"--n-color-embedded-modal":A,"--n-color-embedded-popover":D,"--n-color-target":C,"--n-text-color":m,"--n-line-height":B,"--n-action-color":E,"--n-title-text-color":k,"--n-title-font-weight":$,"--n-close-icon-color":R,"--n-close-icon-color-hover":_,"--n-close-icon-color-pressed":P,"--n-close-color-hover":F,"--n-close-color-pressed":O,"--n-border-color":w,"--n-box-shadow":H,"--n-padding-top":K,"--n-padding-bottom":Q,"--n-padding-left":J,"--n-font-size":W,"--n-title-font-size":q,"--n-close-size":M,"--n-close-icon-size":I,"--n-close-border-radius":j}}),a=f?ne("card",y(()=>o.size[0]),v,o):void 0;return{rtlEnabled:x,mergedClsPrefix:e,mergedTheme:c,handleCloseClick:p,cssVars:f?void 0:v,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{segmented:o,bordered:p,hoverable:f,mergedClsPrefix:e,rtlEnabled:u,onRender:c,embedded:x,tag:v,$slots:a}=this;return c==null||c(),i(v,{class:[`${e}-card`,this.themeClass,x&&`${e}-card--embedded`,{[`${e}-card--rtl`]:u,[`${e}-card--content${typeof o!="boolean"&&o.content==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.content,[`${e}-card--footer${typeof o!="boolean"&&o.footer==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.footer,[`${e}-card--action-segmented`]:o===!0||o!==!1&&o.action,[`${e}-card--bordered`]:p,[`${e}-card--hoverable`]:f}],style:this.cssVars,role:this.role},b(a.cover,t=>{const r=this.cover?g([this.cover()]):t;return r&&i("div",{class:`${e}-card-cover`,role:"none"},r)}),b(a.header,t=>{const{title:r}=this,l=r?g(typeof r=="function"?[r()]:[r]):t;return l||this.closable?i("div",{class:[`${e}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},i("div",{class:`${e}-card-header__main`,role:"heading"},l),b(a["header-extra"],C=>{const m=this.headerExtra?g([this.headerExtra()]):C;return m&&i("div",{class:[`${e}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},m)}),this.closable&&i(de,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),b(a.default,t=>{const{content:r}=this,l=r?g(typeof r=="function"?[r()]:[r]):t;return l&&i("div",{class:[`${e}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},l)}),b(a.footer,t=>{const r=this.footer?g([this.footer()]):t;return r&&i("div",{class:[`${e}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},r)}),b(a.action,t=>{const r=this.action?g([this.action()]):t;return r&&i("div",{class:`${e}-card__action`,role:"none"},r)}))}});export{ge as N};
