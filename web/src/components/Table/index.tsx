
import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import IQuery from "../../types/IQuery";

const StylizedCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    color: "var(--dark-blue)",
    fontSize: 18,
    fontWeight: 700,
    fontFamily: "var(--main-font)"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontFamily: "var(--main-font)"
  }
}));

const StylizedLine = styled(TableRow)(() => ({
  [`&:nth-of-type(odd)`]: {
    backgroundColor: "var(--light-gray)",
    align: "right"
  }
}));

function Tablle({ consultas }: { consultas: IQuery[] | null }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="custom-table">
          <TableHead>
            <TableRow>
              <StylizedCell>Data</StylizedCell>
              <StylizedCell>Horário</StylizedCell>
              <StylizedCell>Profissional</StylizedCell>
              <StylizedCell>Especialidade</StylizedCell>
              <StylizedCell>Paciente</StylizedCell>
              <StylizedCell>Modalidade</StylizedCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {consultas?.map((line) => {
              return (
                <StylizedLine>
                  <StylizedCell component="th" scope="row">{new Date(line.data).toLocaleDateString()}</StylizedCell>
                  <StylizedCell>{line.horario}</StylizedCell>
                  <StylizedCell>{line.nome}</StylizedCell>
                  <StylizedCell>{line.profissional[0].nome}</StylizedCell>
                  <StylizedCell>{line.profissional[0].especialidade}</StylizedCell>
                  <StylizedCell>{line.paciente}</StylizedCell>
                  <StylizedCell>{line.modalidade}</StylizedCell>
                </StylizedLine>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Tablle;