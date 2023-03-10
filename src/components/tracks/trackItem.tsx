import styles from './tracks.module.css';
import {FC} from "react";
import {TrackItem} from "@/pages/api/getCategoryItems";
import Play from '../../../public/playButton.png';
import Image from "next/image";

const Track: FC<{track: TrackItem}> = ({track}) => {
    return(
        <div className={styles.trackItem}>
            <img src={track.album.images[0].url} alt={track.name} className={styles.trackItemImage}/>
            <div className={styles.trackItemInfoContainer}>
                <span
                    className={styles.trackItemTitle}
                >{
                    track.name}
                </span>
                <span
                    className={styles.trackItemArtist}
                >
                    {track.artists.map((artist) => artist.name).join(", ")}
                </span>
                <span
                    className={styles.trackItemDuration}>
                    {`${Math.floor((track.duration_ms/60000) << 0)} min ${Math.floor((track.duration_ms/1000) % 60)} sec`}
                </span>
            </div>
            <Image src={Play} alt={'play'} className={styles.trackItemPlay}/>
        </div>
    );
}

export default Track;