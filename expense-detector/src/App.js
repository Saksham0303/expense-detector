import logo from './logo.svg';
import './App.css';

import { Typography, styled, Box} from '@mui/material';

//components
import Balance from './components/Balance';
import Expensecard from './components/ExpenseCard';
import backgroundImage from './photo/back.jpg';

const divstyle={
      background:'linear-gradient(to bottom, #ff9966,#ff5e62)'
    };
const stylee={
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const Header = styled(Typography)`
  margin: 10px 0;
  font-size: 36px; 
  color: red;
  text-transform: uppercase;
`

function App() {
  return (
    <div style={divstyle}>
    <Box className="App">
     <Header>Expense Detector</Header>
     <Box>
      <Box>
        <Balance />
        <Expensecard /> 
      </Box>
      <Box></Box>
     </Box>
    </Box>
    </div>
  );
}

export default App;
