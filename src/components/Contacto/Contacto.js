import React, { Component } from 'react';

import MediaLinks from './../Ul/MediaLinks/MediaLinks';
import classes from './Contacto.module.css'

class Contacto extends Component{
    state={

    }


    render(){

        return ( 
            <div className={classes.Contacto}>
                <div className={classes.container}>
                <h1 className={classes.title}>Contacto</h1>

                    <div className={classes.info}>
                    <span>
                        Email:
                    </span>
                    <span>
                        marlacroze@yahoo.com
                    </span>
                    </div>
                    <div className={classes.info}>
                    <span>
                        Tel:
                    </span>
                    <span>
                        +54 911 5560 7284
                    </span>
                    </div>

                </div>
                <div className={classes.LinksContainer}>
                    <p>¡Buscanos en las redes!</p>
                    <MediaLinks />
                </div>
            </div>
         );
    }
        
    
}
 
export default Contacto;


