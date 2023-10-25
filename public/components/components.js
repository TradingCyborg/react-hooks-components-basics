//writing components.
function Article() {
    return(
        <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
    );
}
//displaying a single user
function Comments() {
    return <div>Naturally, I agree with this article</div>;
}

//using the arrow function syntax;
const Comment = () => <div>Naturally, I agree with this article.</div>
//function component
function Comment(){
    return <div>Naturally, I agree with this article</div>
}