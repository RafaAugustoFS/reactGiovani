import "./card.css"

const Card = () =>{

    const cardData = [
        {
            titulo: "card 1",
            description: "este é o primeiro card.",
            link: "#",
        },
        {
            titulo: "card 2",
            description: "este é o segundo card.",
            link: "#",
        },
        {
            titulo: "card 3",
            description: "este é o terceiro card.",
            link: "#",
        }
    ];

    console.log(cardData);
    
    return(
        <div className="card-container" >
                {cardData.map((card, index) => {
                    return(
                    <div className="card" key={index}>
                    <h2>{card.titulo}</h2>
                    <p>{card.description}</p>
                    <a href={card.link}>veja mais</a>
                </div>
                );
            })}
        </div>
        
    )
}

export default Card