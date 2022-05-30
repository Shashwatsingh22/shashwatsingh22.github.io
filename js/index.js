let terminalContainer=document.querySelector(".terminal-container");

let root=document.querySelector(":root");

var commandInput=document.querySelectorAll(".command-input");
let focusIndex=0;
let about=`
<div class='shift'>
<p class="desc " >

                 Hi I'm
                 <strong> Shashwat </strong>
                 a passionate self-taught Backend Devloper as well as Devops  Engineer  from India.
                 My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build.
                 <br><br>
                 I have created some projects might be you like so type <strong> 'projects' </strong> where I used both concept of Backend Skills as well as DevOps skills through which I tried solve some usecases of Industry.
                 <br><br>
                 I also loved to write blogs Whenever I learn new Technology I write blogs about that particular technology. It helps me in two ways, Firstly
                 through these blogs I can share my thoughts on these Technologies and it also helps in networking with people of
                 that particular field. On the Other hand, these blogs also
                 helps me in form of notes. Wants to know more about it type <strong> 'blog' </strong>.
        
            </p>
</div>`;

let help=`
<div class="help shift"> 
<br>
<p class="desc"><strong>Usage:</strong></p>
<br>


<ul>
<li>
<strong>about </strong>
&nbsp;
About Me (A short Summery) ✌
</li>

   <li>
       <strong>help </strong>
       &nbsp;
       Know about further commands 🆘
   </li>

   <li>
       <strong>clear </strong>
       &nbsp;
       To clear terminal 🚮
   </li>

   <li>
       <strong>skills  </strong>
       &nbsp;
       My Skills ⛑
   </li>

   <li>
       <strong>contact  </strong>
       &nbsp;
       To Contact me 📞
   </li>
   <li>
       <strong>projects  </strong>
       &nbsp;
       My Projects 👩‍💻
   </li>
   <li>
       <strong>blogs  </strong>
       &nbsp;
       Overview of  Blogs 📝
   </li>

   <li>
       <strong>theme -light  </strong>
       &nbsp;
       Update Light Theme 💡
   </li>

   <li>
       <strong>theme -dark  </strong>
       &nbsp;
       Update Dark Theme (default) 🌑
   </li>
</ul>
</div>
</div>
`;
function automate(index){
    commandInput[index].innerText="about";

   
    addContent(about)
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
        shashwat@ip-127-0-0-1:~$&nbsp; 
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

                    case "about":

                       addContent(about)
                       addInputTab()
                       updateChanges()
                       break;


                    case "help":
                      
                       addContent(help)
                       addInputTab()
                       updateChanges()
                       break;


                    case "clear":
                        clearHistory();
                        break;


                    case "skills":
                        let content3=`<div class="shift">
                        <p class="desc">
                        <h4 class="hSkills"> Programming Languages </h5>
                        
                        <div class="shift">
                        <ul>
                            <li>
                                <strong>C and C++</strong>
                                &nbsp;

                                <div class="outer">

                                    <div class="w3-grey progress" style="height:24px;width:90%">
                                    90%
                                    </div>
                                </div>
                           
                            </li>

                            <li>
                                <strong>Data Structure And Algorithm (with C and C++)</strong>
                                &nbsp;

                                <div class="outer">

                                    <div class="w3-grey progress" style="height:24px;width:75%">
                                    75%
                                    </div>
                                </div>
                           
                            </li>
                            <li>
                                <strong>JavaScript</strong>
                                &nbsp;

                                <div class="outer">

                                    <div class="w3-grey progress" style="height:24px;width:60%">
                                    60%
                                    </div>
                                </div>
                           
                            </li>

                            <li>
                                <strong>Python</strong>
                                &nbsp;

                                <div class="outer">

                                    <div class="w3-grey progress" style="height:24px;width:70%">
                                    70%
                                    </div>
                                </div>
                           
                            </li>

                            <li>
                                <strong>PHP</strong>
                                &nbsp;

                                <div class="outer">

                                    <div class="w3-grey progress" style="height:24px;width:60%">
                                    60%
                                    </div>
                                </div>
                           
                            </li>
                            </li>
                        </ul>
                        </div>

                        </p>



                        <p class="desc">
                        <h4 class="hSkills"> DevOps Tools </h4>

                        <div class="shift">
                        <ul>
                        <h5 class="subSkill"> Container Tools </h5>
                            <li>
                            
                                <strong>Docker</strong>
                                &nbsp;

                                <div class="outer">

                                    <div class="w3-grey progress" style="height:24px;width:70%">
                                    70%
                                    </div>
                                </div>
                           
                            </li>
                            <li>
                                <strong>Podman</strong>
                                &nbsp;

                                <div class="outer">

                                    <div class="w3-grey progress" style="height:24px;width:65%">
                                    65%
                                    </div>
                                </div>
                           
                            </li>
                        </ul>

                        <ul>
                        <h5 class="subSkill"> Container Management Tools (Orchestration) </h5>
                            
                            <li>
                                <strong>Kubernetes</strong>
                                &nbsp;

                                <div class="outer">

                                    <div class="w3-grey progress" style="height:24px;width:75%">
                                    75%
                                    </div>
                                </div>
                            </li>
                            <li>
                                <strong>Openshift</strong>
                                &nbsp;

                                <div class="outer">

                                    <div class="w3-grey progress" style="height:24px;width:45%">
                                    45%
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul>
                        <h5 class="subSkill"> Configuraion Tool </h5>
                            
                            <li>
                                <strong>Ansible</strong>
                                &nbsp;

                                <div class="outer">

                                    <div class="w3-grey progress" style="height:24px;width:70%">
                                    70%
                                    </div>
                                </div>
                           
                            </li>
                        </ul>

                        <ul>
                        <h5 class="subSkill"> Continuous Integration & Continuous Deployment Tools </h5>
                            <li>
                            
                                <strong>Jenkins</strong>
                                &nbsp;

                                <div class="outer">

                                    <div class="w3-grey progress" style="height:24px;width:60%">
                                    70%
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul>
                        <h5 class="subSkill"> Infrastructure As Code Tool </h5>
                            <li>
                                <strong>Terraform</strong>
                                &nbsp;
                                <div class="outer">
                                    <div class="w3-grey progress" style="height:24px;width:60%">
                                    60%
                                    </div>
                                </div>
                            </li>
                        </ul>
                        
                        <ul>
                        <h5 class="subSkill">Source Code Management Tool</h5>
                            <li>
                                <strong>Git & Github</strong>
                                &nbsp;
                                <div class="outer">
                                    <div class="w3-grey progress" style="height:24px;width:75%">
                                    75%
                                    </div>
                                </div>
                            </li>
                        </ul>
                        </div>
                        </p>

                        <p class="desc">
                        <h4 class="hSkills"> Cloud Computing </h5>
                        <div class="shift">
                        <ul>
                            <li>
                                <strong>Amazon Web Services</strong>
                                &nbsp;

                                <div class="outer">

                                    <div class="w3-grey progress" style="height:24px;width:55%">
                                    55%
                                    </div>
                                </div>
                            </li>
                        </ul>
                        </div>
                        </p>

                        <p class="desc">
                        <h4 class="hSkills"> Web Technology </h5>
                        <div class="shift">
                        <ul><h5 class="subSkill">Application Programming Interface (API)</h5>
                            <li>
                                <strong>NodeJS</strong>
                                &nbsp;
                                <div class="outer">
                                    <div class="w3-grey progress" style="height:24px;width:75%">
                                    75%
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul><h5 class="subSkill">Model View Controller (MVC)</h5>
                            <li>
                                <strong>NodeJS</strong>
                                &nbsp;
                                <div class="outer">
                                    <div class="w3-grey progress" style="height:24px;width:65%">
                                    65%
                                    </div>
                                </div>
                            </li>
                        
                            <li>
                                <strong>Laravel</strong>
                                &nbsp;
                                <div class="outer">
                                    <div class="w3-grey progress" style="height:24px;width:60%">
                                    60%
                                    </div>
                                </div>
                            </li>
                        
                        </div>
                        </p>

                        <p class="desc">
                        <h4 class="hSkills"> Mobile App Devlopment </h5>
                        <div class="shift">
                        <ul>
                            <li>
                                <strong>Flutter</strong>
                                &nbsp;

                                <div class="outer">

                                    <div class="w3-grey progress" style="height:24px;width:60%">
                                    60%
                                    </div>
                                </div>
                            </li>
                        </ul>
                        </div>
                        </p>

                        </div>`
    
                            
                        addContent(content3);
                        addInputTab();
                        updateChanges();
                        break;

                    case "contact":
                        let contact=`
                        <div class="shift">
                        <p class="desc">
                            <ul>
                                <li>
                                    <strong><i class="fa fa-envelope"></i>&nbsp;Mail ID</strong>
                                    <a href="mailto:shashwatsingh71@gmail.com">
                                    shashwatsingh71@gmail.com
                                    </a>
                                </li>

                                <li>
                                    <strong><i class="fa fa-linkedin"></i>&nbsp;Linkedin</strong>
                                    <a href="https://www.linkedin.com/in/shashwatsing/">
                                    linkedin/shashwatsingh
                                    </a>
                                </li>
                            </ul>
                        </p></div>`
                        addContent(contact)
                        addInputTab()
                        updateChanges()
                        break;

                    case "blogs":
                        let flagsWithBlog=`
                        <p class="desc shift">
                        usage : blog [--flags] <br>
                        --new For New Blogs <br>
                        --most-like For Most Like Blogs<br>
                        </p>
                        `;
                        addContent(flagsWithBlog)
                        addInputTab()
                        updateChanges()
                        break;
                    
                    case "blogs --new":
                        
                        let blogNew=`
                        <p class="desc shift" >

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
                        addContent(blogNew)
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
                        let content5=`<div class="desc shift">
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
                        </div>`
                        addContent(content5)
                        addInputTab()
                        updateChanges()
                        break;


                   default:
                        let content2=`<p class="desc shift" style="color:red">
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