;/*FB_PKG_DELIM*/

__d("PolarisClipsItemModal_clips.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{plural:!0},name:"PolarisClipsItemModal_clips",selections:[{alias:null,args:null,concreteType:"XDTMediaDict",kind:"LinkedField",name:"media",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"code",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_width",storageKey:null}],storageKey:null}],type:"XDTClipsItemDict",abstractKey:null};e.exports=a}),null);
__d("PolarisClipsItemModal.next.react",["CometRelay","IGRouter_DO_NOT_USE.react","PolarisClipsItemModal_clips.graphql","PolarisLinkBuilder","PolarisPost.react","PolarisPostModal.react","PolarisPostVariants","nullthrows","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react")),k=i.useRef;function l(a,b){var c=null;a!=null&&a.forEach(function(a){var d;((d=a.media)==null?void 0:d.pk)===b&&(c=a)});return c}function m(a){var b;if(((b=a.media)==null?void 0:b.original_height)!=null&&((b=a.media)==null?void 0:b.original_width)!=null){return{height:(b=a.media)==null?void 0:b.original_height,width:(b=a.media)==null?void 0:b.original_width}}}function a(a){var e=a.analyticsContext,f=a.clipFragmentsKey,g=a.history,i=a.onClose,n=a.onOpen;a=a.postId;f=d("CometRelay").useFragment(h!==void 0?h:h=b("PolarisClipsItemModal_clips.graphql"),f);g=k(g.location.pathname);var o=l(f,a);if(!o)return null;f=f.map(function(a){return c("nullthrows")((a=a.media)==null?void 0:a.pk)});return j.jsx(c("PolarisPostModal.react"),{analyticsContext:e,combinedPostIds:f,dimensions:m(o),mediaLinkBuilder:d("PolarisLinkBuilder").buildClipsMediaLink,modalEntryPath:g.current,onClose:i,onOpen:n,postCode:c("nullthrows")((f=o.media)==null?void 0:f.code),postId:a,children:j.jsx(c("PolarisPost.react"),{analyticsContext:e+"Modal",autoplay:!0,id:a,isVisible:!0,variant:d("PolarisPostVariants").VARIANTS.flexible,visiblePosition:0})})}a.displayName=a.name+" [from "+f.id+"]";e=d("IGRouter_DO_NOT_USE.react").withIGRouter(a);g["default"]=e}),98);
__d("PolarisCreateTagRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisCreateTagRoot.react").__setRef("PolarisCreateTagRoot.entrypoint")};g["default"]=a}),98);