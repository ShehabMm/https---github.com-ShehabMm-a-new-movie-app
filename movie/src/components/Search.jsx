const Search = ({searchTerm, setsearchTerm, fetchPosts})=>{

return(

 
 <div className="search">
<div>

<img src="./public/assets/search.svg" alt="search" />


<input      onKeyDown={(e) => {
        if (e.key === "Enter")
            fetchPosts();
        }} type="text" placeholder="Search through thousands of movies" value={searchTerm} onChange={(e)=>{setsearchTerm(e.target.value)}} name="" id="" />

</div>




 </div>
 
 
 
 
 
)



}

export default Search