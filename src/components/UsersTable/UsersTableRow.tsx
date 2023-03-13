import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { User } from '../../__generated__/graphql'

type TProps = {
  data: User
}

export const UsersTableRow = ({ data }: TProps) => (
  <TableRow>
    <TableCell component='th' scope='row'>
      {data.name}
    </TableCell>
    <TableCell align='right'>{data.state?.score}</TableCell>
  </TableRow>
)
