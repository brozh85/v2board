(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{Bl7J:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),s=t("3a4m"),r=t.n(s),c=t("/MKj"),l=t("20nU"),o=t("yWgo");class m extends i.a.Component{constructor(){super(...arguments),this.state={nav:[]}}componentDidMount(){var e=[{title:"\u4eea\u8868\u76d8",type:"item",href:"/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8ba2\u9605",type:"heading"},{title:"\u6211\u7684\u8ba2\u9605",type:"item",href:"/subscribe",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-badge"})},{title:"\u8d2d\u4e70\u8ba2\u9605",type:"item",href:"/plan",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u6211\u7684\u8ba2\u5355",type:"item",href:"/order",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u6211\u7684\u9080\u8bf7",type:"item",href:"/invite",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u7528\u6237",type:"heading"},{title:"\u4e2a\u4eba\u4e2d\u5fc3",type:"item",href:"/profile",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-user"})},{title:"\u6211\u7684\u5de5\u5355",type:"item",href:"/ticket",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-support"})},{title:"\u6d41\u91cf\u660e\u7ec6",type:"item",href:"/traffic",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bar-chart"})},{title:"\u4f7f\u7528\u6559\u7a0b",type:"item",href:"/tutorial",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-book-open"})}],a=[{title:"\u8fd4\u56de\u7528\u6237\u4e2d\u5fc3",type:"item",href:"/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})},{title:"\u4eea\u8868\u76d8",type:"item",href:"/admin/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8bbe\u7f6e",type:"heading"},{title:"\u7cfb\u7edf\u914d\u7f6e",type:"item",href:"/admin/config/system",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-equalizer"})},{title:"\u652f\u4ed8\u914d\u7f6e",type:"item",href:"/admin/config/payment",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-credit-card"})},{title:"\u670d\u52a1\u5668",type:"heading"},{title:"\u8282\u70b9\u7ba1\u7406",type:"item",href:"/admin/server",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-vector"})},{title:"\u6743\u9650\u7ec4\u7ba1\u7406",type:"item",href:"/admin/server/group",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-wrench"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u8ba2\u9605\u7ba1\u7406",type:"item",href:"/admin/plan",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8ba2\u5355\u7ba1\u7406",type:"item",href:"/admin/order",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u4f63\u91d1\u7ba1\u7406",type:"item",href:"/admin/commission",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-user-following"})},{title:"\u7528\u6237",type:"heading"},{title:"\u7528\u6237\u7ba1\u7406",type:"item",href:"/admin/user",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u516c\u544a\u7ba1\u7406",type:"item",href:"/admin/notice",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-speech"})},{title:"\u5de5\u5355\u7ba1\u7406",type:"item",href:"/admin/ticket",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-support"})}];Object(o["c"])("is_admin")&&e.unshift({title:"\u8fd4\u56de\u7ba1\u7406\u4e2d\u5fc3",type:"item",href:"/admin/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})}),this.isAdmin()?this.setState({nav:a}):this.setState({nav:e})}renderMenu(e,a,t,n){switch(e){case"heading":return i.a.createElement("li",{className:"nav-main-heading"},a);case"item":return i.a.createElement("li",{className:"nav-main-item"},i.a.createElement("a",{className:"nav-main-link ".concat(this.props.location.pathname===t&&"active"),onClick:()=>{r.a.push(t),this.props.dispatch({type:"header/showNav"})}},n&&n,i.a.createElement("span",{className:"nav-main-link-name"},a)))}}isAdmin(){return-1!==this.props.location.pathname.indexOf("admin")}render(){return i.a.createElement("nav",{id:"sidebar","aria-label":"Main Navigation"},i.a.createElement("div",{className:"smini-visible-block"},i.a.createElement("div",{className:"content-header bg-black-10"},i.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},i.a.createElement("span",{className:"text-white-75"},"X"),i.a.createElement("span",{className:"text-white"},"H")))),i.a.createElement("div",{className:"smini-hidden ".concat(1===l["a"].theme?"":"bg-header-dark")},i.a.createElement("div",{className:"content-header justify-content-lg-center bg-black-10"},i.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},i.a.createElement("span",{className:"text-white-75"},window.v2board.title?window.v2board.title:"V2Board")),i.a.createElement("div",{className:"d-lg-none"},i.a.createElement("a",{className:"text-white ml-2","data-toggle":"layout","data-action":"sidebar_close",href:"javascript:void(0)",onClick:()=>this.props.dispatch({type:"header/showNav"})},i.a.createElement("i",{className:"fa fa-times-circle"}))))),i.a.createElement("div",{className:"content-side content-side-full"},i.a.createElement("ul",{className:"nav-main"},this.state.nav.map(e=>{return this.renderMenu(e.type,e.title,e.href,e.icon)}))))}}var d=Object(c["c"])(e=>{var a=e.header;return{header:a}})(m),h=t("t3Un");class p extends i.a.Component{constructor(){super(...arguments),this.state={showAvatarMenu:!1,loading:!1,showSearchBar:!1}}componentDidMount(){var e=this;this.props.header.userInfo.email||this.setState({loading:!0},()=>{this.props.dispatch({type:"header/getUserInfo",complete:()=>e.setState({loading:!1})})})}showAvatarMenu(){var e=this;this.setState({showAvatarMenu:!this.state.showAvatarMenu},()=>{document.onclick=function(a){e.state.showAvatarMenu&&e.setState({showAvatarMenu:!1}),document.onclick=void 0}})}logout(){Object(h["a"])("/user/logout").then(e=>{r.a.push("/login")})}render(){return i.a.createElement("header",{id:"page-header"},i.a.createElement("div",{className:"content-header"},i.a.createElement("div",{className:"sidebar-toggle",style:{display:this.props.search?"block":"none"}},i.a.createElement("button",{type:"button",className:"btn btn-dual mr-1 d-lg-none","data-toggle":"layout","data-action":"sidebar_toggle",onClick:()=>this.props.dispatch({type:"header/showNav"})},i.a.createElement("i",{className:"fa fa-fw fa-bars"})),this.props.search&&i.a.createElement("button",{type:"button",className:"btn btn-dual",onClick:()=>{this.setState({showSearchBar:!0})}},i.a.createElement("i",{className:"fa fa-fw fa-search"})," ",i.a.createElement("span",{className:"ml-1 d-none d-sm-inline-block"},"\u641c\u7d22"))),i.a.createElement("div",null),i.a.createElement("div",null,this.state.loading?i.a.createElement("div",{className:"spinner-grow text-primary"}):i.a.createElement("div",{className:"dropdown d-inline-block"},i.a.createElement("button",{type:"button",className:"btn btn-dual",id:"page-header-user-dropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:()=>this.showAvatarMenu()},i.a.createElement("img",{className:"img-avatar img-avatar32 img-avatar-thumb",src:this.props.header.userInfo.avatar_url,alt:""}),i.a.createElement("span",{className:"d-none d-lg-inline ml-1"},this.props.header.userInfo.email),i.a.createElement("i",{className:"fa fa-fw fa-angle-down ml-1"})),i.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 ".concat(this.state.showAvatarMenu&&"show"),"aria-labelledby":"page-header-user-dropdown"},i.a.createElement("div",{className:"p-2"},i.a.createElement("a",{className:"dropdown-item d-flex justify-content-between align-items-center",href:"javascript:;",onClick:()=>this.logout()},"\u9000\u51fa\u767b\u5f55",i.a.createElement("i",{className:"fa fa-fw fa-sign-out-alt text-danger ml-1"}))))))),this.props.search&&i.a.createElement("div",{className:"overlay-header bg-dark ".concat(this.state.showSearchBar?"show":"")},i.a.createElement("div",{className:"content-header bg-dark"},i.a.createElement("div",{className:"w-100"},i.a.createElement("div",{className:"input-group"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:()=>{this.setState({showSearchBar:!1})}},i.a.createElement("i",{className:"fa fa-fw fa-times-circle"}))),i.a.createElement("input",{type:"text",className:"form-control border-0",placeholder:this.props.search.placeholder,onChange:e=>this.props.search.onChange(e.target.value)}))))))}}var u=Object(c["c"])(e=>{var a=e.header;return{header:a}})(p);class g extends i.a.Component{render(){return i.a.createElement("footer",{id:"page-footer",className:"bg-body-light"},i.a.createElement("div",{className:"content py-0"},i.a.createElement("div",{className:"row font-size-sm"},i.a.createElement("div",{className:"col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right"},i.a.createElement("i",{className:"fa fa-heart text-danger"})," ",window.v2board.title?window.v2board.title:"V2Board"),i.a.createElement("div",{className:"col-sm-6 order-sm-1 text-center text-sm-left"},i.a.createElement("a",{className:"font-w600",href:"/",target:"_blank"},"V2Board v0.2"),i.a.createElement("span",{"data-toggle":"year-copy"})))))}}class v extends i.a.Component{render(){return i.a.createElement("div",{id:"page-container",className:"sidebar-o ".concat(1===l["a"].theme?"sidebar-dark":"page-header-dark"," side-scroll page-header-fixed main-content-boxed side-trans-enabled ").concat(this.props.header.showNav&&"sidebar-o-xs")},i.a.createElement(d,this.props),i.a.createElement(u,{search:this.props.search}),this.props.loading?i.a.createElement("main",{id:"main-container"},i.a.createElement("div",{className:"content content-full"},i.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},i.a.createElement("span",{className:"sr-only"},"Loading...")))):this.props.children,i.a.createElement(g,null))}}a["a"]=Object(c["c"])(e=>{var a=e.header;return{header:a}})(v)},I0co:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return y});var n=t("jehZ"),i=t.n(n),s=(t("g9YV"),t("wCAj")),r=(t("qVdP"),t("jsC+")),c=(t("Awhp"),t("KrTs")),l=(t("lUTK"),t("BvKs")),o=(t("5Dmo"),t("3S7+")),m=(t("Pwec"),t("CtXQ")),d=(t("miYZ"),t("tsqr")),h=t("p0pE"),p=t.n(h),u=t("q1tI"),g=t.n(u),v=t("Bl7J"),E=t("t3Un"),f=t("LbTH"),b=t("wd/R"),N=t.n(b);class y extends g.a.Component{constructor(){super(...arguments),this.state={orders:[],pagination:{current:1,pageSize:10,total:0},id:void 0,loading:!0}}componentDidMount(){this.fetchData()}paginationOnChange(e){this.setState({pagination:e},()=>this.fetchData())}fetchData(){var e;e=p()({},this.state.pagination,{is_commission:!0}),this.state.id&&Object.assign(e,{id:this.state.id}),Object(E["a"])("/admin/order/fetch",e).then(e=>{200===e.code&&this.setState({orders:e.data,pagination:p()({},this.state.pagination,{total:e.total}),loading:!1})})}searchOnChange(e){this.inputDelayTimer&&clearTimeout(this.inputDelayTimer),this.inputDelayTimer=setTimeout(function(){this.inputDelayTimer=null,this.setState({id:e,pagination:p()({},this.state.pagination,{current:1})},()=>{this.fetchData()})}.bind(this),400)}update(e,a){Object(E["b"])("/admin/order/update",{trade_no:e,commission_status:a}).then(e=>{200===e.code&&e.data&&(d["a"].success("\u64cd\u4f5c\u6210\u529f"),this.fetchData())})}render(){var e=[{title:"# \u5e8f\u53f7",dataIndex:"id",key:"id"},{title:"\u9080\u8bf7\u4eba",dataIndex:"invite_user_id",key:"invite_user_id"},{title:"\u8ba2\u5355\u91d1\u989d",dataIndex:"total_amount",key:"total_amount",align:"right",render:e=>{return(e/100).toFixed(2)}},{title:"\u4f63\u91d1\u91d1\u989d",dataIndex:"commission_balance",key:"commission_balance",align:"right",render:e=>{return(e/100).toFixed(2)}},{title:g.a.createElement("span",null,"\u4f63\u91d1\u72b6\u6001 ",g.a.createElement(o["a"],{placement:"top",title:"\u6807\u8bb0\u4e3a[\u5df2\u786e\u8ba4]\u540e\u5c06\u4f1a\u7531\u7cfb\u7edf\u5904\u7406\u540e\u53d1\u653e\u5230\u7528\u6237\u5e76\u5b8c\u6210"},g.a.createElement(m["a"],{type:"question-circle"}))),dataIndex:"commission_status",key:"commission_status",render:(e,a)=>{var t=["processing","success","success"];return g.a.createElement("div",null,g.a.createElement(r["a"],{trigger:["click"],overlay:g.a.createElement(l["a"],null,g.a.createElement(l["a"].Item,{key:"0",disabled:0===e,onClick:e=>{this.update(a.trade_no,e.key)}},"\u786e\u8ba4\u4e2d"),g.a.createElement(l["a"].Item,{key:"1",disabled:1===e,onClick:e=>{this.update(a.trade_no,e.key)}},"\u5df2\u786e\u8ba4"),g.a.createElement(l["a"].Item,{key:"2",disabled:2===e,onClick:e=>{this.update(a.trade_no,e.key)}},"\u5df2\u5b8c\u6210"))},g.a.createElement("div",null,g.a.createElement(c["a"],{status:t[e]}),g.a.createElement("span",null,f["a"].commissionStatusText[e]," "),g.a.createElement("a",{href:"javascript:;"},"\u6807\u8bb0\u4e3a ",g.a.createElement(m["a"],{type:"caret-down"})))))}},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"created_at",key:"created_at",align:"right",render:e=>{return N()(1e3*e).format("YYYY/MM/DD HH:mm")}}];return g.a.createElement(v["a"],i()({},this.props,{loading:this.state.loading,search:{placeholder:"\u901a\u8fc7ID\u5e8f\u53f7\u641c\u7d22",onChange:e=>this.searchOnChange(e)}}),g.a.createElement("main",{id:"main-container"},g.a.createElement("div",{className:"content content-full"},g.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},g.a.createElement("h2",{className:"font-w300 mt-4 mb-3"},"\u4f63\u91d1\u7ba1\u7406")),g.a.createElement("div",{className:"bg-white"},g.a.createElement(s["a"],{dataSource:this.state.orders,pagination:p()({},this.state.pagination,{size:"small"}),columns:e,scroll:{x:850},onChange:e=>this.paginationOnChange(e)})))))}}},LbTH:function(e,a,t){"use strict";a["a"]={cycleText:{month_price:"\u6708\u4ed8",quarter_price:"\u5b63\u4ed8",half_year_price:"\u534a\u5e74\u4ed8",year_price:"\u5e74\u4ed8"},orderStatusText:["\u5f85\u652f\u4ed8","\u5f00\u901a\u4e2d","\u5df2\u53d6\u6d88","\u5df2\u5b8c\u6210"],commissionStatusText:["\u786e\u8ba4\u4e2d","\u5df2\u786e\u8ba4","\u5df2\u5b8c\u6210"],ticketStatusText:["\u5f00\u542f","\u5f85\u56de\u590d","\u5f85\u7b54\u590d","\u5173\u95ed"]}}}]);