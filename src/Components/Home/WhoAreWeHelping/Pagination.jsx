import React from 'react';


const Pagination = (props) => {
    const { postPerPage, totalPosts, paginate} = props;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className="site-numbers">
                {pageNumbers.map(number =>
                    <p className="site-number" onClick={() => paginate(number)}> {number} </p>
                )}
            </div>

        </>
    )
};

export default Pagination;