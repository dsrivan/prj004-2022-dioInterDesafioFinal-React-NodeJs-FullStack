import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core/';
import { List, ListItem } from '@material-ui/core/';

import * as S from './Header_styled';

import Cart from '../components/Cart/index';

const Header = () => {
    return (
        <Grid container xs={12} item={true} style={{ padding: "20px 0px" }}>

            <div className='w-100 d-flex justify-content-between'>
                <div>
                    <List className='d-flex'>
                        <ListItem>
                            <S.Logo>eStore</S.Logo>
                        </ListItem>
                        <ListItem>
                            <Link
                                style={{ textDecoration: "none", color: "#111" }}
                                to="/">Home</Link>
                        </ListItem>
                    </List>
                </div>
                <div>
                    <List className='d-flex'>
                        <ListItem style={{
                            padding: "0",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <i className="fas fa-search"></i>
                        </ListItem>
                        <ListItem style={{
                            padding: "0",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <i className="fas fa-user"></i>
                        </ListItem>
                        <ListItem style={{
                            padding: "0",
                            marginRight: "15px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Cart />
                        </ListItem>
                    </List>
                </div>
            </div>

            {/* <List>
                <div style={{ display: "flex" }}>
                    <S.Logo>eStore</S.Logo>
                    <S.NavigationItem>
                        <Link to="/">
                            <S.NavigationItem>Home</S.NavigationItem>
                        </Link>
                    </S.NavigationItem>
                </div>
                <div>
                    <S.NavigationItem>
                        <i className="fas fa-search"></i>
                        <i className="fas fa-user"></i>
                        <Cart />
                    </S.NavigationItem>
                </div>
            </List> */}

        </Grid >
    )
}

export default Header;
