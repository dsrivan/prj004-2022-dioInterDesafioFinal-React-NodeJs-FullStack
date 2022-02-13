import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core/';

import * as S from './Header_styled';

import Cart from '../components/Cart/index';

const Header = () => {
    return (
        <Grid container xs={12} style={{ padding: "20px 0" }}>
            <S.Navigation>
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
                        <i class="fas fa-search"></i>
                        <i class="fas fa-user"></i>
                        <Cart />
                    </S.NavigationItem>
                </div>
            </S.Navigation>
        </Grid >
    )
}

export default Header;
