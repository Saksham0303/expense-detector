

import { Box, Card, CardContent, Typography, styled} from '@mui/material';

const Container = styled(Box)`
   display: flex;
   & > div {
    flex: 1;
    padding: 10px; 
   }
`

const Expensecard = ({ transactions }) => {

    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item > 0).reduce((acc, item) => (acc+=item), 0).toFixed(2);
    const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc+=item), 0)* -1).toFixed(2);



    return (
        <Container>
            <Card>
                <CardContent>
                     
                    <Typography>Income</Typography>
                    <button style={{ color:'green'}}>₹{income}</button>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography>Expense</Typography>
                    <button style={{ color:'red'}}>₹{expense}</button>
                </CardContent>
            </Card>
        </Container>
    );
}

export default Expensecard;
 