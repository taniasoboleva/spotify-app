import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SpotifyCardList from '../../components/CardList';
import Loading from '../../components/Loading';
import SearchComponent from '../../components/SearchComponent';
import { SpotifyDataState, handleSearch, viewMore } from '../../store/actions';
import { fetchWebApiData, generateTokenApi } from '../../store/asyncThunks';
import { AppDispatch, RootState } from '../../store/store';
import s from './LandingPageStyles.module.scss';

const SPOTIFY_LOGO_URL = 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png';

const LandingPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { cardsData, loading, token, searchValue } = useSelector(
        (state: RootState) => state.spotifyData,
        shallowEqual
    );

    const searchResult: SpotifyDataState['searchValue'] = searchValue;

    const handleSubmit = () => {
        if (searchValue.length > 0) {
            dispatch(fetchWebApiData({token: token, searchResult}));
        }
    }

    const handleViewMore = async (title: string, id: string) => {
        try {
            await dispatch(viewMore({title, id}));
            navigate(`/${title}/${id}`);
        } catch(error) {
            console.error(error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(handleSearch(e.target.value));
    }

    useEffect(() => {
        if (!cardsData) {
            dispatch(generateTokenApi());
        }
    }, [!cardsData]);

    return (
        <>
            {loading ? <Loading /> : (
            <div className={s.container}>
                <img 
                    className={s.logo}
                    src={SPOTIFY_LOGO_URL}
                    alt="logo"
                />
                <SearchComponent handleSubmit={handleSubmit} handleChange={handleChange} />
                <SpotifyCardList handleViewMore={handleViewMore} />
            </div>
            )}
        </>
    );
};

export default LandingPage;
