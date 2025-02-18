import { useQuery } from '@tanstack/react-query'
import { Button, Loader } from '@mantine/core'
import { connect } from '@helius-dev/kite'

export function GetGenesisHash({ endpoint }: { endpoint: string }) {
  const connection = connect(endpoint)

  const query = useQuery({
    queryKey: ['getGenesisHash', { endpoint }],
    queryFn: async () => await connection.rpc.getGenesisHash().send(),
  })

  return (
    <div>
      <Button onClick={() => query.refetch()}>Refresh</Button>
      {query.isLoading ? <Loader /> : <div>{query.data}</div>}
    </div>
  )
}
