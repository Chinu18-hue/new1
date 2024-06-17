const  form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        prebutton = form.querySelector(".prebutton"),
        allInput=form.querySelectorAll(".first input");
nextBtn.addEventListener("click",()=> {
    allInput.forEach(input=>{
        if(input.value !=""){
            form.classList.add('secActive');
        }
        else{
            form.classList.remove('secActive');
            
        }
    })
})
prebutton.addEventListener("click",() =>form.classList.remove('secActive'));