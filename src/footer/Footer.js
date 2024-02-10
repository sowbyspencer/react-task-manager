import React from 'react';

function Footer() {
    return (
        <footer style={footerStyle}>
            <p style={paragraphStyle}>2024 Task Manager.</p>
            <div id="timeStamp" style={timestampStyle}></div>
            <a href="Help-FAQ.html" target="_blank" style={linkStyle}>Help/FAQ</a>
        </footer>
    );
}

// Inline CSS styles
const footerStyle = {
    padding: '20px',
    textAlign: 'center',
    // width: '100%',
    backgroundColor: '#f8f8f8',
};

const paragraphStyle = {
    marginBottom: '10px',
};

const timestampStyle = {
    marginBottom: '10px',
};

const linkStyle = {
    color: 'blue',
    textDecoration: 'none',
};

export default Footer;
