function LoginButton({handleClick}){

    return(
        <> 
            <button className="btn btn-outline-dark ms-auto" style={{fontWeight: "bold"}} onClick={handleClick}>Admin Login</button>
        </>
    )
}

export default LoginButton;