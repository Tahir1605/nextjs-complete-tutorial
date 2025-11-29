const SingleUserPost = async (props) => {
    const user = await props.params 
    console.log(user);
    
    return(
        <div>
           User name is {user.user} <br />
           user post Id is {user.postId}
        </div>
    )
}

export default SingleUserPost