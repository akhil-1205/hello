let i = 30;

function print() {
    if (i < 0) 
        return -1;
    console.clear()
    let now =  new Date()
    console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
}

setInterval(print, 1 * 1000);