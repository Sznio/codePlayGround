(this.webpackJsonpfunone=this.webpackJsonpfunone||[]).push([[0],{24:function(e,n,o){},25:function(e,n,o){},26:function(e,n,o){},28:function(e,n,o){},29:function(e,n,o){},35:function(e,n,o){"use strict";o.r(n);var i=o(2),l=o(16),t=o.n(l),r=(o(24),o(11)),c=o(4),u=(o(25),o(26),o(1)),m="E:\\Programming\\Web\\weirdFun\\funone\\src\\Components\\Konsola.js";var a=({text:e,clear:n})=>Object(u.jsxDEV)(u.Fragment,{children:Object(u.jsxDEV)("div",{className:"consoleWrap",children:[Object(u.jsxDEV)("h3",{className:"consoleLabel",children:"Output:"},void 0,!1,{fileName:m,lineNumber:6,columnNumber:25},void 0)," ",Object(u.jsxDEV)("ol",{className:"console",dangerouslySetInnerHTML:{__html:e}},void 0,!1,{fileName:m,lineNumber:7,columnNumber:25},void 0)," ",Object(u.jsxDEV)("button",{className:"clearConsole",onClick:n,children:"Clear"},void 0,!1,{fileName:m,lineNumber:11,columnNumber:25},void 0)]},void 0,!0,{fileName:m,lineNumber:5,columnNumber:19},void 0)},void 0,!1);var d=({isGettingInput:e})=>Object(u.jsxDEV)("button",{id:"inputButton",children:"Send"},void 0,!1,{fileName:"E:\\Programming\\Web\\weirdFun\\funone\\src\\Components\\SendButton.js",lineNumber:2,columnNumber:14},void 0),s="E:\\Programming\\Web\\weirdFun\\funone\\src\\Pages\\HomePage.js";var b=()=>{const[e,n]=Object(i.useState)(""),[o,l]=Object(i.useState)(""),[t,r]=Object(i.useState)("");let c=!1;const m=()=>{r("")};window.input=async function(...e){let n="";null!=e[0]?document.getElementById("inputField").placeholder=e[0]:document.getElementById("inputField").placeholder="Input: ",c=!0,document.querySelector("input#inputField").classList.add("activeInput");let o=new Promise((e=>{document.querySelector("button#inputButton").addEventListener("click",(function(o){document.querySelector("input#inputField").classList.remove("activeInput"),n=document.getElementById("inputField").value,document.getElementById("inputField").value="",document.getElementById("inputField").placeholder="",e(n)}),{once:!0})}));return await o,n},window.clear=()=>{r("")},window.color=(e,n,o,i=1)=>{console.error(document.querySelector("textarea#code")),document.querySelector("textarea#code").style.color=`rgba(${e}, ${n},${o},${i})`},window.console.log=e=>{r((n=>`${n}<li>${e}</li>`))};return window.addEventListener("unhandledrejection",(function(e){let n=`Unhandled rejection (promise: "${e.promise}", reason: "${e.reason}").`;l(n)})),Object(u.jsxDEV)("main",{children:[Object(u.jsxDEV)("h1",{children:"Code playground"},void 0,!1,{fileName:s,lineNumber:86,columnNumber:19},void 0),Object(u.jsxDEV)("textarea",{name:"code",id:"code",cols:"30",rows:"10",placeholder:"Your code here!",onChange:e=>{n(e.target.value)}},void 0,!1,{fileName:s,lineNumber:87,columnNumber:19},void 0),Object(u.jsxDEV)("div",{className:"input",children:[Object(u.jsxDEV)("input",{type:"text",id:"inputField",className:"input ",placeholder:""},void 0,!1,{fileName:s,lineNumber:98,columnNumber:25},void 0),Object(u.jsxDEV)(d,{isGettingInput:c},void 0,!1,{fileName:s,lineNumber:104,columnNumber:25},void 0)]},void 0,!0,{fileName:s,lineNumber:97,columnNumber:19},void 0),Object(u.jsxDEV)("button",{onClick:()=>{try{const n=Object.getPrototypeOf((async function(){})).constructor;console.error(e);const o=new n(e.replaceAll("input(","await input("));return l(""),m(),o()}catch(n){l(""+n)}},children:"Execute!"},void 0,!1,{fileName:s,lineNumber:106,columnNumber:19},void 0),Object(u.jsxDEV)("div",{className:"errorOutPut",children:o||"No errors yet!"},void 0,!1,{fileName:s,lineNumber:108,columnNumber:19},void 0),Object(u.jsxDEV)(a,{text:t,clear:m},void 0,!1,{fileName:s,lineNumber:112,columnNumber:19},void 0)]},void 0,!0,{fileName:s,lineNumber:85,columnNumber:13},void 0)},N=(o(28),"E:\\Programming\\Web\\weirdFun\\funone\\src\\Pages\\AboutPage.js");var v=()=>Object(u.jsxDEV)("div",{className:"about",children:[Object(u.jsxDEV)("h1",{children:"About this project"},void 0,!1,{fileName:N,lineNumber:6,columnNumber:19},void 0),Object(u.jsxDEV)("section",{children:["This project has been made in"," ",Object(u.jsxDEV)("i",{class:"fab fa-react react"},void 0,!1,{fileName:N,lineNumber:9,columnNumber:25},void 0),Object(u.jsxDEV)("span",{className:"react",children:"React"},void 0,!1,{fileName:N,lineNumber:10,columnNumber:25},void 0),Object(u.jsxDEV)("i",{class:"fab fa-react react"},void 0,!1,{fileName:N,lineNumber:11,columnNumber:25},void 0)," in less than a day. The code you write here is js. The code may include some exclusive functions, such as:",Object(u.jsxDEV)("ul",{children:[Object(u.jsxDEV)("li",{children:["input() - grabs the input from the user (asynchronous, the program will stop running until the user returns some input)",Object(u.jsxDEV)("div",{className:"warn",children:"Warning! If you are willing to call this inside a function, please make sure that the function is asynchronous!"},void 0,!1,{fileName:N,lineNumber:19,columnNumber:37},void 0)]},void 0,!0,{fileName:N,lineNumber:15,columnNumber:31},void 0),Object(u.jsxDEV)("li",{children:"clear() - clears the built-in console"},void 0,!1,{fileName:N,lineNumber:26,columnNumber:31},void 0),Object(u.jsxDEV)("li",{children:"color(x,y,z,a) - sets the code color to rgba(x,y,z,a)!"},void 0,!1,{fileName:N,lineNumber:27,columnNumber:31},void 0)]},void 0,!0,{fileName:N,lineNumber:14,columnNumber:25},void 0),"The standard console.log has been overwritten, and as a result, all your output from console.log will be displayed in a compact form in the built-in console. If you plan to debug something serious, please use the console.error command."]},void 0,!0,{fileName:N,lineNumber:7,columnNumber:19},void 0),Object(u.jsxDEV)("h2",{children:"Contact me!"},void 0,!1,{fileName:N,lineNumber:39,columnNumber:19},void 0),Object(u.jsxDEV)("section",{children:Object(u.jsxDEV)("p",{children:["Email:"," ",Object(u.jsxDEV)("a",{href:"mailto: TramielDev@gmail.com",target:"_blank",rel:"noreferrer",children:Object(u.jsxDEV)("em",{children:"TramielDev@gmail.com"},void 0,!1,{fileName:N,lineNumber:48,columnNumber:37},void 0)},void 0,!1,{fileName:N,lineNumber:43,columnNumber:31},void 0),". Feel free to message me regarding the project, or programming in general."]},void 0,!0,{fileName:N,lineNumber:41,columnNumber:25},void 0)},void 0,!1,{fileName:N,lineNumber:40,columnNumber:19},void 0)]},void 0,!0,{fileName:N,lineNumber:5,columnNumber:13},void 0),j=(o(29),"E:\\Programming\\Web\\weirdFun\\funone\\src\\Pages\\ExamplesPage.js");var h=()=>{let e=[{id:0,title:"Classic console calculator",content:'let renderFunc = async function () {\n         console.log("Choose an operaion: ");\n         console.log("-----------------------");\n         console.log("1. Addition");\n         console.log("2. Subtraction");\n         console.log("3. Multiplication");\n         console.log("4. Division");\n         console.log("5. Exit");\n         let choice = input("Choose an operation code: ");\n         if (choice == 5) {\n               clear();\n               return;\n         }\n         const first = input("Input the first number: ") - 0;\n         const second = input("Input the second number: ") - 0;\n         switch (choice - 0) {\n               case 1:\n                     console.log(`Result: ${first + second}`);\n                     console.log("---------------------");\n                     renderFunc();\n                     break;\n               case 2:\n                     console.log(`Result: ${first - second}`);\n                     console.log("---------------------");\n                     renderFunc();\n                     break;\n               case 3:\n                     console.log(`Result: ${first * second}`);\n                     console.log("---------------------");\n                     renderFunc();\n                     break;\n               case 4:\n                     console.log(`Result: ${first / second}`);\n                     console.log("---------------------");\n                     renderFunc();\n                     break;\n   \n               default:\n                     console.log("Wrong operation code!");\n         }\n   }; renderFunc();\n   ',description:"A veeery basic console calculator. Everyone made one at least once in their lifetime.",warn:null},{id:1,title:"DOM-INJECTION based random number generator",content:'function addCss(element, style) {\n                     for (const property in style) element.style[property] = style[property];\n               }\n               let genRandom = (number) => {\n                     newRandom = Math.floor(Math.random() * number);\n                     return newRandom;\n               };\n               color(255, 100, 255);\n               let inputBox = document.createElement("input");\n               inputBox.placeholder = "Input a number";\n               document.getElementsByClassName("wrap")[0].appendChild(inputBox);\n               addCss(inputBox, {\n                     color: "#ccc",\n                     padding: "10px 20px",\n                     backgroundColor: "#121212",\n                     display: "block",\n                     marginLeft: "auto",\n                     marginRight: "auto",\n                     marginBottom: "10px",\n                     border: "2px solid #ccc",\n               });\n               let button = document.createElement("button");\n               button.textContent = "Generate";\n               document.getElementsByClassName("wrap")[0].appendChild(button);\n               addCss(button, { padding: "20px 40px" });\n               button.addEventListener("click", () => {\n                     console.log(genRandom(inputBox.value));\n               });\n               console.log("Scroll down to see the new elements!");\n               ',description:"This shows you how to inject some elements into DOM! Simply run the code, input some numbers into the new inputbox, and press the *new* button!",warn:"Warning! The elements added by this code will carry on to other sections of this website. Please refresh the website ater going to other sections."}];return e=e.map((e=>Object(u.jsxDEV)("li",{className:"example",children:[Object(u.jsxDEV)("h2",{children:e.title},void 0,!1,{fileName:j,lineNumber:95,columnNumber:19},void 0),Object(u.jsxDEV)("h4",{children:"Code:"},void 0,!1,{fileName:j,lineNumber:96,columnNumber:19},void 0),Object(u.jsxDEV)("code",{children:e.content},void 0,!1,{fileName:j,lineNumber:97,columnNumber:19},void 0),Object(u.jsxDEV)("h4",{children:"Description:"},void 0,!1,{fileName:j,lineNumber:98,columnNumber:19},void 0),Object(u.jsxDEV)("section",{children:e.description},void 0,!1,{fileName:j,lineNumber:99,columnNumber:19},void 0),null!=e.warn?Object(u.jsxDEV)("div",{className:"warn",children:e.warn},void 0,!1,{fileName:j,lineNumber:101,columnNumber:25},void 0):null]},e.id,!0,{fileName:j,lineNumber:94,columnNumber:13},void 0))),Object(u.jsxDEV)("div",{className:"examples",children:[Object(u.jsxDEV)("h1",{children:"Some example code to check out the app!"},void 0,!1,{fileName:j,lineNumber:108,columnNumber:19},void 0),Object(u.jsxDEV)("ul",{children:e},void 0,!1,{fileName:j,lineNumber:109,columnNumber:19},void 0)]},void 0,!0,{fileName:j,lineNumber:107,columnNumber:13},void 0)},p="E:\\Programming\\Web\\weirdFun\\funone\\src\\App.js";var f=()=>Object(u.jsxDEV)(r.a,{children:[Object(u.jsxDEV)("nav",{className:"navBar",children:Object(u.jsxDEV)("ul",{children:[Object(u.jsxDEV)("li",{children:Object(u.jsxDEV)(r.b,{to:{pathname:"/"},exact:!0,children:"Home Page"},void 0,!1,{fileName:p,lineNumber:18,columnNumber:37},void 0)},void 0,!1,{fileName:p,lineNumber:17,columnNumber:31},void 0),Object(u.jsxDEV)("li",{children:Object(u.jsxDEV)(r.b,{to:{pathname:"/examples"},children:"Examples"},void 0,!1,{fileName:p,lineNumber:28,columnNumber:37},void 0)},void 0,!1,{fileName:p,lineNumber:27,columnNumber:31},void 0),Object(u.jsxDEV)("li",{children:Object(u.jsxDEV)(r.b,{to:{pathname:"/about"},children:"About"},void 0,!1,{fileName:p,lineNumber:37,columnNumber:37},void 0)},void 0,!1,{fileName:p,lineNumber:36,columnNumber:31},void 0)]},void 0,!0,{fileName:p,lineNumber:16,columnNumber:25},void 0)},void 0,!1,{fileName:p,lineNumber:15,columnNumber:19},void 0),Object(u.jsxDEV)("div",{className:"wrap",children:Object(u.jsxDEV)(c.c,{children:[Object(u.jsxDEV)(c.a,{path:"/",exact:!0,children:Object(u.jsxDEV)(b,{},void 0,!1,{fileName:p,lineNumber:50,columnNumber:37},void 0)},void 0,!1,{fileName:p,lineNumber:49,columnNumber:31},void 0),Object(u.jsxDEV)(c.a,{path:"/about",children:Object(u.jsxDEV)(v,{},void 0,!1,{fileName:p,lineNumber:53,columnNumber:37},void 0)},void 0,!1,{fileName:p,lineNumber:52,columnNumber:31},void 0),Object(u.jsxDEV)(c.a,{path:"/examples",children:Object(u.jsxDEV)(h,{},void 0,!1,{fileName:p,lineNumber:56,columnNumber:37},void 0)},void 0,!1,{fileName:p,lineNumber:55,columnNumber:31},void 0)]},void 0,!0,{fileName:p,lineNumber:48,columnNumber:25},void 0)},void 0,!1,{fileName:p,lineNumber:47,columnNumber:19},void 0)]},void 0,!0,{fileName:p,lineNumber:14,columnNumber:13},void 0);t.a.render(Object(u.jsxDEV)(f,{},void 0,!1,{fileName:"E:\\Programming\\Web\\weirdFun\\funone\\src\\index.js",lineNumber:7,columnNumber:7},void 0),document.getElementById("root"))}},[[35,1,2]]]);