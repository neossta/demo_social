"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[988],{8988:function(e,n,r){r.r(n),r.d(n,{default:function(){return y}});var s=r(364),o=r(2938),t=function(e){return e.usersPage.users},i=function(e){return e.usersPage.pageSize},a=function(e){return e.usersPage.currentPage},l=function(e){return e.usersPage.isFetching},u=function(e){return e.usersPage.totalUsersCount},c=function(e){return e.usersPage.followingInProgress},g=r(5671),f=r(3144),p=r(136),h=r(5716),d=r(2791),P=r(7867),w="Users_avatar__meg64",C="Users_status__TRoxL",j="Users_user__cCzY1",v=r(3504),x=r(885),_="Paginator_paginatorContainer__RfW1q",m="Paginator_page__18-Ch",k="Paginator_selectedPage__yTBiq",U=r(184),b=function(e){for(var n=Math.ceil(e.totalUsersCount/e.pageSize),r=(0,d.useState)(1),s=(0,x.Z)(r,2),o=s[0],t=s[1],i=(o-1)*e.pageSize+1,a=o*e.pageSize,l=[],u=1;u<=n;u++)l.push(u);return(0,U.jsxs)("div",{className:_,children:[o>1&&(0,U.jsx)("button",{onClick:function(){return t(o-1)},children:"<<PREV"}),l.filter((function(e){return e>=i&&e<=a})).map((function(n){return(0,U.jsx)("button",{className:m+" "+(n===e.currentPage?k:""),onClick:function(r){return e.onPageChanged(n)},children:n})})),(0,U.jsx)("button",{onClick:function(){return t(o+1)},children:"NEXT>>"})]})},I=function(e){return(0,U.jsxs)("div",{className:j,children:[(0,U.jsxs)("div",{children:[(0,U.jsx)(v.OL,{to:"/profile/"+e.id,children:(0,U.jsx)("img",{src:null!=e.avatar?e.avatar:"https://icdn.lenta.ru/images/2021/09/20/02/20210920021024196/square_320_5c43cbf4b742b3b9f6a141cef1a593ae.jpg",alt:"avatar",className:w})})," "]}),(0,U.jsxs)("div",{children:[(0,U.jsx)("div",{children:e.name}),(0,U.jsx)("div",{className:C,children:e.status})]}),(0,U.jsx)("span",{children:e.followed?(0,U.jsx)("button",{disabled:e.followingInProgress.some((function(n){return n===e.id})),onClick:function(){e.unfollow(e.id)},children:"Unfollow"}):(0,U.jsx)("button",{disabled:e.followingInProgress.some((function(n){return n===e.id})),onClick:function(){e.follow(e.id)},children:"Follow"})})]})},z=function(e){var n=e.users.map((function(n){return(0,U.jsx)(I,{name:n.name,id:n.id,followed:n.followed,avatar:n.photos.small,status:n.status,follow:function(){e.follow(n.id)},unfollow:function(){e.unfollow(n.id)},setFollowingInProgress:function(n,r){e.setFollowingInProgress(n,r)},followingInProgress:e.followingInProgress})}));return(0,d.useEffect)((function(){window.scrollTo(0,0)}),[e.currentPage]),(0,U.jsxs)("div",{children:[(0,U.jsx)("div",{children:n}),(0,U.jsx)(b,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,onPageChanged:e.onPageChanged,currentPage:e.currentPage})]})},S=function(e){(0,p.Z)(r,e);var n=(0,h.Z)(r);function r(){var e;(0,g.Z)(this,r);for(var s=arguments.length,o=new Array(s),t=0;t<s;t++)o[t]=arguments[t];return(e=n.call.apply(n,[this].concat(o))).onPageChanged=function(n){e.props.setCurrentPage(n),e.props.getUsersThunkCreator(n,e.props.pageSize)},e}return(0,f.Z)(r,[{key:"componentDidMount",value:function(){0===this.props.users.length&&this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,U.jsxs)(U.Fragment,{children:[this.props.isFetching?(0,U.jsx)(P.Z,{}):null,(0,U.jsx)(z,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,setFollowingInProgress:this.props.setFollowingInProgress,followingInProgress:this.props.followingInProgress})]})}}]),r}(d.Component),F=S,y=(0,s.$j)((function(e){return{users:t(e),pageSize:i(e),totalUsersCount:u(e),currentPage:a(e),isFetching:l(e),followingInProgress:c(e)}}),{follow:o.ZN,unfollow:o.fv,setCurrentPage:o.D4,setFollowingInProgress:o.Vb,getUsersThunkCreator:o.Uk})(F)}}]);
//# sourceMappingURL=988.ac344647.chunk.js.map