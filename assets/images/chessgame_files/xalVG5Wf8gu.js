;/*FB_PKG_DELIM*/

__d("IGDSVolumeOnFilledIcon.react",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(3),d;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d=j.jsx("path",{d:"M16.636 7.028a1.5 1.5 0 10-2.395 1.807 5.365 5.365 0 011.103 3.17 5.378 5.378 0 01-1.105 3.176 1.5 1.5 0 102.395 1.806 8.396 8.396 0 001.71-4.981 8.39 8.39 0 00-1.708-4.978zm3.73-2.332A1.5 1.5 0 1018.04 6.59 8.823 8.823 0 0120 12.007a8.798 8.798 0 01-1.96 5.415 1.5 1.5 0 002.326 1.894 11.672 11.672 0 002.635-7.31 11.682 11.682 0 00-2.635-7.31zm-8.963-3.613a1.001 1.001 0 00-1.082.187L5.265 6H2a1 1 0 00-1 1v10.003a1 1 0 001 1h3.265l5.01 4.682.02.021a1 1 0 001.704-.814L12.005 2a1 1 0 00-.602-.917z"}),b[0]=d):d=b[0];b[1]!==a?(d=j.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:d})),b[1]=a,b[2]=d):d=b[2];return d}b=j.memo(a);g["default"]=b}),98);
__d("PolarisClipsDesktopPopoverHeader.react",["IGDSBox.react","IGDSIconButton.react","IGDSText.react","IGDSXOutlineIcon.react","PolarisGenericStrings","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(16),e=a.children,f=a.endAdornment,g=a.onClose;a=a.startAdornment;var h;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(h="x6s0dn4 x78zum5 x19l4sor x1c4vz4f x2lah0s",b[0]=h):h=b[0];var k;b[1]!==a||b[2]!==g?(k=a!=null?a:g&&j.jsx(c("IGDSIconButton.react"),{onClick:g,children:j.jsx(c("IGDSXOutlineIcon.react"),{alt:d("PolarisGenericStrings").CLOSE_TEXT,size:16})}),b[1]=a,b[2]=g,b[3]=k):k=b[3];b[4]!==k?(a=j.jsx("div",{className:h,children:k}),b[4]=k,b[5]=a):a=b[5];b[6]===Symbol["for"]("react.memo_cache_sentinel")?(g="x1iyjqo2",b[6]=g):g=b[6];b[7]!==e?(h=j.jsx("div",{className:g,children:j.jsx(c("IGDSText.react").LabelEmphasized,{textAlign:"center",children:e})}),b[7]=e,b[8]=h):h=b[8];b[9]===Symbol["for"]("react.memo_cache_sentinel")?(k="x6s0dn4 x78zum5 x19l4sor x1c4vz4f x2lah0s",b[9]=k):k=b[9];b[10]!==f?(g=j.jsx("div",{className:k,children:f}),b[10]=f,b[11]=g):g=b[11];b[12]!==a||b[13]!==h||b[14]!==g?(e=j.jsxs(c("IGDSBox.react"),{alignItems:"center",direction:"row",display:"flex",height:68,padding:6,children:[a,h,g]}),b[12]=a,b[13]=h,b[14]=g,b[15]=e):e=b[15];return e}g["default"]=a}),98);
__d("PolarisClipsTabDesktopClipPlaceholder.react",["IGDSBox.react","IGDSGlimmer.react","PolarisClipsTabHelpers","PolarisDsaQEHelpers","react","stylex","useThrottled"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useLayoutEffect,l=b.useState,m=b.c,n={background:{backgroundColor:"x8x6lru",borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",$$css:!0},glimmerColor:{backgroundColor:"x5keihi",$$css:!0},icon:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"x1gnnpzl",marginEnd:"x1emribx",marginLeft:null,marginRight:null,width:"x1849jeq",$$css:!0},longLine:{height:"x1kpxq89",width:"xycev2y",$$css:!0},margin:{marginTop:"x14vqqas",$$css:!0},shortLine:{height:"x1kpxq89",width:"x3hqpx7",$$css:!0}};function a(){var a=m(34),b=l(0),e=b[0],f=b[1];b=e*.5625;var g;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(g=function(){f(d("PolarisClipsTabHelpers").getReelMediaContainerHeight(d("PolarisDsaQEHelpers").hasTabbedReelsHeader()))},a[0]=g):g=a[0];var i=c("useThrottled")(g,d("PolarisClipsTabHelpers").WINDOW_RESIZE_THROTTLE),o;a[1]!==i?(g=function(){i();window.addEventListener("resize",i);return function(){window.removeEventListener("resize",i)}},o=[i],a[1]=i,a[2]=g,a[3]=o):(g=a[2],o=a[3]);k(g,o);var p,q,r;if(a[4]!==e||a[5]!==b){g=d("PolarisClipsTabHelpers").getClipsContainerStyles();o=c("IGDSBox.react");q="column";r="flex";p=(h||(h=c("stylex")))(g.container);var s=e>0?e+"px":"100%",t=b>0?b+"px":void 0,u;a[12]!==s||a[13]!==t?(u={height:s,width:t},a[12]=s,a[13]=t,a[14]=u):u=a[14];a[15]===Symbol["for"]("react.memo_cache_sentinel")?(s=j.jsx(c("IGDSGlimmer.react"),{index:0,xstyle:[n.icon,n.glimmerColor]}),a[15]=s):s=a[15];a[16]===Symbol["for"]("react.memo_cache_sentinel")?(t=j.jsxs(c("IGDSBox.react"),{alignItems:"center",direction:"row",display:"flex",children:[s,j.jsx(c("IGDSGlimmer.react"),{index:0,xstyle:[n.longLine,n.glimmerColor]})]}),a[16]=t):t=a[16];a[17]===Symbol["for"]("react.memo_cache_sentinel")?(s=j.jsx(c("IGDSGlimmer.react"),{index:1,xstyle:[n.longLine,n.margin,n.glimmerColor]}),a[17]=s):s=a[17];a[18]===Symbol["for"]("react.memo_cache_sentinel")?(t=j.jsxs(c("IGDSBox.react"),{direction:"column",display:"flex",height:"100%",justifyContent:"end",padding:4,width:"100%",children:[t,s,j.jsx(c("IGDSGlimmer.react"),{index:2,xstyle:[n.shortLine,n.margin,n.glimmerColor]})]}),a[18]=t):t=a[18];s=j.jsx("div",{className:h([g.container,n.background]),style:u,children:t});u=h(g.ufi);a[4]=e;a[5]=b;a[6]=u;a[7]=p;a[8]=s;a[9]=o;a[10]=q;a[11]=r}else u=a[6],p=a[7],s=a[8],o=a[9],q=a[10],r=a[11];a[19]===Symbol["for"]("react.memo_cache_sentinel")?(t={height:"inherit"},a[19]=t):t=a[19];a[20]!==u?(g=j.jsx("div",{className:u,style:t}),a[20]=u,a[21]=g):g=a[21];a[22]!==p||a[23]!==s||a[24]!==g?(b=j.jsxs("div",{className:p,children:[s,g]}),a[22]=p,a[23]=s,a[24]=g,a[25]=b):b=a[25];t="calc(100vh - 32px - "+e+"px)";a[26]!==t?(u=j.jsx("div",{style:{height:t,width:"100%"}}),a[26]=t,a[27]=u):u=a[27];a[28]!==o||a[29]!==q||a[30]!==r||a[31]!==b||a[32]!==u?(p=j.jsxs(o,{direction:q,display:r,children:[b,u]}),a[28]=o,a[29]=q,a[30]=r,a[31]=b,a[32]=u,a[33]=p):p=a[33];return p}g["default"]=a}),98);
__d("PolarisClipsTabDesktopContainerLoggedOutQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7542653402498692"}),null);
__d("PolarisClipsTabDesktopPage.react",["CometRelay","PolarisClipsTabDesktopContainerElementProvider.react","PolarisReactReduxDeprecationExports.react","cr:1556","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var c=i(6),e;c[0]===Symbol["for"]("react.memo_cache_sentinel")?(e=b("cr:1556")&&j.jsx(b("cr:1556"),{}),c[0]=e):e=c[0];var f;c[1]!==a.props.routeParams.shortcode?(f={chainingMediaID:a.props.routeParams.shortcode},c[1]=a.props.routeParams.shortcode,c[2]=f):f=c[2];c[3]!==a.entryPoints.desktopContainerContent||c[4]!==f?(e=j.jsx(d("PolarisReactReduxDeprecationExports.react").PolarisReactReduxDeprecationProvider,{deprecateSubtree:!0,logLevel:"warn",children:j.jsx(d("PolarisClipsTabDesktopContainerElementProvider.react").PolarisClipsTabDesktopContainerElementProvider,{children:j.jsxs(j.Fragment,{children:[e,j.jsx(d("CometRelay").EntryPointContainer,{entryPointReference:a.entryPoints.desktopContainerContent,props:f})]})})}),c[3]=a.entryPoints.desktopContainerContent,c[4]=f,c[5]=e):e=c[5];return e}g["default"]=a}),98);
__d("PolarisClipsTabDesktopPagePlaceholder.react",["IGDSBox.react","PolarisClipsTabDesktopClipPlaceholder.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(){var a=i(1),b;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b=j.jsx(c("IGDSBox.react"),{alignItems:"center",direction:"column",display:"flex",height:"100%",marginTop:8,width:"100%",children:j.jsx(c("PolarisClipsTabDesktopClipPlaceholder.react"),{})}),a[0]=b):b=a[0];return b}g["default"]=a}),98);
__d("PolarisClipsTabDesktopRoot.react",["CometPlaceholder.react","PolarisClipsTabDesktopPagePlaceholder.react","deferredLoadComponent","react","requireDeferredForDisplay","withPolarisShell.react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisClipsTabDesktopPage.react").__setRef("PolarisClipsTabDesktopRoot.react"));function a(a){var b=i(3),d;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d=j.jsx(c("PolarisClipsTabDesktopPagePlaceholder.react"),{}),b[0]=d):d=b[0];b[1]!==a?(d=j.jsx(c("CometPlaceholder.react"),{fallback:d,children:j.jsx(k,babelHelpers["extends"]({},a))}),b[1]=a,b[2]=d):d=b[2];return d}b=c("withPolarisShell.react")(a);g["default"]=b}),98);
__d("PolarisPostCommentsContainerPlaceholder.react",["IGDSBox.react","PolarisPostCommentPlaceholder.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(27),d=a.indexOffset,e=a.marginTop;a=a.xStyle;d=d===void 0?0:d;e=e===void 0?6:e;var f=d+0,g;b[0]!==f||b[1]!==e?(g=j.jsx(c("PolarisPostCommentPlaceholder.react"),{index:f,marginTop:e}),b[0]=f,b[1]=e,b[2]=g):g=b[2];f=d+1;b[3]!==f?(e=j.jsx(c("PolarisPostCommentPlaceholder.react"),{index:f}),b[3]=f,b[4]=e):e=b[4];f=d+2;var h;b[5]!==f?(h=j.jsx(c("PolarisPostCommentPlaceholder.react"),{index:f}),b[5]=f,b[6]=h):h=b[6];f=d+3;var k;b[7]!==f?(k=j.jsx(c("PolarisPostCommentPlaceholder.react"),{index:f}),b[7]=f,b[8]=k):k=b[8];f=d+4;var l;b[9]!==f?(l=j.jsx(c("PolarisPostCommentPlaceholder.react"),{index:f}),b[9]=f,b[10]=l):l=b[10];f=d+5;var m;b[11]!==f?(m=j.jsx(c("PolarisPostCommentPlaceholder.react"),{index:f}),b[11]=f,b[12]=m):m=b[12];f=d+6;var n;b[13]!==f?(n=j.jsx(c("PolarisPostCommentPlaceholder.react"),{index:f}),b[13]=f,b[14]=n):n=b[14];f=d+7;b[15]!==f?(d=j.jsx(c("PolarisPostCommentPlaceholder.react"),{index:f}),b[15]=f,b[16]=d):d=b[16];b[17]!==a||b[18]!==g||b[19]!==e||b[20]!==h||b[21]!==k||b[22]!==l||b[23]!==m||b[24]!==n||b[25]!==d?(f=j.jsxs(c("IGDSBox.react"),{marginStart:2,xstyle:a,children:[g,e,h,k,l,m,n,d]}),b[17]=a,b[18]=g,b[19]=e,b[20]=h,b[21]=k,b[22]=l,b[23]=m,b[24]=n,b[25]=d,b[26]=f):f=b[26];return f}g["default"]=a}),98);
__d("XPolarisClipsTabControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/reels/{?shortcode}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("useContentRect",["react","useResizeObserver"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useState;function a(){var a=j(),b=a[0],d=a[1];a=i(function(a){return d(a)},[]);a=c("useResizeObserver")(a);return[b,a]}g["default"]=a}),98);
__d("usePolarisDashInfo_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisDashInfo_media",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_dash_eligible",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"number_of_qualities",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"video_dash_manifest",storageKey:null}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("usePolarisDashInfo",["CometRelay","react","usePolarisDashInfo_media.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i;c=i||d("react");c.useMemo;var j=c.c;function a(a){var c=j(4);a=d("CometRelay").useFragment(h!==void 0?h:h=b("usePolarisDashInfo_media.graphql"),a);var e=a.is_dash_eligible===1,f;c[0]!==e||c[1]!==a.number_of_qualities||c[2]!==a.video_dash_manifest?(f={isDashEligible:e,numberOfQualities:a.number_of_qualities,videoDashManifest:a.video_dash_manifest},c[0]=e,c[1]=a.number_of_qualities,c[2]=a.video_dash_manifest,c[3]=f):f=c[3];e=f;return e}g["default"]=a}),98);
__d("usePolarisMediaOverlayInfo_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisMediaOverlayInfo_media",selections:[{alias:null,args:null,concreteType:"XDTMediaOverlayPayloadSchema",kind:"LinkedField",name:"media_overlay_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"misinformation_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"overlay_layout",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"overlay_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null}],storageKey:null}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("usePolarisMediaOverlayInfo",["CometRelay","polarisMisinformationTypeUtils","usePolarisMediaOverlayInfo_media.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){var c;a=d("CometRelay").useFragment(h!==void 0?h:h=b("usePolarisMediaOverlayInfo_media.graphql"),a);a=a==null?void 0:a.media_overlay_info;return a!=null?{banner:null,bloks_data:null,buttons:null,description:a.description,icon:null,misinformation_type:d("polarisMisinformationTypeUtils").getMisinformationType(a.misinformation_type),overlay_layout:(c=a.overlay_layout)!=null?c:0,overlay_type:(c=(c=a.overlay_type)==null?void 0:c.toString())!=null?c:"",title:a.title}:null}g["default"]=a}),98);
__d("useShareUrlsDictFragment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useShareUrlsDictFragment",selections:[{alias:null,args:null,concreteType:"XDTMediaShareableTracking",kind:"LinkedField",name:"share_urls",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"facebook",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"messenger",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sms",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"threads",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"twitter",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"whatsapp",storageKey:null}],storageKey:null}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("useShareUrlsDict",["CometRelay","PolarisThirdPartyPlatformType","react","useShareUrlsDictFragment.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).c;function a(a){var c=j(8);a=d("CometRelay").useFragment(h!==void 0?h:h=b("useShareUrlsDictFragment.graphql"),a);if(a==null)return null;a=a.share_urls;if(a==null)return null;var e;if(c[0]!==a.email||c[1]!==a.facebook||c[2]!==a.threads||c[3]!==a.messenger||c[4]!==a.twitter||c[5]!==a.whatsapp||c[6]!==a.sms){var f;e={};e[(f=d("PolarisThirdPartyPlatformType")).PolarisThirdPartyPlatformType.EMAIL]=a.email;e[f.PolarisThirdPartyPlatformType.FACEBOOK]=a.facebook;e[f.PolarisThirdPartyPlatformType.THREADS]=a.threads;e[f.PolarisThirdPartyPlatformType.MESSENGER]=a.messenger;e[f.PolarisThirdPartyPlatformType.TWITTER]=a.twitter;e[f.PolarisThirdPartyPlatformType.WHATSAPP]=a.whatsapp;e[f.PolarisThirdPartyPlatformType.USER_SMS]=a.sms;c[0]=a.email;c[1]=a.facebook;c[2]=a.threads;c[3]=a.messenger;c[4]=a.twitter;c[5]=a.whatsapp;c[6]=a.sms;c[7]=e}else e=c[7];return e}g["default"]=a}),98);