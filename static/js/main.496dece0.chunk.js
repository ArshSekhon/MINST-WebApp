(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{338:function(e,t,a){e.exports=a(943)},343:function(e,t,a){},347:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},348:function(e,t,a){},840:function(e,t,a){},843:function(e,t){},845:function(e,t){},877:function(e,t){},878:function(e,t){},943:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a.n(n),o=a(86),s=a.n(o),r=(a(343),a(153)),c=a(154),l=a(158),h=a(155),d=a(157),u=(a(345),a(347),a(348),a(156)),m=a.n(u),p=a(337),f=a(329),v=a(34),g=a(330),y=(a(840),a(120)),w=a(331),b=a(332),x=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).onOpenModal=function(){a.setState({predictionsOpen:!0})},a.onCloseModal=function(){a.setState({predictionsOpen:!1})},console.log("isMobile",b.isMobile),console.log(a.defaultPredictions),a.state={isDrawing:!1,lastX:0,lastY:0,direction:!0,controlDisplay:"none",controlLefb:"100%",customColor:!1,color:"#n",customStroke:!1,maxWidth:100,minWidth:20,width:a.props.width,height:a.props.height,predictionsOpen:!1,predictions:[{x:"0",y:0},{x:"1",y:0},{x:"2",y:0},{x:"3",y:0},{x:"4",y:0},{x:"5",y:0},{x:"6",y:0},{x:"7",y:0},{x:"8",y:0},{x:"9",y:0}]},a.draw=a.draw.bind(Object(v.a)(Object(v.a)(a))),a.clearCanvas=a.clearCanvas.bind(Object(v.a)(Object(v.a)(a))),a.predictDigit=a.predictDigit.bind(Object(v.a)(Object(v.a)(a))),a.getMinBox=a.getMinBox.bind(Object(v.a)(Object(v.a)(a))),a.processImageWithModel=a.processImageWithModel.bind(Object(v.a)(Object(v.a)(a))),a.coords=[],a.model=new g.Model({filepath:"model.bin"}),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"canvas",value:function(){return document.querySelector("#draw")}},{key:"ctx",value:function(){return this.canvas().getContext("2d")}},{key:"componentDidMount",value:function(){var e=this.canvas(),t=this.ctx();!0===this.props.fullscreen&&(e.width=window.innerWidth,e.height=window.innerHeight),t.strokeStyle="#000000",t.lineJoin="round",t.lineCap="round",t.lineWidth=Number(this.state.minWidth)+1}},{key:"draw",value:function(e){var t=this.ctx();this.state.isDrawing&&(t.strokeStyle=this.state.color,this.coords.push({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY}),t.beginPath(),t.moveTo(this.state.lastX,this.state.lastY),t.lineTo(e.nativeEvent.offsetX,e.nativeEvent.offsetY),t.stroke(),this.setState({lastX:e.nativeEvent.offsetX,lastY:e.nativeEvent.offsetY}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row justify-content-center align-items-center align-self-center"},i.a.createElement("div",{className:"col-sm-4"},i.a.createElement("div",{className:"row"},i.a.createElement("h2",{className:"col-sm-12 align-self-start"},"DRAW HERE")),i.a.createElement("canvas",{id:"draw",className:"row writing-canvas",width:this.props.width,height:this.props.height,onMouseMove:function(t){e.draw(t)},onMouseDown:function(t){e.setState({isDrawing:!0,lastX:t.nativeEvent.offsetX,lastY:t.nativeEvent.offsetY}),t.nativeEvent.offsetX>=0&&t.nativeEvent.offsetY>=0&&e.coords.push({x:t.nativeEvent.offsetX,y:t.nativeEvent.offsetY})},onMouseUp:function(t){e.setState({isDrawing:!1}),t.nativeEvent.offsetX>=0&&t.nativeEvent.offsetY>=0&&e.coords.push({x:t.nativeEvent.offsetX,y:t.nativeEvent.offsetY}),e.predictDigit(t)},onMouseOut:function(t){e.setState({isDrawing:!1}),e.predictDigit(t)}})),i.a.createElement("div",{className:"predictions-bar-graph col-sm-4"},i.a.createElement("div",{className:"row"},i.a.createElement("h2",{className:"col-sm-12 align-self-start"},"PREDICTIONS")),i.a.createElement(w.BarChart,{className:"row",data:[{label:"Numbers",values:this.state.predictions}],tooltipHtml:function(e,t,a){return"Probability of being "+e+" is "+Math.round(10*parseFloat(a))/10+"% "},width:this.state.width,height:this.state.height,xAxis:{label:"Digit"},yAxis:{label:"Probability"},margin:{top:10,bottom:50,left:50,right:10}})),i.a.createElement("div",{className:"col-sm-4"},i.a.createElement("div",{className:"row"},i.a.createElement("h2",{className:"col-sm-12 align-self-start"},"WHAT NEURAL NETWORK SAW")),i.a.createElement("canvas",{height:28,width:28,id:"mnist-canvas",className:"row"}))),i.a.createElement("div",{className:"row align-items-center clear-button-row"},i.a.createElement("div",{className:"col-sm-12 align-self-center"},i.a.createElement("button",{onClick:this.clearCanvas,className:"btn clear-button",onChange:function(){}},"Clear Everything"))))}},{key:"predictDigit",value:function(e){var t=this.getMinBox(),a=window.devicePixelRatio,n=(t.max.y-t.min.y)*a,i=(t.max.x-t.min.x)*a,o=3/7*(n>i?n:i),s=2*(o=o<100?100:o);console.log("height_width_adjustment",s,"top_left_adjustment",o),n=(t.max.y-t.min.y)*a+s,i=(t.max.x-t.min.x)*a+s;var r=t.min.x*a-o,c=t.min.y*a-o;if(n>0&&i>0)try{this.processImageWithModel(this.ctx().getImageData(r,c,i,n))}catch(e){}}},{key:"clearCanvas",value:function(e){var t=this.canvas(),a=this.ctx(t);this.coords=[],a.clearRect(0,0,t.width,t.height),document.querySelector("#mnist-canvas").getContext("2d").clearRect(0,0,28,28),this.setState({predictions:[{x:"0",y:0},{x:"1",y:0},{x:"2",y:0},{x:"3",y:0},{x:"4",y:0},{x:"5",y:0},{x:"6",y:0},{x:"7",y:0},{x:"8",y:0},{x:"9",y:0}]})}},{key:"processImageWithModel",value:function(){var e=Object(f.a)(m.a.mark(function e(t){var a,n,i,o,s,r=this;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.preprocess(t).data();case 2:for(a=e.sent,[],n=[],i=3;i<a.length;i+=4)n.push(a[i]);for(o=document.querySelector("#mnist-canvas").getContext("2d"),s=o.getImageData(0,0,28,28),console.log("imag",s.data.length),i=0;i<s.data.length;i+=4)s.data[i+0]=0,s.data[i+1]=0,s.data[i+2]=0,s.data[i+3]=255*a[i+3];o.putImageData(s,0,0,0,0,28,28),this.model.ready().then(function(){return r.model.predict({input:new Float32Array(n)})}).then(function(e){var t=e.output,a=-1,n=null,i=r.state.predictions;console.log(i),Object.entries(t).forEach(function(e){var t=Object(p.a)(e,2),o=t[0],s=t[1];s>a&&(a=s,n=o),i[o].y=100*s,console.log("Predicted ".concat(o," with probability ").concat(s.toFixed(3),"."))}),r.setState({predictions:i}),console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n            Final Prediction is ".concat(n,"!!!!.\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"))}).catch(function(e){console.log(e)});case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"preprocess",value:function(e){return y.d(function(){var t=y.a(e,4),a=y.b.resizeBilinear(t,[28,28]).toFloat(),n=y.c(255);return a.div(n)})}},{key:"getMinBox",value:function(){var e=this.coords.map(function(e){return e.x}),t=this.coords.map(function(e){return e.y});return{min:{x:Math.min.apply(null,e),y:Math.min.apply(null,t)},max:{x:Math.max.apply(null,e),y:Math.max.apply(null,t)}}}}]),t}(n.Component),E=a(333),O=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={helpOpen:!0},a.onOpenModal=function(){a.setState({helpOpen:!0})},a.onCloseModal=function(){a.setState({helpOpen:!1})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"init",value:function(){}},{key:"render",value:function(){var e=this.state.helpOpen;return i.a.createElement("div",{className:"App"},i.a.createElement(E.a,{open:e,className:"help-modal",onClose:this.onCloseModal,center:!0},i.a.createElement("h2",{className:"help-app-title"},"Hand-Written Digit Recogniser"),i.a.createElement("p",{className:"help-app-intro-body"},"Draw any digit 0-9 using your mouse or touch-screen and a nueral network will predict what you drew. For best results, please draw large and vertically straight characters at center of canvas. Feel free to experiment with different shapes and forms for digits."),i.a.createElement("h3",{className:"help-app-under-the-hood-title"},"Under the Hood"),i.a.createElement("p",{className:"help-app-under-the-hood-body"},"There is a Convolutional Nueral Network working behind the scene. It was trained on MNIST dataset and code used for training the nueral network can be found here: ",i.a.createElement("a",{href:"https://arshsekhon.github.io"},"https://arshsekhon.github.io"))),i.a.createElement(x,{height:350,width:350}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[338,2,1]]]);
//# sourceMappingURL=main.496dece0.chunk.js.map