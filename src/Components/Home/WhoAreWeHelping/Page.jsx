import React, {useEffect, useState} from "react";
import firebaseData from "../../../firebaseData";
import Pagination from "./Pagination";

const Page = (props) => {
    const [organisationsList, setOrganisationsList] = useState([]);
    const { page } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 3;

    useEffect(() => {
        firebaseData.firestore().collection(page)
            .onSnapshot((querySnapshot) => {
                const array = [];
                querySnapshot.forEach((doc) => {
                    array.push(doc.data());
                })
                setOrganisationsList(array);
                setCurrentPage(1);
            });
    }, [page])

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = organisationsList.slice(indexOfFirstPost, indexOfLastPost);
    const totalPosts = organisationsList.length;

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <>
            <p className="helping-description"> W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują. </p>
            <ul className="helping-table">
                {currentPosts.map((organisation, index) => {
                    return (
                        <div className="table-row" key={index}>
                            <div className="left-info">
                                <p className="name"> {organisation.name} </p>
                                <p className="goal"> Cel i misja: {organisation.goal} </p>
                            </div>
                            <p className="items"> {organisation.items} </p>
                        </div>
                    )
                })}
            </ul>
            <Pagination postPerPage={postPerPage} totalPosts={totalPosts} paginate={paginate}/>
        </>
    )
};

export default Page;