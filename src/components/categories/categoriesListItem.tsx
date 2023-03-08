import {FC} from "react";
import {CategoriesItem} from "@/pages/api/getCategories";
import styles from './categories.module.css'


const CategoriesListItem: FC<{item: CategoriesItem}> = ({item}) => {
    return (
        <div className={styles.categoriesListItemContainer}>
            <img src={item.icons[0].url} alt={item.name} className={styles.categoriesListItemImage}/>
            <h3 className={styles.categoriesListItemTitle}>{item.name}</h3>
        </div>
    );
}

export default CategoriesListItem;
