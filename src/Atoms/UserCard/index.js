const UserCard = ({ image, fullName })=> {
    return(
        <div className= "images">
            <img src={image} alt={`${fullName} profile`}/>
            <h3>
                {fullName}

            </h3>
         
        </div>
    );
    
};

export default UserCard;

