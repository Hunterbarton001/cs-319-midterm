import Head from 'next/head'
import Navbar from "@/components/navigation/navbar";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {TrackItem} from "@/pages/api/getCategoryItems";
import Track from "@/components/tracks/trackItem";

export default function Search() {
    const router = useRouter();
    const searchQuery =  router.query.query as string;
    const [tracks, setTracks] = useState<Array<TrackItem>>([]);

    useEffect(() => {
        const token = window.localStorage.getItem("token") as string;

        if (token) {
            fetch('/api/searchTracks', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    auth: token,
                    search: searchQuery
                }
            }).then(async (response) => {
                setTracks((await response.json()).data)
            })
        }
    }, [searchQuery]);

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
                    {tracks.map((track) => <Track track={track} key={track.id}/>)}
                </>
            </main>
        </>
    )
}