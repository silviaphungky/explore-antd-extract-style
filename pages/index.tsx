import { Button, Flex, Typography } from 'antd'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState<Array<number>>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        return [(prev[0] || 0) + 1, ...prev].slice(0, 19)
      })
    }, 5)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {data.map((item) => (
        <Flex key={item}>
          <Typography>{item}</Typography>
        </Flex>
      ))}
    </>
  )
}
