// whenever we update the localStorage or sessionStorage, an storage event is triggered
// localStorage is updated automatically across all tabs using this event



// 1 How to listen the storage event

// runs in all other tabs when storage is changed in one tab 

window.onstorage = (e)=>{
    alert('changed')
    console.log(e)
}