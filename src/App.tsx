import { MouseEvent, useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { createBrowserRouter, RouterProvider, Link} from 'react-router-dom';
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';



function App() {
    const [counter, setCounter] = useState<number>(0);

    const addCounter = (e: MouseEvent) => {
        console.log(e);
    };

    return (
        <>
            <Button onClick={addCounter}>Кнопка</Button>
            <Button appearence="big" onClick={addCounter}>
                Кнопка
            </Button>
            <Input placeholder="Email"></Input>
            <div>
                <Link to="/">Меню</Link>
                <Link to="/cart">Корзина</Link>
            </div>

        </>
    );
}

export default App;
