//welcome to my JS runtime practice!

const nemo = ['nemo']
const marlin = ['marlin']
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gil', 'nigel']
const large = new Array(61).fill('nemo')
function findFish(array){
    // let t0 = performance.now()
    for(let i = 0; i <array.length; i++){
        if(array[i] === 'nemo'){
            console.log("Found NEMO!!!!")
        }
        else{
            console.log("Try again, not Nemo!")
        }
    }
    // let t1=performance.now()
    // console.log("Finding Nemo took" +(t1-t0))
}
findFish(nemo)
findFish(marlin)
findFish(everyone)
findFish(large)

//good code is both readable and scalable!
//measure the perf of the above func. JS has a handy way to do so with performance

//as the input grows, the amount of time that it takes to run will grow.
//every time we run the code we may get a different num
//speed of runtime depends on MANY things.->CPU
//Big O notation is how long it takes code to run regardless of computer differences.
//It is better to calc time with big O than the perf timer bc big O on q comp