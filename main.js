//Obteniendo los elementos del dom
const CARDRANK = document.getElementById('card__rank')
const CARDRANKED = document.getElementById('card__ranked')
const LISTRANKED = document.getElementsByClassName('cards__rank')
const BTN_SUBMIT = document.getElementById('submit')

//obteniendo elementos del HTMLCollection
let arr = [...LISTRANKED]


for (const obj of LISTRANKED) {
    obj.addEventListener('click', function () {
        let a = arr.map(ar =>{
            let verify = false;
            ar.classList.contains('cards__rank--true')?verify = true:false;
            return verify
        })        
        console.log(a)
        if ((!(obj.classList.contains('cards__rank--true'))) && a.every(a => a === false)){
                obj.classList.replace('cards__rank--false','cards__rank--true')
        }else{
            obj.classList.replace('cards__rank--true','cards__rank--false')
        }
    })
}

BTN_SUBMIT.addEventListener('click', function () {
    for (const ob of LISTRANKED) {
        // console.log(ob.classList.contains('cards__rank--false'))
        if (ob.classList.contains('cards__rank--true')) {
            CARDRANK.classList.toggle('cards--off');
            CARDRANKED.classList.toggle('cards--off');
        }
    }
})
