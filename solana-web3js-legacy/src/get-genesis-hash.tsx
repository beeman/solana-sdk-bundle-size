import { Connection } from '@solana/web3.js'
import { useQuery } from '@tanstack/react-query'
import { Button, Loader } from '@mantine/core'

export function GetGenesisHash({ endpoint }: { endpoint: string }) {
  const connection = new Connection(endpoint)

  const query = useQuery({
    queryKey: ['getGenesisHash', { endpoint }],
    queryFn: async () => await connection.getGenesisHash(),
  })

  return (
    <div>
      <Button onClick={() => query.refetch()}>Refresh</Button>
      {query.isLoading ? <Loader /> : <div>{query.data}</div>}
    </div>
  )
}
