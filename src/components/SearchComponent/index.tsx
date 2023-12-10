import s from './SearchComponent.module.scss';

interface I_SearchComponentProps {
    handleSubmit: () => void;
    handleChange: (searchValue: React.ChangeEvent<HTMLInputElement>) => void;
    searchValue: string;
}

const SearchComponent: React.FC<I_SearchComponentProps> = ({handleSubmit, searchValue, handleChange}) => {

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit();
    }

    return (
        <div className={s.container}>
            <form onSubmit={onSubmit} className={s.form}>
                <input
                    className={s.input}
                    type="text"
                    id="search"
                    onChange={handleChange}
                    placeholder="Search by keyword.."
                    title="Spotfy API search"
                    value={searchValue}
                />
                <input type="submit" value="Submit" className={s.btn} />
            </form>
        </div>
    );
};

export default SearchComponent;
