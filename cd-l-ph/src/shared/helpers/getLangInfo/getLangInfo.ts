const getLangInfo = (arrayOfLanguages: any[], currentIDLanguage: string) => {
    arrayOfLanguages.map((item) => {
        if(item.id === currentIDLanguage){
            return{
                item
            }
        }
    })
}

export {getLangInfo};