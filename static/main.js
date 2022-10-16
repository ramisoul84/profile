let lists=document.querySelectorAll(".list");
let contents=document.querySelectorAll('.content');
document.addEventListener('click',(e)=>{
    let current=e.target;
    if(current.classList.contains('list')){
        let n=parseInt(current.classList[1]);
        for(let i=0;i<lists.length;i++){
            lists[i].classList.remove('active');
        }
        current.classList.add('active');
    }           
})
text=['Home','About','Resume','Skills','Contact']
document.addEventListener('mouseover',(e)=>{
    let current=e.target;
    let txt=document.querySelector('.nav-bar p')
    if(current.classList.contains('list')){
        let n=parseInt(current.classList[1]);
        /*for(let i=0;i<contents.length;i++){
            contents[i].classList.remove('active');
        }
        contents[n].classList.add('active')*/
        console.log(n)
        txt.style.display="block";
        txt.innerText=text[n];
    }
    else{
        txt.style.display="none";
    }
})
function showHome(){
    let sections =document.querySelectorAll('.section');
    let section =document.querySelector('#home');
    for(let i=0;i<sections.length;i++){
        sections[i].style.display='none'}
    section.style.display='block';
}
function showAbout(){
    let sections =document.querySelectorAll('.section');
    let section =document.querySelector('#about');
    for(let i=0;i<sections.length;i++){
        sections[i].style.display='none'}
    section.style.display='block';
}
function showResume(){
    let sections =document.querySelectorAll('.section');
    let section =document.querySelector('#resume');
    for(let i=0;i<sections.length;i++){
        sections[i].style.display='none'}
    section.style.display='grid';
}
function showSkills(){
    let sections =document.querySelectorAll('.section');
    let section =document.querySelector('#skills');
    for(let i=0;i<sections.length;i++){
        sections[i].style.display='none'}
    section.style.display='block';
}
function showContact(){
    let sections =document.querySelectorAll('.section');
    let section =document.querySelector('#contact');
    for(let i=0;i<sections.length;i++){
        sections[i].style.display='none'}
    section.style.display='block';}

    var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };
    
        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];
    
            if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
    
            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
            var that = this;
            var delta = 200 - Math.random() * 100;
    
            if (this.isDeleting) { delta /= 2; }
    
            if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
            }
    
            setTimeout(function() {
            that.tick();
            }, delta);
        };
    
        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                  new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        };
    
    

