document.addEventListener('DOMContentLoaded', () =>{
    canvas = document.getElementById('c')
    if (!canvas.getContext){throw new Error('Brak f. "getContext"!')}
    c = canvas.getContext('2d')
    //content.fillRect(x,y,w,h)
    c.fillRect(50,50,100,100)
    c.strokeRect(50,250,100,100)
    c.clearRect(70,70,60,60)

    // c.lineTo(x,y)
    // c.moveTo(x,y)
    c.beginPath()
    c.moveTo(250, 250)
    c.lineTo(300,350)
    c.lineTo(250,350)
    c.strokeStyle = '#f00'
    c.lineWidth = 5
    c.stroke()
    c.fillStyle = '#00f'
    c.fill()
    c.closePath()

    c.beginPath()
    c.moveTo(100,260)
    c.lineTo(140,340)
    c.lineTo(60,340)
    c.lineWidth = 1
    c.closePath()
    c.stroke()

    c.beginPath()
    // c.arc(250,50,20,0,Math.PI*2)
    c.moveTo(250, 100)
    c.arc(250,100,25,0,Math.PI*0,5)
    c.fill()
    c.moveTo(320, 100)
    c.arc(320,100,25,0,Math.PI*1)
    c.fill()
    c.moveTo(390, 100)
    c.arc(390,100,25,0,Math.PI*1,5)
    c.fill()
    c.moveTo(460, 100)
    c.arc(460,100,25,0,Math.PI*2)
    c.fill()
    c.stroke()
    c.closePath()

    c.font = "30px Arial"
    c.fillText('Fill Text', 400, 250)
    c.strokeText('Strocke Text', 400, 350)
})
