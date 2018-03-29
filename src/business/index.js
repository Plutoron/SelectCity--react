export const setHistory = (city) => {
	let history = [];
    let selectHistory = localStorage.getItem('selectHistory'); 
    if(!!selectHistory){
        history = selectHistory.split(',');
    }
    const index = history.indexOf(city);
    if(history.length > 0 && index > -1) {
        history.splice(index, 1)
    }
    history.unshift(city);
    if(history.length > 3) history.pop();

    localStorage.setItem('selectHistory',history.toString());
  
    return history;
}

export const getCity = ({location}) => {
    const { state } = location;
    if(state === undefined) return undefined;
    return state.city
}

export const getHistory = ({location}) => {
    const { state } = location;
    if(state === undefined) return undefined;
    return state.selectHistory
}