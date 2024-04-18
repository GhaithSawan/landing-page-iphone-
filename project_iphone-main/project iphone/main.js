let title = document.getElementById("title")
let info = document.getElementById("info")
let mainimg = document.getElementById("mainimg")


let phones = [
    {
        title: "iphone 14 pro",
        info: 'Llor sit amet consectetur, adipisicing elit. Animi, ullam!',
    }
    ,
    {
        title: "iphone 13 pro",
        info: 'Loresdfsdf  amet consfd e ctetur, adipisicing elit. Animi, ullam!',
    },
    {
        title: "iphone 12 pro",
        info: 'Lorem ipsusdfdft amet consectetur, adipisicing elit. Animi, ullam!',
    }
    ,
    {
        title: "iphone 11 pro",
        info: 'Losdfsd met fgdfgonse ctetg dfdgur, adipisicing elit. Animi, ullam!',
    }
]
 function watchdata(id,src,color){
   title.innerHTML=phones[id].title
   info.innerHTML=phones[id].info
   mainimg.src = src
    document.body.style.background=color

 }




