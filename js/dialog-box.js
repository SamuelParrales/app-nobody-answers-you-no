const $no = document.querySelector(".no");
const $yes = document.querySelector(".yes");
const $question = document.getElementById('question');
const searchParams =  new URLSearchParams(location.search);
$question.textContent = searchParams.get('question')
$no.addEventListener("mousemove",function()
{
    //Rangos por donde puede moverse
    let maxHeight = document.body.offsetHeight;
    let minHeight = 100;
    console.log(maxHeight)
    let maxWidth = document.body.offsetWidth;
    let minWidth = 100;
    moveRandom(minWidth,maxWidth,minHeight,maxHeight,$no);

    
});

$yes.addEventListener("click",function()
{
    alert(searchParams.get('answer'));
})



function moveRandom(minX,maxX,minY,maxY,$element)
{

    //Dimensions
    const altura = $element.offsetHeight;
    const anchura = $element.offsetWidth;
    // //positions
    let posX = $element.offsetLeft;
    let posY = $element.offsetTop;
    let desX = MoveAxisRandom(minX,maxX,posX,anchura);
    let desY = MoveAxisRandom(minY,maxY,posY,altura);

    (isNaN(+$no.style.left))
        ?desX += parseInt($no.style.left)
        :desX += 0;
    
        
        $no.style.left =`${desX}px`;
    (isNaN(+$no.style.top))
        ?desY += parseInt($no.style.top)
        :desY +=0;

    $no.style.top = `${desY}px`; 
};



function MoveAxisRandom(rangoMin,rangoMax,pos,minMove)
{
    let desMax;
    let des;
    let newPos;

    desMax = Math.min(rangoMax-pos,pos-rangoMin) //Maximo desplazamiento que se puede realizar
    des = Math.round((Math.random() * 2 -1)*(desMax-minMove*2)); //Desplazamiento aleatorio
    des+=minMove*2;

    rangoMin+=minMove;
    rangoMax-=minMove;
    newPos = pos+des; //Nueva posicion con el desplazamiento

    if(newPos>rangoMin&&newPos<rangoMax) //Si el nuevo desplazamiento se encuentra en el rango
        return des;
    
        return -des;
};