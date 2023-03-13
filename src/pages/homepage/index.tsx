import Head from 'next/head'
import Navbar from "@/components/navigation/navbar";
import {useEffect, useState} from "react";
import {CategoriesItem} from "@/pages/api/getCategories";
import CategoriesListItem from "@/components/categories/categoriesListItem";
import CategoriesList from "@/components/categories/categoriesList";

export default function Catagories() {
    const [categories, setCategories] = useState<Array<CategoriesItem>>([]);
    const [signedIn, setSignedIn] = useState<boolean>(false);


    useEffect(() => {
        const token = window.localStorage.getItem("token") as string;

        setSignedIn(token !== null)
        if (token) {
            fetch('/api/getCategories', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    auth: token
                }
            }).then(async (res) => {
                const categoriesArray = (await res.json()).data
                setCategories(categoriesArray as Array<CategoriesItem>)
            })
        }
    },[])


    return (
        <>
            <Head>
                <title>Spotify Song Finder</title>
                <meta name="description" content="Find your Spotify Songs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <>
                    <Navbar/>
                    {signedIn ?  <CategoriesList items={categories}  /> : <h3 style={{textAlign: 'center'}}>Please Log In</h3>}
                    
                </>


          
            </main>
        </>
    )
}