(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6ap3":function(e,t,i){(t=i("JPst")(!1)).push([e.i,"body {\n    display: flex;\n    flex-direction: column;\n}\n\nform {\n    margin-bottom: 0;\n}\n\n#title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header {\n  position: absolute;\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-right: 20px;\n}\n\n#subtitle {\n    text-align: center;\n}\n\n#legionBoard {\n    border-spacing: 0;\n    border-collapse: collapse;\n}\n\n#legionBoard td.legionCell {\n    width: 25px;\n    height: 27px;\n    border-style: solid;\n    border-width: 1px;\n}\n\n#legion {\n    display: flex;\n    flex-direction: column;\n}\n\n#legionFooter {\n    margin-top: 10px;\n}\n\n#options {\n    display: flex;\n    flex-direction: column;\n    text-align: end;\n}\n\n#checkboxes {\n    margin-bottom: 10px;\n}\n\n#darkModeLabel {\n    padding-top: 10px;\n}\n\n#iterationTime {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n}\n\n#iterations, #time, #resetButton {\n  visibility: hidden;\n}\n\n#boardFilled {\n    margin-bottom: 7px;\n}\n\n#middlelabels {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#pieceForm {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    padding-right: 20px;\n}\n\n#pieceForm td.pieceCell {\n    width: 7px;\n    height: 9px;\n    border-style: solid;\n    border-width: 0px;\n}\n\n.piece {\n    display: flex;\n    flex-direction: row;\n    margin-bottom: 15px;\n    justify-content: flex-end;\n}\n\n#resetButton {\n    margin-top: 5px;\n}\n\n#failText {\n    text-align: right;\n    visibility: hidden;\n}\n\n#bigClick, #liveSolve {\n    margin-left: 20px;\n}\n\n#pieceForm input {\n    width: 50px;\n    height: 20px;\n    margin-left: 10px;\n}\n\n.centerMiddleChild {\n    display: flex;\n}\n\n.centerMiddleChild > :nth-child(1), .centerMiddleChild > :nth-child(3) {\n    flex: 1;\n}\n\n#instructions {\n    margin-left: 30px;\n}\n\n#paragraph {\n    padding-right: 80px;\n}",""]),e.exports=t},"OmL/":function(e,t,i){var n=i("LboF"),r=i("6ap3");"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},Vtdi:function(e,t,i){"use strict";i.r(t);i("OmL/");class n{constructor(e,t){this.x=e,this.y=t}}var r,o,s,l=i("LvDl"),a=i.n(l);class d{constructor(e,t,i){this.shape=e,this.amount=t,this.id=i}static createPiece(e,t){return new d(e,t,this.curId++)}get cellCount(){Object.defineProperty(this,"cellCount",{value:0,writable:!0});for(let e=0;e<this.shape.length;++e)for(let t=0;t<this.shape[e].length;++t)this.shape[e][t]>0&&this.cellCount++;return this.cellCount}get pointShape(){Object.defineProperty(this,"pointShape",{value:[]});for(let e=0;e<this.shape.length;++e)for(let t=0;t<this.shape[e].length;++t)1==this.shape[e][t]?this.pointShape.push(new h(t,e,!1)):2==this.shape[e][t]&&this.pointShape.push(new h(t,e,!0));return this.pointShape}get offCenter(){Object.defineProperty(this,"offCenter",{value:0,writable:!0});for(let e=0;e<this.shape[0].length;e++)if(0!=this.shape[0][e]){this.offCenter=e;break}return this.offCenter}get transformations(){Object.defineProperty(this,"transformations",{value:[],writable:!0});let e,t=[...this.shape];for(let i=0;i<2;i++){for(let i=0;i<4;i++){e=new Array(t[0].length).fill(0).map(()=>new Array(t.length).fill(0));for(let i=0;i<t.length;i++)for(let n=0;n<t[0].length;n++)0!=t[i][n]&&(e[t[0].length-n-1][i]=t[i][n]);t=e,this.transformations.push(new d(t,this.amount,this.id))}e=new Array(t.length).fill(0).map(()=>new Array(t[0].length).fill(0));for(let i=0;i<t.length;i++)for(let n=0;n<t[0].length;n++)0!=t[i][n]&&(e[t.length-i-1][n]=t[i][n]);t=e}return this.transformations=a.a.unionWith(this.transformations,a.a.isEqual),this.transformations}get pointTransformations(){Object.defineProperty(this,"pointTransformations",{value:[]});for(let e of this.transformations)this.pointTransformations.push(e.pointShape);return this.pointTransformations}get restrictedTransformations(){Object.defineProperty(this,"restrictedTransformations",{value:[]});for(let e of this.transformations)e.shape[0][1+e.offCenter]&&0!=e.shape[0][1+e.offCenter]||this.restrictedTransformations.push(e);return this.restrictedTransformations}get restrictedPointTransformations(){Object.defineProperty(this,"restrictedPointTransformations",{value:[]});for(let e of this.restrictedTransformations)this.restrictedPointTransformations.push(e.pointShape);return this.restrictedPointTransformations}}s=1,(o="curId")in(r=d)?Object.defineProperty(r,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[o]=s;class h extends n{constructor(e,t,i){super(e,t),this.isMiddle=i}}function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class g{constructor(e,t,i){c(this,"pausePromise",void 0),c(this,"pauseResolve",void 0),c(this,"iterations",void 0),c(this,"directionFree",void 0),c(this,"success",void 0),c(this,"shouldStop",void 0),this.board=e,this.pieces=t,this.onBoardUpdated=i,this.iterations=0,this.pieceLength=t.length,this.valid=!0,this.pieceNumber=0,this.transformationNumber=0,this.restrictedPieceNumber=0,this.restrictedTransformationNumber=0,this.time=(new Date).getTime(),this.middle=[];for(let e=this.board.length/2-1;e<this.board.length/2+1;e++)for(let t=this.board[0].length/2-1;t<this.board[0].length/2+1;t++)-1!=this.board[e][t]&&this.middle.push(new n(t,e));this.emptySpots=[];for(let e=0;e<this.board.length;e++)for(let t=0;t<this.board[0].length;t++)0==this.board[e][t]&&this.emptySpots.push(new n(t,e));this.restrictedSpots=[];for(let e=0;e<this.board.length;e++)for(let t=0;t<this.board[0].length;t++)this.searchSurroundings(t,e);this.longSpaces=[];for(let e=0;e<this.board.length;e++)for(let t=0;t<this.board[0].length;t++)"horizontal"==this.checkLongSpace(t,e)&&this.longSpaces.push(new n(t,e)),"vertical"==this.checkLongSpace(t,e)&&this.longSpaces.push(new n(t,e));this.firstAlgorithm=!!this.longSpaces.length}async solve(){return this.pieces.sort((e,t)=>t.amount*t.cellCount-e.amount*e.cellCount),this.pieces.push(new d([[]],0,-1)),this.restrictedSpots.sort((e,t)=>t.spotsFilled-e.spotsFilled),this.success=await this.solveInternal(),this.success}async solveInternal(e=3e4){let t,i,n,r=[],o=0;for(;this.pieces[0].amount>0||!this.valid;){if(this.shouldStop)return;if(this.valid&&0!=this.restrictedSpots.length&&this.pieces[this.restrictedPieceNumber].amount&&5!=this.directionFree&&!this.firstAlgorithm)this.restrictedPieceNumber!=this.pieceLength&&(n=this.restrictedSpots[0],i=this.pieces[this.restrictedPieceNumber].restrictedTransformations[this.restrictedTransformationNumber],this.determineDirectionFree(n),this.isPlaceable(n,i)?(r.push([0,0,this.takeFromList(this.restrictedPieceNumber),[...this.restrictedSpots],n,this.restrictedPieceNumber,this.restrictedTransformationNumber,this.directionFree,[],0,this.valid]),this.restrictedSpots.splice(0,1),this.placePiece(n,i),this.isValid(),this.restrictedPieceNumber=0,this.restrictedTransformationNumber=0):this.changeIndex(!0));else if(this.valid&&this.pieces[this.pieceNumber].amount&&(this.firstAlgorithm||0==this.restrictedSpots.length)&&5!=this.directionFree){if(this.directionFree=0,!this.firstAlgorithm)for(o=0;o<this.emptySpots.length&&0!=this.board[this.emptySpots[o].y][this.emptySpots[o].x];)o++;if(o==this.emptySpots.length)return!0;if(n=this.emptySpots[o],i=this.pieces[this.pieceNumber].transformations[this.transformationNumber],this.isPlaceable(n,i)){let e=[];for(let t=0;t<this.longSpaces.length;t++)e.push(this.longSpaces[t]);if(r.push([this.pieceNumber,this.transformationNumber,this.takeFromList(this.pieceNumber),[...this.restrictedSpots],n,0,0,0,e,o,this.valid]),this.placePiece(n,i),this.isValid(),this.firstAlgorithm){for(;o<this.emptySpots.length&&0!=this.board[this.emptySpots[o].y][this.emptySpots[o].x];)o++;if(o==this.emptySpots.length)return!0}this.pieceNumber=0,this.transformationNumber=0}else this.changeIndex(!1)}else{if(0==r.length)return!1;this.valid||(this.valid=!0),[this.pieceNumber,this.transformationNumber,t,this.restrictedSpots,n,this.restrictedPieceNumber,this.restrictedTransformationNumber,this.directionFree,this.longSpaces,o,this.valid]=r.pop(),0==this.directionFree?(this.returnToList(this.pieceNumber,t),this.takeBackPiece(n,this.pieces[this.pieceNumber].transformations[this.transformationNumber])):(this.returnToList(this.restrictedPieceNumber,t),this.takeBackPiece(n,this.pieces[this.restrictedPieceNumber].restrictedTransformations[this.restrictedTransformationNumber])),this.firstAlgorithm=!(0==this.longSpaces.length),this.firstAlgorithm?this.changeIndex(!1):this.changeIndex(0==!this.restrictedSpots.length)}this.iterations++,this.iterations%e==0&&(this.onBoardUpdated(),await new Promise(e=>setTimeout(e,0)),await this.pausePromise)}return!0}takeFromList(e){this.pieces[e].amount--;let t=this.pieces[e],i=e+1;for(;t.amount*t.cellCount<this.pieces[i].amount*this.pieces[i].cellCount;)i++;return this.pieces[e]=this.pieces[i-1],this.pieces[i-1]=t,i-1-e}returnToList(e,t){let i=this.pieces[e];this.pieces[e]=this.pieces[e+t],this.pieces[e+t]=i,this.pieces[e].amount++}isValid(){if(0==this.middle.length)return!0;let e=0;for(let t of this.middle)this.board[t.y][t.x]>0&&this.board[t.y][t.x]<=this.pieceLength&&e++;this.valid=e!=this.middle.length}isPlaceable(e,t){if(!t)return!1;for(let i of t.pointShape){let n,r;if([n,r]=this.determinePoint(e,t,i),r>=this.board.length||r<0||n>=this.board[0].length||n<0||0!=this.board[r][n])return!1}return!0}placePiece(e,t){let i=[];for(let r of t.pointShape){let o,s;[o,s]=this.determinePoint(e,t,r),r.isMiddle?this.board[s][o]=t.id+18:this.board[s][o]=t.id,i.push(new n(o,s));for(let e=0;e<this.restrictedSpots.length;e++)this.restrictedSpots[e].x==o&&this.restrictedSpots[e].y==s&&(this.restrictedSpots.splice(e,1),e--);for(let e=0;e<this.longSpaces.length;e++)this.longSpaces[e].x==o&&this.longSpaces[e].y==s&&(this.longSpaces.splice(e,1),e--);0==this.longSpaces.length&&(this.firstAlgorithm=!1)}for(let e of i)this.searchSurroundings(e.x,e.y+1),this.searchSurroundings(e.x,e.y-1),this.searchSurroundings(e.x+1,e.y),this.searchSurroundings(e.x-1,e.y);let r=[];for(let e=0;e<this.restrictedSpots.length-1;e++)for(let t=e+1;t<this.restrictedSpots.length;t++)this.restrictedSpots[e].x==this.restrictedSpots[t].x&&this.restrictedSpots[e].y==this.restrictedSpots[t].y&&r.push(e);for(let e=r.length-1;e>=0;e--)this.restrictedSpots.splice(r[e],1);this.restrictedSpots.sort((e,t)=>t.spotsFilled-e.spotsFilled)}takeBackPiece(e,t){for(let i of t.pointShape){let n,r;[n,r]=this.determinePoint(e,t,i),this.board[r][n]=0}}searchSurroundings(e,t){let i=0;this.board[t]&&0==this.board[t][e]&&(this.board[t+1]&&0==this.board[t+1][e]&&i++,this.board[t-1]&&0==this.board[t-1][e]&&i++,this.board[t]&&0==this.board[t][e+1]&&i++,this.board[t]&&0==this.board[t][e-1]&&i++,i<=1&&this.restrictedSpots.push(new u(e,t,4-i)))}checkLongSpace(e,t){return this.board[t+1]&&0==this.board[t+1][e]&&this.board[t-1]&&0==this.board[t-1][e]&&this.board[t]&&0!=this.board[t][e+1]&&this.board[t]&&0!=this.board[t][e-1]?"vertical":this.board[t+1]&&0!=this.board[t+1][e]&&this.board[t-1]&&0!=this.board[t-1][e]&&this.board[t]&&0==this.board[t][e+1]&&this.board[t]&&0==this.board[t][e-1]?"horizontal":void 0}changeIndex(e){e?this.restrictedTransformationNumber<this.pieces[this.restrictedPieceNumber].restrictedTransformations.length-1?this.restrictedTransformationNumber++:(this.restrictedPieceNumber++,this.restrictedTransformationNumber=0):this.transformationNumber<this.pieces[this.pieceNumber].transformations.length-1?this.transformationNumber++:(this.pieceNumber++,this.transformationNumber=0)}determineDirectionFree(e){this.board[e.y-1]&&0==this.board[e.y-1][e.x]?this.directionFree=1:this.board[e.y]&&0==this.board[e.y][e.x+1]?this.directionFree=2:this.board[e.y+1]&&0==this.board[e.y+1][e.x]?this.directionFree=3:this.board[e.y]&&0==this.board[e.y][e.x-1]?this.directionFree=4:this.directionFree=5}determinePoint(e,t,i){let n,r;return 0==this.directionFree||3==this.directionFree||5==this.directionFree?(n=e.x+i.x-t.offCenter,r=e.y+i.y):1==this.directionFree?(n=e.x-i.x+t.offCenter,r=e.y-i.y):2==this.directionFree?(n=e.x+i.y,r=e.y+i.x-t.offCenter):(n=e.x-i.y,r=e.y-i.x+t.offCenter),[n,r]}pause(){this.time-=(new Date).getTime(),0!=this.iterations&&(document.getElementById("iterations").style.visibility="visible",document.getElementById("iterationsValue").innerText=""+this.iterations,document.getElementById("time").style.visibility="visible",document.getElementById("timeValue").innerText=-this.time+"ms"),this.pausePromise=new Promise(e=>this.pauseResolve=e)}continue(){this.time+=(new Date).getTime(),document.getElementById("iterations").style.visibility="hidden",document.getElementById("time").style.visibility="hidden",this.pauseResolve(),this.pausePromise=null}stop(){this.shouldStop=!0}}class u extends n{constructor(e,t,i){super(e,t),this.spotsFilled=i}}var m={GMS:{title:"Legion Solver",instructions:"Instructions:",instructionsSub1:"1. Click the grid spaces you want to be filled, the region click will help you fill it in faster.",instructionsSub2:"2. Input the amount of each shape you want to be filled in the board.",instructionsSub3:"3. The space that the pieces take up should equal the amount of grid spaces you filled, although the program will still try to run otherwise.",instructionsSub4:"4. When you press Start the program will try to fill the board spaces with the pieces you've chosen, click on Live Solve if you want to see the board filled in real time.",spacesToBeFilled:"Spaces to be Filled: ",boardSpacesFilled:"Board Spaces Filled: ",iterations:"Iterations: ",time:"Time: ",bigClick:"Region Click",liveSolve:"Live Solve",darkMode:"Dark Mode",start:"Start",pause:"Pause",continue:"Continue",reset:"Reset",clearPieces:"Clear Pieces",clearBoard:"Clear Board",failText:"No Solution Found",lvl60:"Lvl 60",lvl100:"Lvl 100",warriorPirate140:"Lvl 140 Warrior/Pirate",mageThiefArcher140:"Lvl 140 Mage/Thief/Archer",warrior200:"Lvl 200 Warrior",archer200:"Lvl 200 Archer",thiefLab200:"Lvl 200 Thief/Lab",mage200:"Lvl 200 Mage",pirate200:"Lvl 200 Pirate",warrior250:"Lvl 250 Warrior",archer250:"Lvl 250 Archer",thief250:"Lvl 250 Thief",mage250:"Lvl 250 Mage",pirate250:"Lvl 250 Pirate",xenon250:"Lvl 250 Xenon",enhancedLab200:"Lvl 200 Enhanced Lab",enhancedLab250:"Lvl 250 Enhanced Lab",lab250:"Lvl 250 Lab"},KMS:{title:"유니온 지도 메이커",instructions:"설명:",instructionsSub1:"1. 유니온 지도를 더 빨리 채우려면 지역 선택을 활성화해 줍니다.",instructionsSub2:"2. 유니온 지도에 채우려는 직업별 모양의 양을 입력해 줍니다.",instructionsSub3:"3. 산정된 공간은 선택된 공간의 양과 같아야 하며 같지 않다면 프로그램은 계속 반복 실행할 겁니다.",instructionsSub4:"4. 프로그램이 루트를 찾고 있을 때 해당 과정을 보고 싶다면 실시간 보기를 활성화해 줍니다.",spacesToBeFilled:"유니온 캐릭터 산정된 공간: ",boardSpacesFilled:"유니온 지도 선택된 공간: ",iterations:"반복횟수: ",time:"소요시간: ",bigClick:"지역선택",liveSolve:"실시간 보기",darkMode:"다크모드",start:"시작",pause:"Pause",continue:"Continue",reset:"리셋",clearPieces:"캐릭터 초기화",clearBoard:"유니온 지도 초기화",failText:"루트를 찾지 못했습니다.",lvl60:"Lvl 60",lvl100:"Lvl 100",warriorPirate140:"Lvl 140 전사/해적",mageThiefArcher140:"Lvl 140 마법사/도적/궁수/메이플M(S)",warrior200:"Lvl 200 전사",archer200:"Lvl 200 궁수/메이플M(SS)",thiefLab200:"Lvl 200 도적/Lab",mage200:"Lvl 200 마법사",pirate200:"Lvl 200 해적",warrior250:"Lvl 250 전사",archer250:"Lvl 250 궁수",thief250:"Lvl 250 도적",mage250:"Lvl 250 마법사",pirate250:"Lvl 250 해적",xenon250:"Lvl 250 제논",enhancedLab200:"Lvl 200 Enhanced Lab",enhancedLab250:"Lvl 250 Enhanced Lab",lab250:"Lvl 250 Lab"}};let p=f();function f(){return localStorage.getItem("i18n")||"GMS"}function b(e){return m[p][e]}function y(e,t){const i=[],n=/^\s*$/;return function e(r){if(3==r.nodeType)!t&&n.test(r.nodeValue)||i.push(r);else for(var o=0,s=r.childNodes.length;o<s;++o)e(r.childNodes[o])}(e),i}document.getElementById("title").textContent=b("title"),y(document.getElementById("instructions"))[0].textContent=b("instructions"),y(document.getElementById("paragraph"))[0].textContent=b("instructionsSub1"),y(document.getElementById("paragraph"))[1].textContent=b("instructionsSub2"),y(document.getElementById("paragraph"))[2].textContent=b("instructionsSub3"),y(document.getElementById("paragraph"))[3].textContent=b("instructionsSub4"),y(document.getElementById("currentPieces"))[0].textContent=b("spacesToBeFilled"),y(document.getElementById("boardFilled"))[0].textContent=b("boardSpacesFilled"),y(document.getElementById("iterations"))[0].textContent=b("iterations"),y(document.getElementById("time"))[0].textContent=b("time"),document.querySelector('label[for="bigClick"]').textContent=b("bigClick"),document.querySelector('label[for="liveSolve"]').textContent=b("liveSolve"),document.querySelector('label[for="darkMode"]').textContent=b("darkMode"),document.getElementById("boardButton").textContent=b("start"),document.getElementById("resetButton").textContent=b("reset"),document.getElementById("clearPieces").textContent=b("clearPieces"),document.getElementById("clearBoard").textContent=b("clearBoard"),document.getElementById("failText").textContent=b("failText"),document.getElementById("languageSelectBox").addEventListener("change",(function(){localStorage.setItem("i18n",this.value),location.reload()})),document.getElementById(p).selected=!0;const x=[[[2]],[[2,2]],[[1,0],[2,1]],[[1,2,1]],[[2,2],[2,2]],[[1,2,2,1]],[[1,0,0],[1,2,1]],[[0,1,0],[1,2,1]],[[1,2,0],[0,2,1]],[[1,1,2],[0,1,1]],[[1,1,2,1,1]],[[0,0,1],[1,2,1],[0,0,1]],[[0,1,0],[1,2,1],[0,1,0]],[[1,2,0,0],[0,1,1,1]],[[1,1,0],[0,2,0],[0,1,1]]],v=[[[1,0,0,0],[0,1,2,1]],[[1,0,0,0,1],[0,1,2,1,0]],[[1,0,1],[1,2,1]]],S=[];for(let e of x)S.push(d.createPiece(e,0));if("GMS"==f())for(let e of v)S.push(d.createPiece(e,0));let B=new Map;B.set(-1,"white"),B.set(0,"grey");for(let e=0;e<2;e++)B.set(1+18*e,"lightpink"),B.set(2+18*e,"lightcoral"),B.set(3+18*e,"indianred"),B.set(4+18*e,"darkseagreen"),B.set(5+18*e,"firebrick"),B.set(6+18*e,"mediumseagreen"),B.set(7+18*e,"purple"),B.set(8+18*e,"dodgerblue"),B.set(9+18*e,"lightsteelblue"),B.set(10+18*e,"maroon"),B.set(11+18*e,"green"),B.set(12+18*e,"indigo"),B.set(13+18*e,"blue"),B.set(14+18*e,"cadetblue"),B.set(15+18*e,"mediumpurple"),B.set(16+18*e,"aquamarine"),B.set(17+18*e,"aquamarine"),B.set(18+18*e,"aquamarine");for(let e=0;e<S.length;e++){let t=`<tr>${'<td class="pieceCell"></td>'.repeat(S[e].shape[0].length)}</tr>`.repeat(S[e].shape.length);document.querySelector("#pieceForm form").innerHTML+=`<div class="piece">\n        <div id="pieceDescription${e+1}"></div>\n        <label for="piece${e+1}">\n            <table id="pieceDisplay${e+1}">\n                <tbody>${t}</tbody>\n            </table>\n        </label>\n        <input id="piece${e+1}" type="number" min=0 value=0>\n    </div>`,document.getElementById("pieceDisplay"+(e+1)).style.borderCollapse="collapse",document.getElementById("pieceDisplay"+(e+1)).style.borderSpacing="0",document.getElementById("pieceDescription"+(e+1)).style.paddingRight="15px";for(let t=0;t<S[e].shape.length;t++)for(let i=0;i<S[e].shape[t].length;i++)0!=S[e].shape[t][i]&&(document.getElementById("pieceDisplay"+(e+1)).getElementsByTagName("tr")[t].getElementsByTagName("td")[i].style.background=B.get(e+1))}document.getElementById("pieceDescription1").textContent=b("lvl60"),document.getElementById("pieceDescription2").textContent=b("lvl100"),document.getElementById("pieceDescription3").textContent=b("warriorPirate140"),document.getElementById("pieceDescription4").textContent=b("mageThiefArcher140"),document.getElementById("pieceDescription5").textContent=b("warrior200"),document.getElementById("pieceDescription6").textContent=b("archer200"),document.getElementById("pieceDescription7").textContent=b("thiefLab200"),document.getElementById("pieceDescription8").textContent=b("mage200"),document.getElementById("pieceDescription9").textContent=b("pirate200"),document.getElementById("pieceDescription10").textContent=b("warrior250"),document.getElementById("pieceDescription11").textContent=b("archer250"),document.getElementById("pieceDescription12").textContent=b("thief250"),document.getElementById("pieceDescription13").textContent=b("mage250"),document.getElementById("pieceDescription14").textContent=b("pirate250"),document.getElementById("pieceDescription15").textContent=b("xenon250"),"GMS"==f()&&(document.getElementById("pieceDescription16").textContent=b("enhancedLab200"),document.getElementById("pieceDescription17").textContent=b("enhancedLab250"),document.getElementById("pieceDescription18").textContent=b("lab250"));let I=0;localStorage.getItem("currentPieces")&&(I=JSON.parse(localStorage.getItem("currentPieces")),document.getElementById("currentPiecesValue").innerText=""+I);let E=JSON.parse(localStorage.getItem("pieceAmounts"));if(E){for(let e=0;e<S.length;e++)document.getElementById("piece"+(e+1)).value=E[e]||0;L()}function L(){for(let e of S)e.amount=parseInt(document.getElementById("piece"+e.id).value)||0;I=Object(l.sumBy)(S,e=>e.cellCount*e.amount),localStorage.setItem("pieceAmounts",JSON.stringify(S.map(e=>e.amount))),localStorage.setItem("currentPieces",JSON.stringify(I)),document.getElementById("currentPiecesValue").innerText=""+I}document.getElementById("pieceForm").addEventListener("input",L),document.getElementById("clearPieces").addEventListener("click",(function(){for(let e=0;e<S.length;e++)document.getElementById("piece"+(e+1)).value=0;L()}));let C=JSON.parse(localStorage.getItem("legionBoard"));if(!C){C=[];for(let e=0;e<20;e++){C[e]=[];for(let t=0;t<22;t++)C[e][t]=-1}}let w=[];const T="start",k="running",P="paused",N="completed";let F=T;const D=[];for(let e=0;e<16;e++)D[e]=[];const M='<td class="legionCell"></td>'.repeat(C[0].length);for(let e=0;e<C.length;e++)document.querySelector("#legionBoard tbody").innerHTML+=`<tr>${M}</tr>`;!function(){for(let e=0;e<C[0].length/2;e++)j(e,e).style.borderTopWidth="3px",j(e,e).style.borderRightWidth="3px",j(C.length-e-1,e).style.borderBottomWidth="3px",j(C.length-e-1,e).style.borderRightWidth="3px",j(e,C[0].length-e-1).style.borderTopWidth="3px",j(e,C[0].length-e-1).style.borderLeftWidth="3px",j(C.length-e-1,C[0].length-e-1).style.borderBottomWidth="3px",j(C.length-e-1,C[0].length-e-1).style.borderLeftWidth="3px";for(let e=0;e<C.length;e++)j(e,0).style.borderLeftWidth="3px",j(e,C[0].length/2).style.borderLeftWidth="3px",j(e,C[0].length-1).style.borderRightWidth="3px";for(let e=0;e<C[0].length;e++)j(0,e).style.borderTopWidth="3px",j(C.length/2,e).style.borderTopWidth="3px",j(C.length-1,e).style.borderBottomWidth="3px";for(let e=C.length/4;e<3*C.length/4;e++)j(e,Math.floor(C[0].length/4)).style.borderLeftWidth="3px",j(e,Math.floor(3*C[0].length/4)).style.borderRightWidth="3px";for(let e=Math.ceil(C[0].length/4);e<Math.floor(3*C[0].length/4);e++)j(C.length/4,e).style.borderTopWidth="3px",j(3*C.length/4,e).style.borderTopWidth="3px"}(),function(){for(let e=0;e<C.length/4;e++)for(let t=e;t<C.length/2;t++)D[0].push(new n(t,e)),D[1].push(new n(e,t+1)),D[2].push(new n(e,C[0].length-2-t)),D[3].push(new n(t,C[0].length-1-e)),D[4].push(new n(C.length-1-t,C[0].length-1-e)),D[5].push(new n(C.length-1-e,C[0].length-2-t)),D[6].push(new n(C.length-1-e,t+1)),D[7].push(new n(C.length-1-t,e));for(let e=C.length/4;e<C.length/2;e++)for(let t=e;t<C.length/2;t++)D[8].push(new n(t,e)),D[9].push(new n(e,t+1)),D[10].push(new n(3*C.length/4-1-t,C.length/4+1+e)),D[11].push(new n(t,C[0].length-1-e)),D[12].push(new n(C.length-1-t,C[0].length-1-e)),D[13].push(new n(t+C.length/4,e+C.length/4+1)),D[14].push(new n(t+C.length/4,3*C.length/4-e)),D[15].push(new n(C.length-t-1,e))}(),G();let O=0;localStorage.getItem("boardFilled")&&(O=JSON.parse(localStorage.getItem("boardFilled")),document.getElementById("boardFilledValue").innerText=""+O);let W=!1;localStorage.getItem("isBigClick")&&(document.getElementById("bigClick").checked=JSON.parse(localStorage.getItem("isBigClick")),JSON.parse(localStorage.getItem("isBigClick"))&&H());let J=!1;localStorage.getItem("isLiveSolve")&&(document.getElementById("liveSolve").checked=JSON.parse(localStorage.getItem("isLiveSolve")),JSON.parse(localStorage.getItem("isLiveSolve"))&&U()),document.getElementById("bigClick").addEventListener("click",H),document.getElementById("liveSolve").addEventListener("click",U),document.getElementById("clearBoard").addEventListener("click",(function(){for(let e=0;e<C.length;e++)for(let t=0;t<C[0].length;t++)C[e][t]=-1,j(e,t).style.background=B.get(C[e][t]);O=0,localStorage.setItem("legionBoard",JSON.stringify(C)),localStorage.setItem("boardFilled",JSON.stringify(0)),document.getElementById("boardFilledValue").innerText=""+O})),document.getElementById("boardButton").addEventListener("click",(async function(e){if(F==T){e.target.innerText=b("pause"),document.getElementById("clearBoard").disabled=!0,F=k,await async function(){if(0==O&&currentPieces>0)return!1;let e=[];for(let t=0;t<C.length;t++){e[t]=[];for(let i=0;i<C[0].length;i++)e[t][i]=C[C.length-1-t][C[0].length-1-i]}let t=[];for(let e=0;e<C[0].length;e++){t[e]=[];for(let i=0;i<C.length;i++)t[e][i]=C[C.length-i-1][e]}let i=[];for(let e=0;e<C[0].length;e++){i[e]=[];for(let t=0;t<C.length;t++)i[e][t]=C[t][C[0].length-1-e]}w.push(new g(C,_.cloneDeep(S),X)),w.push(new g(t,_.cloneDeep(S),()=>!1)),w.push(new g(e,_.cloneDeep(S),()=>!1)),w.push(new g(i,_.cloneDeep(S),()=>!1));let n=0!=w[0].longSpaces.length;const r=w[0].solve();let o,s;if(n){const e=w[1].solve(),t=w[2].solve(),i=w[3].solve();o=await Promise.race([r,e,t,i])}else o=await r;for(let e of w)e.stop();if(void 0!==w[0].success){for(let e=0;e<w[0].board.length;e++)for(let t=0;t<w[0].board[0].length;t++)C[e][t]=w[0].board[e][t];s=w[0]}else if(void 0!==w[1].success){for(let e=0;e<w[1].board[0].length;e++)for(let t=0;t<w[1].board.length;t++)C[e][t]=w[1].board[t][w[1].board[0].length-1-e];s=w[1]}else if(void 0!==w[2].success){for(let e=0;e<w[2].board.length;e++)for(let t=0;t<w[2].board[0].length;t++)C[e][t]=w[2].board[w[2].board.length-1-e][w[2].board[0].length-1-t];s=w[2]}else if(void 0!==w[3].success){for(let e=0;e<w[3].board[0].length;e++)for(let t=0;t<w[3].board.length;t++)C[e][t]=w[3].board[w[3].board.length-t-1][e];s=w[3]}document.getElementById("iterations").style.visibility="visible",document.getElementById("iterationsValue").innerText=""+s.iterations,document.getElementById("time").style.visibility="visible",document.getElementById("timeValue").innerText=(new Date).getTime()-s.time+"ms",o&&G();return o}()||(document.getElementById("failText").style.visibility="visible"),e.target.innerText=b("reset"),F=N}else if(F==k){e.target.innerText=b("continue");for(let e of w)e.pause();F=P,document.getElementById("resetButton").style.visibility="visible"}else if(F==P){e.target.innerText=b("pause");for(let e of w)e.continue();F=k,document.getElementById("resetButton").style.visibility="hidden"}else F==N&&K()})),document.getElementById("resetButton").addEventListener("click",K),document.getElementById("darkMode").addEventListener("click",z);for(let e=0;e<C.length;e++)for(let t=0;t<C[0].length;t++){let i=j(e,t);i.addEventListener("click",(function(){R(e,t)})),i.addEventListener("mouseover",(function(){q(e,t)})),i.addEventListener("mouseout",(function(){$(e,t)}))}let A=!1;function V(e,t){for(let i=0;i<D.length;i++)for(let n of D[i])if(n.x==e&&n.y==t)return i}function j(e,t){return document.getElementById("legionBoard").getElementsByTagName("tr")[e].getElementsByTagName("td")[t]}function R(e,t){if(F==T){if(W)if(-1==C[e][t])for(let i of D[V(e,t)]){j(i.x,i.y).style.background=B.get(0),-1==C[i.x][i.y]&&O++,C[i.x][i.y]=0}else for(let i of D[V(e,t)]){j(i.x,i.y).style.background=B.get(-1),0==C[i.x][i.y]&&O--,C[i.x][i.y]=-1}else{let i=j(e,t);0==C[e][t]?(C[e][t]=-1,i.style.background=B.get(-1),O--):(C[e][t]=0,i.style.background=B.get(0),O++)}localStorage.setItem("legionBoard",JSON.stringify(C)),localStorage.setItem("boardFilled",JSON.stringify(O)),document.getElementById("boardFilledValue").innerText=""+O}}function q(e,t){if(F==T)if(W)for(let i of D[V(e,t)])-1==C[i.x][i.y]?j(i.x,i.y).style.background=A?"dimgrey":"silver":j(i.x,i.y).style.background=A?"rgb(20, 20, 20)":"dimgrey";else-1==C[e][t]?j(e,t).style.background=A?"dimgrey":"silver":j(e,t).style.background=A?"rgb(20, 20, 20)":"dimgrey"}function $(e,t){if(F==T)if(W)for(let i of D[V(e,t)])-1==C[i.x][i.y]?j(i.x,i.y).style.background=B.get(-1):j(i.x,i.y).style.background=B.get(0);else-1==C[e][t]?j(e,t).style.background=B.get(-1):j(e,t).style.background=B.get(0)}function G(){let e;for(let t=0;t<C.length;t++)for(let i=0;i<C[0].length;i++)e=C[t][i],j(t,i).style.background=B.get(e)}function z(){let e,t;if(A=!A,localStorage.setItem("isDarkMode",JSON.stringify(A)),A){t="white",document.getElementById("body").style.backgroundColor="rgb(54, 57, 63)";for(let e=0;e<S.length;e++)document.getElementById("piece"+(e+1)).style.backgroundColor="silver";B.set(-1,"grey"),B.set(0,"rgb(50, 50, 50)")}else{t="black",document.getElementById("body").style.backgroundColor="white";for(let e=0;e<S.length;e++)document.getElementById("piece"+(e+1)).style.backgroundColor="white";B.set(-1,"white"),B.set(0,"grey")}G();for(let i=0;i<C.length;i++)for(let n=0;n<C[0].length;n++)e=j(i,n),e.style.borderTopColor!=t&&(e.style.borderTopColor=t),e.style.borderBottomColor!=t&&(e.style.borderBottomColor=t),e.style.borderRightColor!=t&&(e.style.borderRightColor=t),e.style.borderLeftColor!=t&&(e.style.borderLeftColor=t);document.getElementById("body").style.color=t}function H(){W=!W,localStorage.setItem("isBigClick",JSON.stringify(W))}function U(){J=!J,localStorage.setItem("isLiveSolve",JSON.stringify(J)),J&&F!=N&&G()}function K(){!function(){for(let e=0;e<w.length;e++)for(let t=0;t<w[e].board.length;t++)for(let i=0;i<w[e].board[0].length;i++)0==e?w[e].board[t][i]>=0&&(j(t,i).style.background=B.get(0),w[e].board[t][i]=0):w[e].board[t][i]>=0&&(w[e].board[t][i]=0);w=[]}(),document.getElementById("clearBoard").disabled=!1,document.getElementById("boardButton").innerText=b("start"),document.getElementById("resetButton").style.visibility="hidden",document.getElementById("iterations").style.visibility="hidden",document.getElementById("time").style.visibility="hidden",document.getElementById("failText").style.visibility="hidden",F=T}function X(){J&&G()}localStorage.getItem("isDarkMode")&&(document.getElementById("darkMode").checked=JSON.parse(localStorage.getItem("isDarkMode")),JSON.parse(localStorage.getItem("isDarkMode"))&&z())}},[["Vtdi",1,2]]]);