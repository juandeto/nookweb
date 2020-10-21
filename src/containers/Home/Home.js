import React, { Component } from 'react';

import classes from './Home.module.css';
import Logo from './../../components/Ul/Logo/Logo';
import NavigationItemsDesktop from './../../components/Navigation/NavigationItemsDesktop/NavigationItemDesktop';

class Home extends Component {
    state={
        showSubMenu: false
    }

    showSubMenuHandler=()=>{
        this.setState({showSubMenu: !this.state.showSubMenu})
    }
   
    render() { 

        let classesMenu=[classes.submenu]

        if(this.state.showMenu){
            classesMenu.push(classes.subMenuOpen)
        }

        return ( 
            <div className={classes.Home}>
            <nav className={classes.DesktopOnly}>
               <NavigationItemsDesktop showSubMenu={this.state.showSubMenu} showSubmenuHandler={this.showSubMenuHandler}/>
            </nav>
                <div className={classes.container}>
                    <Logo />
                    <h3>Respaldos a tu medida</h3>
                </div>
            </div>
         );
    }
}
 
export default Home;