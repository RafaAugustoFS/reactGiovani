import "./bannerJogos.css"
const BannerJogos = ({timeCasa, timeVisitante}) =>{
    return(
         <div className="banner">
            <h1>Rodada 24 Brasileirão</h1>
            <la>
                <li><h4>{timeCasa} x {timeVisitante}</h4></li>
            </la>
        </div>

        
    )
}
export default BannerJogos;