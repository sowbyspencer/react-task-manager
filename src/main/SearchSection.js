import React from "react";

function SearchSection() {
    return (
        <div id="searchSection" style={styles.searchSection}>
            <input type="text" id="searchBar" placeholder="Search tasks..." style={styles.searchBar} />
        </div>
    );
}

const styles = {
    searchSection: {
        backgroundColor: '#e9ecef',
        padding: '15px',
        borderRadius: '5px',
        margin: '20px auto',
        width: 'calc(100% - 40px)'
    },
    searchBar: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        boxSizing: 'border-box',
    }
}

export default SearchSection;
