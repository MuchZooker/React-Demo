


const defalultValue ={
    list:[]
}


export default (state = defalultValue, action)=>{

    switch (action.type) {
        case 'loadDate':
            return state

        case 'addData':
            return {
                list:[
                    ...state.list,
                    action.task
                ]
            }
        default:
            return state
    }
}