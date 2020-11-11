const inject=(item,section)=>{
    const result=[]
    for(let i=0;i<item.length;i++){
        const content=section.find(({index})=>index===i)
    if (content) {
        result.push(content.content)
    }
    result.push(item[i])
    }
    return result
}
export { inject };
