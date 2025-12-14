import React from 'react'
import '../App.css'

const Pagination = ({ currentPage = 1, totalPages = 0, setPage = () => {} }) => {
  if (totalPages <= 1) return null;

  const go = (p) => () => setPage(Math.max(1, Math.min(totalPages, p)));

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <div className="flex justify-center mt-8">
        <nav className="flex gap-3 nunito text-sm" aria-label="Pagination">
          <button
            onClick={go(currentPage - 1)}
            disabled={currentPage <= 1}
            className="px-3 py-1.5 hover:bg-gray-100 disabled:opacity-40"
            aria-label="Previous page"
          >
            &lt;
          </button>

          {pages.map((p) => (
            <button
              key={p}
              onClick={go(p)}
              aria-current={p === currentPage ? 'page' : undefined}
              className={`px-3 py-1.5 rounded-sm ${p === currentPage ? 'bg-gray-300 text-black' : 'text-black hover:bg-gray-300'}`}
            >
              {p}
            </button>
          ))}

          <button
            onClick={go(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="px-3 py-1.5 hover:bg-gray-100 disabled:opacity-40"
            aria-label="Next page"
          >
            &gt;
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Pagination
