import React from 'react'

const useHeightComponent = (ref: any) => {
  const [height, setHeight] = React.useState(0)

  React.useEffect(() => {
        if(ref.current === null){
            return
        }
        setHeight(ref.current.clientHeight)
  }, [ref.current])

  return height;
}

export default useHeightComponent