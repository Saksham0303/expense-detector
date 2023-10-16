import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import { Typography, styled, Box,} from '@mui/material';

//components
import Balance from './components/Balance';
import Expensecard from './components/ExpenseCard';
import backgroundImage from './photo/back.jpg';
import NewTransactions from './components/NewTransactions';
import Transactions from './components/Transactions';


const stylee={
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

const Header = styled(Typography)`
<button> Expense Tracker </button>

button {
  box-shadow:0 0 5px cyan,
  0 0 25px cyan;
}
button:hover {
  box-shadow: 0 0 5px cyan,
  0 0 25px cyan, 0 0 50px cyan,
  0 0 100px cyan, 0 0 200px cyan;
}
display:flex;
padding: 20px;
justify-content: center;
align-items: center;
  font-size: 36px; 
  color: red;
  text-transform: uppercase;
`

const Component = styled(Box)`
   display: flex;
    background: linear-gradient(135deg, rgba(255, 255,255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    
    box-shadow: 0 8px 32px 0 rgba(0, 0 , 0, 0.3);
   width: 800px;
   padding: 10px;
   border-radius: 20px;
  margin: auto;
   & > div {
     
     width: 50%;
     padding: 10px;

     
   }
   @media only screen and (max-width : 880px ){
      display : flex ;
      flex-direction : column ;
      justify-content : center ;
      align-items : center ;
      width : 80%
      height  : 80%;
   }
`

function App() {

  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Momos', amount: -50 },
    { id: 2, text: 'Salary', amount: 3000 },
    { id: 3, text: 'Book', amount: -100 },
    { id: 4, text: 'Bonus', amount: 1500 },
    { id: 5, text: 'Dominos', amount: -200 },
    { id: 1, text: 'Dadiji', amount:  500},
  ]);

 

  return (
    <div class ="opacity-50" >
      <Header>EXPENSE Tracker</Header>
    <Box className="App">
     <Component>
      <Box>
        <Balance transactions={transactions} />
        <Expensecard transactions={transactions} />
        <NewTransactions setTransactions={setTransactions} />
      </Box>
      <Box>
        <Transactions transactions={transactions} setTransactions={setTransactions} />
      </Box>
      </Component>
    </Box>
    </div>
  );
}

export default App;
