function KarelIde(A="java",e,f,D,E=.5,F="es",G=1E3,H=1E3,I=console.log,J=console.log,K="",L=console.log){function k(a){try{a()}catch(c){q(c)}r()}function t(){u=!0;v(w)}function x(a){d.loadWorld(a,g);r();B=!0;a=d.getInitialWorldText(K);L(a);I(a);d.addMoveText=J}function v(a){a+=".w";u||alert("load world called before images ready");"15x15.w"==a?x("Dimension: (15,15)"):"7x7.w"==a?x("Dimension: (7,7)"):loadDoc("/karel/worlds/"+a,x)}function r(){f&&(C.clearRect(0,0,g.getWidth(),g.getHeight()),d.draw(C))}
function q(a){swal({text:a,type:"error",confirmButtonText:"Ok"})}var b={},y=function(a){zeroHb=80;oneHb=0;(0>a||1<=a)&&console.error("speed out of range",a);return parseInt((1-a)*zeroHb)}(E);if(f)var C=f.getContext("2d");var l=y,w=D,g=CanvasModel(G,H),B=!1,d=Karel(g,A,F),m=null,h=!1,u=!1,n=!1;b.ariaLabel="";b.stopButton=function(){h=!1;v(w);e.moveCursorTo(0)};b.resizeCanvas=function(a,c){};b.playButton=function(a){b.runCode(a)};b.changeWorld=function(a){h=!1;e.moveCursorTo(0);w=a;u&&v(a)};b.stepMove=
function(){k(d.move)};b.stepTurnLeft=function(){k(d.turnLeft)};b.stepTurnRight=function(){k(d.turnRight)};b.stepPutBeeper=function(){k(d.putBeeper)};b.stepPickBeeper=function(){k(d.pickBeeper)};b.getModel=function(){return d.getModel()};b.setCode=function(a){return null==e?null:e.getSession().setValue(a)};b.getCode=function(){return null==e?null:e.getSession().getValue()};b.setSilent=function(a){n=a};b.runUnitTest=function(a,c,p){var z=KarelIde(e,null,a),M=KarelIde(e,null,c);z.setSilent(!0);z.runCode(function(N){var O=
z.getModel().equals(M.getModel());p(O&&!N)})};b.runSpecificCode=function(a,c){m=Const.USE_COMPILER?"python"==A?KarelPythonCompiler(d):KarelJavaCompiler(d):KarelEvalEngine(d);b.stopButton();try{m.compile(a)}catch(p){n||q(p);c(!0);return}if(n)try{for(;;)if(m.executeStep().isDone){c&&c(!1);break}}catch(p){c&&c(!0)}else console.log("running..."),b.playCallback=c,h=!0};b.runCode=function(a){if(!B)throw Error("TRIED TO RUN BEFORE WORLD LOADED");var c=null==e?null:e.getSession().getValue();b.runSpecificCode(c,
a)};f&&(f.width=g.getWidth(),f.height=g.getHeight());karelImages.haveCalledLoadImages()?karelImages.haveLoadedAllImages()?t():karelImages.addListener(t):karelImages.loadImages(t);setInterval(function(){if(h){--l;if(0==l){try{result=m.executeStep();let a=result.isDone;h=!a;a&&b.playCallback&&b.playCallback(!1);if(!a){let c=result.lineNumber;c&&(e.clearSelection(),e.moveCursorTo(c))}}catch(a){n||q(a),h=!1,b.playCallback&&b.playCallback(!0)}l=y}l==y&&r()}},10);return b};