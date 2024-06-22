(function(){alert("hello everyone")})();

const fetchData=()=>{
    return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>res.json())
    .then((data)=>data.slice(0,10));
};

const getData=async()=>{
    const data=await fetchData();
    console.log('Data:',data)
    if(data !==undefined){
        const mainbox=document.querySelector('.mainbox');
        const timer=setInterval(()=>{
            data.map((obj,index)=>{
                const div=document.createElement('div');
                div.className='box';
                const h3= document.createElement('h3');
                h3.innerHTML= `${obj.id}. ${obj.title}`;
                div.appendChild(h3);
                mainbox.appendChild(div)
            });
            setTimeout(()=>{
                clearInterval(timer);
            },5000)
        },3000)
    }

}

getData();