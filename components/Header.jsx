export default function Header() {
  return (
    <header>
      <div className='row'>
        <h1 className='col-lg-5'>Healthy Food</h1>
        <nav className='col-lg-7'>
          <ul>
            <a href='#'>
              <li>HEALTHY RECIPES</li>
            </a>
            <a href='#'>
              <li>BLOG</li>
            </a>
            <a href='#'>
              <li>JOIN</li>
            </a>
            <a href='#'>
              <li>
                <button>REGISTER</button>
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}
