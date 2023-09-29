
    let todos = [];


    function handleToDoFormSubmit(){

       console.log("Form is Submitted");

       const txttodo = document.getElementById("TxtToDo");

       console.log(txttodo);

       const txttodovalue = txttodo.value;
       txttodo.value="";

       console.log(txttodovalue);
       createtodolistiteam(txttodovalue);

    }

    function createtodolistiteam(text){

        todos.push(text);

       
        const liopening="<li id=listitem"+todos.length+">";
        const label="<label id=todo"+todos.length+" style='width:80%'>" +text+"</label>";
        const editbutton="<button id=editbtn"+todos.length+" onclick='handleeditclick(event)' class='btn btn-primary'>Edit</button>&nbsp;&nbsp;&nbsp;"; 
        const deletebutton="<button id=dbtn"+todos.length+" onclick='delettodo(event)' class='btn btn-danger'>Delete</button>";
        const liclosing="</li>";
        const li = liopening+label+editbutton+deletebutton+liclosing;

        const ul=document.getElementById("todolist");

        ul.innerHTML=ul.innerHTML+li 

    }

    function handleeditclick(event){

        console.log(event.target.id);

        const button= document.getElementById(event.target.id);

        if (document.getElementById("textboxtodoupdate")){
            updatetodo(event);
            button.innerText="Edit"
            return;

        }

        
        const labelid= event.target.id.toString().replace("editbtn","todo");    
        const label = document.getElementById(labelid);
        button.innerText="save";


        

        const textbox = "<input value='"+label.innerText+"' class='form-control' type='text' id='textboxtodoupdate'/>";
        label.style.display="none";
        const liid=event.target.id.replace("editbtn","listitem");
        const li=document.getElementById(liid);
        
        li.innerHTML=textbox+li.innerHTML;


    }


    function updatetodo(event){ 

        const textb = document.getElementById("textboxtodoupdate");

        const label=document.createElement("label");

        label.innerHTML=textb.value;
        label.id="todo"+event.target.id.replace("editbtn","");
        label.style.width="80%";

        const liid=event.target.id.replace("editbtn","listitem");
        const li = document.getElementById(liid);
        li.replaceChild(label,textb);
        
    }

    function delettodo(event){

        const button = document.getElementById(event.target.id);

        const li = button.parentElement;

        document.getElementById("todolist").removeChild(li);


    }
