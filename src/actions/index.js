const UpdatePlace = (place) =>{
    return {
        type:"UPDATE_PLACE",
        payload:place
    };
};

const UpdatePlaceData = (place) =>{
    return (dispatch)=>{
        fetch(
                `https://api.weatherapi.com/v1/current.json?key=67404348d1ac48ad8e4202155210310&q=${place}`
              )
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  dispatch({
                      type: "UPDATE_PLACE_DATA",
                      payload: data,
                  });
                });
    }
};

const toggleTheme = () => {
    return {
        type: "TOGGLE_THEME",
        
    }
}


export {UpdatePlace,UpdatePlaceData,toggleTheme};