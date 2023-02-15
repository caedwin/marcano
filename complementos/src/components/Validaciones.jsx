export const esLetras = (value)=> {

    return !/[A-Za-z\s\,]/.test(value);

};

export const esEmail=(value)=> {
    return  !/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}

export const esPassword=(value)=> {
   return !/^[A-Za-z0-9_-]{8,16}$/.test(value);
   //return !/^[0-9a-zA-Z]+${6,18}$/.test(value);
}