import { Paper, TableContainer } from "@mui/material"
import { useResolvedPath } from "react-router-dom"

const UsersTable = props => {
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>

            </TableBody>
        </Table>
    </TableContainer>
}

export default UsersTable;