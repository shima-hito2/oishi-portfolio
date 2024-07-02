import { Box, Container } from '@mui/material'
import { Header } from '../../components/Header'
import { Link } from 'react-router-dom'

export const Top = () => {
    return (
        <>
            <Header title='ほげほげ' />
            <Container maxWidth="xl">
                <Box sx={{ mt: 4 }}>一般の内容</Box>
                <Link to='/admin'>管理画面へ</Link>
            </Container>
        </>
    )
}
