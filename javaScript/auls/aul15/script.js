async function wait(){
    const promise = new Promise(resolve => {
        setTimeout(() => resolve(console.log("Resolvido")), 3000)
    })

    await promise 
    
    console.log("Vapt vupt")
}
wait()