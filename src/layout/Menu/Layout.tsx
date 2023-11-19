import {  Outlet, useLocation, NavLink } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import { useEffect } from 'react';
import cn from 'classnames';

export function Layout() {
    const location = useLocation();
    useEffect(() => {
        console.log(location);
    }, [location])

    return (
        <>
            <div className={styles['layout']}>
                <div className={styles['sidebar']}>
                    <div className={styles['user']}>
                        <img className={styles['avatar']}src="/avatar.png" alt="Аватар" />
                        <div className={styles['name']}>Павел Лапшов</div>
                        <div className={styles['email']}>
                            pashalap2003@gmail.com
                        </div>
                    </div>
                    <div className={styles['menu']}>
                        <NavLink to="/" className={({ isActive}) => cn(styles['link'], {
                            [styles.active]: isActive
                        })}>
                            <img src="/menu-icon.svg" alt="Иконка меню" />
                            Меню
                        </NavLink>
                        <NavLink to="/cart" className={({ isActive}) => cn(styles['link'], {
                            [styles.active]: isActive
                        })}>
                            <img src="/cart-icon.svg" alt="Иконка корзины" />
                            Корзина
                        </NavLink>
                    </div>
                    <Button className={styles['exit']}>
                        <img src="/exit-icon.svg" alt="Иконка выхода" />
                        Выход
                    </Button>
                </div>
                <div className={styles['content']}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}
