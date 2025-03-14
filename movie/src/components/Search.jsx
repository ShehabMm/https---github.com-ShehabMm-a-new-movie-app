const Search = ({searchTerm, setsearchTerm, fetchPosts})=>{

return(

 
 <div className="search">
<div>

<img src="./public/assets/search.svg" alt="search" />


<input      onKeyDown={(e) => {
        if (e.key === "Enter")
            fetchPosts();
        }} type="text" placeholder="Search through thousands of movies" value={searchTerm} onChange={(e)=>{setsearchTerm(e.target.value)}} name="" id="" />
<button onClick={()=>{
fetchPosts()

}} className="text-white-300 font-bold p-1.5 transition duration-150 ease-in-out hover:cursor-pointer  bg-red-200 border rounded-2xl active:scale-x-110">Search</button>
</div>




 </div>
 
 
 
 
 
)



}

export default Search