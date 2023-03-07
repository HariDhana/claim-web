import React from 'react';
import { Link } from 'react-router-dom';
function Claim() {
    return (
        <div>
            <Link to="/claimForm">
                <button> ADD </button>
            </Link>
            <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Name">James</td>
                        <td data-label="Age">24</td>
                        <td data-label="Job">Engineer</td>
                    </tr>
                    <tr>
                        <td data-label="Name">Jill</td>
                        <td data-label="Age">26</td>
                        <td data-label="Job">Engineer</td>
                    </tr>
                    <tr>
                        <td data-label="Name">Elyse</td>
                        <td data-label="Age">24</td>
                        <td data-label="Job">Designer</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Claim;
