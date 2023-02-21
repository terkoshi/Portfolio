
var BG = document.getElementById('sequencer')
var links = document.getElementById('links')

links.style.display =  'none';
BG.style.display =  'none';

function play()
{
    var BG = document.getElementById('sequencer')
    var links = document.getElementById('links')
    var btn = document.getElementById('enter')

    BG.style.display = 'inline';
    links.style.display = 'inline';
    enter.remove();

        var audioBG = new Rythm()
        
        audioBG.setMusic('/assets/bg.mp3')
        audioBG.setGain(0.1);
    
        
        audioBG.start()
    
       
}