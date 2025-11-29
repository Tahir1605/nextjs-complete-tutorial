const SingleUser = async (props) => {
    const user = await props.params;
    console.log(user);
    
    return(
        <div>
            User Name is {user.user}
        </div>
    )
}

export default SingleUser