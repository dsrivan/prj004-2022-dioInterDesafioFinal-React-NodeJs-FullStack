import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core/';

import * as S from './Header_styled';
import Cart from '../components/Cart/index';

const Header = () => {
    return (
        <Grid container xs={12}>
            <S.Navigation>
                <div>
                    <S.Logo>eStore</S.Logo>
                </div>
                <div>
                    <S.NavigationItem>
                        <Link to="/">
                            <S.NavigationItem>Home</S.NavigationItem>
                        </Link>
                    </S.NavigationItem>
                    <S.NavigationItem>
                        <Cart />
                    </S.NavigationItem>
                </div>
            </S.Navigation>
        </Grid>
    )
}

export default Header;
