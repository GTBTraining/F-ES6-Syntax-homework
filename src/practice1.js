const parseData=(input)=>{
    const{data,column}=input
    const keys = column.map((c) => c.name);
    return data.map((values)=>obj(keys,values))
}

const obj=(keys,values)=>{
    const result = {};
  keys.forEach((key, i) => {
    result[key] = values[i];
  });
    return result;
}
export { parseData };
