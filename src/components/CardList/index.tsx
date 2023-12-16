import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import CardItem from '../CardItem';
import s from './CardListStyles.module.scss';

interface I_SpotifyCardListProps {
    handleViewMore: (title: string, id: string) => void;
}

const SpotifyCardList: React.FC<I_SpotifyCardListProps> = ({handleViewMore}) => {
    const cardsData = useSelector((state: RootState) => state.spotifyData.cardsData);
    
    return (
        <div className={s.listContainer}>
            {cardsData?.albums?.items.map((albumData) => (
                <div className={s.cardContainer} key={albumData.id}>
                    <CardItem urlTitle="albums" name={albumData.name} title="Album" onViewMore={handleViewMore} id={albumData.id}>
                        <span>{`Artist: ${albumData.artists.map(artist => artist.name)}`}</span>
                    </CardItem>
                </div>
            ))}
            {cardsData?.artists?.items.map((artistData) => (
                <div className={s.cardContainer} key={artistData.id} >
                    <CardItem urlTitle="artists" name={artistData.name} title="Artist" onViewMore={handleViewMore} id={artistData.id}>
                        {artistData.genres.length ? (
                        <span>{`Genres: ${artistData.genres[0]}`}</span>
                        ) : (
                            null
                        )}
                    </CardItem>
                </div>
            ))}
            {cardsData?.tracks?.items.map((trackData) => (
                <div className={s.cardContainer} key={trackData.id}>
                    <CardItem urlTitle="tracks" name={trackData.name} title="Track" onViewMore={handleViewMore} id={trackData.id}>
                        <span>{`Artist: ${trackData.artists.map(artist => artist.name)}`}</span>
                    </CardItem>
                </div>
            ))}
        </div>
    );
};

export default SpotifyCardList;
