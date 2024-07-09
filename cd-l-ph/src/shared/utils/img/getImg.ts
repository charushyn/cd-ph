import reqUrl from "../urls/reqUrlBack"

export default function getImg(fileName: string){
    return `${reqUrl}/img/${fileName}`
}