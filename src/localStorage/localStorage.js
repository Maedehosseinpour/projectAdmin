const setItem= (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))

}

const getItem = (key) => {
    if(localStorage.getItem(key)){

        return JSON.parse(localStorage.getItem(key))
    }
}

const removItem =(key)=>{
    localStorage.removeItem(key)
}

const clearStorage = () =>{
    localStorage.clear()
}

export {setItem, getItem , removItem , clearStorage}