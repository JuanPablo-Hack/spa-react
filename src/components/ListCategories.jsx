import { useEffect, useState } from "react";
import "../assets/css/blog.css"
import { buscar } from "../api/api";
import { Link } from "react-router-dom";

const ListCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        buscar(`/categorias`, setCategories)
    }, [])

    return (
        <ul className="category-list container flex">
            {
                categories.map(category => (
                    <Link to={`/categoria/${category.id}`} key={category.id}>
                        <li className={`category-list__category category-list__category--${category.id}`}>
                            {category.nombre}
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}

export default ListCategories;