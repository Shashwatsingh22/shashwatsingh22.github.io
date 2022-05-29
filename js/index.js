let terminalContainer=document.querySelector(".terminal-container");

let root=document.querySelector(":root");

var commandInput=document.querySelectorAll(".command-input");
let focusIndex=0;
let content=`
<p class="desc intro" >
<span class="rightIntro">
                 Hi I'm
                 <strong> Shashwat </strong>
                 a passionate self-taught Backend Devloper as well as Devops  Engineer  from India.
                 My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build.
                 
            </span>
            </p>
<div class="help"> 



<br>
<p class="desc"><strong>Usage:</strong></p>
<br>


<ul>
   <li>
       <strong>help </strong>
       &nbsp;
       Know about further commands
   </li>

   <li>
       <strong>clear </strong>
       &nbsp;
       To clear terminal
   </li>

   <li>
       <strong>skills  </strong>
       &nbsp;
       My Skills
   </li>

   <li>
       <strong>contact  </strong>
       &nbsp;
       To Contact me
   </li>
   <li>
       <strong>projects  </strong>
       &nbsp;
       My Projects
   </li>
   <li>
       <strong>blogs  </strong>
       &nbsp;
       Overview of  Blogs
   </li>

   <li>
       <strong>theme -light  </strong>
       &nbsp;
       Update Light Theme
   </li>

   <li>
       <strong>theme -dark  </strong>
       &nbsp;
       Update Dark Theme (default)
   </li>
</ul>
</div>
`
function automate(index){
    commandInput[index].innerText="help";

   
    addContent(content)
    addInputTab()
    commandInput[focusIndex].style.animation="none";
    commandInput[focusIndex].style.border="none";
    commandInput[focusIndex].setAttribute("contenteditable","false")
    commandInput=document.querySelectorAll(".command-input");
    focusIndex+=1;
    setTimeout(()=>{
        commandInput[focusIndex].focus();

    },1000);
    listenCommands()
}
window.onload=function(){
    commandInput[0].focus();
    automate(focusIndex)
    root=document.querySelector(":root");
    if(localStorage.length!=0){
        setTheme(
            localStorage.textColor,
            localStorage.backColor,
            localStorage.hightlightColor
        )
    }

}

window.onkeydown=function(e){
   if(e.code==="Tab"){
       commandInput[focusIndex].focus();
   }
}

function setTheme(textColor,backColor,hightlightColor){
    if(textColor=="black"){
        root.style.setProperty("--sephia",0);
    }
    else{
        root.style.setProperty("--sephia",60);

    }
    root.style.setProperty("--text-color",textColor);
    root.style.setProperty("--back-color",backColor);
    root.style.setProperty("--highlight-color",hightlightColor);
}

function sessionTheme(textColor,backColor,hightlightColor){
    localStorage.setItem("textColor",textColor);
    localStorage.setItem("backColor",backColor);
    localStorage.setItem("hightlightColor",hightlightColor);
}
function addContent(content){
    let main=document.createElement("div");
    main.classList.toggle("terminal-results");

    main.innerHTML=content;

    terminalContainer.appendChild(main);

}

function addInputTab(){
    let main=document.createElement("div");
    main.classList.toggle("terminal-tab");

    main.innerHTML=`
        <p class="command-current">
        shashwat@ip-127-0-0-1:~$ 
        </p>
        <p class="command-input"  contenteditable="true"></p>
        `;
    terminalContainer.appendChild(main);


}

function updateChanges(){

    commandInput[focusIndex-1].style.animation="none";
    commandInput[focusIndex-1].style.border="none";
    commandInput[focusIndex-1].setAttribute("contenteditable","false")
    commandInput=document.querySelectorAll(".command-input");
    commandInput[focusIndex].focus();
    listenCommands()


}

