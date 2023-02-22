import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import DescriptionIcon from '@mui/icons-material/Description';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { LineWeight } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RalewayWoff2 from './fonts/DancingScript-VariableFont_wght.ttf';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InventoryIcon from '@mui/icons-material/Inventory';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TablePagination from '@mui/material/TablePagination';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const drawerWidth = 240;
const MensagenCadastradoSucesso = () => {
  toast.success('Pedido cadastrado com sucesso', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

}



function PaginaPedido() {
  

  const [Pedidos, setpedidos] = useState([]);
  /* linhas maxima na coluna  */
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  /*  numero de pagina*/
  const [page, setPage] = React.useState(0);
  /* pegando numero de pagina */
  const handleChangePage = (event, newPage) => {


    setPage(newPage);
  };
  /* zerano numero de pagina */
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));

    setPage(0);
  };


  useEffect(() => {
    setTimeout(() => {
      getPedidos();

      
    }, 500)
   ;

  }, []);
  const gerarPdfPedido =  async (id)  => {

    console.log(id,"id do pedido")
   
    let result = await fetch(`http://localhost:8080/api/pdf/pedido/${id}` );
    

     if(result.status === 200){
      console.log("oi 1")
      window.open(`http://localhost:8080/api/pdf/pedido/${id}` , '_blank');
      console.log("oi 2")
     }
    };


  /* fazendo uma requisição get  */
  const getPedidos = async () => {
    let resut = await fetch(`http://localhost:8080/api/pedido`);
    /* pegando json da requisição get */
    resut = await resut.json();
    console.log('2',resut)
    

    /* colocando json em uma variavel pedidos */
    setpedidos(resut);
    

  };


   

  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  /* personalização da fonte */
  const theme = createTheme({
    typography: {
      fontFamily: 'Cookie , cursive',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: Cookie;
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Raleway'), local('Raleway-Regular'), url(${RalewayWoff2}) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
  });

  const container = window !== undefined ? () => window().document.body : undefined;




  return (

    <Box sx={{ display: 'flex', backgroundColor: '#FFB5A4', }}>

      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: '#0D0D0D' }}>
        <Toolbar>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Typography
              variant="h6"
              component="div"

              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#F2CF1D', fontFamily: 'Cookie' }}
            >
              Rosi Carvalho Moda
            </Typography>
          </ThemeProvider>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button variant="text" size="small" style={{ color: '#F2CF1D' }} endIcon={<ListAltIcon />}>
              Pedidos
            </Button>
            <Button variant="text" size="small" style={{ color: '#F2CF1D' }} endIcon={<InventoryIcon />}>
              Estoques
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3, backgroundColor: '#FFB5A4', width: "100%", height: "100%" }}>
        <Toolbar />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 3000 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Nome do Cliente</StyledTableCell>
                <StyledTableCell align="center">Código do pedido</StyledTableCell>
                <StyledTableCell align="center">Telefone</StyledTableCell>
                <StyledTableCell align="center">Endereço</StyledTableCell>
                <StyledTableCell align="center">Numero</StyledTableCell>
                <StyledTableCell align="center">Endereço</StyledTableCell>
                <StyledTableCell align="center">Complemento</StyledTableCell>
                <StyledTableCell align="center">Bairro</StyledTableCell>
                <StyledTableCell align="center">Cidade</StyledTableCell>
                <StyledTableCell align="center">cep</StyledTableCell>
                <StyledTableCell align="center">Estado</StyledTableCell>
                <StyledTableCell align="center">Nome do Produto</StyledTableCell>
                <StyledTableCell align="center">Preço do Produto</StyledTableCell>
                <StyledTableCell align="center">Estatus do pedido</StyledTableCell>
                <StyledTableCell align="center">Quantidade  de Produto</StyledTableCell>
                <StyledTableCell align="center">Alterar</StyledTableCell>
                <StyledTableCell align="center">Deletar</StyledTableCell>
                <StyledTableCell align="center">Gerar PDF</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Pedidos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({id,nomeCompleto , product,codPedido,telefone,endereco,numero
              ,complemento,bairro,cidade,cep,estado,cpf,quantidadeDeProduct,status
            }) => (
                <StyledTableRow key={id}>
                  <StyledTableCell align="center">{nomeCompleto}</StyledTableCell>
                  <StyledTableCell align="center">{codPedido}</StyledTableCell>
                  <StyledTableCell align="center">{telefone}</StyledTableCell>
                  <StyledTableCell align="center">{endereco}</StyledTableCell>
                  <StyledTableCell align="center">{numero}</StyledTableCell>
                  <StyledTableCell align="center">{complemento}</StyledTableCell>
                  <StyledTableCell align="center">{bairro}</StyledTableCell>
                  <StyledTableCell align="center">{cidade}</StyledTableCell>
                  <StyledTableCell align="center">{cep}</StyledTableCell>
                  <StyledTableCell align="center">{estado}</StyledTableCell>
                  <StyledTableCell align="center">{cpf}</StyledTableCell>
                  <StyledTableCell align="center">{product.name}</StyledTableCell>
                  <StyledTableCell align="center">{product.precoDoProduct}</StyledTableCell>
                  <StyledTableCell align="center">{status}</StyledTableCell>
                  <StyledTableCell align="center">{quantidadeDeProduct}</StyledTableCell>
                  <StyledTableCell align="center"><Button variant="text" size="small" style={{ color: '#F2CF1D' }} endIcon={<BorderColorIcon />}>
                    Alterar
                  </Button></StyledTableCell>
                  <StyledTableCell align="center"><Button variant="text" size="small" style={{ color: '#F2CF1D' }} endIcon={<DeleteForeverIcon />}>
                    Deletar
                  </Button></StyledTableCell>
                  <StyledTableCell align="center"><Button variant="text" size="small" onClick={() => gerarPdfPedido(id)} style={{ color: '#F2CF1D' }} endIcon={<DescriptionIcon />}>
                    Gerar PDF
                  </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[3, 5, 10, 20]}
          component="div"
          count={Pedidos.length}
          rowsPerPage={rowsPerPage}
          page={page}
          labelRowsPerPage="Linhas por páginas"
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

      </Box>
    </Box>

  );
}




export default PaginaPedido;