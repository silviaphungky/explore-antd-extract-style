import { Button, Flex, Typography } from 'antd'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState<Array<number>>([])

  useEffect(() => {
    Array.from(Array(100000).keys()).forEach((el) => {
      setData((prev) => [el, ...prev].slice(0, 19))
    })
  }, [])
  return (
    <>
      {data.map((item) => (
        <Flex key={item}>
          <Typography>{item}</Typography>
          <Typography>{item}</Typography>
          <Typography>{item}</Typography>
          <Typography>{item}</Typography>
          <Typography>{item}</Typography>
          <Typography>{item}</Typography>
          <Typography>{item}</Typography>
        </Flex>
      ))}
    </>
  )
}
