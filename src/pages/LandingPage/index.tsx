import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SpotifyCardList from '../../components/CardList';
import Loading from '../../components/Loading';
import SearchComponent from '../../components/SearchComponent';
import { handleSearch, SpotifyDataState, viewMore } from '../../store/actions';
import { fetchWebApiData, generateTokenApi } from '../../store/asyncThunks';
import { AppDispatch } from '../../store/store';
import s from './LandingPageStyles.module.scss';

const LandingPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { spotifyData } = useSelector(
        (state: SpotifyDataState) => state,
        shallowEqual
    );

    const searchResult: SpotifyDataState['searchValue'] = spotifyData.searchValue;

    const handleSubmit = () => {
        if (searchResult.length > 0) {
            dispatch(fetchWebApiData({token: spotifyData.token, searchResult}));
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
        if (!spotifyData.cardsData?.artists?.length) {
            dispatch(generateTokenApi());
        }
    }, [!spotifyData.cardsData?.artists?.length]);

    return (
        <>
            {spotifyData.loading ? <Loading /> : (
            <div className={s.container}>
                <SearchComponent handleSubmit={handleSubmit} searchValue={searchResult} handleChange={handleChange} />
                <SpotifyCardList cardsData={spotifyData.cardsData} handleViewMore={handleViewMore} />
            </div>
            )}
        </>
    );
};

export default LandingPage;
