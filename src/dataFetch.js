import React,{useState, useEffect} from "react";
import axios from "axios";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});




function DataFetching(){

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    })

    const classes = useStyles();

    return(
        <div>            
            {
                posts.map(post => (
                    <Card className={classes.root} key={post.id}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                            {post.title}
                            </Typography>
                            <Typography variant="body2" component="p">
                            {post.body}
                            <br />
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            }


        </div>
    )
}

export default DataFetching;