import { useQuery } from '@apollo/client'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'

import { UsersTableRow } from './UsersTableRow'
import { GET_USERS } from '../../graphql/queries/getUsersQuery'
import { GetUsersQuery, GetUsersQueryVariables, Order } from '../../__generated__/graphql'

export const UsersTable = () => {
  const { data, error } = useQuery<GetUsersQuery, GetUsersQueryVariables>(GET_USERS, {
    variables: {
      limit: 10,
      order: Order.Desc,
      sortBy: 'score',
    },
  })
  if (error) {
    return <Alert severity='error'>Error while getting data</Alert>
  }
  return (
    <Container maxWidth='xl'>
      <Box sx={{ my: 4 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='right'>Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.users?.map((user) => (
                <UsersTableRow key={`row-${user.id}`} data={user} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  )
}
