function LoginButton({handleClick}){

    return(
        <> 
            <button className="btn btn-warning ms-auto" style={{fontWeight: "bold", color: 'rgba(6,36,75)'}} onClick={handleClick}>Admin Login</button>
        </>
    )
}

export default LoginButton;