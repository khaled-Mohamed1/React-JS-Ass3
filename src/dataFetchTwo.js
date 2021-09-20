import React , {useState , useEffect} from 'react'
import axios from 'axios'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

const CardTitleName = () => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get('https://dummyapi.io/data/v1/user?limit=50',
            {
                'headers' : {'app-id': '613e64e2748b558d779ce190'}
            })
        .then(res => setData(res.data.data))
        .then(setIsLoading(false))
    }, [])

    return (
        <div style={{position:"relative"}}>
            {
            isLoading ? (<CircularProgress 
                sx={{
                    position:'absolute',
                    top:'50%',
                    left:'50%',
                    transform : 'translate(-50%,-50%)'
        }} />) :
             data.map(e=>(
                <Card 
                    key={e?.id} 
                    sx={{
                        minWidth:'150px',
                        p:"15px",
                        minHeight:"100px",
                        m:'15px',
                        display:"inline-block"
                        }} 
                >
                    <Typography sx={{fontWeight:"700"}} component="h2">{e?.title}.</Typography>
                    <Typography sx={{color:'#a42252'}} component="h3" gutterBottom>
                        {`${e?.firstName} ${e?.lastName}`}
                    </Typography>
                    <img src={e?.picture} alt="" width="150px" />
                </Card>
            ))}
        </div>
    )
}

export default CardTitleName