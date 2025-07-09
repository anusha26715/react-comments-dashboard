import { useState, useEffect } from "react";
import type {eachComment } from "../../interface/types";
import "./dashboard.scss";


const PAGE_SIZE_OPTIONS = [10, 50, 100];

type SortKey = 'postId' | 'name' | 'email' | '';
type SortOrder = 'asc' | 'desc' | '';

function Dashboard() {
  const [allComments,setAllComments] = useState<eachComment[]>([])
  const [filteredComments, setFilteredComments] = useState<eachComment[]>(allComments);
  const [search, setSearch] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState<SortKey>('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('');



// fetch data once 
  async function fetchData() {
    let temp:eachComment[] = [];
    let commentsData = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    await commentsData
      .json()
      .then((data) => {
        data;
        data.forEach((ele: eachComment) => {
          temp.push({
            postId: 12345670 + (ele as any).id,
            name: ele.name.slice(0,10),
            email: ele.email,
            comment: `${(ele as any).body.slice(0,35)}...`,
          });
        });
        setAllComments(temp);
        localStorage.setItem('commentsData', JSON.stringify(temp));
        console.log('Saved to localStorage:', temp);
      })
      .catch((err: any) =>
        console.error("unable to fetch data from comments api:", err)
      );
  }

  useEffect(() => {
    //Load comments from local storage
    const storedComments = localStorage.getItem('commentsData');
    console.log('Loaded from localStorage:', storedComments);
    if (storedComments) {
      setAllComments(JSON.parse(storedComments));
    } else {
      fetchData();
    }

  // Restore UI state
    const stored = localStorage.getItem('commentState');
        if (stored) {
          const s = JSON.parse(stored);
          setSearch(s.search);
          setPageSize(s.pageSize);
          setCurrentPage(s.currentPage);
          setSortKey(s.sortKey);
          setSortOrder(s.sortOrder);
        }
  }, []);


  // sorting logic
useEffect(() => {
    let result = [...allComments];

    if (search) {
      const s = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(s) ||
          c.email.toLowerCase().includes(s) ||
          c.comment.toLowerCase().includes(s)
      );
    }

    if (sortKey && sortOrder) {
      result.sort((a, b) => {
        const valA = a[sortKey];
        const valB = b[sortKey];
        if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
        if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    }

    setFilteredComments(result);
  }, [search, sortKey, sortOrder, allComments]);


  useEffect(() => {
    localStorage.setItem(
      'commentState',
      JSON.stringify({ search, pageSize, currentPage, sortKey, sortOrder })
    );
  }, [search, pageSize, currentPage, sortKey, sortOrder]);


  // paginated data

  const paginated = filteredComments.slice(
    (currentPage-1) * pageSize,
    currentPage * pageSize
  )

  const totalPages = Math.ceil(filteredComments.length / pageSize);


  // Sorting toggle
  const toggleSort = (key: SortKey) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortOrder('asc');
    } else {
      setSortOrder((prev) =>
        prev === 'asc' ? 'desc' : prev === 'desc' ? '' : 'asc'
      );
      if (sortOrder === 'desc') setSortKey('');
    }
  };

  localStorage.setItem('paginated', JSON.stringify(paginated));
  localStorage.getItem('paginated');

  return (
    <main>
      {/* // sorting section */}
      <section>
        <div className="container ps-0 pe-0"> 
          <div className="top-controls row">
            <div className="sort-controls col-12 col-md-5">
              <button className="sort-btn" onClick={() => toggleSort('postId')}>
                Sort Post ID {sortKey === 'postId' ? (sortOrder === 'asc' ? '▲' : sortOrder === 'desc' ? '▼' : '') : ''}
              </button>
              <button className="sort-btn" onClick={() => toggleSort('name')}>
                Sort Name {sortKey === 'name' ? (sortOrder === 'asc' ? '▲' : sortOrder === 'desc' ? '▼' : '') : ''}
              </button>
              <button className="sort-btn" onClick={() => toggleSort('email')}>
                Sort Email {sortKey === 'email' ? (sortOrder === 'asc' ? '▲' : sortOrder === 'desc' ? '▼' : '') : ''}
              </button>
            </div>

            <div className="col-12 col-md-6">
              <input
              placeholder="🔍 Search name,email,comment"
              value={search}
              className="form-control"
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
            </div>
          </div>
        </div>
      </section>
      {/* table section */}
      <section className="mt-4">
        <div className="table-container">
          <table className="comment-table">
            <thead>
              <tr>
                <th>Post ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((c) => (
              <tr key={c.postId}>
                <td>{c.postId}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.comment}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* pagination section */}

      <section className="bottom-control-section">
        <div className="bottom-controls">
          
          <span>
            {paginated.length > 0
              ? `${(currentPage - 1) * pageSize + 1}-${(currentPage - 1) * pageSize + paginated.length} of ${filteredComments.length} items`
              : 'No results'}
          </span>


          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={currentPage === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <select
            value={pageSize}
            className="page-size"
            onChange={(e) => {
              setPageSize(parseInt(e.target.value));
              setCurrentPage(1);
            }}
          >
            {PAGE_SIZE_OPTIONS.map((size) => (
              <option key={size} value={size}>
                {size} / page
              </option>
            ))}
          </select>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
