import React from 'react'

const Pagination = ({arrayPages, currentPage, setCurrentPage, qtyPages}) => {
  
    const prevPage = () => {
       if(currentPage - 1 === 0){
        setCurrentPage(qtyPages)
    } else {
        setCurrentPage(currentPage - 1)
    }
    }

    const nextPage = () => {
        if(currentPage + 1 > qtyPages){
         setCurrentPage(1)
     } else {
         setCurrentPage(currentPage + 1)
     }
     }

     const changePageTo = n => setCurrentPage(n)
  
    return (
    <div className='pagination_container'>
        <div onClick={prevPage} className='pag_prev_next'>&#60;</div>
        <ul className='pag_num_container'>
            {
                arrayPages?.map(num => (
                    <li 
                        onClick={() => changePageTo(num)}
                        key={num}
                        className={currentPage === num ? `pag_num page_active` : `pag_num`}>{num}
                    </li>
                ))
            }

        </ul>
        <div onClick={nextPage} className='pag_prev_next'>&#62;</div>
    </div>
  )
}

export default Pagination