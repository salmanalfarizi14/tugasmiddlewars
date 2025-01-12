const dataStudent =['Adi','Fahmi','Tedi','Doni']

const getUser = ()=>{
    return dataStudent
}

getUseByIndex = (index)=>{
    if(index < dataStudent.length){
        return dataStudent[index -1]
    }
    return "Student Not Found"
}

module.exports = {getUser, getUseByIndex}