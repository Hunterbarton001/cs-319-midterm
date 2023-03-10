import {NextApiRequest, NextApiResponse} from "next";

export interface TrackItem {
    album: {
        name: string,
        images: {
            height: number,
            width: number,
            url: string
        }[]
    },
    artists: {
        href: string,
        name: string,
    }[],
    duration_ms: number,
    href: string,
    preview_url: string,
    name: string,
    id: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const token = req.headers.auth as string;
        const categoryId = req.headers.id as string;

        fetch(`https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(async (response) => {
            const playlistTracksURL = (await response.json()).playlists.items[0].tracks.href;
            fetch(playlistTracksURL, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then(async (response) => {
                const playlistItems = (await response.json()).items;
                const trackList = playlistItems.map((item: any) => item.track) as Array<TrackItem>
                res.status(200).json({data: trackList});
            })
        })
    } else {
        res.status(400);
    }
}