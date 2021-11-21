function setTime() {
    let num = 1
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(num++)
        }, 0.5)
    }
}