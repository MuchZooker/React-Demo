

//定义初始状态
const defaultStateValue = {
        count : 0
}


//修改状态
const changeData = (action) =>{
    action=action || {type:''}
        switch (action.type) {
            case 'COUNT_INCREMENt':
                defaultStateValue.count++
                break;
            case 'COUNT_DECREMENT':
                defaultStateValue.count--
                    break;
            default:
                break;
        }

}


//渲染dom
const renderDom = ()=>{
   let countDom = document.querySelector('#count')
   countDom.innerHTML=defaultStateValue.count
}


const dispach = (action) =>{
        changeData(action)
        renderDom()
}

export{
    dispach
}