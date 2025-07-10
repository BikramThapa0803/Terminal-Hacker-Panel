async function showdata1() {
    const show1 = document.querySelector(".hacking")
    // wait for 3 sec
    await new Promise(resolve => setTimeout(resolve, 1000));
    show1.style.display = "block"
    // wait for 1 sec
    await new Promise(resolve => setTimeout(resolve, 3000));
    show1.style.display = "none"
}


async function showdata2() {
    const show2 = document.querySelector(".reading")
    // wait for 3 sec
    await new Promise(resolve => setTimeout(resolve, 1000));
    show2.style.display = "block"
    // wait for 1 sec
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 3000);
    })
    show2.style.display = "none"
}


async function showdata3() {
    const show3 = document.querySelector(".detcted")
    // wait for 3 sec
    await new Promise(resolve => setTimeout(resolve, 1000));
    show3.style.display = "block"

    // wait for 1 sec
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 3000);
    })
    show3.style.display = "none"
}


async function showdata4() {
    const show4 = document.querySelector(".sending")
    // wait for 3 sec
    await new Promise(resolve => setTimeout(resolve, 1000));
    show4.style.display = "block"

    // wait for 1 sec
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 3000);
    })
    show4.style.display = "none"
}


async function showdata5() {
    const show5 = document.querySelector(".clean")
    // wait for 3 sec
    await new Promise(resolve => setTimeout(resolve, 1000));
    show5.style.display = "block"

    // wait for 1 sec
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 3000);
    })
    show5.style.display = "none"
}




async function wait() {
    let data1 = await showdata1()
    let data2 = await showdata2()
    let data3 = await showdata3()
    let data4 = await showdata4()
    let data5 = await showdata5()
}

wait()

