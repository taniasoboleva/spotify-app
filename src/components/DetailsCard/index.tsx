import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { isLoading } from '../../store/actions';
import { RootState } from '../../store/store';
import s from './DetailsCardStyles.module.scss';

const DetailsCard: React.FC = () => {
    const { id, title } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cardsData = useSelector((state: RootState) => state.spotifyData.cardsData);

    const urlTitleParam = cardsData && cardsData[title];
    const itemToDisplay: any = urlTitleParam?.items?.find(item => item.id === id);

    useEffect(() => {
        if (!cardsData) {
            dispatch(isLoading(true));
            navigate('/');
        }
    }, [cardsData]);

    return (
        <div>
            <h2 className={s.detailsText}>Details</h2>
            <div className={s.card}>
                {itemToDisplay?.images &&
                    <div>
                        <img src={itemToDisplay.images[1].url} />
                    </div>
                }
                {itemToDisplay?.album?.images &&
                    <div>
                        <img src={itemToDisplay.album.images[1].url} />
                    </div>
                }
                {itemToDisplay?.followers && 
                    <div className={s.releaseText}>
                        {`Followers: ${itemToDisplay.followers.total}`}
                    </div>
                }
                <div>
                    {`Artist: ${itemToDisplay?.name}`}
                </div>
                {itemToDisplay?.release_date && 
                    <div>
                        {`Release date: ${itemToDisplay.release_date}`}
                    </div>
                }
                {itemToDisplay?.total_tracks && 
                    <div>
                        {`Release date: ${itemToDisplay.total_tracks}`}
                    </div>
                }
                {itemToDisplay?.popularity && 
                    <div>
                        {`Popularity: ${itemToDisplay.popularity}`}
                    </div>
                }
            </div>
        </div>
    );
};

export default DetailsCard;
