let todo=[];

let req=prompt("please enter your task");


while(true)
{
    if(req=="quit"){
        console.log("you quit");
        break;
    }
    
    if(req=="list"){
        for(let i=0;i<todo.length;i++)
        console.log(todo[i]);
    }else if(req=="add"){
        let task=prompt("please enter your detail of your task or choice");
        todo.push(task);
        console.log("task added");
        }
        else if(req=="delete"){
            let idx=prompt("enter the index of task you want to delete");
            todo.splice(idx,1);
            console.log("task delelted");
        }else{
            console.log("wrong request");
        }
         req=prompt("please enter your task");
    }
