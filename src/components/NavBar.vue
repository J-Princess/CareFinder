<script setup lang="ts">

import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <RouterLink to="/" class="navbar-brand p-2 ml-5 mt-2 text-primary">
            <h3><b>CareFinder</b></h3>
        </RouterLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <RouterLink to="/" class="nav-link">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/profile" class="nav-link">About</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/profile" class="nav-link">Find Hospital</RouterLink>
                </li>
                <li class="nav-item ">
                    <RouterLink to="/login" class="nav-link btn btn-primary px-4 mx-4 text-light" type="button">Login
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/sign" class="nav-link btn btn-primary px-4 mr-4 text-light" type="button">Signup
                    </RouterLink>
                </li>

            </ul>
        </div>
    </nav>
</template>

