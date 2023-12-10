import s from './CardItemStyles.module.scss';

interface I_CardItemProps {
    children?: any;
    title: string;
    onViewMore: (title: string, id: string) => void;
    name: string;
    id: string;
    urlTitle: string;
}

const CardItem: React.FC<I_CardItemProps> = ({title, name, onViewMore, id, children, urlTitle}) => {
        
    return (
        <div className={s.wrapper}>
            <span className={s.title}>{title}</span>
            <span className={s.name}>{name}</span>
            {children}
            <button className={s.btn} onClick={() => onViewMore(urlTitle, id)}>See more</button>
        </div>
    );
};

export default CardItem;
