//@ts-nocheck
import { T_AlbumsItems, T_ArtistItems, T_TrackItems } from '../../types/types';
import s from './DetailsCardStyles.module.scss';

interface I_DetailCardProps {
    detailItem: T_TrackItems | T_AlbumsItems | T_ArtistItems;
}

const DetailsCard: React.FC<I_DetailCardProps> = ({detailItem}) => {
    return (
        <div>
            <h2 className={s.detailsText}>Details</h2>
            <div className={s.card}>
                {detailItem?.images &&
                    <div>
                        <img src={detailItem.images[1].url} />
                    </div>
                }
                {detailItem?.album?.images &&
                    <div>
                        <img src={detailItem.album.images[1].url} />
                    </div>
                }
                {detailItem?.followers && 
                    <div className={s.releaseText}>
                        {`Followers: ${detailItem.followers.total}`}
                    </div>
                }
                <div>
                    {`Artist: ${detailItem?.name}`}
                </div>
                {detailItem?.release_date && 
                    <div>
                        {`Release date: ${detailItem.release_date}`}
                    </div>
                }
                {detailItem?.total_tracks && 
                    <div>
                        {`Release date: ${detailItem.total_tracks}`}
                    </div>
                }
                {detailItem?.popularity && 
                    <div>
                        {`Popularity: ${detailItem.popularity}`}
                    </div>
                }
            </div>
        </div>
    );
};

export default DetailsCard;
