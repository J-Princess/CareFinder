import{d as h,r as i,n as g,h as v,o as x,c as w,a as r,_ as b,i as e,w as d,v as f,s as y,u as k,l as c,k as C,F as V,b as P,B,z as E}from"./index-7f288414.js";const S={class:"container mt-5"},U={class:"page-banner2"},A={class:"row justify-content-center align-items-center h-100"},F={class:"col-md-6"},N=e("h1",{class:"text-center"},"Registration",-1),q={class:"input-group flex-nowrap mt-3"},z=e("span",{class:"input-group-text px-3",id:"addon-wrapping",style:{"border-radius":"2px 0 0 2px"}},"#",-1),D={class:"input-group flex-nowrap mt-4"},M=e("span",{class:"input-group-text px-3",id:"addon-wrapping",style:{"border-radius":"2px 0 0 2px"}},"*",-1),T=["type"],j={class:"text-center mt-4"},I={class:"px-4",style:{color:"antiquewhite"}},W=h({__name:"Signup",setup(L){const o=i(""),n=i(""),a=i(!1),p=()=>{a.value=!a.value},u=g(),m=()=>{B(u,o.value,n.value).then(t=>{alert("Signup Successful "),t.user,E.push("/profile")}).catch(t=>{const s=t.code;t.message,alert(s)})};return(t,s)=>{const _=v("router-link");return x(),w(P,null,[r(b),e("div",S,[e("div",U,[e("div",A,[e("div",F,[N,e("div",q,[z,d(e("input",{type:"email",class:"form-control p-4",placeholder:"Email","aria-label":"Email","onUpdate:modelValue":s[0]||(s[0]=l=>o.value=l),"aria-describedby":"addon-wrapping",name:"email",autocomplete:"on",required:""},null,512),[[f,o.value]])]),e("div",D,[M,d(e("input",{class:"form-control p-4",type:a.value?"text":"password",placeholder:"Password","aria-label":"Password","onUpdate:modelValue":s[1]||(s[1]=l=>n.value=l),"aria-describedby":"addon-wrapping"},null,8,T),[[y,n.value]]),e("button",{onClick:p,style:{border:"none","border-radius":"0 2px 2px 0",padding:"0 14px"}},[e("i",{class:k(["fas",a.value?"fa-eye-slash":"fa-eye"])},null,2)])]),e("div",{class:"text-center"},[e("button",{type:"button",class:"btn btn-primary btn-lg align-items-center mt-5 px-5 fw-md",onClick:m}," Sign Up ")]),e("div",j,[e("p",I,[c(" Already have an account? "),r(_,{to:"/login"},{default:C(()=>[c("Login!")]),_:1})])])])])])]),r(V)],64)}}});export{W as default};