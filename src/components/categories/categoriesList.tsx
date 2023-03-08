import {FC} from "react";
import {CategoriesItem} from "@/pages/api/getCategories";
import styles from './categories.module.css';
import CategoriesListItem from "@/components/categories/categoriesListItem";

const CategoriesList: FC<{items: CategoriesItem[]}> = ({items}) => {
    return (
        <div className={styles.categoriesList}>
            {items.map((i) =>
                <CategoriesListItem key={i.id} item={i}/>
            )}
        </div>
    );
}

export default CategoriesList;