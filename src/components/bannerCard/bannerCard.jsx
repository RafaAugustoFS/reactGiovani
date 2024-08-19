import "./bannerCard.css"

const BannerCard = ({ titulo, subTitulo }) =>{
    
    return(
        <div className="banner">
            <h1>{titulo}</h1>
            <h2>{subTitulo}</h2>
        </div>
    )
}
export default BannerCard;