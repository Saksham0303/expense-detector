import { useState } from 'react';

import { Box, Typography, TextField, Button, styled, Divider} from '@mui/material'

function FolderButton() {
    const folderUrl = "http://127.0.0.1:5501/";
  
    const handleButtonClick = () => {
      window.open(folderUrl, "_blank");
    };
  
    return (
      <button onClick={handleButtonClick}>
      </button>
    );
  }

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    & > h5, & > div, & > button {
        margin-top: 30px
    }
`

const NewTransactions = ({ setTransactions }) => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const addTransaction = () => {
        const transaction = {
            id: Math.floor(Math.random() * 1000000),
            text: text,
            amount: +amount
        }
        setTransactions(prevState => [transaction, ...prevState]);
    }

    return (
        <Container className='form'>
            <Typography variant="h5">New Transaction</Typography>
            <Divider/>
            <TextField label="Enter expense" onChange={(e) => setText(e.target.value)}/>
            
            <TextField label="Enter amount" onChange={(e) => setAmount(e.target.value)}/>
            <Button variant="contained" onClick={() => addTransaction()}>Add Transaction</Button>
            <Button variant="contained">
  <a href="http://127.0.0.1:5501/" target="_blank" rel="noopener noreferrer">
    Bill Splitting
  </a>
</Button>

            
         </Container>
    );
}

export default NewTransactions;