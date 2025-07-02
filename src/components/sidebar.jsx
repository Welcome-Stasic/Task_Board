import SideBarImg1 from '../assets/sidebar/Vector1.png'
import SideBarImg2 from '../assets/sidebar/Vector2.png'
import SideBarImg3 from '../assets/sidebar/Vector3.png'
import SideBarImg4 from '../assets/sidebar/Vector4.png'


function SideBar() {
    const itemNav = [
    {img: SideBarImg1, name: 'Dashboard'},
    {img: SideBarImg2, name: 'All Tasks'},
    {img: SideBarImg3, name: 'Completed Tasks'},
    {img: SideBarImg4, name: 'Add A Task'},
];
const result = [];
    return ( 
        <>
        <div className="sidebar">
            <nav>
                <ul>
                    {itemNav.map((item) => (
                        <li>
                            <a href="#"><img src={item.img}/>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>

        </div>
        </>
    )
}
export default SideBar
