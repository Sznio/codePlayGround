(this.webpackJsonpfunone=this.webpackJsonpfunone||[]).push([[0],{24:function(e,n,o){},25:function(e,n,o){},27:function(e,n,o){},28:function(e,n,o){},29:function(e,n,o){},30:function(e,n,o){},36:function(e,n,o){"use strict";o.r(n);var i=o(2),t=o(16),l=o.n(t),r=(o(24),o(11)),c=o(4),u=(o(25),o(0)),a="E:\\Programming\\Web\\weirdFun\\funone\\src\\Components\\Konsola.js";var m=({text:e,clear:n})=>Object(u.jsxDEV)(u.Fragment,{children:Object(u.jsxDEV)("div",{className:"consoleWrap",children:[Object(u.jsxDEV)("h3",{className:"consoleLabel",children:"Output:"},void 0,!1,{fileName:a,lineNumber:6,columnNumber:25},void 0)," ",Object(u.jsxDEV)("ol",{className:"console",dangerouslySetInnerHTML:{__html:e}},void 0,!1,{fileName:a,lineNumber:7,columnNumber:25},void 0)," ",Object(u.jsxDEV)("button",{className:"clearConsole",onClick:n,children:"Clear"},void 0,!1,{fileName:a,lineNumber:11,columnNumber:25},void 0)]},void 0,!0,{fileName:a,lineNumber:5,columnNumber:19},void 0)},void 0,!1);var s=({isGettingInput:e})=>Object(u.jsxDEV)("button",{id:"inputButton",children:"Send"},void 0,!1,{fileName:"E:\\Programming\\Web\\weirdFun\\funone\\src\\Components\\SendButton.js",lineNumber:2,columnNumber:14},void 0),d="E:\\Programming\\Web\\weirdFun\\funone\\src\\Pages\\HomePage.js";var b=()=>{const[e,n]=Object(i.useState)(""),[o,t]=Object(i.useState)(""),[l,r]=Object(i.useState)("");let c=!1;const a=()=>{r("")};window.input=async function(...e){let n="";null!=e[0]?document.getElementById("inputField").placeholder=e[0]:document.getElementById("inputField").placeholder="Input: ",c=!0,document.querySelector("input#inputField").classList.add("activeInput");let o=new Promise((e=>{document.querySelector("button#inputButton").addEventListener("click",(function(o){document.querySelector("input#inputField").classList.remove("activeInput"),n=document.getElementById("inputField").value,document.getElementById("inputField").value="",document.getElementById("inputField").placeholder="",e(n)}),{once:!0})}));return await o,n},window.clear=()=>{r("")},window.color=(e,n,o,i=1)=>{document.querySelector("textarea#code").style.color=`rgba(${e}, ${n},${o},${i})`},window.console.log=e=>{r((n=>`${n}<li>${e}</li>`))};return window.addEventListener("unhandledrejection",(function(e){let n=`Unhandled rejection (promise: "${e.promise}", reason: "${e.reason}").`;t(n)})),Object(i.useEffect)((()=>{setTimeout(a(),100)}),[]),Object(u.jsxDEV)("main",{children:[Object(u.jsxDEV)("h1",{children:"Code playground"},void 0,!1,{fileName:d,lineNumber:88,columnNumber:19},void 0),Object(u.jsxDEV)("textarea",{name:"code",id:"code",cols:"30",rows:"10",placeholder:"Your code here!",onChange:e=>{n(e.target.value)}},void 0,!1,{fileName:d,lineNumber:89,columnNumber:19},void 0),Object(u.jsxDEV)("div",{className:"input",children:[Object(u.jsxDEV)("input",{type:"text",id:"inputField",className:"input ",placeholder:""},void 0,!1,{fileName:d,lineNumber:100,columnNumber:25},void 0),Object(u.jsxDEV)(s,{isGettingInput:c},void 0,!1,{fileName:d,lineNumber:106,columnNumber:25},void 0)]},void 0,!0,{fileName:d,lineNumber:99,columnNumber:19},void 0),Object(u.jsxDEV)("button",{onClick:()=>{try{const n=Object.getPrototypeOf((async function(){})).constructor,o=new n(e.replaceAll("input(","await input("));return t(""),a(),o()}catch(n){t(""+n)}},children:"Execute!"},void 0,!1,{fileName:d,lineNumber:108,columnNumber:19},void 0),Object(u.jsxDEV)("div",{className:"errorOutPut",children:o||"No errors yet!"},void 0,!1,{fileName:d,lineNumber:110,columnNumber:19},void 0),Object(u.jsxDEV)(m,{text:l,clear:a},void 0,!1,{fileName:d,lineNumber:114,columnNumber:19},void 0)]},void 0,!0,{fileName:d,lineNumber:87,columnNumber:13},void 0)},N=(o(27),"E:\\Programming\\Web\\weirdFun\\funone\\src\\Pages\\AboutPage.js");var h=()=>Object(u.jsxDEV)("div",{className:"about",children:[Object(u.jsxDEV)("h1",{children:"About this project"},void 0,!1,{fileName:N,lineNumber:6,columnNumber:19},void 0),Object(u.jsxDEV)("section",{children:["This project has been made in"," ",Object(u.jsxDEV)("i",{className:"fab fa-react react"},void 0,!1,{fileName:N,lineNumber:9,columnNumber:25},void 0),Object(u.jsxDEV)("span",{className:"react",children:"React"},void 0,!1,{fileName:N,lineNumber:10,columnNumber:25},void 0),Object(u.jsxDEV)("i",{className:"fab fa-react react"},void 0,!1,{fileName:N,lineNumber:11,columnNumber:25},void 0)," in less than a day. It is using the development build, for some compiling-related reasons. The code you write here is js. The code may include some exclusive functions, such as:",Object(u.jsxDEV)("ul",{children:[Object(u.jsxDEV)("li",{children:["input() - grabs the input from the user (asynchronous, the program will stop running until the user returns some input)",Object(u.jsxDEV)("div",{className:"warn",children:"Warning! If you are willing to call this inside a function, please make sure that the function is asynchronous!"},void 0,!1,{fileName:N,lineNumber:21,columnNumber:37},void 0)]},void 0,!0,{fileName:N,lineNumber:17,columnNumber:31},void 0),Object(u.jsxDEV)("li",{children:"clear() - clears the built-in console"},void 0,!1,{fileName:N,lineNumber:28,columnNumber:31},void 0),Object(u.jsxDEV)("li",{children:"color(x,y,z,a) - sets the code color to rgba(x,y,z,a)!"},void 0,!1,{fileName:N,lineNumber:29,columnNumber:31},void 0)]},void 0,!0,{fileName:N,lineNumber:16,columnNumber:25},void 0),"The standard console.log has been overwritten, and as a result, all your output from console.log will be displayed in a compact form in the built-in console. If you plan to debug something serious, please use the console.error command."]},void 0,!0,{fileName:N,lineNumber:7,columnNumber:19},void 0),Object(u.jsxDEV)("h2",{children:"Contact me!"},void 0,!1,{fileName:N,lineNumber:41,columnNumber:19},void 0),Object(u.jsxDEV)("section",{children:Object(u.jsxDEV)("p",{children:["Email:"," ",Object(u.jsxDEV)("a",{href:"mailto: TramielDev@gmail.com",target:"_blank",rel:"noreferrer",children:Object(u.jsxDEV)("em",{children:"TramielDev@gmail.com"},void 0,!1,{fileName:N,lineNumber:50,columnNumber:37},void 0)},void 0,!1,{fileName:N,lineNumber:45,columnNumber:31},void 0),". Feel free to message me regarding the project, or programming in general."]},void 0,!0,{fileName:N,lineNumber:43,columnNumber:25},void 0)},void 0,!1,{fileName:N,lineNumber:42,columnNumber:19},void 0),Object(u.jsxDEV)("h2",{children:"Special thanks"},void 0,!1,{fileName:N,lineNumber:56,columnNumber:19},void 0),Object(u.jsxDEV)("section",{children:Object(u.jsxDEV)("p",{children:["Special thanks to"," ",Object(u.jsxDEV)("span",{className:"special",children:Object(u.jsxDEV)("a",{className:"special",href:"https://github.com/Technohacker",target:"_blank",rel:"noreferrer",children:"Technohacker"},void 0,!1,{fileName:N,lineNumber:61,columnNumber:37},void 0)},void 0,!1,{fileName:N,lineNumber:60,columnNumber:31},void 0)," ","for helping me build this project."]},void 0,!0,{fileName:N,lineNumber:58,columnNumber:25},void 0)},void 0,!1,{fileName:N,lineNumber:57,columnNumber:19},void 0)]},void 0,!0,{fileName:N,lineNumber:5,columnNumber:13},void 0),v=(o(28),"E:\\Programming\\Web\\weirdFun\\funone\\src\\Pages\\ExamplesPage.js");var j=()=>{let e=[{id:0,title:"Classic console calculator",content:'let renderFunc = async function () {\n         console.log("Choose an operaion: ");\n         console.log("-----------------------");\n         console.log("1. Addition");\n         console.log("2. Subtraction");\n         console.log("3. Multiplication");\n         console.log("4. Division");\n         console.log("5. Exit");\n         let choice = input("Choose an operation code: ");\n         if (choice == 5) {\n               clear();\n               return;\n         }\n         const first = input("Input the first number: ") - 0;\n         const second = input("Input the second number: ") - 0;\n         switch (choice - 0) {\n               case 1:\n                     console.log(`Result: ${first + second}`);\n                     console.log("---------------------");\n                     renderFunc();\n                     break;\n               case 2:\n                     console.log(`Result: ${first - second}`);\n                     console.log("---------------------");\n                     renderFunc();\n                     break;\n               case 3:\n                     console.log(`Result: ${first * second}`);\n                     console.log("---------------------");\n                     renderFunc();\n                     break;\n               case 4:\n                     console.log(`Result: ${first / second}`);\n                     console.log("---------------------");\n                     renderFunc();\n                     break;\n   \n               default:\n                     console.log("Wrong operation code!");\n         }\n   }; renderFunc();\n   ',description:"A veeery basic console calculator. Everyone made one at least once in their lifetime.",warn:null},{id:1,title:"DOM-INJECTION based random number generator",content:'function addCss(element, style) {\n                     for (const property in style) element.style[property] = style[property];\n               }\n               let genRandom = (number) => {\n                     newRandom = Math.floor(Math.random() * number);\n                     return newRandom;\n               };\n               color(255, 100, 255);\n               let inputBox = document.createElement("input");\n               inputBox.placeholder = "Input a number";\n               document.getElementsByClassName("wrap")[0].appendChild(inputBox);\n               addCss(inputBox, {\n                     color: "#ccc",\n                     padding: "10px 20px",\n                     backgroundColor: "#121212",\n                     display: "block",\n                     marginLeft: "auto",\n                     marginRight: "auto",\n                     marginBottom: "10px",\n                     border: "2px solid #ccc",\n               });\n               let button = document.createElement("button");\n               button.textContent = "Generate";\n               document.getElementsByClassName("wrap")[0].appendChild(button);\n               addCss(button, { padding: "20px 40px" });\n               button.addEventListener("click", () => {\n                     console.log(genRandom(inputBox.value));\n               });\n               console.log("Scroll down to see the new elements!");\n               ',description:"This shows you how to inject some elements into DOM! Simply run the code, input some numbers into the new inputbox, and press the *new* button!",warn:"Warning! The elements added by this code will carry on to other sections of this website. Please refresh the website ater going to other sections."},{id:2,title:"Probability checker",content:'color(84, 84, 255);\n                  const target = input("What decimal number do you want to get?") - 0;\n                  const range = [input("What\'s the lower decimal bound of the range?") - 0, input("What\'s the upper decimal bound of the range?") - 0];\n                  const howMany = input("How many times do you want to generate?") - 0;\n                  let sum = 0;\n                  const generate = (target, range) => {\n                  \n                     let counter = 0;\n                     let lastGen;\n                     do {\n                        lastGen = Math.floor((Math.random() * range[1] - range[0]) + range[0] + 1);\n                        counter++;\n                     }\n                     while (lastGen != target){\n                     sum += counter;\n                     }\n                     return (counter);\n                  };\n                  \n                  if ((Math.floor(target) != target) || (Math.floor(range[0]) != range[0]) || (Math.floor(range[1]) != range[1]) || (Math.floor(howMany) != howMany)) {\n                     console.log("The input must be decimal numbers! ERR-CODE: 0");\n                     return;\n                  }\n                  if (target > range[1]) {\n                     console.log("Target must not be bigger than the upper bound of the range! ERR-CODE: 1");\n                     return;\n                  }\n                  if (howMany <= 0) {\n                     console.log("You can\'t generate less than one time! ERR-CODE: 2");\n                     return\n                  }\n                  for (i = 0; i < howMany; i++) {\n                     console.log(`Generation ${i+1}: Succesfully generated in ${generate(target, range)} tries.`);\n                  }\n                  console.log(`Total amount of tries: ${sum}. On average, your number was generated once every ${Math.floor(sum/howMany)} tries.`)',description:"This code will generate a number you ask it to generate, in a range of numbers you specify. It will do it an amount of times you tell it to. Each time, it will count how many tries it took to generate your number, give you the sum, and the average amount of times.",warn:null}];return e=e.map((e=>Object(u.jsxDEV)("li",{className:"example",children:[Object(u.jsxDEV)("h2",{children:e.title},void 0,!1,{fileName:v,lineNumber:137,columnNumber:19},void 0),Object(u.jsxDEV)("h4",{children:"Code:"},void 0,!1,{fileName:v,lineNumber:138,columnNumber:19},void 0),Object(u.jsxDEV)("code",{children:e.content},void 0,!1,{fileName:v,lineNumber:139,columnNumber:19},void 0),Object(u.jsxDEV)("h4",{children:"Description:"},void 0,!1,{fileName:v,lineNumber:140,columnNumber:19},void 0),Object(u.jsxDEV)("section",{children:e.description},void 0,!1,{fileName:v,lineNumber:141,columnNumber:19},void 0),null!=e.warn?Object(u.jsxDEV)("div",{className:"warn",children:e.warn},void 0,!1,{fileName:v,lineNumber:143,columnNumber:25},void 0):null]},e.id,!0,{fileName:v,lineNumber:136,columnNumber:13},void 0))),Object(u.jsxDEV)("div",{className:"examples",children:[Object(u.jsxDEV)("h1",{children:"Some example code to check out the app!"},void 0,!1,{fileName:v,lineNumber:150,columnNumber:19},void 0),Object(u.jsxDEV)("ul",{children:e},void 0,!1,{fileName:v,lineNumber:151,columnNumber:19},void 0)]},void 0,!0,{fileName:v,lineNumber:149,columnNumber:13},void 0)};o(29);var p=()=>Object(u.jsxDEV)(u.Fragment,{children:" "},void 0,!1),f=(o(30),"E:\\Programming\\Web\\weirdFun\\funone\\src\\App.js");var g=()=>Object(u.jsxDEV)(r.a,{basename:"/codePlayGround/",children:[Object(u.jsxDEV)("nav",{className:"navBar",children:Object(u.jsxDEV)("ul",{children:[Object(u.jsxDEV)("li",{children:Object(u.jsxDEV)(r.b,{to:"/",exact:!0,children:"Home Page"},void 0,!1,{fileName:f,lineNumber:14,columnNumber:37},void 0)},void 0,!1,{fileName:f,lineNumber:13,columnNumber:31},void 0),Object(u.jsxDEV)("li",{children:Object(u.jsxDEV)(r.b,{to:"/examples",children:"Examples"},void 0,!1,{fileName:f,lineNumber:19,columnNumber:37},void 0)},void 0,!1,{fileName:f,lineNumber:18,columnNumber:31},void 0),Object(u.jsxDEV)("li",{children:Object(u.jsxDEV)(r.b,{to:"/about",children:"About"},void 0,!1,{fileName:f,lineNumber:22,columnNumber:37},void 0)},void 0,!1,{fileName:f,lineNumber:21,columnNumber:31},void 0)]},void 0,!0,{fileName:f,lineNumber:12,columnNumber:25},void 0)},void 0,!1,{fileName:f,lineNumber:11,columnNumber:19},void 0),Object(u.jsxDEV)("div",{className:"wrap",children:Object(u.jsxDEV)(c.c,{children:[Object(u.jsxDEV)(c.a,{path:"/",exact:!0,children:Object(u.jsxDEV)(b,{},void 0,!1,{fileName:f,lineNumber:29,columnNumber:37},void 0)},void 0,!1,{fileName:f,lineNumber:28,columnNumber:31},void 0),Object(u.jsxDEV)(c.a,{path:"/about",children:Object(u.jsxDEV)(h,{},void 0,!1,{fileName:f,lineNumber:32,columnNumber:37},void 0)},void 0,!1,{fileName:f,lineNumber:31,columnNumber:31},void 0),Object(u.jsxDEV)(c.a,{path:"/examples",children:Object(u.jsxDEV)(j,{},void 0,!1,{fileName:f,lineNumber:35,columnNumber:37},void 0)},void 0,!1,{fileName:f,lineNumber:34,columnNumber:31},void 0)]},void 0,!0,{fileName:f,lineNumber:27,columnNumber:25},void 0)},void 0,!1,{fileName:f,lineNumber:26,columnNumber:19},void 0),Object(u.jsxDEV)(p,{},void 0,!1,{fileName:f,lineNumber:39,columnNumber:19},void 0)]},void 0,!0,{fileName:f,lineNumber:10,columnNumber:13},void 0);l.a.render(Object(u.jsxDEV)(g,{},void 0,!1,{fileName:"E:\\Programming\\Web\\weirdFun\\funone\\src\\index.js",lineNumber:7,columnNumber:7},void 0),document.getElementById("root"))}},[[36,1,2]]]);