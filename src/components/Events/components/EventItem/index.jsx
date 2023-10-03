const EventItems = ({info, name, id,  image, onEventClick}) => {
    const handleSeeMoreClick=(event) =>{
        event.stopPropagation();
        onEventClick(id);
    }
    return <div onClick={() => onEventClick(id)}>
        <img src={image} alt={name} width={200} height={200} />
        <h4>{name}</h4>
        <p>{info}</p>
        <button onClick={handleSeeMoreClick}>Ver mas</button>
        
        </div>

} ;

export default EventItems;