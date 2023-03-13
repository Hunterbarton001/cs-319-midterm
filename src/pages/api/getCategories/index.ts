import type { NextApiRequest, NextApiResponse } from 'next'

export interface CategoriesItem {
    href: string,
    id: string,
    name: string,
    icons: {
       url: string,
       height: number,
       width: number
    }[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const token = req.headers.auth as string;

        fetch('https://api.spotify.com/v1/browse/categories', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(async (response) => {
            res.status(200).json({data: (await response.json()).categories.items} as unknown as CategoriesItem);
        })

        
    }else {
        res.status(400);
    } 

     if(req.method === 'GET'){
        const token = req.headers.auth as string;
        fetch('https://api.spotify.com/v1/me/playlists', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(async (response) => {
            res.status(200).json({data: (await response.json()).homepage.items} as unknown as CategoriesItem);
        })

    }
    else {
        res.status(400);
    }
}