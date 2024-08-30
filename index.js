let HighestZIndex = 1

class Paper{

    paperHold = false;
    prevMouseX = 0;
    prevMouseY = 0;

    mouseX = 0;
    mouseY = 0;

    mouseVelocityX = 0;
    mouseVelocityY = 0;

    currentPaperX = 0;
    currentPaperY = 0;



    init(paper){
        

        paper.addEventListener('mousedown', (e)=>{
            this.paperHold = true;
            paper.style.zIndex = HighestZIndex;
            HighestZIndex = HighestZIndex + 1;

            if(e.button ===0){
                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;
                console.log(this.prevMouseX + "Hey")
                console.log(this.prevMouseY)
            }
        })
        document.addEventListener('mousemove', (e)=>{
            // console.log("1")
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            this.mouseVelocityX = this.mouseX - this.prevMouseX;
            this.mouseVelocityY = this.mouseY - this.prevMouseY;

            if(this.paperHold){
                console.log("hey")
                this.currentPaperX += this.mouseVelocityX;
                this.currentPaperY += this.mouseVelocityY;

                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;

                paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px)`
                
            }

        })

        window.addEventListener("mouseup", (e)=>{
            console.log("up")
            this.paperHold = false;
        })

    }
}


const papers = Array.from(document.querySelectorAll(".paper"))


papers.forEach(paper=>{
    const p = new Paper();
    p.init(paper)
})
