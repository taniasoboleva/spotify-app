import { shallowEqual, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import DetailsCard from '../../components/DetailsCard';
import { SpotifyDataState } from '../../store/actions';
import s from './DetailPageStyles.module.scss';

const DetailPage: React.FC = () => {
    const navigate = useNavigate();
    const { id, title } = useParams();

    const { spotifyData } = useSelector(
        (state: SpotifyDataState) => state,
        shallowEqual
    );
    const urlTitleParam = spotifyData.cardsData && spotifyData.cardsData[title];
    const itemToDisplay = urlTitleParam?.items?.find(item => item.id === id);

    const handleBack = () => {
        navigate('/');
    }

    return (
        <div>
            <button className={s.btn} onClick={handleBack}>Go Back</button>
            <div className={s.detailsCardContainer}>
                <DetailsCard detailItem={itemToDisplay} />
            </div>
        </div>
    );
};

export default DetailPage;
