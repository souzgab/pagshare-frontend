import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        fontSize: '15px'
    },
});

export default function ImgMediaCard(props) {
    const classes = useStyles();

    return (

        <Card className={classes.root}>
            <CardMedia
                component="img"
                height="300"
                image={props.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={{fontSize: '30px'}}>
                    {props.titulo}
              </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: '15px'}}>
                    {props.children}
          </Typography>
            </CardContent>
            <Button size="small" color="primary"style={{fontSize: '15px', margin: '10px'}} onClick={() => window.location.replace(`https://github.com/${props.link}`)}>
                GitHub
            </Button>
            
        </Card>
    );
}