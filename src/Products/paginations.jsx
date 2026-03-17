import { useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";


function Paginations({ setCurrentPage, total_number_of_page, currentpage }) {



    const pickcurrentpage = (n) => {
        setCurrentPage(n);
    }

    const handlePrevPage = ()=>{

        setCurrentPage(Prev => Prev-1);
    }

       const handleNextPage = ()=>{
        setCurrentPage(Prev => Prev+1);
    }


    return (
        <>
            <div className="pagination">
                <button disabled={currentpage == 0} className="page" type="button" onClick={handlePrevPage}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" /></svg></button>
                {[...Array(total_number_of_page).keys()].map(n =>
                    (<button className={"page " + (currentpage == n ? "active" : "")} type="button" key={n} onClick={() => pickcurrentpage(n)}>{n + 1}</button>)
                )}
                   <button disabled={currentpage == (total_number_of_page-1) } type="button" className="page" onClick={handleNextPage}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg></button>
            </div>
        </>
    )
}
export default Paginations;