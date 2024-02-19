function generateNumber() {
    const min = document.querySelector(".input-min").value
    const max = document.querySelector(".input-max").value

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result)

}        
