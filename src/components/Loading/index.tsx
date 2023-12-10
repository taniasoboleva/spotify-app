import Loader from 'react-js-loader';
import s from './LoadingStyles.module.scss';

const Loading = () => {
    return (
        <div className={s.loading}>
            <Loader type='bubble-scale' bgColor='#000000' color='#000000' title='Loading...' size={100} />
        </div>
    );
};

export default Loading;
