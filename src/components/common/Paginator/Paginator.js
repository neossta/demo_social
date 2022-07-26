import { useState } from 'react';
import clNames from './Paginator.module.css';

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let [pageNumber, setPageNumber] = useState(1);
    let leftBorder = (pageNumber - 1) * props.pageSize + 1
    let rightBorder = pageNumber * props.pageSize
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (<div>
        {pageNumber > 1 && <button onClick={() => setPageNumber(pageNumber - 1)}>PREV</button>}
        {pages
            .filter(p => p >= leftBorder && p <= rightBorder)
            .map(p => <button className={p === props.currentPage ? clNames.selectedPage : undefined} onClick={(e) => props.onPageChanged(p)}>{p}</button>)
        }
        <button onClick={() => setPageNumber(pageNumber + 1)}>NEXT</button>
    </div>)
}

export default Paginator;