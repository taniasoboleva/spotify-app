import { useNavigate } from 'react-router-dom';
import DetailsCard from '../../components/DetailsCard';
import s from './DetailPageStyles.module.scss';

const DetailPage: React.FC = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div>
            <button className={s.btn} onClick={handleBack}>Go Back</button>
            <div className={s.detailsCardContainer}>
                <DetailsCard />
            </div>
        </div>
    );
};

export default DetailPage;
