import { createSolanaClient } from 'gill'
import { useQuery } from '@tanstack/react-query'
import { Button, Loader } from '@mantine/core'

export function GetGenesisHash({ endpoint }: { endpoint: string }) {
  const client = createSolanaClient({
    urlOrMoniker: endpoint,
  })

  const query = useQuery({
    queryKey: ['getGenesisHash', { endpoint }],
    queryFn: async () => await client.rpc.getGenesisHash().send(),
  })

  return (
    <div>
      <Button onClick={() => query.refetch()}>Refresh</Button>
      {query.isLoading ? <Loader /> : <div>{query.data}</div>}
    </div>
  )
}
