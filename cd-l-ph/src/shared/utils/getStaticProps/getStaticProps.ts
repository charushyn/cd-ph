import getStaticData from "../staticData/getStaticData"

export async function getStaticProps(locale: string, reqData: string) {
    const data = await getStaticData(locale, reqData)
    return { props: { data } }
  }