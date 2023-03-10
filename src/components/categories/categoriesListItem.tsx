import {FC} from "react";
import {CategoriesItem} from "@/pages/api/getCategories";
import styles from './categories.module.css'
import Link from "next/link";


const CategoriesListItem: FC<{item: CategoriesItem}> = ({item}) => {
    return (
        <Link href={`/categories/${item.id}`}>
            <div className={styles.categoriesListItemContainer}>
                <img src={item.icons[0].url} alt={item.name} className={styles.categoriesListItemImage}/>
                <h3 className={styles.categoriesListItemTitle}>{item.name}</h3>
            </div>
        </Link>
    );
}

export default CategoriesListItem;
