(this.webpackJsonppresupuesto_mio=this.webpackJsonppresupuesto_mio||[]).push([[0],{15:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),r=a.n(c),n=a(7),u=a.n(n),i=(a(15),a(9)),j=a(2),l=function(e){var t=e.mensaje;return Object(s.jsx)("p",{className:"alert alert-danger error",children:t})},o=function(e){var t=e.guardarPresupuesto,a=e.guardarRestante,r=e.actualizarMostrarPregunta,n=Object(c.useState)(0),u=Object(j.a)(n,2),i=u[0],o=u[1],b=Object(c.useState)(!1),d=Object(j.a)(b,2),O=d[0],m=d[1];return Object(s.jsxs)(c.Fragment,{children:[Object(s.jsx)("h2",{children:"Coloca tu Presupuesto"}),O?Object(s.jsx)(l,{mensaje:"Presupuesto no valido"}):null,Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i<1||isNaN(i)?m(!0):(m(!1),t(i),a(i),r(!1),o(0))},children:[Object(s.jsx)("input",{type:"number",className:"u-full-width",placeholder:"Coloca tu presupuesto",onChange:function(e){o(parseInt(e.target.value))},value:i}),Object(s.jsx)("input",{type:"submit",className:"button-primary u-full-width",value:"Definir Presupuesto"})]})]})},b=a(8),d=a.n(b),O=function(e){var t=e.guardarElGasto,a=e.guardarCrearGasto,r=Object(c.useState)(""),n=Object(j.a)(r,2),u=n[0],i=n[1],o=Object(c.useState)(0),b=Object(j.a)(o,2),O=b[0],m=b[1],h=Object(c.useState)(!1),p=Object(j.a)(h,2),g=p[0],x=p[1];return Object(s.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===u.trim()||O<1||isNaN(O))x(!0);else{x(!1);var s={nombre:u,cantidad:O};s.id=d.a.generate(),t(s),a(!0),i(""),m(0)}},children:[Object(s.jsx)("h2",{children:"Agrega tus gastos aqui"}),g?Object(s.jsx)(l,{mensaje:"Ambos campos son necesarios o Presupuesto Incorrecto"}):null,Object(s.jsxs)("div",{className:"campo",children:[Object(s.jsx)("label",{children:"Nombre Gasto"}),Object(s.jsx)("input",{type:"text",className:"u-full-width",placeholder:"Ej. Transporte",onChange:function(e){i(e.target.value)},value:u})]}),Object(s.jsxs)("div",{className:"campo",children:[Object(s.jsx)("label",{children:"Cantidad Gasto"}),Object(s.jsx)("input",{type:"number",className:"u-full-width",placeholder:"Ej. 300",onChange:function(e){m(parseInt(e.target.value))},value:O})]}),Object(s.jsx)("input",{type:"submit",className:"button-primary u-full-width",value:"Agregar Gasto"})]})},m=function(e){var t=e.gasto,a=t.nombre,c=t.cantidad;return Object(s.jsx)("li",{className:"gastos",children:Object(s.jsxs)("p",{children:[a,Object(s.jsxs)("span",{className:"gasto",children:["$ ",c]})]})})},h=function(e){var t=e.gastos;return Object(s.jsxs)("div",{className:"gastos-realizados",children:[Object(s.jsx)("h2",{children:"Listado"}),t.map((function(e){return Object(s.jsx)(m,{gasto:e},e.id)}))]})},p=function(e,t){return e/4>t?"alert alert-danger":e/2>t?"alert alert-warning":"alert alert-success"},g=function(e){var t=e.cantidad,a=e.restante;return Object(s.jsxs)(c.Fragment,{children:[Object(s.jsxs)("div",{className:"alert alert-primary",children:["Presupuesto: $ ",t]}),Object(s.jsxs)("div",{className:p(t,a),children:["Restante: $ ",a]})]})};var x=function(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(0),u=Object(j.a)(n,2),l=u[0],b=u[1],d=Object(c.useState)({}),m=Object(j.a)(d,2),p=m[0],x=m[1],f=Object(c.useState)([]),v=Object(j.a)(f,2),N=v[0],S=v[1],C=Object(c.useState)(!1),P=Object(j.a)(C,2),w=P[0],y=P[1],G=Object(c.useState)(!0),E=Object(j.a)(G,2),F=E[0],I=E[1];return Object(c.useEffect)((function(){if(!0===w){S([].concat(Object(i.a)(N),[p])),y(!1);var e=l-p.cantidad;b(e)}}),[p,w,N,l]),Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("header",{children:[Object(s.jsx)("h1",{children:"Gasto Semanal"}),Object(s.jsx)("div",{className:"contenido-principal contenido",children:F?Object(s.jsx)(o,{guardarPresupuesto:r,guardarRestante:b,actualizarMostrarPregunta:I}):Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"one-half column",children:Object(s.jsx)(O,{guardarElGasto:x,guardarCrearGasto:y})}),Object(s.jsxs)("div",{className:"one-half column",children:[Object(s.jsx)(h,{gastos:N}),Object(s.jsx)(g,{cantidad:a,restante:l})]})]})})]})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),r(e),n(e)}))};u.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),f()}},[[24,1,2]]]);
//# sourceMappingURL=main.d1a50404.chunk.js.map