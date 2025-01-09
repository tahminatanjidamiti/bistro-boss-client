import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const desserts = menu.filter(item => item.category === 'dessert');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title="Our Menu"></Cover>
            {/* offered menu items */}
            <SectionTitle subHeading=" Don't Miss" heading="Today's Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts items */}
            <MenuCategory items={desserts} title="desserts" img={dessertImg}></MenuCategory>
            {/* pizza items */}
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
            {/* salad items */}
            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
            {/* soup items */}
            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;