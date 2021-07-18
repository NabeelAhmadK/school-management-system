import React from 'react'

const TopBar = () => {
    return (
        <>
            <nav className="top-nav-bar">
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" href="#"><box-icon name='search-alt' color='rgba(0,0,0,0.6)'></box-icon></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><box-icon name='bell' color='rgba(0,0,0,0.6)'></box-icon></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default TopBar
