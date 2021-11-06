import Link from 'next/link'
export const Sidebar = ({children}) => {
  return (
    <div className="containar">
      <div className="row">
        <h1 className="mt-3">Go Watch a Movie!</h1>
        <hr className="mt-3" />
      </div>
      <div className="row">
        <div className="col-md-2">
          <nav>
            <ul className="list-group">
              <li className="list-group-item">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
            </ul>
            <ul className="list-group">
              <li className="list-group-item">
                <Link href="/movies">
                  <a>Moviews</a>
                </Link>
              </li>
            </ul>
            <ul className="list-group">
              <li className="list-group-item">
                <Link href="/by-category">
                  <a>Categories</a>
                </Link>
              </li>
            </ul>
            <ul className="list-group">
              <li className="list-group-item">
                <Link href="/admin">
                  <a href="/admin">Manage Catalogu</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-md-10">
          {children}
        </div>
      </div>
    </div>
  )
}
