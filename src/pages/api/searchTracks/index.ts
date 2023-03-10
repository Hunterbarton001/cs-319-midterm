import {NextApiRequest, NextApiResponse} from "next";
import {TrackItem} from "@/pages/api/getCategoryItems";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const token = req.headers.auth as string;
        const search = req.headers.search as string;

        fetch(`https://api.spotify.com/v1/search?type=track&q=${search}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(async (response) => {
            res.status(200).json({data: (await response.json()).tracks.items as Array<TrackItem>});
        })
    }
}