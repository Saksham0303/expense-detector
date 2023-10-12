

import { Box, Card, CardContent, Typography, styled } from '@mui/material';

const Container = styled(Box)`
   display: flex;
   & > div {
    flex: 1;
   }
`
const Expensecard = () => {
    return (
        <Container>
            <Card>
                <CardContent>
                    <Typography>Income</Typography>
                    <Typography style={{ color:'green'}}>25</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography>Expense</Typography>
                    <Typography style={{color:'red'}}>15</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Expensecard;
 