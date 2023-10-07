import React from 'react';
import Not404 from '../img/svg/404.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section class="vh-100 d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row">
                    <div
                        class="col-12 text-center d-flex align-items-center justify-content-center"
                    >
                        <div>
                            <img
                                class="img-fluid w-75"
                                src={Not404}
                                alt="404 not found"
                            />
                            <h1 class="mt-5">
                                Page not <span class="fw-bolder text-primary">found</span>
                            </h1>
                            <p class="lead my-4">
                                Oops! Looks like you followed a bad link. If you think this is
                                a problem with us, please tell us.
                            </p>
                            <Link
                                to="/"
                                class="btn btn-gray-800 d-inline-flex align-items-center justify-content-center mb-4"
                            ><svg
                                class="icon icon-xs me-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                Back to homepage
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound;
