import React from 'react'
import { Menu } from 'antd';
const Navbar = () => {
    
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/show">Show Files</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Fileupload">Upload file</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Signup">Signup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar