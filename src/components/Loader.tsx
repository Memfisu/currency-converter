const Loader = ({ mini }: { mini?: boolean } ) => {
    return (
        <div className={`loader-wrapper ${mini && 'mini'}`}>
            <div className="loader" />
        </div>
    );
};

export default Loader;