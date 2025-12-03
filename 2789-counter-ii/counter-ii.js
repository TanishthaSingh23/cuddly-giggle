function createCounter(init){
    let val = init;
    const num = init;
    return{
        increment(){
            return(val+=1);
        },
        decrement(){
            return(val-=1);
        },
        reset(){
            val = num;
            return val;
        }

    }
}