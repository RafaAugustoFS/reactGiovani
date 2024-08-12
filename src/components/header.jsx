const Header = () =>{
    const headerStyle = {
        backgroundColor: "#F9DBBA",
        padding: '20px',
        textAlign: "center",
        borderBottom: "2px solid #000"
      }
    const titleStyle = {
        margin: 0,
        fontSize: '24px',
        color: "#0000CD"
    }  
    return(
        <header style={headerStyle}>
            <h1 style={titleStyle}>First System in react</h1>
        </header>
    )
}

export default Header;
