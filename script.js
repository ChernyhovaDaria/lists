let username = prompt ("Ваше имя:")
let count = 0


if (username){
    document.getElementById('title').innerHTML = "Привет," + " " + username + "!"
} else {
    document.getElementById('title').innerHTML = "Привет, аноним!"
}

function lists () {

    count ++
   
    if(count >5){ 
        document.getElementById('error').innerHTML = "Невозможно ввести больше "
            + "5" + " задач."
        return
    } 
    
    let input = document.getElementById('input')
    let myValue = input.value
    let lists = document.getElementById('list')
    lists.innerHTML ="<ul><li>" + myValue + "</li></ul>"
    
    console.log(myValue)
    input.value = ""
   

}
