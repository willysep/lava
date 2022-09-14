<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <router-link class="brand-link" to="/">
            <img
                src="image/AdminLTELogo.png"
                alt="AdminLTE Logo"
                class="brand-image img-circle elevation-3"
                style="opacity: 0.8"
            />
            <span class="brand-text font-weight-light"
                >Admin Panel</span
            ></router-link
        >

        <div class="sidebar">
            <nav class="mt-2">
                <ul
                    class="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                >
                    <li class="nav-item">
                        <router-link class="nav-link" to="/post">
                            <i class="nav-icon fas fa-blog"></i>
                            <p>Post</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about"
                            ><i class="nav-icon far fa-address-card"></i>
                            <p>About</p></router-link
                        >
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>
