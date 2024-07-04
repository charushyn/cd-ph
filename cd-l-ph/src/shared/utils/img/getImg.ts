const reqUrl = 'https://backend.cdfinance.pl'

export default function getImg(fileName: string){
    return `${reqUrl}/img/${fileName}`
}