function clearHistory(){
    window.location.reload();
}
function listenCommands(){
    commandInput.forEach((item)=>{

        item.addEventListener('keypress',(e)=>{
    
            if (e.which === 13) {
                e.preventDefault();
            }
            if(e.code==='Enter'){
                focusIndex+=1

               let statement=e.target.innerText;
               console.log(statement)
               switch(statement){


                    case "help":
                      
                       addContent(content)
                       addInputTab()
                       updateChanges()
                       break;


                    case "clear":
                        clearHistory();
                        break;


                    case "skills":
                        let content3=`<p class="desc">
                        <ul>
                            <li>
                                <strong>Devops </strong>
                                &nbsp;

                                <div class="outer">

                                    <div class="w3-grey progress" style="height:24px;width:90%">
                                    90%
                                    </div>
                                </div>
                           
                            </li>
                            <li>
                                <strong>Laravel </strong>
                                &nbsp;

                                <div class="outer">

                                    <div class="w3-grey progress" style="height:24px;width:60%">
                                    60%
                                    </div>
                                </div>
                           
                            </li>

                            <li>
                                <strong>Php </strong>
                                &nbsp;

                                <div class="outer">

                                    <div class="w3-grey progress" style="height:24px;width:90%">
                                    90%
                                    </div>
                                </div>
                           
                            </li>

 
                            </li>
                        </ul>
                        </p>`
    
                            
                        addContent(content3);
                        addInputTab();
                        updateChanges();
                        break;
                    case "contact":
                        let content4=`<p class="desc">
                            <ul>
                                <li>
                                    <strong><i class="fa fa-github"></i>&nbsp;Github</strong>
                                    <a href="https://github.com/Shashwatsingh22">
                                    https://github.com/Shashwatsingh22
                                    </a>
                                </li>

                                <li>
                                    <strong><i class="fa fa-facebook"></i>&nbsp;Facebook</strong>
                                    <a href="https://github.com/Shashwatsingh22">
                                    https://github.com/Shashwatsingh22
                                    </a>
                                </li>
                                <li>
                                    <strong><i class="fa fa-stack-overflow"></i>&nbsp;Stackoverflow</strong>
                                    <a href="https://github.com/Shashwatsingh22">
                                    https://github.com/Shashwatsingh22
                                    </a>
                                </li>

                                <li>
                                    <strong><i class="fa fa-medium"></i>&nbsp;Medium</strong>
                                    <a href="https://github.com/Shashwatsingh22">
                                    https://github.com/Shashwatsingh22
                                    </a>
                                </li>
                            </ul>
                        </p>`
                        addContent(content4)
                        addInputTab()
                        updateChanges()
                        break;

                    case "blogs":
                        let content6=`
                        <p class="desc" >

                            <ul>
                                
                                <h1><strong>Trending Blogs</strong></h1>
                                <li >
                                    <div class="column">
                                        <strong>Blog Name </strong>
                                        <small><i>Start Date to End Date</i></small>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas accusamus harum ut consequatur nulla dicta est eveniet, ex odio.        
                                        </p>    

                                        <a href="" >https://github.com/Shashwatsingh22/LogManager</a>
                                    </div>

                                    <img src="avatar.jpeg" style="width:200px;height:200px;" class="avatar other"   alt="projectImg">
                                </li>

                                <li >
                                    <div class="column">
                                        <strong>Blog Name </strong>
                                        <small><i>Start Date to End Date</i></small>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas accusamus harum ut consequatur nulla dicta est eveniet, ex odio.        
                                        </p>    

                                        <a href="" >https://github.com/Shashwatsingh22/LogManager</a>
                                    </div>

                                    <img src="avatar.jpeg" style="width:200px;height:200px;" class="avatar other"   alt="projectImg">
                                </li>


                                <h1><strong>Recent Blogs</strong></h1>
                                <li >
                                    <div class="column">
                                        <strong>Blog Name </strong>
                                        <small><i>Start Date to End Date</i></small>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas accusamus harum ut consequatur nulla dicta est eveniet, ex odio.        
                                        </p>    

                                        <a href="" >https://github.com/Shashwatsingh22/LogManager</a>
                                    </div>

                                    <img src="avatar.jpeg" style="width:200px;height:200px;" class="avatar other"   alt="projectImg">
                                </li>

                                <li >
                                    <div class="column">
                                        <strong>Blog Name </strong>
                                        <small><i>Start Date to End Date</i></small>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas accusamus harum ut consequatur nulla dicta est eveniet, ex odio.        
                                        </p>    

                                        <a href="" >https://github.com/Shashwatsingh22/LogManager</a>
                                    </div>

                                    <img src="avatar.jpeg" style="width:200px;height:200px;" class="avatar other"   alt="projectImg">
                                </li>










                            </ul>
                        </p>`
                        addContent(content6)
                        addInputTab()
                        updateChanges()
                        break;
                        
                    case "theme -light":
                        setTheme("black","lightgray","blue");
                        sessionTheme("black","lightgray","blue");
                        addInputTab()
                        updateChanges()
                        break;

                    case "theme -dark":
                        setTheme("green","black","yellow");
                        sessionTheme("green","black","yellow");
                        addInputTab()
                        updateChanges()
                        break;


                    case "projects":
                        let content5=`<p class="desc">
                          <ul>

                            <li >
                                <div class="column">
                                    <strong>Project Name </strong>
                                    <small><i>Start Date to End Date</i></small>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas accusamus harum ut consequatur nulla dicta est eveniet, ex odio.        
                                    </p>    

                                    <a href="" >https://github.com/Shashwatsingh22/LogManager</a>
                                </div>

                                <img src="avatar.jpeg" style="width:200px;height:200px;" class="avatar"   alt="projectImg">
                            </li>
                            
                  


                          </ul>
                        </p>`
                        addContent(content5)
                        addInputTab()
                        updateChanges()
                        break;


                   default:
                        let content2=`<p class="desc" style="color:red">
                            Command '${statement}' not found, 
                            Try <strong>help</strong> command
                        </p>`
                        addContent(content2)
                        addInputTab()
                        updateChanges()
                        break;


               }
            }
        });
    
    
    })
    
}

listenCommands()